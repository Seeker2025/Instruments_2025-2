import{b as h}from"./vendor-DaP2veRQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const b="/Instruments_2025-2/assets/in01-DDtRZv0L.jpg",I="/Instruments_2025-2/assets/in02-BLtyIFcg.jpg",S="/Instruments_2025-2/assets/in03-DxX5vNo9.jpg",j="/Instruments_2025-2/assets/in04-BFeooFc0.jpg",E="/Instruments_2025-2/assets/in05-D0f0Nwn2.jpg",L="/Instruments_2025-2/assets/in06-CCY3mjLl.jpg",v="/Instruments_2025-2/assets/in07-DSke7PNe.jpg",y="/Instruments_2025-2/assets/in08-Cffekw7m.jpg",M="/Instruments_2025-2/assets/in09-B7A1B4HK.jpg",D="/Instruments_2025-2/assets/in10-C8QsgQ0Q.jpg",p=[{id:1,img:b,name:"Шуруповерт",price:1500,description:"Мережевий дриль-шуруповерт ТD-30-Надійний помічник для робіт по дому"},{id:2,img:I,name:"Перфоратор",price:3948,description:"Перфоратор бочковий Dnipro-M BH-20 Використовується для сверління"},{id:3,img:S,name:"Шліфмашина",price:1299,description:"Кутова шліфмашина Dnipro-M GS-98 - модель яка поєднує в собі"},{id:4,img:j,name:"Пила",price:11049,description:"Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL"},{id:5,img:E,name:"Рівень",price:897,description:"Рівень серії ProVision виробництва DNIPRO-M"},{id:6,img:L,name:"Тример",price:3699,description:"Тример електричний Dnipro-M 110 призначений для покосу трави"},{id:7,img:v,name:"Мотокоса",price:11049,description:"Мотокоса Dnipro-M 43 призначений для покосу трави, чагарників, бур'янів"},{id:8,img:y,name:"Генератор",price:10890,description:"Бензиновый генератор Dnipro-M GX-25 номінальною потужністю 2,5 кВт"},{id:9,img:M,name:"Культиватор",price:10890,description:"Культиватор електричний Dnipro-M 40"},{id:10,img:D,name:"Лобзик",price:10890,description:"Лобзик електричний Dnipro-M JS-80LX + Набір пиляльних полотен 5 шт"}],k="/Instruments_2025-2/assets/no_img-LHHwQ-Ik.png";function R(o,t){let n;o.length?(n=o.map(({id:i,img:e,name:s})=>`
                    <li data-id=${i} class="card js-card">
                    <img src="${e}" alt="${s}" width="300">
                    <h2>${s}</h2>
                    <p><a href="#" class="info js-info">More Information</a></p>
                    <div>
                    <button class="js-favorite" type="button">Add to favorite</button>
                    <button class="js-basket" type="button">Add to basket</button>
                    </div>
                    </li>
                    `).join(""),t.innerHTML=n):(n=`<li class="js-card">
                    <img src=${k} alt="404" width="300">
                    </li>`,t.innerHTML=n)}function w(o){o.code==="Escape"&&this.close()}const B="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==",_={KEY_FAVORITE:"favorite",KEY_BASKET:"basket"};function m(o,t){const n=Number(o.closest(".js-card").dataset.id);return t.find(({id:i})=>i===n)}const{KEY_FAVORITE:u,KEY_BASKET:A}=_,a=JSON.parse(localStorage.getItem(u))??[];console.log(a);const d=JSON.parse(localStorage.getItem(A))??[];console.log(d);function C(o){console.log(o);const t=m(o,p);console.log(t),!a.some(({id:i})=>i===t.id)&&(console.log(t),console.log(a),a.push(t),console.log(a),localStorage.setItem(u,JSON.stringify(a)))}function O(o){const t=m(o,p);d.some(({id:i})=>i===t.id)||(console.log(t),d.push(t),console.log(d),localStorage.setItem(A,JSON.stringify(d)))}function K({img:o,name:t,price:n,description:i,id:e}){const s=h.create(`
	    <div class="modal js-card" data-id=${e}>
            <div class="cross">
                 <img src=${B} alt="close">
            </div>
            <img src="${o}" alt="${t}" width="300">
            <h2>${t}</h2>
            <h3>${n}point</h3>
            <p>${i}</p>
              <div>
                  <button class="js-favorite" type="button">Add to favorite</button>
                  <button class="js-basket" type="button">Add to basket</button>
              </div>
        </div>
`,{handler:null,onShow(c){console.log(this),this.handler=w.bind(c),document.addEventListener("keydown",this.handler)},onClose(){console.log(this),document.removeEventListener("keydown",this.handler),r.removeEventListener("click",l)}});s.show();const r=document.querySelector(".cross");console.log(r),r.addEventListener("click",l);function l(){console.log("whoa!"),s.close()}const g=document.querySelector(".modal");console.log(g),g.addEventListener("click",f);function f(c){c.target.classList.contains("js-favorite")&&(console.log("Hi",c.target),C(c.target)),c.target.classList.contains("js-basket")&&O(c.target)}}export{O as a,R as b,K as c,_ as d,m as f,p as i,C as t};
//# sourceMappingURL=createModal-DJAQbUmR.js.map
