//EXEMPLE 1 non bon
/**Retourne la valeur du select selectId*/
// function getSelectValue(selectId)
// {
// 	/**On récupère l'élement html <select>*/
// 	var selectElmt = document.getElementById(selectId);
// 	/**
// 	selectElmt.options correspond au tableau des balises <option> du select
// 	selectElmt.selectedIndex correspond à l'index du tableau options qui est actuellement sélectionné
// 	*/
// 	return selectElmt.options[selectElmt.selectedIndex].value;
// }
// var selectValue = getSelectValue('identifiantDeMonSelect');
// console.log(selectValue);
//


//2 ex fonctionne
/*
function Recup_select_info(obj,choix_rech){
    var idx = obj.selectedIndex;
    if((choix_rech) && (choix_rech == 'valeur')){ return obj.options[idx].value;} // récupère valeur du select
    else if((choix_rech) && (choix_rech == 'texte')){ return obj.options[idx].innerHTML;} // récupère le contenu html du select
    else{ return idx;} // récupère l'index de position dans le tableau select
}
console.log(Recup_select_info);

function remplissageAuto(obj) {
    var valeur_alias = Recup_select_info(obj);
    valeur_alias += '\n\n'+Recup_select_info(obj,'valeur');
    valeur_alias += '\n\n'+Recup_select_info(obj,'texte');
    alert(valeur_alias);
    console.log(remplissageAuto);
}
*/

var selectElmt = document.getElementById("ComboPays");
var valeurselectionnee = selectElmt.options[selectElmt.selectedIndex].value;
var textselectionne = selectElmt.options[selectElmt.selectedIndex].text;
console.log(valeurselectionnee);//value
console.log(textselectionne);
function Recup_select_info(obj,choix_rech){
    var idx = obj.selectedIndex;
    if((choix_rech) && (choix_rech == 'valeur')){ return obj.options[idx].value;} // récupère valeur du select
    else if((choix_rech) && (choix_rech == 'texte')){ return obj.options[idx].innerHTML;} // récupère le contenu html du select
    else{ return idx;} // récupère l'index de position dans le tableau select
}

function remplissageAuto(obj) {
    var valeur_alias = Recup_select_info(obj);
    //valeur_alias += Recup_select_info(obj,'valeur');
    //valeur_alias += Recup_select_info(obj,'texte');
    console.log(valeur_alias);

}

