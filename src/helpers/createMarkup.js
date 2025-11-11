import noImg from '../img/no_img.png';
let textOnBtnFavorite = 'Add to favorite';
let textOnBtnBasket = 'Add to basket';

function createMarkup(arr, list){
    // console.log(arr.length);
    let markup;
    if(arr.length){
        markup =  arr.map(({id, img, name})=>`
                    <li data-id=${id} class="card js-card">
                    <img src="${img}" alt="${name}" width="300">
                    <h2>${name} <span>id${id}</span></h2>
                    <p><a href="#" class="info js-info">More Information</a></p>
                    <div>
                    <button class="js-favorite" type="button">${textOnBtnFavorite}</button>
                    <button class="js-basket" type="button">${textOnBtnBasket}</button>
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