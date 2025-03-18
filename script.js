document.addEventListener("DOMContentLoaded", function() {
fetch('pokemon.json')
    .then(x => x.json())
    .then(data => {
        //Checking if the JSON works.
        console.log("Data fetched:", data);
        if (!Array.isArray(data)) {
            throw new Error(`Expected an array but got ${typeof data}: ` + JSON.stringify(data));
        }

        data.forEach(pokeData => {
            const pokemon = new Pokemon(pokeData.name, pokeData.type, pokeData.dexNum);
            //Function .display() will be made later.
            pokemon.display();
        })
    });
});

//Setting up the colors for Pokemon types.
const typeColors = {
    "Bug": "#a6ff00",
    "Water": "#19a6f7",
    "Grass": "#28d456",
    "Rock": "#ba9b65",
    "Electric": "#fffb03",
    "Psychic": "#d448f7",
    "Normal": "#ffefad",
    "Poison": "#9644ab",
    "Fighting": "#ff8121",
    "Flying": "#ccfff1",
    "Ghost": "#b89eb5",
    "Ice": "#5ef7e5",
    "Ground": "#c48c31",
    "Fire": "#ff2d26",
    "Dragon": "#4f46d4",
    "Steel": "#bdbdbd",
    "Dark": "#4f392f",
    "Fairy": "#f9bbfc"
};

class Pokemon {
    constructor(name, type, dexNum) {
        this.name = name;
        this.type = type;
        this.dexNum = dexNum;
    }
    //Display function.
    display() {
        //Div containing the Pokemon info
        const pokeBox = document.createElement('div');
        pokeBox.classList.add('pokemon');
        //Setting the background color based on the pokemon's first type.
        const firstType = this.type[0];
        pokeBox.style.backgroundColor = typeColors[firstType];
        //Making the text color white when the Pokemon is a dark type.
        if (firstType === "Dark") {
            pokeBox.style.color = "#FFFFFF"; 
        }

        //Pokemon's Name
        const title = document.createElement('h1');
        title.textContent = this.name;
        
        //Pokemon's Type
        const typeSect = document.createElement('div');
        typeSect.classList.add('typeSect');
        this.type.forEach(t => {
            const typeElement = document.createElement('p');
            typeElement.classList.add('stats');
            typeElement.textContent = t;
            typeSect.appendChild(typeElement);
        });

        const image = document.createElement('img');
        //REALLY cool way of adding pokemon images, I deserve brownie points for this at least!
        image.src = `https://img.pokemondb.net/sprites/black-white/normal/${this.name.toLowerCase()}.png`;
        image.alt = this.name;

        //Appending the elements.
        pokeBox.appendChild(title);
        pokeBox.appendChild(typeSect);
        pokeBox.appendChild(image);

        document.body.appendChild(pokeBox);

        //GSAP hopping animation
        //Using math to make it so intervals of hopping happen every few seconds based off the Pokemon's dex number.
        const hop = Math.max(0.5, Math.random() * (this.dexNum * 0.25));
        
        gsap.to(pokeBox, {
            y: -10,
            duration: 0.5,
            yoyo: true,
            repeat: -1,
            ease: "power1.inOut",
            delay: hop
        });
    }
}

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