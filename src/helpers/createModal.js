import * as basicLightbox from 'basiclightbox'
import "basiclightbox/dist/basicLightbox.min.css";

import { closeMadal } from './closeModal';
import closeIcon from '../img/close.png';
// const list = document.querySelector('.js-list');
import { 
    toFavorite,
    toBusket,
                } from './favoriteFun';


function createModal({img, name, price, description, id}){
//   const option = {
//     handler: null,
//     onShow(instance){
//       console.log(this);
//       this.handler = closeMadal.bind(instance);
//     document.addEventListener('keydown', closeModal);
//   },
//   onClose(){
//      console.log(this);
//   },
  
// };
// console.log(id);

  
     const instance = basicLightbox.create(`
	    <div class="modal js-card" data-id=${id}>
            <div class="cross">
                 <img src=${closeIcon} alt="close">
            </div>
            <img src="${img}" alt="${name}" width="300">
            <h2>${name}</h2>
            <h3>${price}point</h3>
            <p>${description}</p>
              <div>
                  <button class="js-favorite" type="button">Add to favorite</button>
                  <button class="js-basket" type="button">Add to basket</button>
              </div>
        </div>
`, {
    handler: null,
    onShow(instance){
      console.log(this);
      this.handler = closeMadal.bind(instance);
    document.addEventListener('keydown', this.handler);

 
 
  },
    onClose(){
      console.log(this);
      document.removeEventListener('keydown', this.handler);
      cross.removeEventListener('click', toClose);
  },
  
});


// cross.addEventListener('click', toClose);
// function toClose(){
//   console.log('whoa!');
// }
instance.show();
// function closeMadal(evt){
//     if(evt.code === 'Escape'){
//       instance.close();
//     }
  const cross = document.querySelector('.cross');
    console.log(cross);
    cross.addEventListener('click', toClose);
  function toClose(){
    console.log('whoa!');
    instance.close();
 }

 const modal = document.querySelector('.modal');
 console.log(modal);
 modal.addEventListener('click', onClick);
 function onClick(evt){
 if(evt.target.classList.contains('js-favorite')){
    console.log('Hi', evt.target);
    toFavorite(evt.target);
 }

  if(evt.target.classList.contains('js-basket')){
        toBusket(evt.target);

}
}

}


export { createModal };