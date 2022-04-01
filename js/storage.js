
function saveProducts(basket){
    localStorage.setItem ("basket",JSON.stringify(basket));//transform en JSON
  }
  //return JSON.parse transforme le JSON en objet
  function getBasket(){
    let basket = localStorage.getItem("basket")//on creer le panier (par defaut y a pas + clef= basket
    if(basket==null){//si le panier est null creer un tableau vide
      return[]
    }else{
      return JSON.parse(basket)//on recupere le tableau existant en JSON que lon en obj
    }
    }
  
  addBasket ({id:"50",name:"pigeon",price:23.99})
  function addBaket (product){
    let baket = getBasket();
    basket.push(product);//on ajoute la clef dans le tableau
    saveBaket(basket)//enregistre la new clef
  }