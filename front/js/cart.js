
let produitEnregistrerDansLeLocalStorage = JSON.parse(localStorage.getItem("key"));//JSON.parse pour convertir JSON en JAVASCIPT
console.log(produitEnregistrerDansLeLocalStorage);

console.log();

var key = produitEnregistrerDansLeLocalStorage

//---------------boucle de construction
var debutBoucle = 0

if (key == null) {
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

    //création div [img]
    var cart__item__img
      = document.createElement("div")
    cart__item__img.classList.add("cart__item__img")
    article.appendChild(cart__item__img)

    var image = document.createElement("img")
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

    //const a = document.getElementsByClassName(deleteItem);
    //console.log(Sup);//btn qui pertmet la suppretion
    console.log(key[debutBoucle]);//objet de boucle a sup
    //console.log(a);

    // sup.addEventListener("click",(event)=>{
    // event.preventDefault()
    // delete key[debutBoucle]//a la place de "."[] peut etre
    // });

    debutBoucle++
  }

  //--------------les calcul quantité & price

  //--------------------------------quantite
  var debutBoucle = 0
  let quantityArray = [];
  while (debutBoucle < key.length) {
    console.log(key[debutBoucle].quantity);
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
    console.log(key[debutBoucle].price);
    var priceTotalArticle = key[debutBoucle].price * quantityArray[debutBoucle]//quantiter * prix
    priceArray.push(priceTotalArticle)
    debutBoucle++
  }
  console.log(priceArray);
  var reducerPrice = (accumulator, curenceValue) => accumulator + curenceValue
  const priceTotal = priceArray.reduce(reducerPrice);

  totalPrice.textContent = priceTotal
  console.log(priceTotal);



  //-----------------La gestion de commande


  //selectionner le btn dans le dom
  const Commander = document.querySelector("#order")
  console.log(order);
  //écouter le btn et envoyer dans le panier
  Commander.addEventListener("click", (event) => {
    event.preventDefault();

    ////-----------------condition d'envoi de command

    var firstName = document.getElementById("firstName").value

    var lastName = document.getElementById("lastName").value

    var address = document.getElementById("address").value

    var city = document.getElementById("city").value

    var email = document.getElementById("email").value

    //-----------------condition d'envoie de formulaire 
    var a = 0
    if ( firstName.length == a || lastName.length == a || address.length == a || city.length == a || email.length == a){
      console.log("Si a n'a pas asser de caracter, j'affiche les erreur");
      if (firstName.length == a) {
        firstNameErrorMsg.textContent = "Prénom manquant";

      } else { }

      if (lastName.length == a) {
        lastNameErrorMsg.textContent = "Nom manquant";

      } else { }

      if (address.length == a) {
        addressErrorMsg.textContent = "Veullez noter adresse";
      } else { }

      if (city.length == a) {
        cityErrorMsg.textContent = "Veullez indiquer votre ville";

      } else { }

      if (email.length == a) {
        emailErrorMsg.textContent = "Veuillez mentionner votre adresse mail";

      } else { }

    } else {
      console.log("sinom j'envoie le form");


    const Command = {//optionsProduit
      "firstName": firstName,
      "lastName": lastName,
      "address": address,
      "price": city,
      "city": city,
      "email": email,
      "panier": produitEnregistrerDansLeLocalStorage
    };
    console.log(Command);

    //-------------------------local storage

    let CommandDansLeLocalStorage = JSON.parse(localStorage.getItem("key"));//JSON.parse pour convertir JSON en JAVASCIPT

    //popUP création
    // 
    const popUp = () => {
      // if(window.confirm("{reponceAPI.name} option: ${colorSelect} a bien été ajouté au panier consulter le panier OK ou ANNULER afin de continuer vos achat")){
      if (window.confirm((firstName) + (lastName) + "\n" + "Votre commande a bien été pris en compte pour la validé cliqué sur OK" + "\n" + "ou pour l\'annuler cliquée sur \"annuler\""))
        window.location.href = "http://127.0.0.1:5500/front/html/confirmation.html";//----A MODIFIER
    }

    if (CommandDansLeLocalStorage) {//si y a des produit dans le local storage on rajoute un objet 
      CommandDansLeLocalStorage.push(Command);
      localStorage.setItem("CommandEnregistre", JSON.stringify(CommandDansLeLocalStorage));
      //JSON.stringify convertit le JAVASCRIPT en JSON
      popUp();
    }
    else {
      CommandDansLeLocalStorage = [];//sinon on creer  la clef
      CommandDansLeLocalStorage.replace(Command)//push
      localStorage.setItem("CommandEnregistre", JSON.stringify(CommandDansLeLocalStorage));
      popUp();
    }
    }//else
  });//btn



  /*
    if (firstName.length < 0) {
    } else {
      firstNameErrorMsg.textContent = "Prénom manquant";
    }
  
    if (lastName.length < 0) {
  
    } else {
      lastNameErrorMsg.textContent = "Nom manquant";
    }
  
    if (address.length < 0) {
  
    } else {
      addressErrorMsg.textContent = "Veullez noter adresse";
    }
  
    if (city.length < 0) {
  
    } else {
      cityErrorMsg.textContent = "Prénom manquant";
    }
  
    if (email.length < 0) {
  
    } else {
      emailErrorMsg.textContent = "Veuillez mentionnez votre adresse mail";
    }
  */

}