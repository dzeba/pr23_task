var colInfo = document.getElementById('colInfo');
var costInfo = document.getElementById('costInfo');
var costItem = document.getElementsByClassName('costItem').innerHTML;
var add = document.getElementsByClassName('product-box__btn');


add.onclick = function() {
    var colItem = document.getElementById('qty__item').value;
    add.add('post');
    if(!post.contains(colItem)) return;
    colInfo.textContent = colItem;
    costInfo.innerHTML = +costItem * +colItem;
    colItem.value = '';
};