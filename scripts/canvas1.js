function difRandom(max,min){
    return (Math.floor((max-min)*Math.random())+min)
}

var fonds = ["ZFonds/1.jpg","ZFonds/2.jpg","ZFonds/3.jpg","ZFonds/4.jpg","ZFonds/5.jpg","ZFonds/6.jpg","ZFonds/7.jpg","ZFonds/8.jpg","ZFonds/9.jpg"];
var partis = ["ZPartis/ACL.png","ZPartis/FPD.png","ZPartis/UST.png"];
var visages = ["ZVisages/F1.png","ZVisages/F3.png","ZVisages/F9.png","ZVisages/F12.png","ZVisages/M2.png","ZVisages/M4.png","ZVisages/M5.png","ZVisages/M6.png","ZVisages/M7.png","ZVisages/M8.png","ZVisages/M10.png","ZVisages/M11.png","ZVisages/M13.png","ZVisages/M14.png","ZVisages/M15.png","ZVisages/M16.png"]
var slogans = ["Ensemble,<br>tout est possible!","Plus fort ensemble.","Agir, maintenant!","Pour vivre mieux.","Stop aux abus.","Une politique de confiance.","Rester libre, rester suisse.","Ensemble vers le futur!","Plus fort,<br>plus libre, plus juste.","Pour plus de sécurité.","Un pays libre,<br>des emplois durables!","Pour une Suisse égalitaire."];
var sous_slogans = ["Candidat au Conseil national, liste 10","Candidat au Conseil fédéral, liste 8","Candidat au Conseil municipal, liste 3"];
var noms = ["Grabrielle Cuénoud","Emilie Raymond","Claudia Grangier","Caroline Desplands","Michelle ChevalIey","Christine Bouvier","Jean-Philippe Savary","Christophe Schwarz","Louis Vodoz","Pierre-Olivier Curchod","Pierre Montard","Michel Berger","Bertrand Beguin", "Jules Bernasconi"];

var SexeFace = difRandom(0,visages.length);
var QuelParti = difRandom(0,partis.length);


var container1 = document.getElementById('lefond');
var fond = document.createElement('img');
fond.src = fonds[difRandom(0,fonds.length)];
fond.style.height = "715px";
container1.appendChild(fond);

var container2 = document.getElementById('leparti');
var parti = document.createElement('img');
parti.src = partis[QuelParti];
parti.style.height = "715px";
container2.appendChild(parti);

var container3 = document.getElementById('levisage');
var visage = document.createElement('img');
visage.src = visages[SexeFace];
visage.style.height = "715px";
container3.appendChild(visage);

var container4 = document.getElementById('leslogan');
container4.innerHTML = container4.innerHTML + slogans[difRandom(0,slogans.length)];

var container5 = document.getElementById('lesous_slogan');
container5.innerHTML = container5.innerHTML + sous_slogans[difRandom(0,sous_slogans.length)];

var container6 = document.getElementById('lenom');
if(SexeFace <= 3){container6.innerHTML = container6.innerHTML + noms[difRandom(0,5)];}
else{container6.innerHTML = container6.innerHTML + noms[difRandom(6,noms.length)];}

if(QuelParti == 0){
container4.classList.add("SloganACL");
container5.classList.add("Sous_SloganACL");
container6.classList.add("NomACL");
}

if(QuelParti == 1){
container4.classList.add("SloganFPD");
container5.classList.add("Sous_SloganFPD");
container6.classList.add("NomFPD");
}

if(QuelParti == 2){
container4.classList.add("SloganUST");
container5.classList.add("Sous_SloganUST");
container6.classList.add("NomUST");
}




