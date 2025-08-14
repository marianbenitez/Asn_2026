import { c as createComponent, r as renderComponent, a as renderScript, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_9gGvyqx6.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_MCrPTZ-u.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Noticias = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Noticias - Asociaci\xF3n Sanjuanina de Nutrici\xF3n", "data-astro-cid-5gfbvucb": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-6xl mx-auto" data-astro-cid-5gfbvucb> <!-- Header --> <div class="text-center mb-12" data-astro-cid-5gfbvucb> <h1 class="text-4xl font-bold mb-4" style="color: #ff7b00;" data-astro-cid-5gfbvucb>Noticias</h1> <p class="text-xl text-gray-600" data-astro-cid-5gfbvucb>Mantente al día con las últimas novedades de la Asociación Sanjuanina de Nutrición</p> </div> <!-- Search Bar --> <div class="mb-8" data-astro-cid-5gfbvucb> <div class="max-w-md mx-auto" data-astro-cid-5gfbvucb> <input type="text" id="searchInput" placeholder="Buscar noticias..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" data-astro-cid-5gfbvucb> </div> </div> <!-- Featured News --> <div id="featuredNews" class="mb-12" data-astro-cid-5gfbvucb> <h2 class="text-2xl font-bold mb-6" style="color: #ff7b00;" data-astro-cid-5gfbvucb>Noticias Destacadas</h2> <div id="featuredContainer" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-5gfbvucb> <!-- Featured news will be loaded here --> </div> </div> <!-- All News --> <div data-astro-cid-5gfbvucb> <h2 class="text-2xl font-bold mb-6" style="color: #ff7b00;" data-astro-cid-5gfbvucb>Todas las Noticias</h2> <div id="newsContainer" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-5gfbvucb> <!-- News will be loaded here --> </div> </div> <!-- Loading State --> <div id="loadingState" class="text-center py-12" data-astro-cid-5gfbvucb> <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto" data-astro-cid-5gfbvucb></div> <p class="mt-4 text-gray-600" data-astro-cid-5gfbvucb>Cargando noticias...</p> </div> <!-- Error State --> <div id="errorState" class="text-center py-12 hidden" data-astro-cid-5gfbvucb> <div class="text-red-500 mb-4" data-astro-cid-5gfbvucb> <svg class="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-5gfbvucb> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 15.5c-.77.833.192 2.5 1.732 2.5z" data-astro-cid-5gfbvucb></path> </svg> </div> <p class="text-gray-600" data-astro-cid-5gfbvucb>Error al cargar las noticias</p> <button id="retryButton" class="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors" data-astro-cid-5gfbvucb>
Reintentar
</button> </div> <!-- Empty State --> <div id="emptyState" class="text-center py-12 hidden" data-astro-cid-5gfbvucb> <div class="text-gray-400 mb-4" data-astro-cid-5gfbvucb> <svg class="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-5gfbvucb> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 0a2 2 0 012 2v6a2 2 0 01-2 2h-2m-2-4h-2m2-6h-2m0 0h2m-2 0v2m0-2V7m0 0V4" data-astro-cid-5gfbvucb></path> </svg> </div> <p class="text-gray-600" data-astro-cid-5gfbvucb>No hay noticias disponibles</p> </div> <!-- Pagination --> <div id="pagination" class="mt-12 flex justify-center space-x-2 hidden" data-astro-cid-5gfbvucb> <button id="prevButton" class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" data-astro-cid-5gfbvucb>
Anterior
</button> <div id="pageNumbers" class="flex space-x-2" data-astro-cid-5gfbvucb> <!-- Page numbers will be generated here --> </div> <button id="nextButton" class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" data-astro-cid-5gfbvucb>
Siguiente
</button> </div> </div> ` })} ${renderScript($$result, "C:/laragon/www/Asociacion/Front_asn/src/pages/noticias.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/laragon/www/Asociacion/Front_asn/src/pages/noticias.astro", void 0);

const $$file = "C:/laragon/www/Asociacion/Front_asn/src/pages/noticias.astro";
const $$url = "/noticias";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Noticias,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
