import{b as I}from"./vendor-DaP2veRQ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const k={KEY_FAVORITE:"favorite",KEY_BASKET:"basket",KEY_INSTRUMENT:"instruments"},K="/Instruments_2025-2/assets/no_img-LHHwQ-Ik.png";let N="Add to favorite",$="Remove from",j="Add to basket",M="Remove from";function S(n,o){let t;n.length?(t=n.map(({id:a,img:e,name:s,presentFuv:i,presentBas:u})=>`
                    <li data-id=${a} class="card js-card">
                    <img src="${e}" alt="${s}" width="300">
                    <h2>${s}</h2>
                    
                    <span>id${a}</span>
                    <p class="present"><b>Favorite</b><span>${i}</span></p>
                    <p class="present"><b>Basket</b><span>${u}</span></p>
                    
                    <p><a href="#" class="info js-info">More Information (Modal)</a></p>
                    <div>
        <button class="js-favorite" type="button">${i?$:N}</button>
        <button class="js-basket" type="button">${u?M:j}</button>
                    </div>
                    </li>
                    `).join(""),o.innerHTML=t):(t=`<li class="js-card">
                    <img src=${K} alt="404" width="300">
                    </li>`,o.innerHTML=t)}function _(n){n.code==="Escape"&&this.close()}const w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==";function B(n,o){const t=Number(n.closest(".js-card").dataset.id);return o.find(({id:a})=>a===t)}const{KEY_FAVORITE:m,KEY_BASKET:A}=k;let c=JSON.parse(localStorage.getItem(m))??[],l=JSON.parse(localStorage.getItem(A))??[];function g(n,o){console.log(o);const t=B(n,o);console.log(t),c.some(({id:e})=>e===t.id)?(c=c.filter(e=>e.id!==t.id),localStorage.setItem(m,JSON.stringify(c)),o=o.map(e=>{e.id===t.id&&(e.presentFuv=null)})):(t.presentFuv="present",console.log(t),console.log(o),c.push(t),localStorage.setItem(m,JSON.stringify(c)),o=o.map(e=>{e.id===t.id&&(e.presentFuv="present")}))}function p(n,o){const t=B(n,o);l.some(({id:e})=>e===t.id)?(l=l.filter(e=>e.id!==t.id),localStorage.setItem(A,JSON.stringify(l)),o=o.map(e=>{e.id===t.id&&(e.presentBas=null)})):(t.presentBas="present",l.push(t),localStorage.setItem(A,JSON.stringify(l)),o=o.map(e=>{e.id===t.id&&(e.presentBas="present")}))}const{KEY_FAVORITE:J,KEY_BASKET:Y,KEY_INSTRUMENT:F}=k,d=JSON.parse(localStorage.getItem(F)),q=document.querySelector(".favorite_list"),C=document.querySelector(".checkout_list"),E=document.getElementById("index"),h=document.getElementById("favorite"),y=document.getElementById("basket");function H({img:n,name:o,price:t,description:a,id:e}){const s=I.create(`
	    <div class="modal js-card" data-id=${e}>
            <div class="cross">
                 <img src=${w} alt="close">
            </div>
            <img src="${n}" alt="${o}" width="300">
            <h2>${o} <span>id${e}</span></h2>
            <h3>${t}point</h3>
            <p>${a}</p>
              <ul class="container_for_button">
                <li> 
                  <button class="button js-favorite button_fav" type="button">
                      <span class="yes">Add to favorite</span>
                      <span class="no vis">Remove from favorite</span>
                  </button>
                </li>
                <li> 
                  <button class="button js-basket button_fav" type="button">
                      <span class="yes">Add to basket</span>
                      <span class="no vis">Remove from busket</span>
                  </button>
                </li>  
              </ul>
      </div>
`,{handler:null,onShow(r){this.handler=_.bind(r),document.addEventListener("keydown",this.handler)},onClose(){console.log(this),document.removeEventListener("keydown",this.handler),i.removeEventListener("click",u)}});s.show();const i=document.querySelector(".cross");i.addEventListener("click",u);function u(){console.log("whoa!"),s.close()}const L=document.querySelector(".modal"),O=document.querySelector(".modal ul li button.js-favorite"),R=document.querySelector(".modal ul li button.js-basket"),b=document.querySelector("button.js-favorite span.yes"),v=document.querySelector("button.js-favorite span.no");console.log(O),console.log(R),L.addEventListener("click",T);function T(r){if(r.target.closest(".js-favorite")){if(b.classList.toggle("vis"),v.classList.toggle("vis"),E&&g(r.target,d),h){g(r.target,d);const f=JSON.parse(localStorage.getItem(J))??[];S(f,q)}y&&g(r.target,d)}if(r.target.closest(".js-basket")){if(console.log(r.target),b.classList.toggle("vis"),v.classList.toggle("vis"),E&&p(r.target,d),y){p(r.target,d);const f=JSON.parse(localStorage.getItem(Y))??[];S(f,C)}h&&p(r.target,d)}}}export{S as a,H as b,k as c,p as d,B as f,g as t};
//# sourceMappingURL=createModal-Bxkl5vo8.js.map
