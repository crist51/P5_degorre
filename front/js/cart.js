
let produitEnregistrerDansLeLocalStorage = JSON.parse(localStorage.getItem("key"));//JSON.parse pour convertir JSON en JAVASCIPT
console.log(produitEnregistrerDansLeLocalStorage);


//--------------création carte produit
var article = document.createElement("article");
article.classList.add("cart__item")
cart__items.appendChild(article);

    //création div [img]
    var cart__item__img
    = document.createElement("div")
    cart__item__img.classList.add("cart__item__img")
    article.appendChild(cart__item__img)
    
        var img =document.createElement(img)
        img.src = "#"
        img.alt = "#"
        cart__item__img.appendChild(img)


    //partit1 création div [non],[option],[price],
    var cart__items__content = document.createElement("div")
    cart__items__content.classList.add("cart__items__content")
    article.appendChild(cart__items__content)

        var cart__item__content__description = document.createElement("div")
        cart__item__content__description.classList.add("cart__item__content__description")
        cart__items__content.appendChild(cart__item__content__description)

            var h2 = document.createElement("h2")
            h2.textContent = "h2test"
            cart__item__content__description.appendChild(h2)


            var p1 = document.createElement("p")
            p1.textContent = "p1Test"
            cart__item__content__description.appendChild(p1)


            var p2 = document.createElement("p")
            p2.textContent = "p2Test"
            cart__item__content__description.appendChild(p2)

        //--------------partit2 quantité
        var cart__items__content__seetings = document.createElement("div")
        cart__items__content__seetings.classList.add("cart__items__content__seetings")
        cart__items__content.appendChild(cart__items__content__seetings)

            //--------------quantité
              var description = document.createElement("div")
              description.classList.add("cart__item__content__settings__quantity")
              cart__items__content__seetings.appendChild(description)

                  var qte = document.createElement("p")
                  qte.textContent = "qté";
                  description.appendChild(qte)

                  var quantite = document.createElement("input");
                  quantite.type = "number"
                  quantite.name = "itemQuantity"
                  quantite.min = "1"
                  quantite.max = "100"
                  quantite.value = "42"
                  quantite.classList.add("itemQuantity")
                  description.appendChild(quantite)

                //--------------supprimer
                var seeting = document.createElement("div")
                seeting.classList.add("cart__item__content__settings__delete")
                cart__items__content__seetings.appendChild(seeting)

                    var sup = document.createElement("p")
                    sup.classList.add("ListdeleteItem")
                    sup.textContent = "Supprimer"
                    seeting.appendChild(sup)

