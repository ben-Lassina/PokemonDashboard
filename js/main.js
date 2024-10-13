const pokemonImage = document.getElementById("js--pokemon-image");
let randomNumber = Math.floor(Math.random() * 250 + 1);

// Fetch random Pokémon
let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
    .then(response => response.json())
    .then(realData => {
        pokemonImage.setAttribute("src", realData.sprites.front_default);
    });

const catchButton = document.getElementById("js--catch-button");
const resetButton = document.createElement("button"); // Create a reset button
resetButton.innerText = "Catch Another Pokémon";
resetButton.style.display = "none"; // Initially hidden
resetButton.className = "reset-button"; // Add class for styling
document.body.appendChild(resetButton); // Add to the body

const pokemonText = document.getElementById("js--pokemon-text");
let pokemonGamePlayed = false;

const funFacts = [
    "Pikachu is the mascot of Pokémon!",
    "Bulbasaur is the first Pokémon in the National Pokédex!",
    "Charmander's tail flame indicates its health.",
    "Squirtle can live up to 70 years.",
    "Eevee has eight different evolution forms!",
    "Snorlax can weigh over 1,000 pounds!",
    "Gengar is known as the Shadow Pokémon and is said to steal the life of its victims.",
    "Ditto can transform into any Pokémon, but it can't duplicate the original's moves.",
    "Mewtwo was created from the DNA of Mew, the first Pokémon.",
    "Jigglypuff can put others to sleep by singing a lullaby.",
    "Charizard can fly at an altitude of 4,600 feet.",
    "Lucario can sense auras, allowing it to read the feelings of others.",
    "Psyduck suffers from frequent headaches, which can trigger its psychic powers.",
    "Gardevoir can sense the future and will protect its trainer from danger.",
    "Lapras is known for its ability to ferry people across water.",
    "Meowth can speak human language and has a special skill of walking on two legs.",
    "Togepi is said to bring good luck to those who care for it.",
    "Greninja is known for its speed and agility in battle.",
    "Wailord is the largest Pokémon and can be as long as a bus!",
    "Zubat has over 1,000 variations in its appearance due to its habitat."
];


catchButton.onclick = function () {
    if (!pokemonGamePlayed) {
        let catchNumber = Math.floor(Math.random() * 2);
        if (catchNumber === 0) {
            pokemonText.innerText = "Pokemon fled!";
        } else {
            pokemonText.innerText = "Pokemon caught! " + funFacts[Math.floor(Math.random() * funFacts.length)];
            resetButton.style.display = "block"; // Show the reset button
        }
        pokemonGamePlayed = true;
    }
}


resetButton.onclick = function () {
    location.reload(); 
}

const nameText = document.getElementById("js--name");
const inputField = document.getElementById("js--input");
inputField.onkeyup = function (event) {
    if (event.keyCode === 13) {
        let name = inputField.value;
        // API call to age predictor
        let age = fetch("https://api.agify.io?name=" + name)
            .then(response => response.json())
            .then(echteData => {
                nameText.innerText = `Predicted Age: ${echteData.age}`;
                inputField.style.display = "none";
            });
    }
}


let simpsons = fetch("https://www.tvmaze.com/shows/83/the-simpsons")
    .then(response => response.json());

const labels = ["Power", "Speed", "HP", "Attack", "Defense"];
const stats = {
    labels: labels,
    datasets: [{
        label: "Pokémon Stats",
        data: [83, 77, 120, 93, 68],
        backgroundColor: ["#E86A33", "#D21312", "#C21010", "#3E7C17", "#125C13"]
    }]
};

const config = {
    type: 'bar',
    data: stats,
    options: {
        animation: {
            duration: 1000,
            easing: 'easeInOutBounce' 
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};
const pokemonChart = new Chart(document.getElementById("js--pokemonchart"), config);

const labels1 = ["Charizard", "Gardevoir", "Sylveon", "Lucario", "Gengar"];
const searches = {
    labels: labels1,
    datasets: [{
        label: "Most Popular Pokémon in 2022",
        data: [240700, 158400, 136200, 113500, 113000],
        backgroundColor: ["#EA5C2B", "#C7E9B0", "#FFABAB", "#607EAA", "#917FB3"]
    }]
};

const config1 = {
    type: 'line',
    data: searches,
    options: {
        animation: {
            duration: 1000,
            easing: 'easeInOutBounce' 
        },
    }
};
const pokemonSearch = new Chart(document.getElementById("js--evolvechart"), config1);

const labels2 = ["Spongebob Squarepants", "Avatar: The Last Airbender", "Teen Titans", "The Simpsons", "Foster's Home for Imaginary Friends"];
const shows = {
    labels: labels2,
    datasets: [{
        label: "Top 5 Cartoons",
        data: [13, 3, 5, 34, 6],
        backgroundColor: ["#62CDFF", "#D21312", "#38E54D", "#FFFF00", "#FDF4F5"]
    }]
};

const config2 = {
    type: 'bar',
    data: shows,
    options: {
        animation: {
            duration: 1000,
            easing: 'easeInOutBounce' 
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};
const tvChart = new Chart(document.getElementById("js--tvchart"), config2);
