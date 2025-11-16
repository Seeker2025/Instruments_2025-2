import { common } from '../common';
const{ KEY_FAVORITE, KEY_BASKET, KEY_INSTRUMENT } = common;
// import { instruments } from '../instruments';
import { findProduct } from './findProduct';
// const allInstruments = JSON.parse(localStorage.getItem(KEY_INSTRUMENT));
// import { allInstruments } from '../index';

let favoriteArr = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];
let basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];
// console.log(favoriteArr);


function toFavorite(elemFuv, allInstruments){
 console.log(allInstruments);
                const product = findProduct(elemFuv, allInstruments);
                console.log(product);
                const inStorage = favoriteArr.some(({ id })=> id === product.id);
              
               
                                                        
        if(inStorage){
            
               favoriteArr = favoriteArr.filter((itm)=>itm.id!==product.id);
               localStorage.setItem(KEY_FAVORITE, JSON.stringify(favoriteArr));  
                                        allInstruments = allInstruments.map(itm =>{
                                        if(itm.id === product.id) {
                                        itm.presentFuv = null;
                                            }      
                                                 })
               // localStorage.setItem(KEY_INSTRUMENT, JSON.stringify(allInstruments)); 
             
                
               
              
           }else{
               product.presentFuv = 'present';
               console.log(product);
               console.log(allInstruments);
               favoriteArr.push(product);
               localStorage.setItem(KEY_FAVORITE, JSON.stringify(favoriteArr));
                
                                        allInstruments = allInstruments.map(itm =>{
                                        if(itm.id === product.id) {
                                        itm.presentFuv = 'present';
                                            }      
                                                 })
               // localStorage.setItem(KEY_INSTRUMENT, JSON.stringify(allInstruments));
               
               // console.log(JSON.parse(localStorage.getItem(KEY_INSTRUMENT)));                                 
               
               }
  }



 function toBusket(elemBus, allInstruments){
                const product = findProduct(elemBus, allInstruments);
                const inStorage = basketArr.some(({ id })=> id === product.id);
                                                                           
        if(inStorage){
              
               basketArr = basketArr.filter((itm)=>itm.id!==product.id);
               localStorage.setItem(KEY_BASKET, JSON.stringify(basketArr));
                                        allInstruments = allInstruments.map(itm =>{
                                        if(itm.id === product.id) {
                                        itm.presentBas = null;
                                            }      
                                                 })
                                           
               // localStorage.setItem(KEY_INSTRUMENT, JSON.stringify(allInstruments));  
               

                    
          }else{
               product.presentBas = 'present';                    
               basketArr.push(product);
               localStorage.setItem(KEY_BASKET, JSON.stringify(basketArr)); 
                                        allInstruments = allInstruments.map(itm =>{
                                        if(itm.id === product.id) {
                                        itm.presentBas = 'present';
                                            }      
                                                 })
               // localStorage.setItem(KEY_INSTRUMENT, JSON.stringify(allInstruments));  
               
          }
 }



export { toFavorite, toBusket };  
