<?php

namespace App\Controllers\Api;

use CodeIgniter\API\ResponseTrait;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\Shield\Models\UserModel;
use CodeIgniter\Shield\Authentication\Authenticators\Session; // Import Session authenticator

class UserController extends ResourceController
{
    use ResponseTrait;

    /**
     * Listar todos los usuarios.
     * Requiere autenticación con token.
     *
     * @return CodeIgniter\HTTP\ResponseInterface
     */
    public function index()
    {
        $users = model(UserModel::class);
        return $this->respond($users->findAll());
    }

    /**
     * Crear un nuevo usuario.
     * Requiere autenticación con token.
     *
     * @return CodeIgniter\HTTP\ResponseInterface
     */
    public function create()
    {
        $rules = [
            'email'    => 'required|valid_email|is_unique[users.email]',
            'password' => 'required|min_length[8]',
        ];

        if (! $this->validate($rules)) {
            return $this->failValidationErrors($this->validator->getErrors());
        }

        $users = model(UserModel::class);

        $data = [
            'email'    => $this->request->getVar('email'),
            'password' => $this->request->getVar('password'),
        ];

        $user = $users->new($data);

        if (! $users->save($user)) {
            return $this->fail($users->errors());
        }

        return $this->respondCreated(['message' => 'User created successfully', 'id' => $user->id]);
    }

    /**
     * Iniciar sesión y obtener un token de acceso.
     *
     * @return CodeIgniter\HTTP\ResponseInterface
     */
    public function login()
    {
        $rules = [
            'email'    => 'required|valid_email',
            'password' => 'required',
        ];

        if (! $this->validate($rules)) {
            return $this->failValidationErrors($this->validator->getErrors());
        }

        $credentials = [
            'email'    => $this->request->getVar('email'),
            'password' => $this->request->getVar('password'),
        ];

        try {
            /** @var Session $authenticator */
            $authenticator = auth('session')->getAuthenticator();

            if (! $authenticator->attempt($credentials)) {
                return $this->failUnauthorized('Credenciales inválidas. Verifique su email y contraseña.');
            }

            $user = $authenticator->getUser();

            if (!$user) {
                return $this->failUnauthorized('Usuario no encontrado.');
            }

            // Generate a new access token
            $token = $user->generateAccessToken('API Token');

            if (!$token) {
                return $this->failServerError('Error al generar token de acceso.');
            }

            // Preparar datos del usuario (sin información sensible)
            $userData = [
                'id' => $user->id,
                'email' => $user->email,
                'username' => $user->username ?? null,
                'first_name' => $user->first_name ?? null,
                'last_name' => $user->last_name ?? null,
                'active' => $user->active ?? 1,
            ];

            return $this->respond([
                'success' => true,
                'message' => 'Login successful',
                'token'   => $token->raw_token,
                'user'    => $userData,
            ]);
        } catch (\Exception $e) {
            log_message('error', 'Login error: ' . $e->getMessage());
            return $this->failServerError('Error interno del servidor durante el login.');
        }
    }
}
