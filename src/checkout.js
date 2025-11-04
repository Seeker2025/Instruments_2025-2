console.log('check');
console.log('fav');
import { common } from './common';
const{ KEY_FAVORITE, KEY_BASKET } = common;
import { createMarkup } from './helpers/createMarkup';
import { createModal } from './helpers/createModal';
import { findProduct } from './helpers/findProduct';
import { toFavorite } from './helpers/favoriteFun';
import {buttonDis} from './helpers/buttonDis'

const list = document.querySelector('.js-list');
console.log(list);
const basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];
console.log( basketArr);

createMarkup(basketArr, list);
// const btnBasket = list.querySelectorAll('.js-basket');
//     console.log(btnBasket);
//     btnBasket.forEach((itm)=>{
//         itm.classList.add('red');
//     })
    // btnBasket.disabled = true;
    // btnBasket.classList.add('red')
     buttonDis('.js-basket', list);

    

list.addEventListener('click', onClick);

function onClick(evt){
    evt.preventDefault();
   console.log(evt.target);
   
   
    if(evt.target.classList.contains('js-info')){
          
           const product = findProduct(evt.target, basketArr);
           console.log(product);
           const{img, name, price, description}=product
          createModal({img, name, price, description})
        //   const btn = document.querySelector('.js-basketModal');
        //   console.log(btn);
        //   buttonDis('.js-basket');
        // btn.disabled = true;
    // btn.classList.add('red')
    const modal = document.querySelector('.modal');
       console.log(modal);
       buttonDis('.js-basket', modal);
          
       }
    if(evt.target.classList.contains('js-favorite')){
        console.log(evt.target);
        toFavorite(evt.target)
    }
   
    
}

// function findProduct(elem){
//     const productId = Number(elem.closest('.js-card').dataset.id)
//     return basketArr.find(({id}) => id === productId);
// // }
// buttonDis('.js-basket');
//