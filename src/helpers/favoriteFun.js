import { common } from '../common';
const{ KEY_FAVORITE, KEY_BASKET }=common;
import { instruments } from '../instruments';
import { findProduct } from './findProduct';

let favoriteArr = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
// let favoriteArr = [];
// let newfavorite = [];
// console.log( favoriteArr);
const basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];
// console.log( basketArr);
// .js-favorite
// const favoriteBtn = document.querySelector('.js-favorite');

function toFavorite(elemFuv){
 console.log(elemFuv);
                const product = findProduct(elemFuv, instruments);
                console.log(product);
                console.log(favoriteArr);
                const inStorage = favoriteArr.some(({ id })=> id === product.id);
                console.log(inStorage);
                // console.log(favoriteBtn);
        if(inStorage){
            
                console.log(favoriteArr);
                favoriteArr = favoriteArr.filter((itm)=>itm.id!==product.id);
                console.log('Hi');
                console.log(favoriteArr);
                localStorage.setItem(KEY_FAVORITE, JSON.stringify(favoriteArr));
                elemFuv.textContent = 'Add to favorite';
                let text = 'Add to favorite';
                return text;
            
           }else{
                favoriteArr.push(product);
                console.log(favoriteArr);
                localStorage.setItem(KEY_FAVORITE, JSON.stringify(favoriteArr));
                elemFuv.textContent = 'Remove from';
                let text = 'Remove from';
                return text;

           }
      
       
    }



 function toBusket(elemBus){
     const product = findProduct(elemBus, instruments);
        const inStorage = basketArr.some(({ id })=> id === product.id)
        if(inStorage){
            return
        }
        console.log(product);
        basketArr.push(product);
        console.log(basketArr);
        localStorage.setItem(KEY_BASKET, JSON.stringify(basketArr))
 }

//     function findProduct(elem){
//     const productId = Number(elem.closest('.js-card').dataset.id)
//     return instruments.find(({id}) => id === productId);
// }


export { toFavorite, toBusket };  
