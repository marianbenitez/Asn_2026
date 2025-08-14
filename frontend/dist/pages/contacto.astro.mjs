import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_9gGvyqx6.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_MCrPTZ-u.mjs';
export { renderers } from '../renderers.mjs';

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto - Asociaci\xF3n Sanjuanina de Nutrici\xF3n" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto"> <h1 class="text-4xl font-bold mb-6 text-center" style="color: #ff7b00;">Contacto</h1> <div class="bg-white rounded-lg shadow-md p-8 border-l-4" style="border-left-color: #ff7b00;"> <p class="text-gray-700 mb-8 text-lg">
Ponte en contacto con nosotros a través de los siguientes medios:
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <div class="space-y-4"> <div class="flex items-center"> <div class="w-10 h-10 rounded-full flex items-center justify-center mr-4" style="background-color: #ff7b00;"> <span class="text-white">📧</span> </div> <div> <p class="font-semibold text-gray-800">Email</p> <a href="mailto:info@sanjuanutricion.org.ar" class="hover:underline" style="color: #ff7b00;">
info@sanjuanutricion.org.ar
</a> </div> </div> <div class="flex items-center"> <div class="w-10 h-10 rounded-full flex items-center justify-center mr-4" style="background-color: #ff7b00;"> <span class="text-white">📞</span> </div> <div> <p class="font-semibold text-gray-800">Teléfono</p> <p class="text-gray-700">+54 9 264 123-4567</p> </div> </div> <div class="flex items-center"> <div class="w-10 h-10 rounded-full flex items-center justify-center mr-4" style="background-color: #ff7b00;"> <span class="text-white">📍</span> </div> <div> <p class="font-semibold text-gray-800">Dirección</p> <p class="text-gray-700">Av. Libertador San Martín 1234, San Juan, Argentina</p> </div> </div> </div> <div class="bg-orange-50 p-6 rounded-lg"> <h3 class="text-lg font-bold mb-4" style="color: #ff7b00;">Horarios de Atención</h3> <div class="space-y-2 text-gray-700"> <p><strong>Lunes a Viernes:</strong> 9:00 - 17:00</p> <p><strong>Sábados:</strong> 9:00 - 13:00</p> <p><strong>Domingos:</strong> Cerrado</p> </div> </div> </div> </div> </div> ` })}`;
}, "C:/laragon/www/Asociacion/Front_asn/src/pages/contacto.astro", void 0);

const $$file = "C:/laragon/www/Asociacion/Front_asn/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
