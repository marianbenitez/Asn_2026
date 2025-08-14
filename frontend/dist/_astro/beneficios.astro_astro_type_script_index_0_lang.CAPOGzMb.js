const u={convenios:[{nombre:"ZETA PAPELERIA Y LIBRERÍA",contacto:"2646723798",descuento:"10 % DE DESCUENTO",direccion:"LIBERTADOR 2940 OESTE - RIVADAVIA",redes_sociales:null},{nombre:"VERDE PISTACHO TIENDA NATURAL",contacto:"2644456868",descuento:"10 % DE DESCUENTO",direccion:"ESTEBAN ECHEVERRIA 39 SUR - RIVADAVIA",redes_sociales:null},{nombre:"VICTORIA IGUALADA REPOSTERIA CATERING Y CAFETERIA",contacto:"2645803177",descuento:"10 % DE DESCUENTO",direccion:"AV LIBERTADOR 1730 OESTE - CAPITAL",redes_sociales:null},{nombre:"UN TOQUE DE CANELA ALMACEN NATURAL",contacto:"2645426813",descuento:"10 % DE DESCUENTO",direccion:"JOSE MARIA PAZ 2149 ESTE - SANTA LUCIA",redes_sociales:null},{nombre:"NOVA PELUQUEROS",contacto:"2645402358",descuento:"15 % DE DESCUENTO",direccion:"BRASIL 2552 OESTE - CAPITAL",redes_sociales:null},{nombre:"HIELO AZUL ALMACEN DE BEBIDAS",contacto:"2645167216",descuento:"20% DE DESCUENTO EN VINOS",direccion:"ESTEBAN ECHEVERRIA 19 SUR - RIVADAVIA",redes_sociales:null},{nombre:"WABI SABI ESTETICA Y NUTRICION",contacto:"2644001084",descuento:"15% DE DESCUENTO",direccion:"PAULA SARMIENTO 25 SUR - CAPITAL",redes_sociales:null},{nombre:"GEMINIS BELLEZA Y COSMETICA",contacto:"2645288373",descuento:"10% DE DESCUENTO",direccion:"GRANADEROS 912 NORTE - RIVADAVIA",redes_sociales:null},{nombre:"CONTIGO NAIF TIENDA DE REGALOS",contacto:"1559513366",descuento:"15% DE DESCUENTO",direccion:"HERMOGENES RUIZ 994 SUR - CAPITAL",redes_sociales:null},{nombre:"LOCAS SUELTAS MARROQUINERIA",contacto:"2644115368",descuento:"20% DE DESCUENTO EN EFECTIVO LOS MIERCOLES Y 10% DE DESCUENTO CON TARJETA",direccion:"HERMOGENES RUIZ ESQUINA SANTA FE - CAPITAL",redes_sociales:"@SIEMPREROPAORIGINAL"},{nombre:"SIEMPRE ROPA",contacto:"2644419521",descuento:"10% DE DESCUENTO DE LUNES A JUEVES Y 15% DE DESCUENTO VIERNES",direccion:"DEL BONO SUR 678 - CAPITAL",redes_sociales:"@LOCASSUELTASTREND"},{nombre:"ATHLOS GIMNASIO",contacto:"2645556218",descuento:"15% DE DESCUENTO ACUMULABLE",direccion:"LAS PALMAS 124 NORTE - RIVADAVIA",redes_sociales:"@ATHLOSCLUB"},{nombre:"HOD FITNESS CLUB",contacto:"2645260814",descuento:"10% DE DESCUENTO",direccion:"EL ALMENDRO: DR. ORLANDO MARINO 6503 (O). RIVADAVIA",redes_sociales:"@HODFITNESSCLUB"},{nombre:"DIANA SHOWROOM",contacto:"2644049441",descuento:"15% DE DESCUENTO",direccion:"REPUBLICA DEL LIBANO 2856 OESTE - RAWSON",redes_sociales:"@DIANASHOWROOM15"},{nombre:"INTI HUASI",contacto:"2644447881",descuento:"10% DE DESCUENTO",direccion:"25 DE MAYO Y EEUU. CAPITAL",redes_sociales:"@INTIHUASI.PRODUCTOSNATURALES"},{nombre:"RECREARTE",contacto:"@RECREARTESJ",descuento:"El descuento al que accederá cada HIJO INGRESANTE será del 10%, (inscripción y materiales) bonificará de enero a mayo en un 30%. De junio a septiembre será Bonificada por ÚNICA VEZ el 100% (matrícula y 30% de materiales). De octubre a diciembre el 100% (matrícula y materiales). Para acceder al descuento los HIJOS que ya pertenecen a los jardines, deberán llevar UN referido a algunos de los Jardines mencionados. La institución ya posee un descuento de hermanos que es equivalente al 15 %; en este caso NO será acumulable al 10% de descuento del presente convenio.",direccion:"Recrearte Central: Laprida 126 (O) antes de Entre Rios. La Casona De Recrearte: San Luis y Catamarca. Recrearte Rufrano: Lateral de Circunvalación 500 (S). Recrearte Libertador: Libertador 1345 (O). Recrearte Santa Lucía: Pellegrini 645 (S). Recrearte La Cabaña: Boggian 3954 (O), Bº La Cabaña, Rivadavia. El Nido Montesosori: Saavedra 115 (N), Rivadavia; Santa Fé 378 (E). Capital. El Pato Jardín Maternal: Santo Domingo 75 (N), Rivadavia. Recrearte Pedro Echagüe: Pedro Echagüe esquina Aberastain, Capital.",redes_sociales:null}]};document.addEventListener("DOMContentLoaded",function(){const a=document.getElementById("beneficioModal"),s=document.getElementById("modalTitle"),i=document.getElementById("modalContent"),d=document.getElementById("closeModal"),r=document.getElementById("contactarBtn"),l=document.getElementById("direccionBtn"),E=document.querySelectorAll(".brand-card");let o=null;E.forEach((e,n)=>{e.addEventListener("click",()=>{o=u.convenios[n],A(o)})}),d.addEventListener("click",c),a.addEventListener("click",e=>{e.target===a&&c()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&c()}),r.addEventListener("click",()=>{o&&(o.contacto.startsWith("@")?window.open(`https://instagram.com/${o.contacto.substring(1)}`,"_blank"):window.open(`tel:${o.contacto}`,"_blank"))}),l.addEventListener("click",()=>{if(o){const e=encodeURIComponent(o.direccion+", San Juan, Argentina");window.open(`https://www.google.com/maps/search/?api=1&query=${e}`,"_blank")}});function A(e){s.textContent=e.nombre;let n="";e.redes_sociales&&(n=`
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-semibold text-blue-800 mb-2">📱 Redes Sociales</h4>
              <a href="https://instagram.com/${e.redes_sociales.substring(1)}" 
                 target="_blank" 
                 class="text-blue-600 hover:text-blue-800 font-medium">
                ${e.redes_sociales}
              </a>
            </div>
          `),i.innerHTML=`
          <div class="space-y-4">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-semibold text-orange-800 mb-2">🎯 Beneficio Exclusivo</h4>
              <p class="text-orange-700">${e.descuento}</p>
            </div>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold text-gray-800 mb-2">📍 Ubicación</h4>
              <p class="text-gray-700">${e.direccion}</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-semibold text-green-800 mb-2">📞 Contacto</h4>
              <p class="text-green-700">${e.contacto}</p>
            </div>
            
            ${n}
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-semibold text-purple-800 mb-2">ℹ️ Información Importante</h4>
              <ul class="text-purple-700 text-sm space-y-1">
                <li>• Presenta tu credencial ASN para acceder al descuento</li>
                <li>• El beneficio es exclusivo para asociadas activas</li>
                <li>• Consulta disponibilidad antes de visitar</li>
                <li>• Algunos descuentos pueden tener restricciones</li>
              </ul>
            </div>
          </div>
        `,a.classList.remove("hidden"),document.body.classList.add("modal-open")}function c(){a.classList.add("hidden"),document.body.classList.remove("modal-open"),o=null}const t=document.querySelector(".brands-container");if(t){let e=0;const n=300;setInterval(()=>{e+=n,e>=t.scrollWidth-t.clientWidth&&(e=0),t.scrollTo({left:e,behavior:"smooth"})},4e3)}});
