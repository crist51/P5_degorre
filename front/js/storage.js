function saveProducts(basket){
    localStorage.setItem ("basket",JSON.stringify(basket));//transform en JSON
}

function getBasket(){
    return localStorage.getItem("basket")//clef
}

function addBaket (product){
    let baket = getBasket();
    basket.push(product);//on ajoute le pdr dans le tableau
    saveBaket(basket)
}