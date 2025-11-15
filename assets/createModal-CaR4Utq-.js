import{b as r}from"./vendor-DaP2veRQ.js";import{t as g,b as m}from"./favoriteFun-DEnG9lT1.js";function h(o){o.code==="Escape"&&this.close()}const u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==";function k({img:o,name:e,price:A,description:d,id:n}){const c=r.create(`
	    <div class="modal js-card" data-id=${n}>
            <div class="cross">
                 <img src=${u} alt="close">
            </div>
            <img src="${o}" alt="${e}" width="300">
            <h2>${e} <span>id${n}</span></h2>
            <h3>${A}point</h3>
            <p>${d}</p>
              <div>
                  <button class="js-favorite" type="button">Add to favorite</button>
                  <button class="js-basket" type="button">Add to basket</button>
              </div>
      </div>
`,{handler:null,onShow(t){this.handler=h.bind(t),document.addEventListener("keydown",this.handler)},onClose(){console.log(this),document.removeEventListener("keydown",this.handler),s.removeEventListener("click",a)}});c.show();const s=document.querySelector(".cross");console.log(s),s.addEventListener("click",a);function a(){console.log("whoa!"),c.close()}const i=document.querySelector(".modal");console.log(i),i.addEventListener("click",l);function l(t){t.target.classList.contains("js-favorite")&&g(t.target),t.target.classList.contains("js-basket")&&m(t.target)}}export{k as c};
//# sourceMappingURL=createModal-CaR4Utq-.js.map
