import{b as h}from"./vendor-DaP2veRQ.js";import{c as k,t as v,a as i,b as E}from"./favoriteFun-j_ESmQBa.js";function p(o){o.code==="Escape"&&this.close()}const S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==",{KEY_FAVORITE:f,KEY_BASKET:w,KEY_INSTRUMENT:L}=k,l=JSON.parse(localStorage.getItem(L)),B=document.querySelector(".favorite_list"),M=document.querySelector(".checkout_list");function y({img:o,name:s,price:A,description:d,id:a}){const c=h.create(`
	    <div class="modal js-card" data-id=${a}>
            <div class="cross">
                 <img src=${S} alt="close">
            </div>
            <img src="${o}" alt="${s}" width="300">
            <h2>${s} <span>id${a}</span></h2>
            <h3>${A}point</h3>
            <p>${d}</p>
              <div>
                  <button class="js-favorite" type="button">Add to favorite</button>
                  <button class="js-basket" type="button">Add to basket</button>
              </div>
      </div>
`,{handler:null,onShow(t){this.handler=p.bind(t),document.addEventListener("keydown",this.handler)},onClose(){console.log(this),document.removeEventListener("keydown",this.handler),n.removeEventListener("click",r)}});c.show();const n=document.querySelector(".cross");n.addEventListener("click",r);function r(){console.log("whoa!"),c.close()}const m=document.querySelector(".modal"),g=document.querySelector(".modal div button.js-favorite"),u=document.querySelector(".modal div button.js-basket");console.log(g),console.log(u),m.addEventListener("click",b);function b(t){if(console.log(t.target),t.target.classList.contains("js-favorite")){v(t.target,l);const e=JSON.parse(localStorage.getItem(f))??[];i(e,B)}if(t.target.classList.contains("js-basket")){E(t.target,l);const e=JSON.parse(localStorage.getItem(w))??[];i(e,M)}}}export{y as c};
//# sourceMappingURL=createModal-C0epEvpE.js.map
