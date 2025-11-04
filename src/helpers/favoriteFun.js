import { common } from '../common';
const{ KEY_FAVORITE, KEY_BASKET }=common;
import { instruments } from '../instruments';
import { findProduct } from './findProduct';

const favoriteArr = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
console.log( favoriteArr);
const basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];
console.log( basketArr);

function toFavorite(elemFuv){
 console.log(elemFuv);
        const product = findProduct(elemFuv, instruments);
        console.log(product);
        const inStorage = favoriteArr.some(({ id })=> id === product.id)
        if(inStorage){
            return
        }
        console.log(product);
        console.log(favoriteArr);
        favoriteArr.push(product);
        console.log(favoriteArr);
        localStorage.setItem(KEY_FAVORITE, JSON.stringify(favoriteArr));
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
