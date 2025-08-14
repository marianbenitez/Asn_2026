import{a as i}from"./api.5Q3dkJYY.js";class r{constructor(){this.slug=null,this.newsData=null,this.init()}init(){this.slug=this.getSlugFromURL(),this.slug?(this.loadNews(),this.bindShareEvents()):this.showError()}getSlugFromURL(){const t=window.location.pathname.split("/");return t[t.length-1]}showLoading(){document.getElementById("loadingState")?.classList.remove("hidden"),document.getElementById("errorState")?.classList.add("hidden"),document.getElementById("newsContent")?.classList.add("hidden")}hideLoading(){document.getElementById("loadingState")?.classList.add("hidden"),document.getElementById("newsContent")?.classList.remove("hidden")}showError(){document.getElementById("errorState")?.classList.remove("hidden"),document.getElementById("loadingState")?.classList.add("hidden"),document.getElementById("newsContent")?.classList.add("hidden")}async loadNews(){this.showLoading();try{const e=await i.getNewsDetail(this.slug);e.success&&e.data?(this.newsData=e.data,this.renderNews(e.data),this.loadRelatedNews(),this.hideLoading()):this.showError()}catch(e){console.error("Error loading news:",e),this.showError()}}renderNews(e){document.title=`${e.titulo} - Asociación Sanjuanina de Nutrición`;const t=document.getElementById("breadcrumbTitle");t&&(t.textContent=e.titulo.length>50?e.titulo.substring(0,50)+"...":e.titulo),document.getElementById("newsTitle").textContent=e.titulo,document.getElementById("newsDescription").textContent=e.descripcion_corta;const n=document.getElementById("newsDate");if(n){const o=new Date(e.fecha_publicacion);n.innerHTML=`
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          ${o.toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric"})}
        `}if(e.destacado&&document.getElementById("featuredBadge")?.classList.remove("hidden"),e.imagen){const o=document.getElementById("newsImageContainer"),a=document.getElementById("newsImage");o&&a&&(a.src=`http://localhost:8080/${e.imagen}`,a.alt=e.titulo,o.classList.remove("hidden"))}const s=document.getElementById("newsContentBody");s&&(s.innerHTML=e.contenido.replace(/\n/g,"<br>"))}async loadRelatedNews(){try{const e=await i.getRecentNews(4);if(e.success&&e.data.length>0){const t=e.data.filter(n=>n.slug!==this.slug).slice(0,3);t.length>0&&(this.renderRelatedNews(t),document.getElementById("relatedNews")?.classList.remove("hidden"))}}catch(e){console.error("Error loading related news:",e)}}renderRelatedNews(e){const t=document.getElementById("relatedContainer");t&&(t.innerHTML=e.map(n=>this.createRelatedNewsCard(n)).join(""))}createRelatedNewsCard(e){return`
        <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
          <div class="aspect-w-16 aspect-h-9 bg-gray-200">
            <img 
              src="${e.imagen?`http://localhost:8080/${e.imagen}`:"https://via.placeholder.com/400x200?text=Sin+Imagen"}" 
              alt="${e.titulo}"
              class="w-full h-32 object-cover"
              onerror="this.src='https://via.placeholder.com/400x200?text=Sin+Imagen'"
            />
          </div>
          <div class="p-4">
            <h3 class="text-sm font-semibold mb-2 text-gray-900 line-clamp-2">${e.titulo}</h3>
            <p class="text-gray-600 text-xs mb-3 line-clamp-2">${e.descripcion_corta}</p>
            <div class="flex items-center justify-between">
              <span class="text-xs text-gray-500">
                ${new Date(e.fecha_publicacion).toLocaleDateString("es-ES")}
              </span>
              <a 
                href="/noticia/${e.slug}" 
                class="text-orange-600 hover:text-orange-800 font-medium text-xs transition-colors"
              >
                Leer más →
              </a>
            </div>
          </div>
        </article>
      `}bindShareEvents(){document.getElementById("shareWhatsApp")?.addEventListener("click",()=>{if(this.newsData){const e=window.location.href,t=`${this.newsData.titulo} - ${this.newsData.descripcion_corta}`;window.open(`https://wa.me/?text=${encodeURIComponent(t+" "+e)}`,"_blank")}}),document.getElementById("shareTwitter")?.addEventListener("click",()=>{if(this.newsData){const e=window.location.href,t=this.newsData.titulo;window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(t)}&url=${encodeURIComponent(e)}`,"_blank")}}),document.getElementById("shareFacebook")?.addEventListener("click",()=>{if(this.newsData){const e=window.location.href;window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(e)}`,"_blank")}}),document.getElementById("copyLink")?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(window.location.href);const e=document.getElementById("copyLink"),t=e.innerHTML;e.innerHTML=`
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            ¡Copiado!
          `,e.classList.remove("bg-gray-600","hover:bg-gray-700"),e.classList.add("bg-green-600","hover:bg-green-700"),setTimeout(()=>{e.innerHTML=t,e.classList.remove("bg-green-600","hover:bg-green-700"),e.classList.add("bg-gray-600","hover:bg-gray-700")},2e3)}catch(e){console.error("Error copying to clipboard:",e)}})}}document.addEventListener("DOMContentLoaded",()=>{new r});
