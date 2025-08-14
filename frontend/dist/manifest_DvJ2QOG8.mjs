import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { N as NOOP_MIDDLEWARE_HEADER, h as decodeKey } from './chunks/astro/server_9gGvyqx6.mjs';
import 'cookie';
import 'es-module-lexer';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/laragon/www/Asociacion/Front_asn/","cacheDir":"file:///C:/laragon/www/Asociacion/Front_asn/node_modules/.astro/","outDir":"file:///C:/laragon/www/Asociacion/Front_asn/dist/","srcDir":"file:///C:/laragon/www/Asociacion/Front_asn/src/","publicDir":"file:///C:/laragon/www/Asociacion/Front_asn/public/","buildClientDir":"file:///C:/laragon/www/Asociacion/Front_asn/dist/client/","buildServerDir":"file:///C:/laragon/www/Asociacion/Front_asn/dist/server/","adapterName":"","routes":[{"file":"file:///C:/laragon/www/Asociacion/Front_asn/dist/admin/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/admin","isIndex":false,"type":"page","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin.astro","pathname":"/admin","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/laragon/www/Asociacion/Front_asn/dist/admin-socios/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/admin-socios","isIndex":false,"type":"page","pattern":"^\\/admin-socios\\/?$","segments":[[{"content":"admin-socios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin-socios.astro","pathname":"/admin-socios","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/laragon/www/Asociacion/Front_asn/dist/asociate/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/asociate","isIndex":false,"type":"page","pattern":"^\\/asociate\\/?$","segments":[[{"content":"asociate","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/asociate.astro","pathname":"/asociate","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/laragon/www/Asociacion/Front_asn/dist/beneficios/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/beneficios","isIndex":false,"type":"page","pattern":"^\\/beneficios\\/?$","segments":[[{"content":"beneficios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/beneficios.astro","pathname":"/beneficios","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/laragon/www/Asociacion/Front_asn/dist/conocenos/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/conocenos","isIndex":false,"type":"page","pattern":"^\\/conocenos\\/?$","segments":[[{"content":"conocenos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/conocenos.astro","pathname":"/conocenos","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/laragon/www/Asociacion/Front_asn/dist/contacto/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/laragon/www/Asociacion/Front_asn/dist/covid-19/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/covid-19","isIndex":false,"type":"page","pattern":"^\\/covid-19\\/?$","segments":[[{"content":"covid-19","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/covid-19.astro","pathname":"/covid-19","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/laragon/www/Asociacion/Front_asn/dist/dashboard/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/dashboard","isIndex":false,"type":"page","pattern":"^\\/dashboard\\/?$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dashboard.astro","pathname":"/dashboard","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/laragon/www/Asociacion/Front_asn/dist/honorarios/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/honorarios","isIndex":false,"type":"page","pattern":"^\\/honorarios\\/?$","segments":[[{"content":"honorarios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/honorarios.astro","pathname":"/honorarios","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/laragon/www/Asociacion/Front_asn/dist/login/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/login","isIndex":false,"type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/laragon/www/Asociacion/Front_asn/dist/noticias/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/noticias","isIndex":false,"type":"page","pattern":"^\\/noticias\\/?$","segments":[[{"content":"noticias","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/noticias.astro","pathname":"/noticias","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/laragon/www/Asociacion/Front_asn/dist/pago-cuota/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/pago-cuota","isIndex":false,"type":"page","pattern":"^\\/pago-cuota\\/?$","segments":[[{"content":"pago-cuota","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pago-cuota.astro","pathname":"/pago-cuota","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/laragon/www/Asociacion/Front_asn/dist/test/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/test","isIndex":false,"type":"page","pattern":"^\\/test\\/?$","segments":[[{"content":"test","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/test.astro","pathname":"/test","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/laragon/www/Asociacion/Front_asn/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/laragon/www/Asociacion/Front_asn/src/pages/test.astro",{"propagation":"none","containsHead":true}],["C:/laragon/www/Asociacion/Front_asn/src/pages/admin-socios.astro",{"propagation":"none","containsHead":true}],["C:/laragon/www/Asociacion/Front_asn/src/pages/admin.astro",{"propagation":"none","containsHead":true}],["C:/laragon/www/Asociacion/Front_asn/src/pages/asociate.astro",{"propagation":"none","containsHead":true}],["C:/laragon/www/Asociacion/Front_asn/src/pages/beneficios.astro",{"propagation":"none","containsHead":true}],["C:/laragon/www/Asociacion/Front_asn/src/pages/conocenos.astro",{"propagation":"none","containsHead":true}],["C:/laragon/www/Asociacion/Front_asn/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["C:/laragon/www/Asociacion/Front_asn/src/pages/covid-19.astro",{"propagation":"none","containsHead":true}],["C:/laragon/www/Asociacion/Front_asn/src/pages/dashboard.astro",{"propagation":"none","containsHead":true}],["C:/laragon/www/Asociacion/Front_asn/src/pages/honorarios.astro",{"propagation":"none","containsHead":true}],["C:/laragon/www/Asociacion/Front_asn/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/laragon/www/Asociacion/Front_asn/src/pages/login.astro",{"propagation":"none","containsHead":true}],["C:/laragon/www/Asociacion/Front_asn/src/pages/noticia/[slug].astro",{"propagation":"none","containsHead":true}],["C:/laragon/www/Asociacion/Front_asn/src/pages/noticias.astro",{"propagation":"none","containsHead":true}],["C:/laragon/www/Asociacion/Front_asn/src/pages/pago-cuota.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/admin@_@astro":"pages/admin.astro.mjs","\u0000@astro-page:src/pages/admin-socios@_@astro":"pages/admin-socios.astro.mjs","\u0000@astro-page:src/pages/asociate@_@astro":"pages/asociate.astro.mjs","\u0000@astro-page:src/pages/beneficios@_@astro":"pages/beneficios.astro.mjs","\u0000@astro-page:src/pages/conocenos@_@astro":"pages/conocenos.astro.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"pages/contacto.astro.mjs","\u0000@astro-page:src/pages/covid-19@_@astro":"pages/covid-19.astro.mjs","\u0000@astro-page:src/pages/dashboard@_@astro":"pages/dashboard.astro.mjs","\u0000@astro-page:src/pages/honorarios@_@astro":"pages/honorarios.astro.mjs","\u0000@astro-page:src/pages/login@_@astro":"pages/login.astro.mjs","\u0000@astro-page:src/pages/noticia/[slug]@_@astro":"pages/noticia/_slug_.astro.mjs","\u0000@astro-page:src/pages/noticias@_@astro":"pages/noticias.astro.mjs","\u0000@astro-page:src/pages/pago-cuota@_@astro":"pages/pago-cuota.astro.mjs","\u0000@astro-page:src/pages/test@_@astro":"pages/test.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_DvJ2QOG8.mjs","C:/laragon/www/Asociacion/Front_asn/src/pages/test.astro?astro&type=script&index=0&lang.ts":"_astro/test.astro_astro_type_script_index_0_lang.CxO_JRN6.js","C:/laragon/www/Asociacion/Front_asn/src/components/Timeline.tsx":"_astro/Timeline.DbKONC-B.js","C:/laragon/www/Asociacion/Front_asn/src/components/AsociacionInfo":"_astro/AsociacionInfo.BudPHRG-.js","C:/laragon/www/Asociacion/Front_asn/src/components/EstadisticasAsociacion":"_astro/EstadisticasAsociacion.BpbffESW.js","C:/laragon/www/Asociacion/Front_asn/src/components/JuntaDirectiva":"_astro/JuntaDirectiva.Cm17AhC-.js","C:/laragon/www/Asociacion/Front_asn/src/components/EventosFuturos":"_astro/EventosFuturos.DpArIMCW.js","C:/laragon/www/Asociacion/Front_asn/src/components/ContactoAsociacion":"_astro/ContactoAsociacion.BiX21i8G.js","C:/laragon/www/Asociacion/Front_asn/src/components/OspProfesionales.tsx":"_astro/OspProfesionales.Tk50oRwn.js","C:/laragon/www/Asociacion/Front_asn/src/pages/admin.astro?astro&type=script&index=0&lang.ts":"_astro/admin.astro_astro_type_script_index_0_lang.DpgK-nnU.js","C:/laragon/www/Asociacion/Front_asn/src/pages/beneficios.astro?astro&type=script&index=0&lang.ts":"_astro/beneficios.astro_astro_type_script_index_0_lang.CAPOGzMb.js","C:/laragon/www/Asociacion/Front_asn/src/pages/noticia/[slug].astro?astro&type=script&index=0&lang.ts":"_astro/_slug_.astro_astro_type_script_index_0_lang.BqMNGuQR.js","C:/laragon/www/Asociacion/Front_asn/src/pages/noticias.astro?astro&type=script&index=0&lang.ts":"_astro/noticias.astro_astro_type_script_index_0_lang.xd1dYARZ.js","C:/laragon/www/Asociacion/Front_asn/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.C5JNVeKO.js","C:/laragon/www/Asociacion/Front_asn/src/components/LoginForm.tsx":"_astro/LoginForm.BvVdL17g.js","C:/laragon/www/Asociacion/Front_asn/src/components/HonorariosMinimos.tsx":"_astro/HonorariosMinimos.q38AALUE.js","C:/laragon/www/Asociacion/Front_asn/src/pages/admin-socios.astro?astro&type=script&index=0&lang.ts":"_astro/admin-socios.astro_astro_type_script_index_0_lang.B1LDmr08.js","@astrojs/react/client.js":"_astro/client.BPIbHqJh.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/laragon/www/Asociacion/Front_asn/src/pages/index.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const e=document.querySelectorAll(\".slide\"),n=document.querySelectorAll(\".indicator\"),i=document.querySelector(\".prev\"),s=document.querySelector(\".next\");let t=0;function c(l){e.forEach((o,r)=>{o.classList.toggle(\"active\",r===l)}),n.forEach((o,r)=>{o.classList.toggle(\"active\",r===l)})}function d(){t=(t+1)%e.length,c(t)}function a(){t=(t-1+e.length)%e.length,c(t)}s?.addEventListener(\"click\",d),i?.addEventListener(\"click\",a),n.forEach((l,o)=>{l.addEventListener(\"click\",()=>{t=o,c(t)})}),setInterval(d,5e3),c(0)});document.addEventListener(\"DOMContentLoaded\",function(){const e=document.querySelector(\".brands-container\");if(e){let n=0;const i=200;setInterval(()=>{n+=i,n>=e.scrollWidth-e.clientWidth&&(n=0),e.scrollTo({left:n,behavior:\"smooth\"})},4e3)}});"]],"assets":["/file:///C:/laragon/www/Asociacion/Front_asn/dist/admin/index.html","/file:///C:/laragon/www/Asociacion/Front_asn/dist/admin-socios/index.html","/file:///C:/laragon/www/Asociacion/Front_asn/dist/asociate/index.html","/file:///C:/laragon/www/Asociacion/Front_asn/dist/beneficios/index.html","/file:///C:/laragon/www/Asociacion/Front_asn/dist/conocenos/index.html","/file:///C:/laragon/www/Asociacion/Front_asn/dist/contacto/index.html","/file:///C:/laragon/www/Asociacion/Front_asn/dist/covid-19/index.html","/file:///C:/laragon/www/Asociacion/Front_asn/dist/dashboard/index.html","/file:///C:/laragon/www/Asociacion/Front_asn/dist/honorarios/index.html","/file:///C:/laragon/www/Asociacion/Front_asn/dist/login/index.html","/file:///C:/laragon/www/Asociacion/Front_asn/dist/noticias/index.html","/file:///C:/laragon/www/Asociacion/Front_asn/dist/pago-cuota/index.html","/file:///C:/laragon/www/Asociacion/Front_asn/dist/test/index.html","/file:///C:/laragon/www/Asociacion/Front_asn/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"bh67V5KG1WBNOuGYvYE5nVycfL/8p7Ldny2pd76Pkl8="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
