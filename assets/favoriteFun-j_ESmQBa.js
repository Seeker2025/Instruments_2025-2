(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u={KEY_FAVORITE:"favorite",KEY_BASKET:"basket",KEY_INSTRUMENT:"instruments"},g="/Instruments_2025-2/assets/no_img-LHHwQ-Ik.png";let m="Add to favorite",S="Remove from",b="Add to basket",v="Remove from";function y(s,o){let t;s.length?(t=s.map(({id:i,img:e,name:r,presentFuv:n,presentBas:l})=>`
                    <li data-id=${i} class="card js-card">
                    <img src="${e}" alt="${r}" width="300">
                    <h2>${r}</h2>
                    
                    <span>id${i}</span>
                    <p class="present"><b>Favorite</b><span>${n}</span></p>
                    <p class="present"><b>Basket</b><span>${l}</span></p>
                    
                    <p><a href="#" class="info js-info">More Information</a></p>
                    <div>
        <button class="js-favorite" type="button">${n?S:m}</button>
        <button class="js-basket" type="button">${l?v:b}</button>
                    </div>
                    </li>
                    `).join(""),o.innerHTML=t):(t=`<li class="js-card">
                    <img src=${g} alt="404" width="300">
                    </li>`,o.innerHTML=t)}function p(s,o){const t=Number(s.closest(".js-card").dataset.id);return o.find(({id:i})=>i===t)}const{KEY_FAVORITE:d,KEY_BASKET:f}=u;let a=JSON.parse(localStorage.getItem(d))??[],c=JSON.parse(localStorage.getItem(f))??[];function h(s,o){console.log(o);const t=p(s,o);console.log(t),a.some(({id:e})=>e===t.id)?(a=a.filter(e=>e.id!==t.id),localStorage.setItem(d,JSON.stringify(a)),o=o.map(e=>{e.id===t.id&&(e.presentFuv=null)})):(t.presentFuv="present",console.log(t),console.log(o),a.push(t),localStorage.setItem(d,JSON.stringify(a)),o=o.map(e=>{e.id===t.id&&(e.presentFuv="present")}))}function O(s,o){const t=p(s,o);c.some(({id:e})=>e===t.id)?(c=c.filter(e=>e.id!==t.id),localStorage.setItem(f,JSON.stringify(c)),o=o.map(e=>{e.id===t.id&&(e.presentBas=null)})):(t.presentBas="present",c.push(t),localStorage.setItem(f,JSON.stringify(c)),o=o.map(e=>{e.id===t.id&&(e.presentBas="present")}))}export{y as a,O as b,u as c,p as f,h as t};
//# sourceMappingURL=favoriteFun-j_ESmQBa.js.map
