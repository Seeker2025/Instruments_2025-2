console.log('fav');
import { common } from './common';
const{ KEY_FAVORITE, KEY_BASKET }=common;
import { createMarkup } from './helpers/createMarkup';
import { createModal } from './helpers/createModal';
import { findProduct } from './helpers/findProduct';
import { toBusket } from './helpers/favoriteFun';
import {buttonDis} from './helpers/buttonDis'


const list = document.querySelector('.js-list');
console.log(list);
const favorite = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
console.log(favorite);

createMarkup(favorite, list);


 buttonDis('.js-favorite', list);


list.addEventListener('click', onClick);

function onClick(evt){
    evt.preventDefault();
    if(evt.target.classList.contains('js-info')){
       
        const product = findProduct(evt.target, favorite);
        console.log(product);
        const{img, name, price, description}=product
       createModal({img, name, price, description});
       const modal = document.querySelector('.modal');
       console.log(modal);
       buttonDis('.js-favorite', modal);
       
    }
      if(evt.target.classList.contains('js-basket')){
        toBusket(evt.target);
}
}

// function findProduct(elem){
//     const productId = Number(elem.closest('.js-card').dataset.id)
//     return favorite.find(({id}) => id === productId);
// }
