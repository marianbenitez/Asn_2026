import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_9gGvyqx6.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_MCrPTZ-u.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
export { renderers } from '../renderers.mjs';

const Timeline = ({ steps }) => {
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute left-8 top-0 bottom-0 w-0.5", style: { background: "linear-gradient(to bottom, #ff7b00, #ff9500)" } }),
    /* @__PURE__ */ jsx("div", { className: "space-y-8", children: steps.map((step, index) => /* @__PURE__ */ jsxs("div", { className: "relative flex items-start", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: `
              relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 shadow-lg transition-all duration-300 hover:scale-110
              ${step.isCompleted ? "bg-green-500 border-green-500 text-white" : "bg-white text-white"}
            `,
          style: {
            backgroundColor: step.isCompleted ? "#22c55e" : "#ff7b00",
            borderColor: step.isCompleted ? "#22c55e" : "#ff7b00"
          },
          children: /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold", children: step.icon })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "ml-8 flex-1", children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: `
                bg-white rounded-lg shadow-md p-6 border-l-4 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1
              `,
          style: {
            borderLeftColor: step.isCompleted ? "#22c55e" : "#ff7b00"
          },
          children: [
            /* @__PURE__ */ jsx(
              "h3",
              {
                className: `text-xl font-bold mb-2`,
                style: {
                  color: step.isCompleted ? "#15803d" : "#ff7b00"
                },
                children: step.title
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: step.description }),
            step.isCompleted && /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center text-green-600", children: [
              /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 mr-2", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Completado" })
            ] })
          ]
        }
      ) })
    ] }, step.id)) }),
    /* @__PURE__ */ jsxs("div", { className: "relative mt-8", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-8 w-0.5 h-8", style: { background: "linear-gradient(to bottom, #ff7b00, transparent)" } }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center ml-8", children: /* @__PURE__ */ jsx("div", { className: "text-white px-6 py-3 rounded-full shadow-lg", style: { background: "linear-gradient(135deg, #ff7b00 0%, #ff9500 100%)" }, children: /* @__PURE__ */ jsx("span", { className: "font-bold", children: "¡Bienvenido a la Asociación!" }) }) })
    ] })
  ] });
};

const $$Asociate = createComponent(($$result, $$props, $$slots) => {
  const timelineSteps = [
    {
      id: 1,
      title: "Descarga el Formulario",
      description: "Descarga y completa el formulario de inscripci\xF3n con todos tus datos personales y profesionales. Aseg\xFArate de proporcionar informaci\xF3n precisa y actualizada.",
      icon: "\u{1F4CB}",
      isCompleted: false
    },
    {
      id: 2,
      title: "Re\xFAne la Documentaci\xF3n",
      description: "Prepara toda la documentaci\xF3n requerida: t\xEDtulo profesional, matr\xEDcula vigente, CV actualizado y foto carnet. Todos los documentos deben estar en formato digital.",
      icon: "\u{1F4C4}",
      isCompleted: false
    },
    {
      id: 3,
      title: "Env\xEDa tu Solicitud",
      description: "Env\xEDa el formulario completo junto con toda la documentaci\xF3n a nuestro correo electr\xF3nico oficial. Recibir\xE1s una confirmaci\xF3n de recepci\xF3n en 24-48 horas.",
      icon: "\u{1F4E7}",
      isCompleted: false
    },
    {
      id: 4,
      title: "Evaluaci\xF3n y Aprobaci\xF3n",
      description: "Nuestro comit\xE9 evaluar\xE1 tu solicitud y documentaci\xF3n. Este proceso puede tomar entre 5 a 10 d\xEDas h\xE1biles. Te notificaremos el resultado por correo electr\xF3nico.",
      icon: "\u2705",
      isCompleted: false
    },
    {
      id: 5,
      title: "Pago de Cuota de Ingreso",
      description: "Una vez aprobada tu solicitud, deber\xE1s realizar el pago de la cuota de ingreso y la primera mensualidad. Te enviaremos los datos bancarios correspondientes.",
      icon: "\u{1F4B3}",
      isCompleted: false
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Asociate - Asociaci\xF3n Sanjuanina de Nutrici\xF3n" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto"> <div class="text-center mb-12"> <h1 class="text-4xl font-bold mb-4" style="color: #ff7b00;">Únete a Nuestra Asociación</h1> <p class="text-xl text-gray-600 leading-relaxed">
¡Forma parte de nuestra comunidad de profesionales de la nutrición! 
        Sigue estos pasos para convertirte en socio de la Asociación Sanjuanina de Nutrición.
</p> </div> <!-- Beneficios destacados --> <div class="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-8 mb-12 border" style="border-color: #ff7b00;"> <h2 class="text-2xl font-bold mb-4 text-center" style="color: #ff7b00;">Beneficios de ser Socio</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> <div class="text-center"> <div class="text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style="background-color: #ff7b00;"> <span class="text-xl">🎓</span> </div> <h3 class="font-semibold mb-2" style="color: #ff7b00;">Capacitación Continua</h3> <p class="text-sm text-gray-600">Acceso a cursos, talleres y conferencias especializadas</p> </div> <div class="text-center"> <div class="text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style="background-color: #ff7b00;"> <span class="text-xl">🤝</span> </div> <h3 class="font-semibold mb-2" style="color: #ff7b00;">Red Profesional</h3> <p class="text-sm text-gray-600">Conecta con otros profesionales de la nutrición</p> </div> <div class="text-center"> <div class="text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style="background-color: #ff7b00;"> <span class="text-xl">📊</span> </div> <h3 class="font-semibold mb-2" style="color: #ff7b00;">Recursos Exclusivos</h3> <p class="text-sm text-gray-600">Acceso a investigaciones y material científico actualizado</p> </div> </div> </div> <!-- Línea de tiempo del proceso --> <div class="mb-12"> <h2 class="text-3xl font-bold mb-8 text-center" style="color: #ff7b00;">Proceso de Asociación</h2> ${renderComponent($$result2, "Timeline", Timeline, { "steps": timelineSteps, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/laragon/www/Asociacion/Front_asn/src/components/Timeline.tsx", "client:component-export": "default" })} </div> <!-- Información adicional --> <div class="bg-white rounded-lg shadow-md p-8 border-l-4" style="border-left-color: #ff7b00;"> <h2 class="text-2xl font-bold mb-4" style="color: #ff7b00;">Información Importante</h2> <div class="space-y-4 text-gray-600"> <p> <strong>Requisitos:</strong> Título universitario en Nutrición o Licenciatura en Nutrición, 
          matrícula profesional vigente y experiencia comprobable en el área.
</p> <p> <strong>Cuota de Ingreso:</strong> $15.000 (pago único)
</p> <p> <strong>Cuota Mensual:</strong> $8.000
</p> <p> <strong>Contacto:</strong> Para consultas adicionales, escríbenos a
<a href="mailto:info@sanjuanutricion.org.ar" class="hover:underline ml-1" style="color: #ff7b00;">
info@sanjuanutricion.org.ar
</a> </p> </div> </div> <!-- Botón de acción --> <div class="text-center mt-12"> <a href="mailto:info@sanjuanutricion.org.ar?subject=Solicitud de Formulario de Asociación" class="inline-flex items-center text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300" style="background: linear-gradient(135deg, #ff7b00 0%, #ff9500 100%);"> <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> </svg>
Solicitar Formulario de Inscripción
</a> </div> </div> ` })}`;
}, "C:/laragon/www/Asociacion/Front_asn/src/pages/asociate.astro", void 0);

const $$file = "C:/laragon/www/Asociacion/Front_asn/src/pages/asociate.astro";
const $$url = "/asociate";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Asociate,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
