console.log('check');
// console.log('fav');
import { common } from './common';
const{ KEY_FAVORITE, KEY_BASKET, KEY_INSTRUMENT } = common;
import { createMarkup } from './helpers/createMarkup';
import { createModal } from './helpers/createModal';
import { findProduct } from './helpers/findProduct';
import { toFavorite, toBusket } from './helpers/favoriteFun';
// import {buttonDis} from './helpers/buttonDis'

const basketList = document.querySelector('.checkout_list');
// // console.log(basketList);
const allInstruments = JSON.parse(localStorage.getItem(KEY_INSTRUMENT));
const basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];
console.log( basketArr);

createMarkup( basketArr, basketList );


basketList.addEventListener('click', onClick);

function onClick(evt){
     evt.preventDefault();
     
      if(evt.target.classList.contains('js-info')){
       
          const product = findProduct(evt.target, basketArr);
          console.log(product);
          const{ description, id, img, name, present, price  } = product;
           createModal({description, id, img, name, present, price });
          const modal = document.querySelector('.modal');
          console.log(modal);
        }

   if(evt.target.classList.contains('js-favorite')){
                // console.log(evt.target);
                
                
                toFavorite(evt.target, allInstruments);
                const favorite = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
                // createMarkup(favorite, favList);
            
    }

   if(evt.target.classList.contains('js-basket')){


                toBusket(evt.target, allInstruments);
                const basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];
                createMarkup(basketArr, basketList);



     }
  }

