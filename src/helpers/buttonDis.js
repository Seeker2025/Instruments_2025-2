

    function buttonDis(btnSelector, list){
        const btnBasket = list.querySelectorAll(btnSelector);
    console.log(btnBasket);
    
    // btnBasket.classList.add('red')
    btnBasket.forEach((itm)=>{
        itm.disabled = true;
        itm.classList.add('red');
    })

    }

    export {buttonDis};


    // const btnBasket = list.querySelectorAll('.js-basket');
    // console.log(btnBasket);
    // btnBasket.forEach((itm)=>{
    //     itm.classList.add('red');
    // })