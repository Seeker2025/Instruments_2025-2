import { common } from '../common';
const{ KEY_FAVORITE, KEY_BASKET, KEY_INSTRUMENT } = common;
// import { instruments } from '../instruments';
import { findProduct } from './findProduct';
// const allInstruments = JSON.parse(localStorage.getItem(KEY_INSTRUMENT));
import { allInstruments } from '../index';

let favoriteArr = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
// let favoriteArr = [];
// let newfavorite = [];
// console.log( favoriteArr);
let basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];
// console.log( basketArr);
// .js-favorite
// const favoriteBtn = document.querySelector('.js-favorite');

function toFavorite(elemFuv){
 
                const product = findProduct(elemFuv, allInstruments);
                const inStorage = favoriteArr.some(({ id })=> id === product.id);
                console.log(inStorage);
                allInstruments.map(itm =>{
                                            if(itm.id === product.id) {
                                                itm.present ? itm.present = null : itm.present = 'present';
                                            }      
                                                 })
                localStorage.setItem(KEY_INSTRUMENT, JSON.stringify(allInstruments));                                        
        if(inStorage){
            
                favoriteArr = favoriteArr.filter((itm)=>itm.id!==product.id);
                                                        
                localStorage.setItem(KEY_FAVORITE, JSON.stringify(favoriteArr));
                
                            
           }else{

                
                                             
                favoriteArr.push(product);
                console.log(favoriteArr);
                localStorage.setItem(KEY_FAVORITE, JSON.stringify(favoriteArr));
               

           }
      
       
    }



 function toBusket(elemBus){
         const product = findProduct(elemBus, allInstruments);
                const inStorage = basketArr.some(({ id })=> id === product.id);
                console.log(inStorage);
                allInstruments.map(itm =>{
                                            if(itm.id === product.id) {
                                                itm.present ? itm.present = null : itm.present = 'present';
                                            }      
                                                 })
                localStorage.setItem(KEY_INSTRUMENT, JSON.stringify(basketArr));                                        
        if(inStorage){
            
                basketArr = basketArr.filter((itm)=>itm.id!==product.id);
                                                        
                localStorage.setItem(KEY_BASKET, JSON.stringify(basketArr));
                
                            
           }else{

                
                                             
                basketArr.push(product);
                console.log(basketArr);
                localStorage.setItem(KEY_BASKET, JSON.stringify(basketArr));
               

           }
      
    
 }



export { toFavorite, toBusket };  
