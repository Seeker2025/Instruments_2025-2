
import { instruments } from './instruments';
// import { common } from './common';

// const{ KEY_FAVORITE, KEY_BASKET }=common;
import { createMarkup } from './helpers/createMarkup';
import { createModal } from './helpers/createModal';
import { 
    toFavorite,
    toBusket
   
                    } from './helpers/favoriteFun';
import { findProduct } from './helpers/findProduct';


// const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');

createMarkup(instruments, list);

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
        
            let textOnBtn = toFavorite(evt.target)
            // console.log('nooo', toFavorite(evt.target));
            console.log(textOnBtn);
            
              
    }


    if(evt.target.classList.contains('js-basket')){
        
            toBusket(evt.target);
    }
 
}



// function findProduct(elem){
//     const productId = Number(elem.closest('.js-card').dataset.id)
//     return instruments.find(({id}) => id === productId);
// }