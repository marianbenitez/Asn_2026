import { c as createComponent, e as createAstro, m as maybeRenderHead, d as addAttribute, b as renderTemplate, r as renderComponent, f as renderHead, g as renderSlot } from './astro/server_9gGvyqx6.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                                */
import 'clsx';

const $$Astro$2 = createAstro();
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Logo;
  const { class: className = "", size = "md", variant = "default" } = Astro2.props;
  const colorClass = variant === "white" ? "text-white" : "text-orange-500";
  const circleColor = variant === "white" ? "#ffffff" : "#ff7b00";
  const gradientClass = variant === "white" ? "bg-gradient-to-r from-white via-gray-200 to-gray-300" : "bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex items-center ${className}`, "class")}> <!-- Acrónimo ASN --> <div class="flex items-center"> <span${addAttribute(`font-bold ${colorClass}`, "class")}>AS</span> <span${addAttribute(`font-bold ${colorClass} relative`, "class")}>
N
<!-- Círculos estilizados para la N - versión mejorada --> <svg class="absolute -left-2 top-0 w-4 h-4" viewBox="0 0 16 16" fill="none"> <circle cx="2" cy="2" r="1"${addAttribute(circleColor, "fill")} opacity="0.8"></circle> <circle cx="3" cy="4" r="0.8"${addAttribute(circleColor, "fill")} opacity="0.6"></circle> <circle cx="4" cy="6" r="0.6"${addAttribute(circleColor, "fill")} opacity="0.7"></circle> <circle cx="5" cy="8" r="0.7"${addAttribute(circleColor, "fill")} opacity="0.5"></circle> <circle cx="6" cy="10" r="0.5"${addAttribute(circleColor, "fill")} opacity="0.8"></circle> <circle cx="7" cy="12" r="0.6"${addAttribute(circleColor, "fill")} opacity="0.6"></circle> </svg> </span> </div> <!-- Texto completo --> <div${addAttribute(`ml-4 ${colorClass} font-semibold`, "class")}> <div class="text-xs uppercase tracking-wide">ASOCIACIÓN</div> <div class="text-xs uppercase tracking-wide">SANJUANINA</div> <div class="text-xs"> <span class="lowercase">de</span> <span class="uppercase"> NUTRICIÓN</span> </div> </div> <!-- Barra de gradiente --> <div${addAttribute(`ml-4 w-16 h-1 ${gradientClass} rounded-full`, "class")}></div> </div>`;
}, "C:/laragon/www/Asociacion/Front_asn/src/components/Logo.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="bg-white shadow-md"> <div class="container mx-auto px-4 py-6 flex justify-between items-center"> <a href="/" class="flex items-center"> ${renderComponent($$result, "Logo", $$Logo, { "size": "sm" })} </a> <nav class="flex space-x-1"> <a href="/" class="px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors" style="color: #ff7b00;">Home</a> <a href="/conocenos" class="px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors" style="color: #ff7b00;">Conocenos</a> <a href="/noticias" class="px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors" style="color: #ff7b00;">Noticias</a> <a href="/asociate" class="px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors" style="color: #ff7b00;">Asociate</a> <a href="/pago-cuota" class="px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors" style="color: #ff7b00;">Pago de la Cuota</a> <a href="/honorarios" class="px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors" style="color: #ff7b00;">Honorarios Mínimos</a> <a href="/covid-19" class="px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors" style="color: #ff7b00;">Covid-19</a> <a href="/contacto" class="px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors" style="color: #ff7b00;">Contacto</a> </nav> </div> </header>`;
}, "C:/laragon/www/Asociacion/Front_asn/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="text-white py-8 mt-8" style="background-color: #ff7b00;"> <div class="container mx-auto px-4 text-center"> <p>&copy; 2025 Asociación Sanjuanina de Nutrición. Todos los derechos reservados.</p> <p>Desarrollado con Astro y React</p> </div> </footer>`;
}, "C:/laragon/www/Asociacion/Front_asn/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title>${renderHead()}</head> <body class="bg-gray-100 text-gray-800"> ${renderComponent($$result, "Header", $$Header, {})} <main class="container mx-auto px-4 py-8"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} <!-- Botón de WhatsApp flotante --> <a href="https://api.whatsapp.com/send/?phone=5492644557387&text=Hola+quisiera+que+me+den+mas+informaci%C3%B3n&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" class="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 group" aria-label="Contactar por WhatsApp"> <!-- Icono de WhatsApp --> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"></path> </svg> <!-- Tooltip --> <div class="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
¡Contáctanos por WhatsApp!
<div class="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div> </div> </a> </body></html>`;
}, "C:/laragon/www/Asociacion/Front_asn/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$Logo as a };
