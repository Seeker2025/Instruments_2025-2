// console.log('favorite');
import { common } from './common';
const  { KEY_FAVORITE, KEY_BASKET } = common;
import { createMarkup } from './helpers/createMarkup';
import { createModal  } from './helpers/createModal';
import { findProduct  } from './helpers/findProduct';
import { 
          toBusket,
          toFavorite
                      } from './helpers/favoriteFun';
import {  buttonDis   } from './helpers/buttonDis'


const favList = document.querySelector('.favorite_list');
// console.log(list);
const favorite = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
// console.log(favorite);

createMarkup(favorite, favList);


// buttonDis('.js-favorite', list);


// list.addEventListener('click', onClick);

// function onClick(evt){
//     evt.preventDefault();
    // if(evt.target.classList.contains('js-info')){
       
    //     const product = findProduct(evt.target, favorite);
    //     console.log(product);
    //     const{ description, id, img, name, present, price  } = product;
    //     // createModal({description, id, img, name, present, price });
    //     const modal = document.querySelector('.modal');
    //   //  console.log(modal);
    //   //  buttonDis('.js-favorite', modal);
       
    // }

    // if(evt.target.classList.contains('js-favorite')){
        
    //         toFavorite(evt.target);
    //         createMarkup(favorite, list);
            
    // }

//     if(evt.target.classList.contains('js-basket')){


//           toBusket(evt.target);



// }
// }