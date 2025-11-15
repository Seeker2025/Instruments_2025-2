(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const g={KEY_FAVORITE:"favorite",KEY_BASKET:"basket",KEY_INSTRUMENT:"instruments"},m="/Instruments_2025-2/assets/no_img-LHHwQ-Ik.png";let S="Add to favorite",y="Remove from",b="Add to basket",N="Remove from";function O(s,t){let o;s.length?(o=s.map(({id:i,img:e,name:r,presentFuv:a,presentBas:p})=>`
                    <li data-id=${i} class="card js-card">
                    <img src="${e}" alt="${r}" width="300">
                    <h2>${r}</h2>
                    
                    <span>id${i}</span>
                    <p class="present"><b>Favorite</b><span>${a}</span></p>
                    <p class="present"><b>Basket</b><span>${p}</span></p>
                    
                    <p><a href="#" class="info js-info">More Information</a></p>
                    <div>
        <button class="js-favorite" type="button">${a?y:S}</button>
        <button class="js-basket" type="button">${p?N:b}</button>
                    </div>
                    </li>
                    `).join(""),t.innerHTML=o):(o=`<li class="js-card">
                    <img src=${m} alt="404" width="300">
                    </li>`,t.innerHTML=o)}function u(s,t){const o=Number(s.closest(".js-card").dataset.id);return t.find(({id:i})=>i===o)}const{KEY_FAVORITE:f,KEY_BASKET:l,KEY_INSTRUMENT:d}=g;let n=JSON.parse(localStorage.getItem(f))??[],c=JSON.parse(localStorage.getItem(l))??[];function v(s,t){const o=u(s,t);n.some(({id:e})=>e===o.id)?(n=n.filter(e=>e.id!==o.id),t.map(e=>{e.id===o.id&&(e.presentFuv=null)}),localStorage.setItem(d,JSON.stringify(t)),localStorage.setItem(f,JSON.stringify(n))):(n.push(o),t.map(e=>{e.id===o.id&&(e.presentFuv="present")}),localStorage.setItem(d,JSON.stringify(t)),localStorage.setItem(f,JSON.stringify(n)))}function h(s,t){const o=u(s,t);c.some(({id:e})=>e===o.id)?(c=c.filter(e=>e.id!==o.id),t.map(e=>{e.id===o.id&&(e.presentBas=null)}),localStorage.setItem(d,JSON.stringify(t)),localStorage.setItem(l,JSON.stringify(c))):(c.push(o),t.map(e=>{e.id===o.id&&(e.presentBas="present")}),localStorage.setItem(d,JSON.stringify(t)),localStorage.setItem(l,JSON.stringify(c)))}export{O as a,h as b,g as c,u as f,v as t};
//# sourceMappingURL=favoriteFun-DEnG9lT1.js.map
