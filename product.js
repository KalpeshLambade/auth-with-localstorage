window.onload = function(){

    var divFromHtml =document.getElementById("product");
    var dataFromLs =JSON.parse(localStorage.getItem("product"));

    var array =[];

    for(var i=0;i<dataFromLs.length; i++){
        array+= `<div><img src="${dataFromLs[i].image}" alt="product-img"><h2>${dataFromLs[i].name}</h2><p>${dataFromLs[i].price}</p></div>`;
    }

    divFromHtml.innerHTML =array;
}