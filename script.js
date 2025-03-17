document.addEventListener("DOMContentLoaded", function() {
fetch('pokemon.json')
    .then(x => x.text())
    .then(y => {
        //Do the stuff here
        console.log(y) //Just for testing
    });
});

// Practice
// class Pokemon {
//     constructor(pName, pType){
//         this.pName = pName;
//         this.pType = pType;
//     }
//     getPokemon() {
//         console.log(this.pName, this.pType);
//     }
// }

// const sunny = new Pokemon('Sunekern', 'Grass');
// console.log(sunny);