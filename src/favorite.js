// console.log('favorite');
import { common } from './common';
const  { KEY_FAVORITE, KEY_BASKET,  KEY_INSTRUMENT} = common;
import { createMarkup } from './helpers/createMarkup';
import { createModal  } from './helpers/createModal';
import { findProduct  } from './helpers/findProduct';

//import {  buttonDis   } from './helpers/buttonDis'
 import {  toFavorite, toBusket   } from './helpers/favoriteFun';
const allInstruments = JSON.parse(localStorage.getItem(KEY_INSTRUMENT));

const favList = document.querySelector('.favorite_list');

const favorite = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
// const basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];
// console.log(favorite);

// import { toFavorite } from './helpers/favoriteFun';


createMarkup(favorite, favList);


// buttonDis('.js-favorite', list);


 favList.addEventListener('click', onClick);

  function onClick(evt){
     evt.preventDefault();
     
      if(evt.target.classList.contains('js-info')){
       
               const product = findProduct(evt.target, favorite);
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
                createMarkup(favorite, favList);
            
    }

   if(evt.target.classList.contains('js-basket')){


                toBusket(evt.target, allInstruments);
                const basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];
               //  createMarkup(basketArr, favList);



     }
  }