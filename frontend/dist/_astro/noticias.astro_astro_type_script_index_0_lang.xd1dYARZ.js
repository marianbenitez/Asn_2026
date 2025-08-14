import{a as d}from"./api.5Q3dkJYY.js";class o{constructor(){this.currentPage=1,this.limit=9,this.search="",this.totalPages=1,this.isLoading=!1,this.init()}init(){this.bindEvents(),this.loadFeaturedNews(),this.loadNews()}bindEvents(){const e=document.getElementById("searchInput");let t;e?.addEventListener("input",n=>{clearTimeout(t),t=setTimeout(()=>{this.search=n.target.value,this.currentPage=1,this.loadNews()},500)}),document.getElementById("retryButton")?.addEventListener("click",()=>{this.loadNews()}),document.getElementById("prevButton")?.addEventListener("click",()=>{this.currentPage>1&&(this.currentPage--,this.loadNews())}),document.getElementById("nextButton")?.addEventListener("click",()=>{this.currentPage<this.totalPages&&(this.currentPage++,this.loadNews())})}showLoading(){document.getElementById("loadingState")?.classList.remove("hidden"),document.getElementById("errorState")?.classList.add("hidden"),document.getElementById("emptyState")?.classList.add("hidden"),document.getElementById("newsContainer").style.display="none",document.getElementById("pagination")?.classList.add("hidden")}hideLoading(){document.getElementById("loadingState")?.classList.add("hidden"),document.getElementById("newsContainer").style.display="grid"}showError(){document.getElementById("errorState")?.classList.remove("hidden"),document.getElementById("loadingState")?.classList.add("hidden"),document.getElementById("emptyState")?.classList.add("hidden"),document.getElementById("newsContainer").style.display="none",document.getElementById("pagination")?.classList.add("hidden")}showEmpty(){document.getElementById("emptyState")?.classList.remove("hidden"),document.getElementById("loadingState")?.classList.add("hidden"),document.getElementById("errorState")?.classList.add("hidden"),document.getElementById("newsContainer").style.display="none",document.getElementById("pagination")?.classList.add("hidden")}async loadFeaturedNews(){try{const e=await d.getFeaturedNews(3);e.success&&e.data.length>0?this.renderFeaturedNews(e.data):document.getElementById("featuredNews")?.classList.add("hidden")}catch(e){console.error("Error loading featured news:",e),document.getElementById("featuredNews")?.classList.add("hidden")}}async loadNews(){if(!this.isLoading){this.isLoading=!0,this.showLoading();try{const e=await d.getNews(this.currentPage,this.limit,this.search);e.success?e.data.length===0?this.showEmpty():(this.hideLoading(),this.renderNews(e.data),this.updatePagination(e.pagination)):this.showError()}catch(e){console.error("Error loading news:",e),this.showError()}finally{this.isLoading=!1}}}renderFeaturedNews(e){const t=document.getElementById("featuredContainer");t&&(t.innerHTML=e.map(n=>this.createNewsCard(n,!0)).join(""))}renderNews(e){const t=document.getElementById("newsContainer");t&&(t.innerHTML=e.map(n=>this.createNewsCard(n)).join(""))}createNewsCard(e,t=!1){const n=e.imagen?`http://localhost:8080/${e.imagen}`:"https://via.placeholder.com/400x200?text=Sin+Imagen";return`
        <article class="${t?"bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-orange-200":"bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"}">
          <div class="aspect-w-16 aspect-h-9 bg-gray-200">
            <img 
              src="${n}" 
              alt="${e.titulo}"
              class="w-full h-48 object-cover"
              onerror="this.src='https://via.placeholder.com/400x200?text=Sin+Imagen'"
            />
          </div>
          <div class="p-6">
            ${t?'<div class="inline-block px-2 py-1 bg-orange-100 text-orange-800 text-xs font-semibold rounded-full mb-2">Destacado</div>':""}
            <h3 class="text-lg font-bold mb-2 text-gray-900 line-clamp-2">${e.titulo}</h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-3">${e.descripcion_corta}</p>
            <div class="flex items-center justify-between">
              <span class="text-xs text-gray-500">
                ${new Date(e.fecha_publicacion).toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric"})}
              </span>
              <a 
                href="/noticia/${e.slug}" 
                class="text-orange-600 hover:text-orange-800 font-medium text-sm transition-colors"
              >
                Leer más →
              </a>
            </div>
          </div>
        </article>
      `}updatePagination(e){if(!e||e.pages<=1){document.getElementById("pagination")?.classList.add("hidden");return}this.totalPages=e.pages,document.getElementById("pagination")?.classList.remove("hidden");const t=document.getElementById("prevButton"),n=document.getElementById("nextButton");t&&(t.disabled=this.currentPage<=1),n&&(n.disabled=this.currentPage>=this.totalPages),this.renderPageNumbers()}renderPageNumbers(){const e=document.getElementById("pageNumbers");if(!e)return;const t=[],n=Math.max(1,this.currentPage-2),a=Math.min(this.totalPages,this.currentPage+2);for(let s=n;s<=a;s++){const i=s===this.currentPage;t.push(`
          <button 
            class="px-3 py-2 rounded-lg transition-colors ${i?"bg-orange-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}"
            onclick="newsPage.goToPage(${s})"
          >
            ${s}
          </button>
        `)}e.innerHTML=t.join("")}goToPage(e){this.currentPage=e,this.loadNews()}}document.addEventListener("DOMContentLoaded",()=>{window.newsPage=new o});
