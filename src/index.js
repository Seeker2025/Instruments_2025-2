
import { instruments } from './instruments';
import { common } from './common';

const{ KEY_FAVORITE, KEY_BASKET, KEY_INSTRUMENT }=common;
import { createMarkup } from './helpers/createMarkup';
import { createModal } from './helpers/createModal';
import { 
    toFavorite,
    toBusket
   
                    } from './helpers/favoriteFun';
import { findProduct } from './helpers/findProduct';


// const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');

localStorage.setItem(KEY_INSTRUMENT, JSON.stringify(instruments));
const allInstruments = JSON.parse(localStorage.getItem(KEY_INSTRUMENT));
export { allInstruments };
console.log(allInstruments);
createMarkup(allInstruments, list);


list.addEventListener('click', onClick);

function onClick(evt){
    // evt.preventDefault();
    // console.log(evt.target);
    if(evt.target.classList.contains('js-info')){
       
        const product = findProduct(evt.target, instruments);
        console.log(product);
        const{img, name, price, description, id}=product
        createModal({img, name, price, description, id})
       
    }
    if(evt.target.classList.contains('js-favorite')){
        
            toFavorite(evt.target)
            
                         
              
    }


    if(evt.target.classList.contains('js-basket')){
        
            toBusket(evt.target);
    }
 
}



// function findProduct(elem){
//     const productId = Number(elem.closest('.js-card').dataset.id)
//     return instruments.find(({id}) => id === productId);
// }