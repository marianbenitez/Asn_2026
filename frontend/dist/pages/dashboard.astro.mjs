import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_9gGvyqx6.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_MCrPTZ-u.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Dashboard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dashboard" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", `<main class="flex items-center justify-center min-h-screen bg-gray-100"> <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center"> <h1 class="text-3xl font-bold mb-4" style="color: #ff7b00;">¡Bienvenido al Dashboard!</h1> <p class="text-gray-600">Has iniciado sesión exitosamente.</p> <div id="protected-data" class="mt-4 text-gray-700">Cargando datos protegidos...</div> <button id="logoutButton" class="mt-6 px-4 py-2 text-white rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all" style="background-color: #dc2626; --tw-ring-color: #dc2626;">
Cerrar Sesión
</button> </div> </main> <script client:load>
    import { fetchWithAuth } from '../utils/api';

    const API_URL = import.meta.env.PUBLIC_API_URL; // Get API URL from .env
    const protectedDataElement = document.getElementById('protected-data');

    // Client-side script to protect the dashboard
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      window.location.href = '/login';
    } else {
      // Fetch protected data using the token
      fetchWithAuth(\`\${API_URL}/api/protected-data\`)
      .then(response => {
        if (!response.ok) {
          // fetchWithAuth already handles 401/403 for global logout
          throw new Error(\`Error al cargar datos: \${response.statusText}\`);
        }
        return response.json();
      })
      .then(data => {
        protectedDataElement.innerText = \`Datos protegidos: \${JSON.stringify(data)}\`;
      })
      .catch(error => {
        console.error('Error fetching protected data:', error);
        if (protectedDataElement) {
          protectedDataElement.innerText = \`Error al cargar datos protegidos: \${error.message || error}\`; 
        }
      });
    }

    // Logout functionality
    document.getElementById('logoutButton').addEventListener('click', () => {
      localStorage.removeItem('access_token');
      localStorage.removeItem('user'); // Also remove user data if stored
      localStorage.removeItem('token_type');
      localStorage.removeItem('expires_in');
      window.location.href = '/login';
    });
  </script> `], [" ", `<main class="flex items-center justify-center min-h-screen bg-gray-100"> <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center"> <h1 class="text-3xl font-bold mb-4" style="color: #ff7b00;">¡Bienvenido al Dashboard!</h1> <p class="text-gray-600">Has iniciado sesión exitosamente.</p> <div id="protected-data" class="mt-4 text-gray-700">Cargando datos protegidos...</div> <button id="logoutButton" class="mt-6 px-4 py-2 text-white rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all" style="background-color: #dc2626; --tw-ring-color: #dc2626;">
Cerrar Sesión
</button> </div> </main> <script client:load>
    import { fetchWithAuth } from '../utils/api';

    const API_URL = import.meta.env.PUBLIC_API_URL; // Get API URL from .env
    const protectedDataElement = document.getElementById('protected-data');

    // Client-side script to protect the dashboard
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      window.location.href = '/login';
    } else {
      // Fetch protected data using the token
      fetchWithAuth(\\\`\\\${API_URL}/api/protected-data\\\`)
      .then(response => {
        if (!response.ok) {
          // fetchWithAuth already handles 401/403 for global logout
          throw new Error(\\\`Error al cargar datos: \\\${response.statusText}\\\`);
        }
        return response.json();
      })
      .then(data => {
        protectedDataElement.innerText = \\\`Datos protegidos: \\\${JSON.stringify(data)}\\\`;
      })
      .catch(error => {
        console.error('Error fetching protected data:', error);
        if (protectedDataElement) {
          protectedDataElement.innerText = \\\`Error al cargar datos protegidos: \\\${error.message || error}\\\`; 
        }
      });
    }

    // Logout functionality
    document.getElementById('logoutButton').addEventListener('click', () => {
      localStorage.removeItem('access_token');
      localStorage.removeItem('user'); // Also remove user data if stored
      localStorage.removeItem('token_type');
      localStorage.removeItem('expires_in');
      window.location.href = '/login';
    });
  </script> `])), maybeRenderHead()) })}`;
}, "C:/laragon/www/Asociacion/Front_asn/src/pages/dashboard.astro", void 0);
const $$file = "C:/laragon/www/Asociacion/Front_asn/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
