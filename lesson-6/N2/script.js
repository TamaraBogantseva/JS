var button = document.getElementsByClassName("project-cards__button");
var basket = document.getElementById("basket");
var basketItem;
//var item = document.getElementsByClassName("project-cards__item");
var price;
var totalPrice;
var summ = document.getElementsByClassName("summ");
var deleteButton = document.getElementById("button_clean");


for (var i = 0; i < button.length; i++) {
    button[i].onclick = addBasket;
}

deleteButton.onclick = cleanBusket;

function addBasket() {
    //добавляем карточку в корзину
    basketItem = this.parentElement.cloneNode(true);
    basket.append(basketItem);
    var noBtn = basket.querySelectorAll(".project-cards__wrp button"); //удаляем кнопку из карточки в корзине
    for (var z = 0; z < noBtn.length; z++) {
        noBtn[z].classList.add("no__button");
    }

    //получаем сумму добавленных товаров
    price = basket.getElementsByClassName("project-cards__price");
    totalPrice = 0;
    for (y = 0; y < price.length; y++) {
        totalPrice = totalPrice + parseInt(price[y].innerHTML);
    }
    console.log("Цена товара составляет: " + totalPrice);
    summ[0].innerHTML = "Общая стоимость товаров в корзине составляет: " + totalPrice;
}

function cleanBusket() { //тут просто все удаляем из блока корзины
    basket.innerHTML = "";
    summ[0].innerText = "";
}

