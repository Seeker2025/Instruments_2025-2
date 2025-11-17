import noImg from '../img/no_img.png';
let AddToFav = 'Add to favorite';
let RemoveFav = 'Remove from';
let AddToBas = 'Add to basket';
let RemoveBas = 'Remove from';


function createMarkup(arr, list){
   
        let markup;
        if(arr.length){
        markup =  arr.map(({id, img, name, presentFuv, presentBas})=>`
                    <li data-id=${id} class="card js-card">
                    <img src="${img}" alt="${name}" width="300">
                    <h2>${name}</h2>
                    
                    <span>id${id}</span>
                    <p class="present"><b>Favorite</b><span>${presentFuv}</span></p>
                    <p class="present"><b>Basket</b><span>${presentBas}</span></p>
                    
                    <p><a href="#" class="info js-info">More Information (Modal)</a></p>
                    <div>
        <button class="js-favorite" type="button">${presentFuv ? RemoveFav : AddToFav}</button>
        <button class="js-basket" type="button">${presentBas ? RemoveBas : AddToBas}</button>
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

