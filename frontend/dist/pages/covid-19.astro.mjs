import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_9gGvyqx6.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_MCrPTZ-u.mjs';
export { renderers } from '../renderers.mjs';

const $$Covid19 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Covid-19 - Asociaci\xF3n Sanjuanina de Nutrici\xF3n" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto"> <h1 class="text-4xl font-bold mb-6 text-center" style="color: #ff7b00;">Información sobre Covid-19</h1> <div class="bg-white rounded-lg shadow-md p-8 border-l-4 mb-8" style="border-left-color: #ff7b00;"> <p class="text-gray-700 mb-6 text-lg">
En esta sección, encontrarás información y recursos relacionados con la nutrición y el Covid-19.
</p> <h2 class="text-2xl font-bold mb-4" style="color: #ff7b00;">Recomendaciones Nutricionales</h2> <p class="text-gray-700 mb-4">
Una buena alimentación es fundamental para fortalecer el sistema inmunológico. Aquí te dejamos algunas recomendaciones:
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div class="bg-orange-50 p-6 rounded-lg"> <h3 class="font-bold mb-3" style="color: #ff7b00;">Alimentos Recomendados</h3> <ul class="space-y-2 text-gray-700"> <li>• Frutas cítricas ricas en vitamina C</li> <li>• Verduras de hoja verde</li> <li>• Proteínas magras</li> <li>• Frutos secos y semillas</li> <li>• Pescados ricos en omega-3</li> </ul> </div> <div class="bg-orange-50 p-6 rounded-lg"> <h3 class="font-bold mb-3" style="color: #ff7b00;">Hábitos Saludables</h3> <ul class="space-y-2 text-gray-700"> <li>• Mantente bien hidratado</li> <li>• Evita los alimentos ultraprocesados</li> <li>• Realiza actividad física regular</li> <li>• Duerme las horas necesarias</li> <li>• Reduce el estrés</li> </ul> </div> </div> </div> <div class="bg-white rounded-lg shadow-md p-8 border-l-4" style="border-left-color: #ff7b00;"> <h3 class="text-xl font-bold mb-4" style="color: #ff7b00;">Recursos Adicionales</h3> <p class="text-gray-700 mb-4">
Para más información sobre nutrición y Covid-19, consulta con nuestros profesionales asociados.
</p> <a href="/contacto" class="inline-block px-6 py-3 text-white rounded-lg font-medium hover:opacity-90 transition-opacity" style="background-color: #ff7b00;">
Contactar Profesional
</a> </div> </div> ` })}`;
}, "C:/laragon/www/Asociacion/Front_asn/src/pages/covid-19.astro", void 0);

const $$file = "C:/laragon/www/Asociacion/Front_asn/src/pages/covid-19.astro";
const $$url = "/covid-19";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Covid19,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
