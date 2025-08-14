<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');

service('auth')->routes($routes);

// Aplicar filtro CORS a todas las rutas API
$routes->group('api', ['filter' => 'cors'], static function ($routes) {
    // Ruta de login (sin autenticación)
    $routes->post('login', 'Api\\UserController::login');

    // Rutas de testing
    $routes->get('test', 'Api\\TestController::index');
    $routes->get('test/protected', 'Api\\TestController::protected', ['filter' => 'auth-token']);
    $routes->get('test/admin', 'Api\\TestController::adminOnly', ['filter' => 'auth-token']);

    // Rutas de gestión de usuarios (requieren autenticación)
    $routes->get('users', 'Api\\UserController::index', ['filter' => 'auth-token']);
    $routes->post('users', 'Api\\UserController::create', ['filter' => 'auth-token']);

    // Rutas de honorarios (sin autenticación para consulta pública)
    $routes->get('honorarios', 'Api\\HonorariosController::index');
    $routes->get('honorarios/configuracion', 'Api\\HonorariosController::getConfiguracion');
    $routes->get('honorarios/categorias', 'Api\\HonorariosController::getCategorias');
    $routes->get('honorarios/servicios/(:num)', 'Api\\HonorariosController::getServicios/$1');

    // Rutas de noticias (sin autenticación para consulta pública)
    $routes->get('news', 'Api\\NewsController::index');
    $routes->get('news/featured', 'Api\\NewsController::featured');
    $routes->get('news/recent', 'Api\\NewsController::recent');
    $routes->get('news/(:segment)', 'Api\\NewsController::show/$1');

    // Rutas de administración de honorarios (requieren autenticación)
    $routes->group('admin/honorarios', ['filter' => 'auth-token'], static function ($routes) {
        $routes->post('configuracion', 'Api\\HonorariosController::createConfiguracion');
        $routes->put('configuracion/(:num)/activar', 'Api\\HonorariosController::activarConfiguracion/$1');
        $routes->post('categorias', 'Api\\HonorariosController::createCategoria');
        $routes->post('servicios', 'Api\\HonorariosController::createServicio');
    });

    // Rutas de administración de usuarios (requieren autenticación)
    $routes->group('admin/users', ['filter' => 'auth-token'], static function ($routes) {
        $routes->get('/', 'Api\\AdminController::getUsers');
        $routes->get('(:num)', 'Api\\AdminController::getUser/$1');
        $routes->post('/', 'Api\\AdminController::createUser');
        $routes->put('(:num)', 'Api\\AdminController::updateUser/$1');
        $routes->delete('(:num)', 'Api\\AdminController::deleteUser/$1');
        $routes->get('groups', 'Api\\AdminController::getGroups');
        $routes->post('groups', 'Api\\AdminController::createGroup');
        $routes->get('stats', 'Api\\AdminController::getStats');
    });

    // Rutas de administración de socios (requieren autenticación)
    $routes->group('admin/socios', ['filter' => 'auth-token'], static function ($routes) {
        $routes->get('/', 'Api\\SociosController::index');
        $routes->get('(:num)', 'Api\\SociosController::show/$1');
        $routes->post('/', 'Api\\SociosController::create');
        $routes->put('(:num)', 'Api\\SociosController::update/$1');
        $routes->delete('(:num)', 'Api\\SociosController::delete/$1');
        $routes->get('stats', 'Api\\SociosController::stats');
        $routes->get('search/dni', 'Api\\SociosController::searchByDni');
        $routes->get('search/numero', 'Api\\SociosController::searchByNumero');
        $routes->get('estado/(:segment)', 'Api\\SociosController::getByEstado/$1');
        $routes->get('tipo/(:segment)', 'Api\\SociosController::getByTipo/$1');
    });

    // Rutas de administración de noticias (requieren autenticación)
    $routes->group('admin/news', ['filter' => 'auth-token'], static function ($routes) {
        $routes->get('/', 'Api\\NewsController::admin');
        $routes->post('/', 'Api\\NewsController::create');
        $routes->put('(:num)', 'Api\\NewsController::update/$1');
        $routes->delete('(:num)', 'Api\\NewsController::delete/$1');
    });

    // Manejar preflight OPTIONS requests
    $routes->options('(:any)', static function () {
        return response()->setStatusCode(200);
    });
});
