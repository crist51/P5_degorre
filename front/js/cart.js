
let produitEnregistrerDansLeLocalStorage = JSON.parse(localStorage.getItem("key"));//JSON.parse pour convertir JSON en JAVASCIPT
console.log(produitEnregistrerDansLeLocalStorage);

console.log();

var key = produitEnregistrerDansLeLocalStorage


//---------------boucle de construction
var debutBoucle = 0
while (debutBoucle<key.length){
  var article = document.createElement("article");
article.classList.add("cart__item")
cart__items.appendChild(article);

    //création div [img]
    var cart__item__img
    = document.createElement("div")
    cart__item__img.classList.add("cart__item__img")
    article.appendChild(cart__item__img)
    
        var image =document.createElement("img")
        image.src = (key[debutBoucle].imageUrl)
        image.alt = (key[debutBoucle].altTxt)
        cart__item__img.appendChild(image)

        //partit1 création div [non],[option],[price],
        var cart__item__content = document.createElement("div")
        cart__item__content.classList.add("cart__item__content")
        article.appendChild(cart__item__content)

            var cart__item__content__description = document.createElement("div")
            cart__item__content__description.classList.add("cart__item__content__description")
            cart__item__content.appendChild(cart__item__content__description)

                var nom = document.createElement("h2")
                nom.textContent = (key[debutBoucle].name)
                cart__item__content__description.appendChild(nom)

                var colors = document.createElement("p")
                colors.textContent = (key[debutBoucle].colors)
                cart__item__content__description.appendChild(colors)

                var price = document.createElement("p")
                    price.textContent = (key[debutBoucle].price)
                cart__item__content__description.appendChild(price)

                  //--------------partit2 quantité
                var cart__item__content__seetings = document.createElement("div")
                cart__item__content__seetings.classList.add("cart__item__content__settings")
                cart__item__content.appendChild(cart__item__content__seetings)

                      //--------------quantité
                      var description = document.createElement("div")
                      description.classList.add("cart__item__content__settings__quantity")
                      cart__item__content__seetings.appendChild(description)

                      var qte = document.createElement("p")
                      qte.textContent = "qté";
                      description.appendChild(qte)

                      var quantite = document.createElement("input");
                      quantite.type = "number"
                      quantite.name = "itemQuantity"
                      quantite.min = "1"
                      quantite.max = "100"
                      quantite.value = (key[debutBoucle].quantity)
                      quantite.classList.add("itemQuantity")
                      description.appendChild(quantite)

                      //--------------supprimer
                      var seeting = document.createElement("div")
                      seeting.classList.add("cart__item__content__settings__delete")
                      cart__item__content__seetings.appendChild(seeting)

                      var sup = document.createElement("p")
                      sup.classList.add("deleteItem")
                      sup.textContent = "Supprimer"
                      seeting.appendChild(sup)

                      var t = document.getElementsByClassName('deleteItem');
                      console.log(t);
                      //delete Employee.firstname;
  debutBoucle++
}


var debutBoucle = 0
let quantityArray =[];//on creer un tableau qui aura les quantité de chaque article
while (debutBoucle < key.length){
    quantityArray.push(key[debutBoucle].quantity)//on injecte dans le tableau
    debutBoucle++
}
console.log(quantityArray);

var reducer = (accumulator,curenceValue) => accumulator + curenceValue
const quantiteTotal = quantityArray.reduce(reducer);

totalQuantity.textContent = quantiteTotal


let priceArray =[];//on creer un tableau qui aura les quantité de chaque article
var debutBoucle = 0
while (debutBoucle < key.length){
  var priceTotalArticle = key[debutBoucle].price * quantityArray[debutBoucle]//quantiter * prix
  priceArray.push(priceTotalArticle)//on injecte dans le tableau
  debutBoucle++
}
console.log(priceArray);
var reducerPrice = (accumulator,curenceValue) => accumulator + curenceValue
const priceTotal = priceArray.reduce(reducerPrice);

totalPrice.textContent = priceTotal


//file:///E:/NE%20PAS%20EFFACER/Stockage/Nouveau%20dossier/P5_degorre/front/html/cart.html