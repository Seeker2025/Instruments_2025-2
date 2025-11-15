import { common } from '../common';
const{ KEY_FAVORITE, KEY_BASKET, KEY_INSTRUMENT } = common;
// import { instruments } from '../instruments';
import { findProduct } from './findProduct';
// const allInstruments = JSON.parse(localStorage.getItem(KEY_INSTRUMENT));
// import { allInstruments } from '../index';

let favoriteArr = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
let basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];


function toFavorite(elemFuv, allInstruments){
 
                const product = findProduct(elemFuv, allInstruments);
                const inStorage = favoriteArr.some(({ id })=> id === product.id);
              
               
                                                        
        if(inStorage){
            
               favoriteArr = favoriteArr.filter((itm)=>itm.id!==product.id);
                                        allInstruments.map(itm =>{
                                        if(itm.id === product.id) {
                                        itm.presentFuv = null;
                                            }      
                                                 })
               localStorage.setItem(KEY_INSTRUMENT, JSON.stringify(allInstruments));      
               localStorage.setItem(KEY_FAVORITE, JSON.stringify(favoriteArr));
              
           }else{

               favoriteArr.push(product);
                
                                        allInstruments.map(itm =>{
                                        if(itm.id === product.id) {
                                        itm.presentFuv = 'present';
                                            }      
                                                 })
               localStorage.setItem(KEY_INSTRUMENT, JSON.stringify(allInstruments));                                
               localStorage.setItem(KEY_FAVORITE, JSON.stringify(favoriteArr));
               }
  }



 function toBusket(elemBus, allInstruments){
                const product = findProduct(elemBus, allInstruments);
                const inStorage = basketArr.some(({ id })=> id === product.id);
                                                                           
        if(inStorage){
            
               basketArr = basketArr.filter((itm)=>itm.id!==product.id);
               allInstruments.map(itm =>{
                                        if(itm.id === product.id) {
                                        itm.presentBas = null;
                                            }      
                                                 })
                                           
               localStorage.setItem(KEY_INSTRUMENT, JSON.stringify(allInstruments));  
               localStorage.setItem(KEY_BASKET, JSON.stringify(basketArr));

                    
          }else{
                                      
               basketArr.push(product);
                                        allInstruments.map(itm =>{
                                        if(itm.id === product.id) {
                                        itm.presentBas = 'present';
                                            }      
                                                 })
               localStorage.setItem(KEY_INSTRUMENT, JSON.stringify(allInstruments));  
               localStorage.setItem(KEY_BASKET, JSON.stringify(basketArr));
          }
      
    
 }



export { toFavorite, toBusket };  
