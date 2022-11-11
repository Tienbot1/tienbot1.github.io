"use strict";

const inputRub = document.querySelector("#rub"),
    inputUsd = document.querySelector("#usd");

//Когда value меняется врунти input-а
//inputRub.addEventListener('change')

//Когда что-то вводится или удаляется в input-е
inputRub.addEventListener('input', ()=> {
    const request =  new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    // отслеживает статус готовности нашего запроса в текущий момент
    request.addEventListener('load', () => {
        if(request.status === 200){
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2 );
        } else {
            inputUsd.value = "Что-то пошло не так";
        }
    });

    // status
    // statusText
    // response
    // readyState
});