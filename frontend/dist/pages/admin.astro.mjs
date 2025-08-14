import { c as createComponent, r as renderComponent, a as renderScript, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_9gGvyqx6.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_MCrPTZ-u.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Admin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Admin Dashboard - Asociaci\xF3n Sanjuanina de Nutrici\xF3n", "data-astro-cid-2zp6q64z": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="admin-dashboard-root" class="min-h-screen bg-gray-100" data-astro-cid-2zp6q64z></div> ` })} ${renderScript($$result, "C:/laragon/www/Asociacion/Front_asn/src/pages/admin.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/laragon/www/Asociacion/Front_asn/src/pages/admin.astro", void 0);

const $$file = "C:/laragon/www/Asociacion/Front_asn/src/pages/admin.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Admin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
