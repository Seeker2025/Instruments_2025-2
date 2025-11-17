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
const indexPage = document.getElementById('index');
const favoritePage = document.getElementById('favorite');
const basketPage = document.getElementById('basket');

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
const favoriteModal = document.querySelector('.modal ul li button.js-favorite');
const basketModal =   document.querySelector('.modal ul li button.js-basket');
const yes = document.querySelector('button.js-favorite span.yes');
const no =  document.querySelector('button.js-favorite span.no');
                    console.log(favoriteModal);
                    console.log(basketModal);
 modal.addEventListener('click', onClick);
                    // console.log(favoritePage);
                    // console.log(basketPage);
                    // console.log(indexPage);
                                          function onClick(evt){
                                          // console.log(evt.target);
                                                
                                          if(evt.target.closest('.js-favorite')){
                                                yes.classList.toggle('vis');
                                                no.classList.toggle('vis');
                                          
                                                if(indexPage){
                toFavorite(evt.target, allInstruments);                                 
                                                }
                                                if(favoritePage){
                toFavorite(evt.target, allInstruments);
                const favorite = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
                createMarkup(favorite, favList);
                                                }
                                                if(basketPage){
                toFavorite(evt.target, allInstruments);
                                                }
                                            }

                                          if(evt.target.closest('.js-basket')){
                                            console.log(evt.target);
                                                yes.classList.toggle('vis');
                                                no.classList.toggle('vis');

                                                if(indexPage){
                toBusket(evt.target, allInstruments);
                                                }
                                                if(basketPage){
                toBusket(evt.target, allInstruments);
                const basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];
                createMarkup(basketArr,  basketList);  
                                                }
                                                if(favoritePage){
                toBusket(evt.target, allInstruments);
                                                }
                                            }
                                          }

}


export { createModal };



//<span class="yes">Add to favorite</span>
//<span class="no vis">Remove from busket</span>