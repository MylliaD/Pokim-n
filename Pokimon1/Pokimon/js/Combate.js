// Datos de los Pokémon (ejemplo)
const pokemons = [
    { name: "Pikachu", level: 42, hp: 83, imageUrl: "url_de_pikachu.png" },
    { name: "Bulbasaur", level: 15, hp: 45, imageUrl: "url_de_bulbasaur.png" },
    { name: "Charmander", level: 18, hp: 50, imageUrl: "url_de_charmander.png" },
    // ... más Pokémon
];

// Elementos del DOM
const opponentNameLevel = document.querySelector(".opponent-name-level");
const opponentImage = document.getElementById("opponent-image");
const opponentHpBar = document.querySelector(".opponent-hp-bar");
const dialogueText = document.getElementById("dialogue-text");
const playerNameLevel = document.querySelector(".player-name-level");
const playerImage = document.getElementById("player-image");
const playerHpBar = document.querySelector(".player-hp-bar");
const playerHpValue = document.querySelector(".player-hp-value");
const fightBtn = document.getElementById("fight-btn");
// ... otros botones

let playerPokemon;
let opponentPokemon;

function iniciarBatalla() {
    // Seleccionar Pokémon aleatorios
    playerPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];
    opponentPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];

    // Asegurarse de que no sean el mismo Pokémon (opcional)
    while (opponentPokemon === playerPokemon) {
        opponentPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];
    }

    // Actualizar la interfaz
    actualizarPokemon(playerPokemon, "player");
    actualizarPokemon(opponentPokemon, "opponent");
    dialogueText.textContent = `¡Un ${opponentPokemon.name} salvaje apareció!`;
}

function actualizarPokemon(pokemon, tipo) {
    const nameLevelElement = tipo === "player" ? playerNameLevel : opponentNameLevel;
    const imageElement = tipo === "player" ? playerImage : opponentImage;
    const hpBarElement = tipo === "player" ? playerHpBar : opponentHpBar;
    const hpValueElement = tipo === "player" ? playerHpValue : null; // El oponente no suele mostrar HP numérico

    nameLevelElement.textContent = `${pokemon.name} Lv.${pokemon.level}`;
    imageElement.src = pokemon.imageUrl;
    // Calcular el porcentaje de HP para la barra (ejemplo inicial)
    const hpPercentage = (pokemon.hp / (tipo === "player" ? playerPokemon.hp : opponentPokemon.hp)) * 100;
    hpBarElement.style.width = `${hpPercentage}%`;
    hpBarElement.style.backgroundColor = hpPercentage > 50 ? "#4caf50" : hpPercentage > 20 ? "#ffc107" : "#f44336"; // Cambiar color según HP

    if (hpValueElement) {
        hpValueElement.textContent = `${pokemon.hp}/${playerPokemon.hp}`; // Asumiendo que el HP máximo inicial no cambia aquí
    }
}

function simularAtaque() {
    // Lógica para simular un ataque (reducir HP del oponente, etc.)
    if (opponentPokemon.hp > 0) {
        const damage = Math.floor(Math.random() * 20); // Ejemplo de daño aleatorio
        opponentPokemon.hp -= damage;
        if (opponentPokemon.hp < 0) opponentPokemon.hp = 0;
        actualizarPokemon(opponentPokemon, "opponent");
        dialogueText.textContent = `${playerPokemon.name} usó un ataque. ¡${opponentPokemon.name} recibió ${damage} de daño!`;
        if (opponentPokemon.hp === 0) {
            dialogueText.textContent = `¡${opponentPokemon.name} se debilitó!`;
            // Lógica para finalizar la batalla o cambiar al siguiente Pokémon
        }
    }
}

// Event listeners para los botones
fightBtn.addEventListener("click", simularAtaque);
// ... listeners para otros botones

// Iniciar la batalla al cargar la página
iniciarBatalla();