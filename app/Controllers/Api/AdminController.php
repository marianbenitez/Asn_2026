<?php

namespace App\Controllers\Api;

use CodeIgniter\API\ResponseTrait;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\Shield\Models\UserModel;
use CodeIgniter\Shield\Models\GroupModel;

class AdminController extends ResourceController
{
    use ResponseTrait;

    protected $userModel;
    protected $groupModel;

    public function __construct()
    {
        $this->userModel = new UserModel();
        $this->groupModel = new GroupModel();
    }

    /**
     * Obtener todos los usuarios
     */
    public function getUsers()
    {
        try {
            $users = $this->userModel->select('id, email, username, first_name, last_name, active, created_at')
                ->findAll();

            // Obtener grupos para cada usuario
            foreach ($users as &$user) {
                $user['groups'] = $this->userModel->getGroups($user['id']);
            }

            return $this->respond([
                'success' => true,
                'users' => $users
            ]);
        } catch (\Exception $e) {
            return $this->failServerError('Error al obtener usuarios: ' . $e->getMessage());
        }
    }

    /**
     * Obtener un usuario específico
     */
    public function getUser($id = null)
    {
        if (!$id) {
            return $this->failValidationErrors(['id' => 'ID de usuario requerido']);
        }

        try {
            $user = $this->userModel->select('id, email, username, first_name, last_name, active, created_at')
                ->find($id);

            if (!$user) {
                return $this->failNotFound('Usuario no encontrado');
            }

            $user['groups'] = $this->userModel->getGroups($id);

            return $this->respond([
                'success' => true,
                'user' => $user
            ]);
        } catch (\Exception $e) {
            return $this->failServerError('Error al obtener usuario: ' . $e->getMessage());
        }
    }

    /**
     * Crear nuevo usuario
     */
    public function createUser()
    {
        $rules = [
            'email' => 'required|valid_email|is_unique[users.email]',
            'username' => 'required|min_length[3]|is_unique[users.username]',
            'password' => 'required|min_length[8]',
            'first_name' => 'required|max_length[255]',
            'last_name' => 'required|max_length[255]',
            'groups' => 'permit_empty|array'
        ];

        if (!$this->validate($rules)) {
            return $this->failValidationErrors($this->validator->getErrors());
        }

        try {
            $data = [
                'email' => $this->request->getVar('email'),
                'username' => $this->request->getVar('username'),
                'password' => $this->request->getVar('password'),
                'first_name' => $this->request->getVar('first_name'),
                'last_name' => $this->request->getVar('last_name'),
                'active' => 1
            ];

            $userId = $this->userModel->insert($data);

            if ($userId) {
                // Asignar grupos si se proporcionan
                $groups = $this->request->getVar('groups');
                if ($groups && is_array($groups)) {
                    foreach ($groups as $group) {
                        $this->userModel->addToGroup($userId, $group);
                    }
                }

                return $this->respondCreated([
                    'success' => true,
                    'message' => 'Usuario creado exitosamente',
                    'id' => $userId
                ]);
            } else {
                return $this->fail($this->userModel->errors());
            }
        } catch (\Exception $e) {
            return $this->failServerError('Error al crear usuario: ' . $e->getMessage());
        }
    }

    /**
     * Actualizar usuario
     */
    public function updateUser($id = null)
    {
        if (!$id) {
            return $this->failValidationErrors(['id' => 'ID de usuario requerido']);
        }

        $user = $this->userModel->find($id);
        if (!$user) {
            return $this->failNotFound('Usuario no encontrado');
        }

        $rules = [
            'email' => "required|valid_email|is_unique[users.email,id,$id]",
            'username' => "required|min_length[3]|is_unique[users.username,id,$id]",
            'first_name' => 'required|max_length[255]',
            'last_name' => 'required|max_length[255]',
            'active' => 'in_list[0,1]',
            'groups' => 'permit_empty|array'
        ];

        if (!$this->validate($rules)) {
            return $this->failValidationErrors($this->validator->getErrors());
        }

        try {
            $data = [
                'email' => $this->request->getVar('email'),
                'username' => $this->request->getVar('username'),
                'first_name' => $this->request->getVar('first_name'),
                'last_name' => $this->request->getVar('last_name'),
                'active' => $this->request->getVar('active')
            ];

            // Actualizar contraseña solo si se proporciona
            $password = $this->request->getVar('password');
            if ($password) {
                $data['password'] = $password;
            }

            $this->userModel->update($id, $data);

            // Actualizar grupos
            $groups = $this->request->getVar('groups');
            if ($groups !== null) {
                // Remover todos los grupos actuales
                $this->userModel->removeFromAllGroups($id);

                // Agregar nuevos grupos
                if (is_array($groups)) {
                    foreach ($groups as $group) {
                        $this->userModel->addToGroup($id, $group);
                    }
                }
            }

            return $this->respond([
                'success' => true,
                'message' => 'Usuario actualizado exitosamente'
            ]);
        } catch (\Exception $e) {
            return $this->failServerError('Error al actualizar usuario: ' . $e->getMessage());
        }
    }

    /**
     * Eliminar usuario
     */
    public function deleteUser($id = null)
    {
        if (!$id) {
            return $this->failValidationErrors(['id' => 'ID de usuario requerido']);
        }

        $user = $this->userModel->find($id);
        if (!$user) {
            return $this->failNotFound('Usuario no encontrado');
        }

        try {
            $this->userModel->delete($id);

            return $this->respond([
                'success' => true,
                'message' => 'Usuario eliminado exitosamente'
            ]);
        } catch (\Exception $e) {
            return $this->failServerError('Error al eliminar usuario: ' . $e->getMessage());
        }
    }

    /**
     * Obtener todos los grupos
     */
    public function getGroups()
    {
        try {
            $groups = $this->groupModel->findAll();

            return $this->respond([
                'success' => true,
                'groups' => $groups
            ]);
        } catch (\Exception $e) {
            return $this->failServerError('Error al obtener grupos: ' . $e->getMessage());
        }
    }

    /**
     * Crear nuevo grupo
     */
    public function createGroup()
    {
        $rules = [
            'name' => 'required|max_length[255]|is_unique[auth_groups.name]',
            'title' => 'required|max_length[255]',
            'description' => 'permit_empty|string'
        ];

        if (!$this->validate($rules)) {
            return $this->failValidationErrors($this->validator->getErrors());
        }

        try {
            $data = [
                'name' => $this->request->getVar('name'),
                'title' => $this->request->getVar('title'),
                'description' => $this->request->getVar('description')
            ];

            $groupId = $this->groupModel->insert($data);

            return $this->respondCreated([
                'success' => true,
                'message' => 'Grupo creado exitosamente',
                'id' => $groupId
            ]);
        } catch (\Exception $e) {
            return $this->failServerError('Error al crear grupo: ' . $e->getMessage());
        }
    }

    /**
     * Obtener estadísticas del sistema
     */
    public function getStats()
    {
        try {
            $stats = [
                'total_users' => $this->userModel->countAll(),
                'active_users' => $this->userModel->where('active', 1)->countAllResults(),
                'total_groups' => $this->groupModel->countAll(),
                'recent_users' => $this->userModel->select('id, email, username, created_at')
                    ->orderBy('created_at', 'DESC')
                    ->limit(5)
                    ->findAll()
            ];

            return $this->respond([
                'success' => true,
                'stats' => $stats
            ]);
        } catch (\Exception $e) {
            return $this->failServerError('Error al obtener estadísticas: ' . $e->getMessage());
        }
    }
}
