
let produitEnregistrerDansLeLocalStorage = JSON.parse(localStorage.getItem("key"));//JSON.parse pour convertir JSON en JAVASCIPT
console.log(produitEnregistrerDansLeLocalStorage);

console.log();

var key = produitEnregistrerDansLeLocalStorage

//********************************************************************boucle de construction********************************************************************
var debutBoucle = 0

if (key == null) { //panier vude
  var article = document.createElement("article");
  article.classList.add("cart__item")
  cart__items.appendChild(article);
  var itemAbs = document.createElement("p")
  itemAbs.textContent = "Votre panier est vide"
  article.appendChild(itemAbs)
}
else {
  while (debutBoucle < key.length) {
    var article = document.createElement("article");
    article.classList.add("cart__item")
    cart__items.appendChild(article);

    //--------------------------------création div [img]
    var cart__item__img
      = document.createElement("div")
    cart__item__img.classList.add("cart__item__img")
    article.appendChild(cart__item__img)

    var image = document.createElement("img")
    image.src = (key[debutBoucle].imageUrl)
    image.alt = (key[debutBoucle].altTxt)
    cart__item__img.appendChild(image)

    //-------------------------------- création div = cart__item__content__description [non],[colors],[price],
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

    //--------------------------------création div = cart__item__content__settings [quantity][delete]
    var cart__item__content__seetings = document.createElement("div")
    cart__item__content__seetings.classList.add("cart__item__content__settings")
    cart__item__content.appendChild(cart__item__content__seetings)

    //----------------------------------------------------------------création div = cart__item__content__settings__quantity [quantity]
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




    //----------------------------------------------------------------création div = cart__item__content__settings__delete[delete]
    var seeting = document.createElement("div")
    seeting.classList.add("cart__item__content__settings__delete")
    cart__item__content__seetings.appendChild(seeting)

    var sup = document.createElement("p")
    sup.classList.add("deleteItem")
    sup.textContent = "Supprimer"
    seeting.appendChild(sup)



    debutBoucle++
  }
}

//********************************************************************mise a jour de quantite********************************************************************

// let inputQuantite = document.querySelector(".itemQuantity")
// console.log(inputQuantite.value);
// console.log(inputQuantite.value);

//  var p = 0
//  while (p < key.length) {
//     let inputQuantite = document.querySelector(".itemQuantity")
//     inputQuantite.addEventListener("change", function () {
//       inputModif(this);
//     })
//     const inputModif = function (inputQuantiteValue) {
//       var valeurInputModif = inputQuantite.value
//       if (inputQuantite.value == quantite.value) {
//         quantite.value = valeurInputModif
//         console.log(inputQuantite.value + " a changer");
//       }
//       return quantite.value
//     }
//     p++
//   }

// var qte = m.closest(1)
// console.log(qte);
//Element.closest()

//********************************************************************btn sup********************************************************************



const listIeleteItem = document.getElementsByClassName('deleteItem');
console.log(listIeleteItem);

listIeleteItem[0].addEventListener("click", (event => {
  event.preventDefault;
  var el = listIeleteItem[0].closest("article")//selectionnne l'article le plus proche
  console.log(produitEnregistrerDansLeLocalStorage[0]);
  console.log(el);
}))
listIeleteItem[1].addEventListener("click", (event => {
  event.preventDefault;
  var el = listIeleteItem[1].closest("article")//selectionnne l'article le plus proche
  console.log(produitEnregistrerDansLeLocalStorage[1]);
  console.log(el);
}))
listIeleteItem[2].addEventListener("click", (event => {
  event.preventDefault;
  var el = listIeleteItem[2].closest("article")//selectionnne l'article le plus proche
  console.log(produitEnregistrerDansLeLocalStorage[2]);
  console.log(el);
}))
  //delete el;
  //localStorage.removeItem(key)
  // localStorage.removeItem("key")//supretion de la key
  // window.location.href = "http://127.0.0.1:5500/front/html/cart.html"//recharge la page

console.log(localStorage);
// var debutBoucle = 0
// console.log(debutBoucle);
// while (debutBoucle < key.length) {
//   listIeleteItem[debutBoucle].addEventListener("click", (event => {
//     event.preventDefault;
//     console.log( debutBoucle +' zeae');

//   }))
//   debutBoucle++
// }


//var elt = element.closest(selecteurs);


// console.log(listBtn_sup[1]);
//var btn_sup = document.querySelector(".deleteItem")
//console.log(btn_sup);


// var m = 0
// while (m < key.length) {
//   listBtn_sup[m].addEventListener("click", (event => {
//     event.preventDefault;
//     console.log('zeae');
// var el = btn_sup.closest("article")//selectionnne l'article le plus proche
//console.log(el);
//console.log(produitEnregistrerDansLeLocalStorage[debutBoucle]);
//localStorage.removeItem("key");//supretion de la key
//window.location.href = "http://127.0.0.1:5500/front/html/cart.html"//recharge la page
//   }))
//   m++
// }





//var btn_sup = document.querySelector(".deleteItem")
//btn_sup.addEventListener("click", (event => {
//event.preventDefault;
//var el = btn_sup.closest("article")//selectionnne l'article le plus proche
//console.log(el);

//}))


//********************************************************************les calcul quantité & price********************************************************************

//--------------------------------quantity
var debutBoucle = 0
let quantityArray = [];
while (debutBoucle < key.length) {

  //modif a apporter
  quantityArray.push(key[debutBoucle].quantity)


  debutBoucle++
}
console.log(quantityArray);
var reducer = (accumulator, curenceValue) => accumulator + curenceValue
const quantiteTotal = quantityArray.reduce(reducer);

totalQuantity.textContent = quantiteTotal

//--------------------------------price
let priceArray = [];
var debutBoucle = 0
while (debutBoucle < key.length) {
  var priceTotalArticle = key[debutBoucle].price * quantityArray[debutBoucle]//quantiter * prix
  priceArray.push(priceTotalArticle)
  debutBoucle++
}
console.log(priceArray);
var reducerPrice = (accumulator, curenceValue) => accumulator + curenceValue
const priceTotal = priceArray.reduce(reducerPrice);

totalPrice.textContent = priceTotal


//********************************************************************reg Exp********************************************************************

//--------------------------------rexExp firstName
let firstName = document.getElementById("firstName")
firstName.addEventListener("change", function () {
  validFirstName(this);
})
const validFirstName = function (firstName) {
  let testFirsName = false
  //commencez avec une maj
  if (!/^[A-Z]/.test(firstName.value)) {//! si il n'y as pas c'est faux & debut
    firstNameErrorMsg.textContent = "Commencez avec une majuscule"
    return false
  }
  //au mois 3 caractere
  else if (firstName.value.length < 2) {
    firstNameErrorMsg.textContent = "Pas assez de caratere"
    return false
  }
  //au moins une minuscule
  else if (!/[a-z]/.test(firstName.value)) {
    firstNameErrorMsg.textContent = "Il manque une minuscule"
    return false
  }
  else if (firstName.value.length > 45) {
    firstNameErrorMsg.textContent = "Il y a trop de caractere"
    return false
  }
  //firstName valide
  else {
    testFirsName = true
    return true
  }
}

//--------------------------------rexExp lastName
let lastName = document.getElementById("lastName")
lastName.addEventListener("change", function () {
  validLastName(this);
})
const validLastName = function (lastName) {
  let testlastName = false
  //commencez avec une maj
  if (!/^[A-Z]/.test(lastName.value)) {
    lastNameErrorMsg.textContent = "Commencez avec une majuscule"
    return false
  }
  //au mois 3 caractere
  else if (lastName.value.length < 2) {//inputPasword
    lastNameErrorMsg.textContent = "Pas assez de caratere"
    return false
  }
  //au moins une minuscule
  else if (!/[a-z]/.test(lastName.value)) {
    lastNameErrorMsg.textContent = "Il manque une minuscule"
    return false
  }
  else if (lastName.value.length > 45) {
    lastNameErrorMsg.textContent = "Il y a trop de caractere"
    return false
    //lastName valide
  }
  else {
    testlastName = true
    return true
  }
}

//--------------------------------rexExp address
let address = document.getElementById("address")
address.addEventListener("change", function () {
  validAddress(this);
})
const validAddress = function (address) {
  let testAddress = false
  //commencez avec une maj
  //au mois 3 caractere
  if (address.value.length < 2) {
    addressErrorMsg.textContent = "Pas assez de caratere"
    return false
  }
  //au moins une minuscule
  else if (!/[a-z]/.test(address.value)) {
    addressErrorMsg.textContent = "Il manque une minuscule"
    return false
  }
  else if (address.value.length > 45) {
    addressErrorMsg.textContent = "Il y a trop de caractere"
    return false
  }
  //mdp valide
  else {
    testAddress = true
    return true
  }
}

//--------------------------------rexExp city
let city = document.getElementById("city")
city.addEventListener("change", function () {
  validCity(this);
})
const validCity = function (city) {
  let testCity = false
  //commencez avec une maj
  if (!/^[A-Z]/.test(lastName.value)) {
    cityErrorMsg.textContent = "Commencez avec une majuscule"
    return false
  }
  else if (city.value.length < 2) {//inputPasword
    cityErrorMsg.textContent = "Pas assez de caratere"
    return false
  }
  //au moins une minuscule
  else if (!/[a-z]/.test(city.value)) {
    cityErrorMsg.textContent = "Il manque une minuscule"
    return false
  }
  //nombre dee caractere limit
  else if (city.value.length > 45) {
    cityErrorMsg.textContent = "Il y a trop de caractere"
    return false
  }
  //city valide
  else {
    testCity = true
    return true
  }
}

//--------------------------------rexExp email
let email = document.getElementById("email")
email.addEventListener("change", function () {
  validEmail(this)
})
const validEmail = function (inputEmail) {
  //création regExp  E-mail
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    //"g"
    //  ^[] au début on doit commencer a → z ou A → Z ou 0 →9 ou on oeut metre des . - _ et le  + signifit que l'on peut les utiliser plusieur fois
    //  [@]{1} un doit avoir un @ 1 fois
    //$ fin de la RegEX (expression reguliere)
  )

  //--------------------------------affichage si pb mail
  let testEmail = emailRegExp.test(inputEmail.value)
  //console.log(testEmail);

  if (testEmail == true) {
    return true
  }
  else {
    emailErrorMsg.textContent = "Adresse Mail Non Valide"
    return false
  }
}
  ;




////********************************************************************La gestion de commande//********************************************************************

//selectionner le btn dans le dom
const Commander = document.querySelector("#order")
//écouter le btn et envoyer dans le panier
Commander.addEventListener("click", (event) => {
  event.preventDefault();


  //--------------------------------condition d'envoie de formulaire 



  console.log(validEmail(email))
  console.log(validCity(city));
  console.log(validAddress(address));
  console.log(validLastName(lastName));
  console.log(validFirstName(firstName));

  if (validEmail(email) && validCity(city) && validAddress(address) && validLastName(lastName) && validFirstName(firstName) == true) {



    //--------------------------------commande
    const Command = {
      "firstName": firstName.value,
      "lastName": lastName.value,
      "address": address.value,
      "price": city.value,
      "city": city.value,
      "email": email.value,
      "panier": produitEnregistrerDansLeLocalStorage,
    };
    console.log(Command);

    ////********************************************************************local storage//********************************************************************

    let CommandDansLeLocalStorage = JSON.parse(localStorage.getItem("key"));//JSON.parse pour convertir JSON en JAVASCIPT

    //--------------------------------pop-UP de validation
    const popUp = () => {
      if (window.confirm((lastName.value) + " " + (firstName.value) + "\n" + "Votre commande a bien été pris en compte pour la validé cliqué sur OK" + "\n" + "ou pour l\'annuler cliquée sur \"annuler\""))
        window.location.href = "http://127.0.0.1:5500/front/html/confirmation.html";//----A MODIFIER
    }

    if (CommandDansLeLocalStorage) {//si y a des produit dans le local storage on rajoute un objet 
      CommandDansLeLocalStorage.push(Command);
      localStorage.setItem("CommandEnregistre", JSON.stringify(CommandDansLeLocalStorage));
      popUp();
    }
    else {
      CommandDansLeLocalStorage = [];//sinon on creer  le tableau vide
      CommandDansLeLocalStorage.replace(Command)//on creer la clef
      localStorage.setItem("CommandEnregistre", JSON.stringify(CommandDansLeLocalStorage));
      popUp();
    }
  }

});
//}
