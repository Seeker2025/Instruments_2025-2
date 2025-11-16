
import { instruments    } from './instruments';
import { common         } from './common';
import { createMarkup   } from './helpers/createMarkup';
import { createModal    } from './helpers/createModal';
import { 
         toFavorite,
         toBusket
                        } from './helpers/favoriteFun';
import { findProduct    } from './helpers/findProduct';
const  { KEY_FAVORITE, KEY_BASKET, KEY_INSTRUMENT }   =   common;

// const search = document.querySelector('.js-search');
const jsList = document.querySelector('.js-list');

localStorage.setItem(KEY_INSTRUMENT, JSON.stringify(instruments));
const allInstruments = JSON.parse(localStorage.getItem(KEY_INSTRUMENT));
// let favoriteArr = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
// let basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];

console.log(allInstruments);
createMarkup(allInstruments, jsList);


jsList.addEventListener('click', onClick);

function onClick(evt){
    evt.preventDefault();
    console.log(allInstruments);
    if(evt.target.classList.contains('js-info')){
       
            const product = findProduct(evt.target, instruments);
            console.log(product);
            const{img, name, price, description, id}=product
            createModal({img, name, price, description, id})
       
    }
    if(evt.target.classList.contains('js-favorite')){
        
            toFavorite(evt.target, allInstruments)
            localStorage.setItem(KEY_INSTRUMENT, JSON.stringify(allInstruments)); 
            createMarkup(allInstruments, jsList);     
            
    }


    if(evt.target.classList.contains('js-basket')){
        
            toBusket(evt.target, allInstruments);
            localStorage.setItem(KEY_INSTRUMENT, JSON.stringify(allInstruments)); 
            createMarkup(allInstruments, jsList);   

            
    }
 
}


export { allInstruments };