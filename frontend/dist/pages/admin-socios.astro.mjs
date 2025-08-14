import { c as createComponent, r as renderComponent, a as renderScript, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_9gGvyqx6.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_MCrPTZ-u.mjs';
/* empty css                                        */
export { renderers } from '../renderers.mjs';

const $$AdminSocios = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Gesti\xF3n de Socios - Admin - Asociaci\xF3n Sanjuanina de Nutrici\xF3n", "data-astro-cid-dnbnelzg": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="socios-management-root" class="min-h-screen bg-gray-100" data-astro-cid-dnbnelzg></div> ` })} ${renderScript($$result, "C:/laragon/www/Asociacion/Front_asn/src/pages/admin-socios.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/laragon/www/Asociacion/Front_asn/src/pages/admin-socios.astro", void 0);

const $$file = "C:/laragon/www/Asociacion/Front_asn/src/pages/admin-socios.astro";
const $$url = "/admin-socios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AdminSocios,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
