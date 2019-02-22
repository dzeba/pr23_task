var d = document,
    itemBox = d.querySelectorAll('.product-box__item'),
    cartCont = d.getElementById('colInfo'),
    cartCont1 = d.getElementById('costInfo');
// Функція кросбраузерна установка обробника подій
function addEvent(elem, type, handler){
    if(elem.addEventListener){
        elem.addEventListener(type, handler, false);
    } else {
        elem.attachEvent('on'+type, function(){ handler.call( elem ); });
    }
    return false;
}
// Отримуєм дані з LocalStorage
function getCartData(){
    return JSON.parse(localStorage.getItem('cart'));
}
// Записуєм дані в LocalStorage
function setCartData(o){
    localStorage.setItem('cart', JSON.stringify(o));
    return false;
}
function addToCart(e){
    var cartData = getCartData() || {},
        parentBox = this.parentNode,
        itemId = this.getAttribute('data-id'),
        itemTitle = parentBox.querySelector('.costItem').innerHTML,
        itemPrice = parentBox.querySelector('.qty__item').value;
    itemTitle = parseInt (itemTitle, 10);
    itemPrice = parseInt (itemPrice, 10);
    cartData[itemId] = [itemTitle, itemPrice];
    if(!setCartData(cartData)){
        setTimeout(function(){
        }, 1000);
    }
    return false;
}
for(var i = 0; i < itemBox.length; i++){
    addEvent(itemBox[i].querySelector('.product-box__btn'), 'click', addToCart);
}

function openCart(e){

    var cartData = getCartData(), // витягуєм всі дані корзини
        totalItems = 0,
        totalItems1 = 0;
    console.log(JSON.stringify(cartData));
        for(var items in cartData){
            for(var i = 1; i < cartData[items].length; i++){
                totalItems += cartData[items][i++];
            }
            for(var i = 0; i < cartData[items].length; i++){
                totalItems1 += cartData[items][i++] * cartData[items][1];
            }
        }
        cartCont.innerHTML = totalItems;
        cartCont1.innerHTML = totalItems1;
    return false;
}
for(var i = 0; i < itemBox.length; i++){
    addEvent(itemBox[i].querySelector('.product-box__btn'), 'click', openCart);
}


var toggle = document.getElementById('select-control1');
var toggle2 = document.getElementById('select-control2');

toggle.addEventListener('change', function() {
    var chosenClass = this[this.selectedIndex].value;
    var items = document.querySelectorAll('.product-box__item');

    Array.prototype.forEach.call(items, function (item) {
        var child = item.children[0];
        var childClasses = child.className.split(' ');

        if (childClasses.indexOf(chosenClass) === -1) {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
    });
});
toggle2.addEventListener('change', function() {
    var chosenClass = this[this.selectedIndex].value;
    var items = document.querySelectorAll('.product-box__item');

    Array.prototype.forEach.call(items, function (item) {
        var child = item.children[0];
        var childClasses = child.className.split(' ');

        if (childClasses.indexOf(chosenClass) === -1) {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
    });
});



function opicaty() {
    document.getElementById("modal").style.display = "block";
    document.getElementById("podlogka").style.display = "block";
};
function cancel() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("podlogka").style.display = "none";
};

function checkForm(form) {
    var e = 0;
    for (var i = 0; i < form.length-1; i++) {
        if (!form[i].value.replace(/^\s+|\s+$/g, '')){
            form[i].style.border='1px solid red';
            e = 1;

        }
    }
    if(e) {
        alert ('Заполните все поля');
        return false;
    }
    else {
    alert ('Поздравляем вы сделали заказ!');
        localStorage.removeItem('cart');}
}

