import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_9gGvyqx6.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_MCrPTZ-u.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { Search, Calculator, ChevronUp, ChevronDown, FileText, BookOpen, Building, Home, Users, Stethoscope } from 'lucide-react';
import { a as apiService } from '../chunks/api_cJyNo2pj.mjs';
export { renderers } from '../renderers.mjs';

const NomencladorNutricion = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [honorariosData, setHonorariosData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const iconMap = {
    "stethoscope": /* @__PURE__ */ jsx(Stethoscope, { className: "w-5 h-5" }),
    "users": /* @__PURE__ */ jsx(Users, { className: "w-5 h-5" }),
    "home": /* @__PURE__ */ jsx(Home, { className: "w-5 h-5" }),
    "building": /* @__PURE__ */ jsx(Building, { className: "w-5 h-5" }),
    "book-open": /* @__PURE__ */ jsx(BookOpen, { className: "w-5 h-5" }),
    "search": /* @__PURE__ */ jsx(Search, { className: "w-5 h-5" }),
    "file-text": /* @__PURE__ */ jsx(FileText, { className: "w-5 h-5" }),
    "calculator": /* @__PURE__ */ jsx(Calculator, { className: "w-5 h-5" })
  };
  useEffect(() => {
    loadHonorarios();
  }, []);
  const loadHonorarios = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await apiService.get("/honorarios");
      if (response.success) {
        setHonorariosData(response);
      } else {
        setError("Error al cargar los honorarios");
      }
    } catch (err) {
      console.error("Error loading honorarios:", err);
      setError("Error de conexión al cargar los honorarios");
    } finally {
      setLoading(false);
    }
  };
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };
  const filteredData = honorariosData?.categorias.filter((categoria) => {
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();
    return categoria.nombre.toLowerCase().includes(searchLower) || categoria.servicios.some((servicio) => servicio.nombre.toLowerCase().includes(searchLower));
  }) || [];
  const toggleSection = (categoriaId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [categoriaId]: !prev[categoriaId]
    }));
  };
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "max-w-6xl min-h-screen p-6 mx-auto bg-gray-50", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-64", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ jsx("div", { className: "w-6 h-6 border-b-2 border-blue-600 rounded-full animate-spin" }),
      /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Cargando honorarios..." })
    ] }) }) });
  }
  if (error) {
    return /* @__PURE__ */ jsx("div", { className: "max-w-6xl min-h-screen p-6 mx-auto bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "p-6 bg-red-50 border border-red-200 rounded-lg", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-red-800 mb-2", children: "Error" }),
      /* @__PURE__ */ jsx("p", { className: "text-red-700", children: error }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: loadHonorarios,
          className: "mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700",
          children: "Reintentar"
        }
      )
    ] }) });
  }
  if (!honorariosData) {
    return /* @__PURE__ */ jsx("div", { className: "max-w-6xl min-h-screen p-6 mx-auto bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "p-6 bg-yellow-50 border border-yellow-200 rounded-lg", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-yellow-800 mb-2", children: "Sin datos" }),
      /* @__PURE__ */ jsx("p", { className: "text-yellow-700", children: "No se encontraron datos de honorarios." })
    ] }) });
  }
  return /* @__PURE__ */ jsx("div", { className: "max-w-6xl min-h-screen p-6 mx-auto bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "p-6 mb-6 bg-white rounded-lg shadow-lg", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-gray-800", children: "Nomenclador HME - Nutrición" }),
      /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Junio 2025 - ASN" }),
        /* @__PURE__ */ jsxs("p", { className: "text-lg font-semibold text-blue-600", children: [
          "Valor ASMENUT: ",
          formatCurrency(honorariosData.valor_asmenut)
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(Search, { className: "absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Buscar servicios...",
          className: "w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
          value: searchTerm,
          onChange: (e) => setSearchTerm(e.target.value)
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-4", children: filteredData.map((categoria) => /* @__PURE__ */ jsxs("div", { className: "overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "p-4 text-white transition-all duration-200 cursor-pointer bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
          onClick: () => toggleSection(categoria.id),
          children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
              iconMap[categoria.icono] || /* @__PURE__ */ jsx(Calculator, { className: "w-5 h-5" }),
              /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold", children: categoria.nombre })
            ] }),
            expandedSections[categoria.id] ? /* @__PURE__ */ jsx(ChevronUp, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5" })
          ] })
        }
      ),
      expandedSections[categoria.id] && /* @__PURE__ */ jsx("div", { className: "p-4 bg-gray-50", children: /* @__PURE__ */ jsxs("table", { className: "min-w-full text-sm", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { className: "px-4 py-2 text-sm font-medium text-left text-gray-700", children: "Servicio" }),
          /* @__PURE__ */ jsx("th", { className: "px-4 py-2 text-sm font-medium text-center text-gray-700", children: "Unidades ASMENUT" }),
          /* @__PURE__ */ jsx("th", { className: "px-4 py-2 text-sm font-medium text-right text-gray-700", children: "Honorario" }),
          categoria.servicios.some((servicio) => servicio.monto_por_hora !== void 0) && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("th", { className: "px-4 py-2 text-sm font-medium text-right text-gray-700", children: "Por Hora" }),
            /* @__PURE__ */ jsx("th", { className: "px-4 py-2 text-sm font-medium text-right text-gray-700", children: "Mensual" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: categoria.servicios.map((servicio) => /* @__PURE__ */ jsxs("tr", { className: "hover:bg-gray-50", children: [
          /* @__PURE__ */ jsx("td", { className: "px-4 py-3 text-sm text-gray-900", children: servicio.nombre }),
          /* @__PURE__ */ jsx("td", { className: "px-4 py-3 text-sm text-center text-gray-600", children: servicio.unidades_asmenut }),
          /* @__PURE__ */ jsx("td", { className: "px-4 py-3 text-sm font-medium text-right text-gray-900", children: servicio.monto_fijo ? formatCurrency(servicio.monto_fijo) : formatCurrency(servicio.monto_calculado) }),
          categoria.servicios.some((s) => s.monto_por_hora !== void 0) && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("td", { className: "px-4 py-3 text-sm text-right text-gray-600", children: servicio.monto_por_hora ? formatCurrency(servicio.monto_por_hora) : "" }),
            /* @__PURE__ */ jsx("td", { className: "px-4 py-3 text-sm font-medium text-right text-gray-900", children: servicio.monto_mensual ? formatCurrency(servicio.monto_mensual) : "" })
          ] })
        ] }, servicio.id)) })
      ] }) })
    ] }, categoria.id)) }),
    /* @__PURE__ */ jsxs("div", { className: "p-4 mt-8 rounded-lg bg-blue-50", children: [
      /* @__PURE__ */ jsx("h3", { className: "mb-2 text-lg font-semibold text-blue-800", children: "Notas Importantes:" }),
      /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm text-blue-700", children: [
        /* @__PURE__ */ jsx("li", { children: "• Los valores están expresados en pesos argentinos" }),
        /* @__PURE__ */ jsx("li", { children: "• Los módulos pueden incluir anamnesis y controles" }),
        /* @__PURE__ */ jsx("li", { children: "• Para consultas domiciliarias se debe sumar costo de viáticos" }),
        /* @__PURE__ */ jsx("li", { children: "• Los valores en organismos públicos tienen incrementos por antigüedad" }),
        /* @__PURE__ */ jsx("li", { children: "• Con posgrado o especialidad: 10% adicional, con maestría o doctorado: 15% adicional" })
      ] })
    ] })
  ] }) });
};

const $$Honorarios = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Honorarios M\xEDnimos - Asociaci\xF3n Sanjuanina de Nutrici\xF3n" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto"> <h1 class="mb-6 text-4xl font-bold text-center" style="color: #ff7b00;">
Honorarios Mínimos Sugeridos
</h1> <div class="p-8 mb-8 bg-white border-l-4 rounded-lg shadow-md" style="border-left-color: #ff7b00;"> <p class="mb-6 text-lg text-gray-700">
A continuación, se presenta la tabla de honorarios mínimos sugeridos
        para los profesionales de la nutrición en San Juan.
</p> ${renderComponent($$result2, "HonorariosMinimos", NomencladorNutricion, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/laragon/www/Asociacion/Front_asn/src/components/HonorariosMinimos.tsx", "client:component-export": "default" })} <div class="overflow-x-auto"> <table class="min-w-full bg-white border border-gray-200 rounded-lg"> <thead style="background-color: #ff7b00;"> <tr> <th class="px-6 py-3 text-sm font-semibold tracking-wider text-left text-white uppercase">Práctica</th> <th class="px-6 py-3 text-sm font-semibold tracking-wider text-left text-white uppercase">Valor</th> </tr> </thead> <tbody class="divide-y divide-gray-200"> <tr class="hover:bg-orange-50"> <td class="px-6 py-4 text-gray-900 whitespace-nowrap">Consulta Nutricional</td> <td class="px-6 py-4 font-semibold whitespace-nowrap" style="color: #ff7b00;">$5.000</td> </tr> <tr class="hover:bg-orange-50"> <td class="px-6 py-4 text-gray-900 whitespace-nowrap">Plan de Alimentación Personalizado</td> <td class="px-6 py-4 font-semibold whitespace-nowrap" style="color: #ff7b00;">$8.000</td> </tr> <tr class="hover:bg-orange-50"> <td class="px-6 py-4 text-gray-900 whitespace-nowrap">Seguimiento Mensual</td> <td class="px-6 py-4 font-semibold whitespace-nowrap" style="color: #ff7b00;">$12.000</td> </tr> <tr class="hover:bg-orange-50"> <td class="px-6 py-4 text-gray-900 whitespace-nowrap">Evaluación Antropométrica</td> <td class="px-6 py-4 font-semibold whitespace-nowrap" style="color: #ff7b00;">$3.500</td> </tr> <tr class="hover:bg-orange-50"> <td class="px-6 py-4 text-gray-900 whitespace-nowrap">Charla Grupal (por persona)</td> <td class="px-6 py-4 font-semibold whitespace-nowrap" style="color: #ff7b00;">$1.500</td> </tr> </tbody> </table> </div> </div> <div class="p-6 border rounded-lg bg-orange-50" style="border-color: #ff7b00;"> <h3 class="mb-3 text-lg font-bold" style="color: #ff7b00;">
Nota Importante
</h3> <p class="text-gray-700">
Estos valores son sugerencias mínimas establecidas por la Asociación.
        Cada profesional puede ajustar sus honorarios según su experiencia,
        especialización y ubicación geográfica.
</p> </div> </div> ` })}`;
}, "C:/laragon/www/Asociacion/Front_asn/src/pages/honorarios.astro", void 0);

const $$file = "C:/laragon/www/Asociacion/Front_asn/src/pages/honorarios.astro";
const $$url = "/honorarios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Honorarios,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
