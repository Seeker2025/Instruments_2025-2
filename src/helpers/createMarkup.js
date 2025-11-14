import noImg from '../img/no_img.png';
let AddToFav = 'Add to favorite';
let RemoveFav = 'Remove from';
let AddToBask = 'Add to basket';
let RemoveBask = 'Remove from';
// import { common } from '../common';
// const{ KEY_FAVORITE, KEY_BASKET }=common;
// const favorite = JSON.parse(localStorage.getItem(KEY_FAVORITE));
// console.log(favorite);

function createMarkup(arr, list){
    // console.log(arr.length);
    let markup;
    if(arr.length){
        markup =  arr.map(({id, img, name, presentFuv})=>`
                    <li data-id=${id} class="card js-card">
                    <img src="${img}" alt="${name}" width="300">
                    <h2>${name}</h2>
                    <div class="textPre">
                    <span>id${id}</span> <p class="present">${presentFuv}</p>
                    </div>
                    <p><a href="#" class="info js-info">More Information</a></p>
                    <div>
        <button class="js-favorite" type="button">${presentFuv ? RemoveFav : AddToFav}</button>
        <button class="js-basket" type="button">${AddToBask}</button>
                    </div>
                    </li>
                    `).join('');
                list.innerHTML = markup;
    }else{
        markup =   `<li class="js-card">
                    <img src=${noImg} alt="404" width="300">
                    </li>`
                list.innerHTML = markup;
    }
};

export { createMarkup };

// const arr02 = [];
// console.log(arr02.length);