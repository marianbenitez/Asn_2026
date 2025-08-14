import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, a as renderScript, d as addAttribute } from '../chunks/astro/server_9gGvyqx6.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout, a as $$Logo } from '../chunks/Layout_MCrPTZ-u.mjs';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const $$Beneficios = createComponent(($$result, $$props, $$slots) => {
  const beneficiosData = {
    convenios: [
      {
        nombre: "ZETA PAPELERIA Y LIBRER\xCDA",
        contacto: "2646723798",
        descuento: "10 % DE DESCUENTO",
        direccion: "LIBERTADOR 2940 OESTE - RIVADAVIA",
        redes_sociales: null
      },
      {
        nombre: "VERDE PISTACHO TIENDA NATURAL",
        contacto: "2644456868",
        descuento: "10 % DE DESCUENTO",
        direccion: "ESTEBAN ECHEVERRIA 39 SUR - RIVADAVIA",
        redes_sociales: null
      },
      {
        nombre: "VICTORIA IGUALADA REPOSTERIA CATERING Y CAFETERIA",
        contacto: "2645803177",
        descuento: "10 % DE DESCUENTO",
        direccion: "AV LIBERTADOR 1730 OESTE - CAPITAL",
        redes_sociales: null
      },
      {
        nombre: "UN TOQUE DE CANELA ALMACEN NATURAL",
        contacto: "2645426813",
        descuento: "10 % DE DESCUENTO",
        direccion: "JOSE MARIA PAZ 2149 ESTE - SANTA LUCIA",
        redes_sociales: null
      },
      {
        nombre: "NOVA PELUQUEROS",
        contacto: "2645402358",
        descuento: "15 % DE DESCUENTO",
        direccion: "BRASIL 2552 OESTE - CAPITAL",
        redes_sociales: null
      },
      {
        nombre: "HIELO AZUL ALMACEN DE BEBIDAS",
        contacto: "2645167216",
        descuento: "20% DE DESCUENTO EN VINOS",
        direccion: "ESTEBAN ECHEVERRIA 19 SUR - RIVADAVIA",
        redes_sociales: null
      },
      {
        nombre: "WABI SABI ESTETICA Y NUTRICION",
        contacto: "2644001084",
        descuento: "15% DE DESCUENTO",
        direccion: "PAULA SARMIENTO 25 SUR - CAPITAL",
        redes_sociales: null
      },
      {
        nombre: "GEMINIS BELLEZA Y COSMETICA",
        contacto: "2645288373",
        descuento: "10% DE DESCUENTO",
        direccion: "GRANADEROS 912 NORTE - RIVADAVIA",
        redes_sociales: null
      },
      {
        nombre: "CONTIGO NAIF TIENDA DE REGALOS",
        contacto: "1559513366",
        descuento: "15% DE DESCUENTO",
        direccion: "HERMOGENES RUIZ 994 SUR - CAPITAL",
        redes_sociales: null
      },
      {
        nombre: "LOCAS SUELTAS MARROQUINERIA",
        contacto: "2644115368",
        descuento: "20% DE DESCUENTO EN EFECTIVO LOS MIERCOLES Y 10% DE DESCUENTO CON TARJETA",
        direccion: "HERMOGENES RUIZ ESQUINA SANTA FE - CAPITAL",
        redes_sociales: "@SIEMPREROPAORIGINAL"
      },
      {
        nombre: "SIEMPRE ROPA",
        contacto: "2644419521",
        descuento: "10% DE DESCUENTO DE LUNES A JUEVES Y 15% DE DESCUENTO VIERNES",
        direccion: "DEL BONO SUR 678 - CAPITAL",
        redes_sociales: "@LOCASSUELTASTREND"
      },
      {
        nombre: "ATHLOS GIMNASIO",
        contacto: "2645556218",
        descuento: "15% DE DESCUENTO ACUMULABLE",
        direccion: "LAS PALMAS 124 NORTE - RIVADAVIA",
        redes_sociales: "@ATHLOSCLUB"
      },
      {
        nombre: "HOD FITNESS CLUB",
        contacto: "2645260814",
        descuento: "10% DE DESCUENTO",
        direccion: "EL ALMENDRO: DR. ORLANDO MARINO 6503 (O). RIVADAVIA",
        redes_sociales: "@HODFITNESSCLUB"
      },
      {
        nombre: "DIANA SHOWROOM",
        contacto: "2644049441",
        descuento: "15% DE DESCUENTO",
        direccion: "REPUBLICA DEL LIBANO 2856 OESTE - RAWSON",
        redes_sociales: "@DIANASHOWROOM15"
      },
      {
        nombre: "INTI HUASI",
        contacto: "2644447881",
        descuento: "10% DE DESCUENTO",
        direccion: "25 DE MAYO Y EEUU. CAPITAL",
        redes_sociales: "@INTIHUASI.PRODUCTOSNATURALES"
      },
      {
        nombre: "RECREARTE",
        contacto: "@RECREARTESJ",
        descuento: "El descuento al que acceder\xE1 cada HIJO INGRESANTE ser\xE1 del 10%, (inscripci\xF3n y materiales) bonificar\xE1 de enero a mayo en un 30%. De junio a septiembre ser\xE1 Bonificada por \xDANICA VEZ el 100% (matr\xEDcula y 30% de materiales). De octubre a diciembre el 100% (matr\xEDcula y materiales). Para acceder al descuento los HIJOS que ya pertenecen a los jardines, deber\xE1n llevar UN referido a algunos de los Jardines mencionados. La instituci\xF3n ya posee un descuento de hermanos que es equivalente al 15 %; en este caso NO ser\xE1 acumulable al 10% de descuento del presente convenio.",
        direccion: "Recrearte Central: Laprida 126 (O) antes de Entre Rios. La Casona De Recrearte: San Luis y Catamarca. Recrearte Rufrano: Lateral de Circunvalaci\xF3n 500 (S). Recrearte Libertador: Libertador 1345 (O). Recrearte Santa Luc\xEDa: Pellegrini 645 (S). Recrearte La Caba\xF1a: Boggian 3954 (O), B\xBA La Caba\xF1a, Rivadavia. El Nido Montesosori: Saavedra 115 (N), Rivadavia; Santa F\xE9 378 (E). Capital. El Pato Jard\xEDn Maternal: Santo Domingo 75 (N), Rivadavia. Recrearte Pedro Echag\xFCe: Pedro Echag\xFCe esquina Aberastain, Capital.",
        redes_sociales: null
      }
    ]};
  const convenios = beneficiosData.convenios;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Beneficios Exclusivos - Asociaci\xF3n Sanjuanina de Nutrici\xF3n", "data-astro-cid-rcx3yg7w": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16 mb-12" data-astro-cid-rcx3yg7w> <div class="container mx-auto px-4 text-center" data-astro-cid-rcx3yg7w> <div class="mb-8" data-astro-cid-rcx3yg7w> ${renderComponent($$result2, "Logo", $$Logo, { "size": "lg", "variant": "white", "data-astro-cid-rcx3yg7w": true })} </div> <h1 class="text-4xl md:text-6xl font-bold mb-4" data-astro-cid-rcx3yg7w>BENEFICIOS</h1> <p class="text-xl md:text-2xl opacity-90" data-astro-cid-rcx3yg7w>EXCLUSIVOS PARA SOCIAS</p> <div class="w-24 h-1 bg-white mx-auto mt-6 rounded-full" data-astro-cid-rcx3yg7w></div> </div> </section>  <section class="mb-16" data-astro-cid-rcx3yg7w> <div class="container mx-auto px-4" data-astro-cid-rcx3yg7w> <div class="max-w-4xl mx-auto text-center" data-astro-cid-rcx3yg7w> <h2 class="text-3xl font-bold mb-8" style="color: #ff7b00;" data-astro-cid-rcx3yg7w>
Descubre todos los beneficios exclusivos para nuestras asociadas
</h2> <p class="text-lg text-gray-600 mb-12" data-astro-cid-rcx3yg7w>
Como miembro de la Asociación Sanjuanina de Nutrición, tendrás acceso
          a descuentos especiales, productos exclusivos y servicios de calidad
          en las mejores marcas y establecimientos de San Juan.
</p> </div> </div> </section>  <section class="mb-16" data-astro-cid-rcx3yg7w> <div class="container mx-auto px-4" data-astro-cid-rcx3yg7w> <h3 class="text-2xl font-bold text-center mb-12" style="color: #ff7b00;" data-astro-cid-rcx3yg7w>
Nuestras Marcas Asociadas
</h3> <p class="text-center text-gray-600 mb-8" data-astro-cid-rcx3yg7w> <span class="font-semibold" data-astro-cid-rcx3yg7w>💡 Consejo:</span> Haz clic en cada marca para
        ver sus beneficios específicos
</p> <div class="brands-carousel relative" data-astro-cid-rcx3yg7w> <div class="brands-container flex gap-8 overflow-x-auto pb-4 scrollbar-hide" data-astro-cid-rcx3yg7w> ${convenios.map((convenio, index) => renderTemplate`<div class="brand-card flex-shrink-0 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative cursor-pointer"${addAttribute(convenio.nombre.toLowerCase().replace(/\s+/g, "-"), "data-brand")}${addAttribute(index, "data-index")} data-astro-cid-rcx3yg7w> <div class="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center mb-4 overflow-hidden" data-astro-cid-rcx3yg7w> <img${addAttribute(`/src/assets/img/Logos/Screenshot_${index + 1}_${convenio.nombre.replace(/\s+/g, "_")}.jpg`, "src")}${addAttribute(convenio.nombre, "alt")} class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" data-astro-cid-rcx3yg7w> <div class="text-center hidden" data-astro-cid-rcx3yg7w> <div class="w-16 h-16 bg-orange-200 rounded-lg flex items-center justify-center mb-2" data-astro-cid-rcx3yg7w> <span class="text-orange-600 font-bold text-xs" data-astro-cid-rcx3yg7w> ${convenio.nombre.split(" ")[0]} </span> </div> <p class="text-sm text-gray-600" data-astro-cid-rcx3yg7w> ${convenio.nombre.split(" ").slice(1, 3).join(" ")} </p> </div> </div> <h4 class="font-semibold text-lg mb-2" style="color: #ff7b00;" data-astro-cid-rcx3yg7w> ${convenio.nombre} </h4> <p class="text-sm text-gray-600" data-astro-cid-rcx3yg7w>${convenio.descuento}</p> <div class="mt-2 text-xs text-gray-500" data-astro-cid-rcx3yg7w>
📍 ${convenio.direccion} </div> </div>`)} </div> </div> </div> </section>  <div id="beneficioModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden flex items-center justify-center p-4" data-astro-cid-rcx3yg7w> <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" data-astro-cid-rcx3yg7w> <div class="p-8" data-astro-cid-rcx3yg7w> <div class="flex justify-between items-start mb-6" data-astro-cid-rcx3yg7w> <h3 id="modalTitle" class="text-2xl font-bold" style="color: #ff7b00;" data-astro-cid-rcx3yg7w></h3> <button id="closeModal" class="text-gray-500 hover:text-gray-700 text-2xl font-bold" data-astro-cid-rcx3yg7w>
×
</button> </div> <div id="modalContent" class="space-y-6" data-astro-cid-rcx3yg7w> <!-- Contenido dinámico --> </div> <div class="mt-8 pt-6 border-t border-gray-200" data-astro-cid-rcx3yg7w> <div class="flex flex-col sm:flex-row gap-4" data-astro-cid-rcx3yg7w> <button id="contactarBtn" class="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center" data-astro-cid-rcx3yg7w>
📞 Contactar
</button> <button id="direccionBtn" class="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-colors flex items-center justify-center" data-astro-cid-rcx3yg7w>
📍 Ver ubicación
</button> </div> </div> </div> </div> </div>  <section class="mb-16" data-astro-cid-rcx3yg7w> <div class="container mx-auto px-4" data-astro-cid-rcx3yg7w> <div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-astro-cid-rcx3yg7w> <div class="bg-white p-8 rounded-2xl shadow-lg" data-astro-cid-rcx3yg7w> <h3 class="text-2xl font-bold mb-6" style="color: #ff7b00;" data-astro-cid-rcx3yg7w>
¿Cómo acceder a los beneficios?
</h3> <ul class="space-y-4" data-astro-cid-rcx3yg7w> <li class="flex items-start" data-astro-cid-rcx3yg7w> <div class="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1" data-astro-cid-rcx3yg7w> <span class="text-orange-600 font-bold text-sm" data-astro-cid-rcx3yg7w>1</span> </div> <p class="text-gray-700" data-astro-cid-rcx3yg7w>
Asóciate a la ASN completando el formulario de membresía
</p> </li> <li class="flex items-start" data-astro-cid-rcx3yg7w> <div class="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1" data-astro-cid-rcx3yg7w> <span class="text-orange-600 font-bold text-sm" data-astro-cid-rcx3yg7w>2</span> </div> <p class="text-gray-700" data-astro-cid-rcx3yg7w>
Recibe tu credencial de asociada con tu número de socio
</p> </li> <li class="flex items-start" data-astro-cid-rcx3yg7w> <div class="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1" data-astro-cid-rcx3yg7w> <span class="text-orange-600 font-bold text-sm" data-astro-cid-rcx3yg7w>3</span> </div> <p class="text-gray-700" data-astro-cid-rcx3yg7w>
Presenta tu credencial en cualquiera de nuestras marcas
                asociadas
</p> </li> <li class="flex items-start" data-astro-cid-rcx3yg7w> <div class="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1" data-astro-cid-rcx3yg7w> <span class="text-orange-600 font-bold text-sm" data-astro-cid-rcx3yg7w>4</span> </div> <p class="text-gray-700" data-astro-cid-rcx3yg7w>
Disfruta de descuentos exclusivos y beneficios especiales
</p> </li> </ul> </div> <div class="bg-white p-8 rounded-2xl shadow-lg" data-astro-cid-rcx3yg7w> <h3 class="text-2xl font-bold mb-6" style="color: #ff7b00;" data-astro-cid-rcx3yg7w>
Beneficios Adicionales
</h3> <ul class="space-y-4" data-astro-cid-rcx3yg7w> <li class="flex items-start" data-astro-cid-rcx3yg7w> <svg class="w-6 h-6 text-orange-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-rcx3yg7w> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-rcx3yg7w></path> </svg> <p class="text-gray-700" data-astro-cid-rcx3yg7w>Capacitaciones y talleres gratuitos</p> </li> <li class="flex items-start" data-astro-cid-rcx3yg7w> <svg class="w-6 h-6 text-orange-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-rcx3yg7w> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-rcx3yg7w></path> </svg> <p class="text-gray-700" data-astro-cid-rcx3yg7w>
Acceso a biblioteca digital especializada
</p> </li> <li class="flex items-start" data-astro-cid-rcx3yg7w> <svg class="w-6 h-6 text-orange-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-rcx3yg7w> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-rcx3yg7w></path> </svg> <p class="text-gray-700" data-astro-cid-rcx3yg7w>Red de profesionales y networking</p> </li> <li class="flex items-start" data-astro-cid-rcx3yg7w> <svg class="w-6 h-6 text-orange-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-rcx3yg7w> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-rcx3yg7w></path> </svg> <p class="text-gray-700" data-astro-cid-rcx3yg7w>
Publicaciones científicas actualizadas
</p> </li> <li class="flex items-start" data-astro-cid-rcx3yg7w> <svg class="w-6 h-6 text-orange-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-rcx3yg7w> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-rcx3yg7w></path> </svg> <p class="text-gray-700" data-astro-cid-rcx3yg7w>Eventos y congresos con descuentos</p> </li> </ul> </div> </div> </div> </section>  <section class="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-center text-white mb-16" data-astro-cid-rcx3yg7w> <h2 class="text-3xl font-bold mb-4" data-astro-cid-rcx3yg7w>
¿Lista para disfrutar de estos beneficios?
</h2> <p class="text-xl mb-8 opacity-90" data-astro-cid-rcx3yg7w>
Únete a nuestra asociación y accede a descuentos exclusivos en las mejores
      marcas
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-rcx3yg7w> <a href="/asociate" class="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors" data-astro-cid-rcx3yg7w>
Asociarse ahora
</a> <a href="/contacto" class="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors" data-astro-cid-rcx3yg7w>
Consultar beneficios
</a> </div> </section>  ${renderScript($$result2, "C:/laragon/www/Asociacion/Front_asn/src/pages/beneficios.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/laragon/www/Asociacion/Front_asn/src/pages/beneficios.astro", void 0);

const $$file = "C:/laragon/www/Asociacion/Front_asn/src/pages/beneficios.astro";
const $$url = "/beneficios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Beneficios,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
