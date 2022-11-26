// // variables
// let cours = ` coco text`;
// console.log(cours + `  // avant MAJ`);

// cours = `test coco coco`;
// console.log(cours + `  // après MAJ`);

// const prenom = `Mounir`;
// console.log(prenom);

// // fonctions
// function faireQuelqueChose() {
//     console.log(`je fais un truc`);
// }
// // autre methode
// faireQuelqueChose();
// //autre methode
// const faireUneTache=(type) => {
//     console.log(`je fait une tache : ` + type);
// }
// faireUneTache(`resultat de type  `);
// faireQuelqueChose();
// *************************************

const btn = document.querySelector(`#btn`);
const img = document.getElementById(`img`);

btn.addEventListener(`click` , () => {
    img.classList.toggle(`show`)
    alert(`Ca a change`);
})

// **********************************

const mouseEvent = document.querySelector(`.mouseEvent`);
const horizonal = document.querySelector[`.horizontal`];
const verticale  = document.querySelector[`.vertical`];

mouseEvent.addEventListener(`mousemove`, (e) => {
    horizonal.innerHTML = e.x;
    verticale.innerHTML = e.y;
    mouseEvent.style.left = e.x / window.innerWidth * 100 + "%";
})


{
    return console.log(`"something ${a}"`);
}
giveMeSomething("is better than nothing");
giveMeSomething("Bob Jane");
GiveMeSomething("something");