
let produitEnregistrerDansLeLocalStorage = JSON.parse(localStorage.getItem("key"));//JSON.parse pour convertir JSON en JAVASCIPT
console.log(produitEnregistrerDansLeLocalStorage);

var key = produitEnregistrerDansLeLocalStorage

//********************************************************************boucle de construction********************************************************************

var debutBoucle = 0

function panierVide(message_vide) {
  var article = document.createElement("article");
  article.classList.add("cart__item")
  cart__items.appendChild(article);
  var itemAbs = document.createElement("p")
  itemAbs.textContent = "Votre panier est vide"
  article.appendChild(itemAbs)
}

if (key == null || key.length == 0) {
  panierVide()
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

//********************************************************************les calcul quantité & price********************************************************************
console.log(""); console.log("Quanntité & prix");

//--------------------------------quantity

if (key != null) {
  function calculQuantity(keyQuantity) {
    let quantiteTotal = 0;
    for (let debutBoucle = 0; debutBoucle < key.length; debutBoucle++) {
      quantiteTotal += Number(key[debutBoucle].quantity);
    }
    console.log(quantiteTotal);
    totalQuantity.textContent = quantiteTotal
  }
  calculQuantity()
  //-------------------------------prix
  var priceArray = []

  function calculPrice(price) {
    var debutBoucle = 0;
    priceArray.length = 0;///reset la taille du tableau
    while (debutBoucle < key.length) {
      var priceTotalArticle = Number(key[debutBoucle].price * key[debutBoucle].quantity);
      priceArray.push(priceTotalArticle);
      debutBoucle++;
    }
    var prixTotal = 0;
    for (let debutBoucle = 0; debutBoucle < priceArray.length; debutBoucle++) {

      prixTotal += Number(priceArray[debutBoucle]);
    }
    console.log(prixTotal);
    totalPrice.textContent = prixTotal;
  }
  calculPrice();
}
//*****************************************************************mise a jour de quantite*****************************************************************

console.log("");
console.log("Mise a jour quantité");
var inputQuantit = document.getElementsByClassName('itemQuantity');
console.log(inputQuantit);
for (let debutBoucle = 0; debutBoucle < inputQuantit.length; debutBoucle++) {
  inputQuantit[debutBoucle].addEventListener("change", function () {
    functionInput(this);
  })
  const functionInput = function (inputQuantit) {
    if (key[debutBoucle].quantity != inputQuantit.value) {
      key[debutBoucle].quantity = inputQuantit.value;
      localStorage.setItem("key", JSON.stringify(produitEnregistrerDansLeLocalStorage));
    }
    console.log("----------NEW QUANTITE----------");
    console.log(key);
    calculQuantity();
    calculPrice();
    console.log(key[debutBoucle].quantity);
    console.log(key[debutBoucle].price);
  }
}

//********************************************************************Btn Sup Erreur*****************************************************************
console.log(""); console.log("Bouton supprimer");

const listDeleteItem = document.getElementsByClassName('deleteItem');
console.log(listDeleteItem);//mes bouton supprimer

for (let debutBoucle = 0; debutBoucle < listDeleteItem.length; debutBoucle++) {
  listDeleteItem[debutBoucle].addEventListener("click", function () {
    functionSup(this);
  })
  const functionSup = function (btnSup) {
    console.log(listDeleteItem);//ok
    console.log(listDeleteItem.length);
    console.log(debutBoucle);//ok
    console.log(listDeleteItem[debutBoucle]);
    console.log(el);//selectionnne l'article le plus proche
    var el = listDeleteItem[debutBoucle].closest("article");
    el.remove();//suprime l'element du dome
    key.splice(0, 1);
    //test
    calculQuantity();
    calculPrice();
    console.log("-------- Apres Supretion --------");
    console.log(key);
    //supprimer la quantité et le prix
    localStorage.setItem("key", JSON.stringify(produitEnregistrerDansLeLocalStorage));
    console.log(debutBoucle);

    //----------------palie une erreur 
    if (listDeleteItem.length == 1) {
      //   window.location.href = "http://127.0.0.1:5500/front/html/cart.html";
      window.location.reload()
    }
    //----------------

    if (listDeleteItem.length == 0) {
      panierVide(); //panier vide
    }
  }
}

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
    firstNameErrorMsg.textContent = ""

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
    lastNameErrorMsg.textContent = ""

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
    addressErrorMsg.textContent = ""

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
  if (!/^[A-Z]/.test(city.value)) {
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
    cityErrorMsg.textContent = ""
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
    emailErrorMsg.textContent = ""

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

    let produits = []
    produitEnregistrerDansLeLocalStorage.forEach(element => {//element = ligne produi local storage
      if (!produits.includes(element._id)) {//element _id n'es pas dans tableau alors on push
        produits.push(element._id)
      }
    });
    console.log(produits);




    let envoi = {
      contact: {
        firstName: firstName.value,
        lastName: lastName.value,
        address: address.value,
        city: city.value,
        email: email.value,
      },
      products: produits,
    }
    console.log(envoi);
    envoi = JSON.stringify(envoi)
    ////********************************************************************local storage//********************************************************************

    fetch("http://localhost:3000/api/products/order", {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      // mode: "no-cors",
      body: (envoi)
    })
      .then(reponse => reponse.json())
      .then(resultat => {
        console.log(resultat);
        window.location.href = "../html/confirmation.html?orderId=" + (resultat.orderId);
        //recuperer le resultat pour la confirm
      })

  }// si form ok

});