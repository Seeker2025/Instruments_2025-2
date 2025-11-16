import * as basicLightbox from 'basiclightbox'
import "basiclightbox/dist/basicLightbox.min.css";

import { common } from '../common';
const  { KEY_FAVORITE, KEY_BASKET,  KEY_INSTRUMENT} = common;
const allInstruments = JSON.parse(localStorage.getItem(KEY_INSTRUMENT));

import {  closeMadal } from './closeModal';
import { createMarkup } from './createMarkup';
import    closeIcon from '../img/close.png';
import { 
          toFavorite,
          toBusket,
                     } from './favoriteFun';

const favList = document.querySelector('.favorite_list');
const basketList = document.querySelector('.checkout_list');

function createModal({img, name, price, description, id}){
  
     const instance = basicLightbox.create(`
	    <div class="modal js-card" data-id=${id}>
            <div class="cross">
                 <img src=${closeIcon} alt="close">
            </div>
            <img src="${img}" alt="${name}" width="300">
            <h2>${name} <span>id${id}</span></h2>
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
      // console.log(this);
      this.handler = closeMadal.bind(instance);
    document.addEventListener('keydown', this.handler);

  },
    onClose(){
      console.log(this);
      document.removeEventListener('keydown', this.handler);
      cross.removeEventListener('click', toClose);
  },
  
});


instance.show();

                    const cross = document.querySelector('.cross');
                    // console.log(cross);
                    cross.addEventListener('click', toClose);
                    function toClose(){
                    console.log('whoa!');
                    instance.close();
                    }

 const modal = document.querySelector('.modal');
//  console.log(modal);
const favoriteModal = document.querySelector('.modal div button.js-favorite');
const basketModal =   document.querySelector('.modal div button.js-basket');
                    console.log(favoriteModal);
                    console.log(basketModal);
 modal.addEventListener('click', onClick);
                                          function onClick(evt){
                                          console.log(evt.target);
                                          if(evt.target.classList.contains('js-favorite')){
                toFavorite(evt.target, allInstruments);
                const favorite = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
                createMarkup(favorite, favList);
                                            }

                                          if(evt.target.classList.contains('js-basket')){
                toBusket(evt.target, allInstruments);
                const basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];
                createMarkup(basketArr,  basketList);                                  

                                            }
                                          }

}


export { createModal };