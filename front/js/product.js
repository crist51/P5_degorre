const products = [
  {
    "colors": ["Blue", "White", "Black"],
    "_id": "107fb5b75607497b96722bda5b504926",
    "name": "Kanap Sinopé",
    "price": 1849,
    "imageUrl": "kanap01.jpeg",
    "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "altTxt": "Photo d'un canapé bleu, deux places"
  },
  {
    "colors": ["Black/Yellow", "Black/Red"],
    "_id": "415b7cacb65d43b2b5c1ff70f3393ad1",
    "name": "Kanap Cyllène",
    "price": 4499,
    "imageUrl": "kanap02.jpeg",
    "description": "Morbi nec erat aliquam, sagittis urna non, laoreet justo. Etiam sit amet interdum diam, at accumsan lectus.",
    "altTxt": "Photo d'un canapé jaune et noir, quattre places"
  },
  {
    "colors": ["Green", "Red", "Orange"],
    "_id": "055743915a544fde83cfdfc904935ee7",
    "name": "Kanap Calycé",
    "price": 3199,
    "_id": "a557292fe5814ea2b15c6ef4bd73ed83",
    "name": "Kanap Autonoé",
    "price": 1499,
    "imageUrl": "kanap04.jpeg",
    "description": "Donec mattis nisl tortor, nec blandit sapien fermentum at. Proin hendrerit efficitur fringilla. Lorem ipsum dolor sit amet.",
    "altTxt": "Photo d'un canapé rose, une à deux place"
  },
  {
    "colors": ["Grey", "Purple", "Blue"],
    "_id": "8906dfda133f4c20a9d0e34f18adcf06",
    "name": "Kanap Eurydomé",
    "price": 2249,
    "imageUrl": "kanap05.jpeg",
    "description": "Ut laoreet vulputate neque in commodo. Suspendisse maximus quis erat in sagittis. Donec hendrerit purus at congue aliquam.",
    "altTxt": "Photo d'un canapé gris, trois places"
  },
  {
    "colors": ["Grey", "Navy"],
    "_id": "77711f0e466b4ddf953f677d30b0efc9",
    "name": "Kanap Hélicé",
    "price": 999,
    "imageUrl": "kanap06.jpeg",
    "description": "Curabitur vel augue sit amet arcu aliquet interdum. Integer vel quam mi. Morbi nec vehicula mi, sit amet vestibulum.",
    "altTxt": "Photo d'un canapé gris, deux places"
  },
  {
    "colors": ["Red", "Silver"],
    "_id": "034707184e8e4eefb46400b5a3774b5f",
    "name": "Kanap Thyoné",
    "price": 1999,
    "imageUrl": "kanap07.jpeg",
    "description": "EMauris imperdiet tellus ante, sit amet pretium turpis molestie eu. Vestibulum et egestas eros. Vestibulum non lacus orci.",
    "altTxt": "Photo d'un canapé rouge, deux places"
  },
  {
    "colors": ["Pink", "Brown", "Yellow", "White"],
    "_id": "a6ec5b49bd164d7fbe10f37b6363f9fb",
    "name": "Kanap orthosie",
    "price": 3999,
    "imageUrl": "kanap08.jpeg",
    "description": "Mauris molestie laoreet finibus. Aenean scelerisque convallis lacus at dapibus. Morbi imperdiet enim metus rhoncus.",
    "altTxt": "Photo d'un canapé rose, trois places"
  }
];



  //LOCALISATION SUR LE HTML A MODIFIER

var ligneObjetProduct = 0;//partit de objet concerné
var numberImgKanap = ligneObjetProduct +1;//image canape
  
  //--------------création lien img
  var kanapImg = document.createElement("img");
  kanapImg.src = "../../back/images/kanap"+ "0" + numberImgKanap +".jpeg";
  kanapImg.alt = (products[ligneObjetProduct].altTxt);

  kanapImg.classList.add("item__img");
  item__img.appendChild(kanapImg);
  
  //--------------création title & price & description

  title.textContent = (products[ligneObjetProduct].name);
price.textContent = (products[ligneObjetProduct].price);
description.textContent = (products[ligneObjetProduct].description);

 
//--------------création des option
var color= 0
while (color < products[ligneObjetProduct].colors.length) {
    console.log(products[ligneObjetProduct].colors[color])
    var colorOption = document.createElement("option");
    colorOption.text = "-- "+ (products[ligneObjetProduct].colors[color] +" --");
    
    colors.appendChild(colorOption);//On ajoute option dans l'ID;
    color++;
}

fetch("http://localhost:3000/api/products/77711f0e466b4ddf953f677d30b0efc9}")
.then(function(response){
  return response.json();
})
.then(function(data){
  console.log(data);
  console.log(ligneObjetProduct);
  console.log(id.name);
  console.log(data[ligneObjetProduct]._id);
  console.log();
  console.log();
});