// // // ceci un commentaire

// // /* debut de commentaire 
// // fin de commentaire*/

// console.log("Hello");

// let maVariableSuperCool = "kamelCase";

// console.log(maVariableSuperCool);

// // // les variables 
// var unText = "voici un text";

// console.log(unText);

// unText = "Nouveau text";

// // // constante ne bouge pas 
// const prenom = "mounir";


// let unChiffre =24;
// unChiffre = 13;
// console.log(unChiffre)


// let chaine = "je suis chaine de caractère";
// let nouvelleChaine = "le chiffre attendu est: "
//  + chaine + "+ une autre chaine de caractère";
// console.log(nouvelleChaine);

// // une autre methode sur le même principe avec $

// let age = 41 ; 
// let nowchaine = `mon age est : ${age} ans` ;
// console.log(nowchaine);


// // chaine des caractère
// // let string = "je suis une chaine";
// // let number = 24;
// // let boolean = true;
// // let array = {"je", "suis", 24, false};

// // let object = {
// //     prenom: "mounir",
// //     age: 41,
// //     ville: "ariana",
// // };

// // // declaration d'un variable n'est pas define
// // let arbre = null;

// // console.log(typeof arbre);

// // les variables
// console.log(2+3);

// console.log(2-3);
// console.log(2*3);
// console.log(2**3);

// let total = 2;
// let x = 4;
// total++;
// --total;
// --total;
// --total;
// total *= 5;
// total /= 5;
// total += 5;

// total = ++x;
// console.log(total);


// let m = 7;
// let y = 5;
//  v 
// // if (m < y) {
// //     console.log("m est inférieur à y");
// // } else {
// //     console.log("y est superieur à m")
// // }

// // si m = a y ou m superieur y et m inferieur a y
// if (m === y || m > 3 && m < y) {
//     console.log("True !");
// } else {
//     console.log("false !");
// }


// // les fonctions
// function faireQuelqueChose () {
//     console.log("je fais un truc");
//     console.log("trop cool");
//     console.log("HHHH");
// }
// faireQuelqueChose ();

// const faireUneTache = (tache) => {
//     console.log("je fais : " + tache);

// };

// faireUneTache("les courses");
// faireUneTache("les etudes");
// faireUneTache("la prospection");




// // probabilite
// (function maFonction() {
//     console.log("je me joue toute seule");
// })();

// (() => {
//     console.log("je me sour aussi");
// })();


// function add2(){
//     let a = 4;    
//     console.log(a);
//     return a + 2;
// };
// add2();

// let total2 = 0;

// function addition(x) {
//     total2 += x;
//     return total2;
// }

// function soustraction(x) {
//     total2 -= x;
//     return total2;
// }

// function divition(x) {
//     if (total2 === 0){
//         return (total2 = x)
//     }else {
//     total2 /= x;
//     return total2;
//     }
// }

// function multiplication(x) {
//     if (total2 === 0){
//         return (total2 = x)
//     }else {
//     total2 *= x;
//     return total2;
//     }
// }

// function reset() {
//     total2 = 0;
// }

// let a = -2
// let b = 10
// let c = -5
// let d = 4


// function checkIfNumber( x ){
//     if ( typeof x === 'number' ){
//         console.log( x + ' is a number.' ); 
//     } else {
//         console.log("Oops that's not a number.");
// 	}
// }

// switch

// var grade = "g";

// if(grade == "A"){
//     console.log("you did great!");
// }
// else if(grade == "B"){
//     console.log("you did goog");
// }
// else if(grade == "C"){
//     console.log("you did okay");
// }
// else if(grade == "D"){
//     console.log("you ... did not do that well");
// }
// else if(grade == "F"){
//     console.log("you failed");
// }
// else{
//     console.log(grade, "is not letter grade");
// }



// switch (grade) {

//     case "A"
//         console.log("you did great!");
//         break;

//     case "B"
//         console.log("you did goog");
//         break;

//     case "C"
//         console.log("you did okay");
//         break;

//     case "D"
//         console.log("you ... did not do that well");
//         break;
    
//     default(grade, "is not letter grade");
   
// }

// var i =  2;
// while (i <= 20){
//     console.log("log", i)
//     i += 2;
// }
//     console.log("la nouvelle valeur de i est i", i);

var numbers = [19,65,1,2,6,1,9,9,2,1];
var sum = 0;

for (var i in numbers){
    sum += numbers[i];
}