import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_9gGvyqx6.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_MCrPTZ-u.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { a as apiService } from '../chunks/api_cJyNo2pj.mjs';
export { renderers } from '../renderers.mjs';

function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    apiService.loadToken();
  }, []);
  const login = async (email, password) => {
    const credentials = { email, password };
    setLoading(true);
    setError("");
    try {
      const response = await apiService.login(credentials);
      if (response.success) {
        setUser(response.user);
        return { success: true, user: response.user };
      } else {
        setError(response.message || "Error en el login");
        return { success: false, error: response.message };
      }
    } catch (err) {
      let errorMessage = "Error de conexión";
      if (err instanceof Error) {
        errorMessage += ": " + err.message;
      }
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };
  const logout = async () => {
    try {
      await apiService.logout();
    } catch (err) {
      console.error("Error en logout:", err);
    } finally {
      setUser(null);
      setError("");
    }
  };
  const register = async (userData) => {
    setLoading(true);
    setError("");
    try {
      const response = await apiService.register(userData);
      if (response.success) {
        return { success: true, message: response.message };
      } else {
        setError(response.message || "Error en el registro");
        return { success: false, error: response.message };
      }
    } catch (err) {
      const errorMessage = "Error de conexión: " + (err instanceof Error ? err.message : "Error desconocido");
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };
  return {
    user,
    loading,
    error,
    login,
    logout,
    register,
    isAuthenticated: !!user
  };
}

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setMessageType("");
    setIsLoading(true);
    if (!email || !password) {
      setMessage("Por favor, complete todos los campos.");
      setMessageType("error");
      setIsLoading(false);
      return;
    }
    try {
      const result = await login(email, password);
      if (result.success) {
        setMessage("Inicio de sesión exitoso!");
        setMessageType("success");
        setEmail("");
        setPassword("");
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1e3);
      } else {
        setMessage(result.error || "Error al iniciar sesión.");
        setMessageType("error");
      }
    } catch (error) {
      let errorMessage = "Error al iniciar sesión.";
      if (error instanceof Error) {
        const errMsg = error.message;
        if (errMsg.includes("401") || errMsg.includes("Unauthorized")) {
          errorMessage = "Credenciales incorrectas. Verifique su email y contraseña.";
        } else if (errMsg.includes("403") || errMsg.includes("Forbidden")) {
          errorMessage = "Acceso denegado. Su cuenta podría no estar activa.";
        } else if (errMsg.includes("500") || errMsg.includes("Internal Server Error")) {
          errorMessage = "Error del servidor. Inténtalo de nuevo más tarde.";
        } else if (errMsg.includes("Network") || errMsg.includes("fetch")) {
          errorMessage = "No se pudo conectar con el servidor. Verifique su conexión.";
        } else {
          errorMessage = errMsg || "Error inesperado. Inténtalo de nuevo.";
        }
      } else {
        errorMessage = "Error inesperado. Inténtalo de nuevo.";
      }
      setMessage(errorMessage);
      setMessageType("error");
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700", children: "Email" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "email",
          id: "email",
          className: "block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent sm:text-sm",
          style: { "--tw-ring-color": "#ff7b00" },
          value: email,
          onChange: (e) => setEmail(e.target.value),
          disabled: isLoading,
          required: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "password", className: "block text-sm font-medium text-gray-700", children: "Contraseña" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "password",
          id: "password",
          className: "block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent sm:text-sm",
          style: { "--tw-ring-color": "#ff7b00" },
          value: password,
          onChange: (e) => setPassword(e.target.value),
          disabled: isLoading,
          required: true
        }
      )
    ] }),
    message && /* @__PURE__ */ jsx("div", { className: `p-3 rounded-md text-sm ${messageType === "error" ? "bg-red-100 text-red-700 border border-red-200" : "bg-green-100 text-green-700 border border-green-200"}`, children: message }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        disabled: isLoading,
        className: "flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all",
        style: {
          backgroundColor: "#ff7b00",
          "--tw-ring-color": "#ff7b00"
        },
        children: isLoading ? /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-4 h-4 mr-2 border-b-2 border-white rounded-full animate-spin" }),
          "Iniciando sesión..."
        ] }) : "Iniciar Sesión"
      }
    ) })
  ] });
};

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Login", "data-astro-cid-sgpqyurt": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex items-center justify-center min-h-screen bg-gray-100" data-astro-cid-sgpqyurt> <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md" data-astro-cid-sgpqyurt> <h1 class="text-2xl font-bold text-center mb-6" data-astro-cid-sgpqyurt>Iniciar Sesión</h1> ${renderComponent($$result2, "LoginForm", LoginForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/laragon/www/Asociacion/Front_asn/src/components/LoginForm.tsx", "client:component-export": "default", "data-astro-cid-sgpqyurt": true })} </div> </main> ` })} `;
}, "C:/laragon/www/Asociacion/Front_asn/src/pages/login.astro", void 0);

const $$file = "C:/laragon/www/Asociacion/Front_asn/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
