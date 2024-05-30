<template>
  <div class="main-container" :style="{ backgroundColor: colorContenedorPrincipal }">
    <div class="background-layer">
      <section class="pokemon-section" v-show="namePokemon && imgPokemon">
        <div class="pokemon-container" :style="{ backgroundColor: colorContenedorPokemon }">
          <div class="pokemon-name">
            <p class="name-pokemon">{{ namePokemon }}</p>
          </div>
          <div class="pokemon-details">
            <div class="pokemon-types">
              <div v-for="(tipo, i) in types2" :key="i" class="div-type">
                <img :src=tipo alt="Pokemon Type" />
              </div>
            </div>
          </div>
        </div>
        <div class="cont-pokemon-image">
          <p class="pokemon-id">{{ idPokemon ? "#" + idPokemon : '' }}</p>
          <img class="pokemon-image" :src="imgPokemon" alt="" />
        </div>
      </section>
      <section class="pokemon-stats-section">
        <div class="cont-pokemon-stats">
          <div class="pokemon-finder">
            <div class="div-finder">
              <input type="text" id="findPokemon" v-model="findPokemon" />
              <button @click="find()" class="btn">
                <q-icon name="las la-search"></q-icon>
              </button>
            </div>
          </div>
          <div class="pokemon-stats">
            <div class="cont-stats">
              <div class="screen-pokemon">
                <div class="div-image-pokemon-screen" v-show="idPokemon < 921">
                  <img :src="imgPokemonPixelated" alt="" />

                </div>
                <div class="div-types-pokemon-screen" v-if="idPokemon < 921">
                  <div class="div-types-pokemon">
                    <div v-for="(tipo, i) in types" :key="i" class="pokemon-types-screen">
                      <img :src=tipo alt="" />
                    </div>
                  </div>
                </div>
                <div class="style-screen" v-else>
                  <div class="types-pokemon-screen-id">
                    <h3>{{ idPokemon ? "#" + idPokemon : '' }}</h3>
                  </div>
                  <div class="div-types-pokemon">
                    <div v-for="(tipo, i) in types" :key="i" class="pokemon-types-screen">
                      <img :src=tipo alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="stats-pokemon">
                <div class="div-weigth-height">
                  <div class="div-weight">
                    <h4>Peso:</h4>
                    <div class="weight-data">
                      <p><i v-if="weight" class="fa-solid fa-weight-hanging"></i> {{ weight / 10 + "kg" }} </p>
                    </div>
                  </div>
                  <div class="div-height">
                    <h4>Altura:</h4>
                    <div class="height-data">
                      <p><i v-if="height" class="fa-solid fa-ruler"></i> {{ height / 10 + "m" }} </p>
                    </div>
                  </div>
                </div>
                <div class="div-stats">
                  <div class="div-stats-1">
                    <ul class="stat-list">
                      <li v-for="stat in firstStats" :key="stat.stat.name" class="stat-item">
                        <div class="div-name-stat">
                          <span class="stat-name"><q-icon :name="getIcon(stat.stat.name)" class="q-mr-sm"></q-icon>{{
                            stat.stat.name }}</span>
                          <span class="stat-value">{{ stat.base_stat }}</span>
                        </div>
                        <div class="div-bar-stat">
                          <q-linear-progress :value="stat.base_stat / 150" color="teal" size="25px" rounded
                            class="q-ml-md" />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="div-stats-2">
                    <ul class="stat-list">
                      <li v-for="stat in secondStats" :key="stat.stat.name" class="stat-item">
                        <div class="div-name-stat">
                          <span class="stat-name"><q-icon :name="getIcon(stat.stat.name)" class="q-mr-sm"></q-icon>{{
                            stat.stat.name }}</span>
                          <span class="stat-value">{{ stat.base_stat }}</span>
                        </div>
                        <div class="div-bar-stat">
                          <q-linear-progress :value="stat.base_stat / 150" color="teal" size="25px" rounded
                            class="q-ml-md" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'Pokemon Solid';
  src: url('../fonts/Pokemon Solid.ttf') format('truetype');
}

@font-face {
  font-family: "Flexo-Medium";
  src: url('../fonts/Flexo-Medium.ttf') format('truetype');
}

@font-face {
  font-family: "Pixelify Sans";
  src: url('../fonts/PixelifySans-VariableFont_wght.ttf') format('truetype');
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.main-container {
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: start;
  justify-content: end;
}

.background-layer {
  padding-top: 51px;
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: start;
  justify-content: end;
}

.main-container .background-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    linear-gradient(to bottom right, #848584, #e2dada),
    /* Degradado (ajusta colores según tipo) */
    repeating-radial-gradient(circle at 20% 80%, #0e2206, transparent 10px);
  /* Textura */
  z-index: 1;
  /* Detrás del contenido */
}

.main-container .background-layer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  z-index: 1;
}

.pokemon-section {
  height: 100vh;
  font-family: 'Flexo-Medium', sans-serif;
}

.pokemon-container {
  display: flex;
  align-self: start;
  justify-content: center;
  flex-direction: column;
  height: auto;
  width: 100%;
  padding: 1vw 6vw 1vw 2vw;
  clip-path: polygon(0 100%, 0 0, 100% 0, 85% 100%);
  border-left: #0e2206 solid 10px;
}

.pokemon-name {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
}

.name-pokemon {
  letter-spacing: 7px;
  font-size: 7vh;
  font-weight: bolder;
}

.cont-pokemon-image img {
  width: 40vh;
  position: absolute;
  top: 8vh;
  right: 7%;
  filter: drop-shadow(8px 8px 10px rgba(0, 0, 0, 0.63));
  z-index: 1;
}

.pokemon-details {
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: row;
  margin-left: 2%;
}

.pokemon-types {
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: row;
  height: 100%;
}

.div-type {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
}

.div-type img {
  width: 8vh;
}

.pokemon-id {
  font-size: 6vw;
  margin-top: 7%;
  position: relative;
  font-weight: bolder;
  display: flex;
  color: #0e220693;
  padding-left: 5%;
  z-index: 1;
  letter-spacing: 45px;
  font-family: 'Pokemon Solid', sans-serif;
}

.pokemon-stats-section {
  width: 100%;
  z-index: 1;
  font-family: 'Pixelify Sans', sans-serif;
}

.cont-pokemon-stats {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.pokemon-finder {
  display: flex;
  align-items: end;
  justify-content: end;
  width: 100%;
  padding-top: 6px;
  background-color: #88061C;
  clip-path: polygon(61% 0, 100% 0, 100% 100%, 37% 100%)
}

.div-finder {
  display: flex;
  align-items: center;
  justify-content: end;
  width: 60%;
  height: 5vh;
  background-color: #DC0A2D;
  border-radius: 10px;
  padding-right: 1vw;
  margin-right: .6%;
  clip-path: polygon(36% 0, 100% 0, 100% 100%, 0 100%, 0 100%);

}

.div-finder input {
  width: 60%;
  height: 60%;
  border: none;
  font-size: 2vh;
  color: white;
  background-color: #232323;
  text-align: center;
  font-family: 'Pixelify Sans', sans-serif;
  border-radius: 10px 0 0 10px;
  padding: 0 1vw;
}

.div-finder input::placeholder {
  text-align: center;
  color: #758c0d;
}

.btn {
  height: 66%;
  width: 5%;
  background-color: #28AAFD !important;
  border: none;
  color: white;
  font-size: 2vh;
  cursor: pointer;
  border-radius: 0 10px 10px 0;
}

.btn q-icon {
  font-size: 4vh !important;
  color: white;
  cursor: pointer;
  font-weight: bolder;
}

.pokemon-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40vh;
  background-color: #88061C;
  padding: .3% 0 .3% 0;
}

.cont-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #DC0A2D;
  border-radius: 10px;
  width: 99%;
  height: 100%;
}

.screen-pokemon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 15%;
  height: 90%;
  padding: 15px;
  background-color: #232323;
  border-radius: 10px;
  border: 2px solid #0a1635;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.692);
  /* Sombra */
}

.div-name-pokemon-screen {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}

.div-name-pokemon-screen h2 {
  font-size: 3em;
  color: white;
  letter-spacing: 5px;
}

.div-image-pokemon-screen {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
  position: relative;
}

.div-image-pokemon-screen img {
  width: 6vw;
  position: absolute;
}

.div-types-pokemon-screen {
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
}

.style-screen {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}

.types-pokemon-screen-id h3 {
  font-size: 2em;
  color: rgb(182, 182, 182);
  letter-spacing: 5px;
}

.div-types-pokemon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.stats-pokemon {
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: row-reverse;
  width: 80%;
  height: 90%;
  gap: 2vw;
}

.div-weigth-height {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 15%;
  background-color: #232323;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.692);
  border: #0a1635 solid 2px;
}


.div-weight {
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  width: 100%;
  gap: 10px;
}


.div-height h4,
.div-weight h4 {
  font-size: 1.3em;
  color: white;
  letter-spacing: 2px;
}

.div-height p,
.div-weight p {
  font-size: 1em;
  color: white;
  letter-spacing: 2px;
}


.div-height {
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  width: 100%;
  gap: 10px;
}

.div-stats {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 80%;
  height: 100%;
  background-color: #232323;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.692);
  border: #0a1635 solid 2px;
  padding: 15px;
}

.div-stats-1 {
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  width: 50%;
}

.div-stats-2 {
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  width: 50%;
}

.div-stats ul {
  width: 90%;
  list-style: none;
  color: white;
}

.div-stats li {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 3%;
}

.div-name-stat {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.stat-name {
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 1.3em;
  letter-spacing: 2px;
}

.stat-value {
  font-size: 1.3em;
  letter-spacing: 2px;
}

.div-bar-stat {
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
}

.q-ml-md {
  margin-left: 1em;
  height: 0.4em;
}



@media (max-width: 1230px) {

  .div-weigth-height {
    width: 15%;
  }

  .div-height {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0;
  }

  .div-weight p,
  i {
    font-size: 1em;
  }

  .div-weight {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0;
  }

  .div-height p,
  i {
    font-size: 1em;
  }

  .div-stats {
    width: 80%;
  }

}

@media (max-width: 970px) {

  .div-weight h4,
  .div-height h4 {
    display: none;
  }

  .btn {
    width: 9%;
  }


}

@media (max-width: 745px) {

  .name-pokemon {
    font-size: 3vh;
  }

  .cont-pokemon-image img {
    width: 25vh;
    top: 25%
  }

  .cont-stats {
    padding: .5em 0;
    gap: 1em;
    flex-direction: column;
    align-items: start;
  }

  .div-stats {
    width: 100%;
  }

  .screen-pokemon {
    width: 45%;
    height: 100%;
    padding: 15px;
    flex-direction: row;
    justify-content: center;
  }

  .div-types-pokemon-screen {
    width: 45%;
    height: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: end;
  }

  .div-image-pokemon-screen {
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 50%;
  }

  .div-image-pokemon-screen img {
    width: 13vw;
  }

  .stats-pokemon {
    width: 100%;
    height: 45%;
    flex-direction: column;
    align-items: end;
  }

  .div-weigth-height {
    height: 20%;
    width: 45%;
    padding: 15px;
    flex-direction: row;
    margin-top: 1em;
  }


  .stat-name {
    display: flex;
    align-items: center;
    justify-content: start;
    font-size: 1em;
    letter-spacing: 2px;
  }

  .stat-value {
    font-size: 1em;
    letter-spacing: 2px;
  }


  .q-ml-md {
    margin-left: 1em;
    height: 0.4em;
  }


}

@media (max-width: 440px) {
  .stats-pokemon {
    height: 52%;
  }

  .div-weigth-height {
    width: 50%;
  }

  .cont-pokemon-image img {
    width: 25vh;
  }

  .name-pokemon {
    font-size: 3vh;
  }

  .q-ml-md {
    margin-left: 1em;
    height: 0.3em;
  }


  .stat-name {
    display: flex;
    align-items: center;
    justify-content: start;
    font-size: .8em;
    letter-spacing: 2px;
  }

  .stat-value {
    font-size: .8em;
    letter-spacing: 2px;
  }

  .pokemon-types-screen img {
    width: 9vh;
  }

}
</style>

<script setup>
import axios from "axios";
import { ref, computed } from "vue";

let findPokemon = ref("");
let namePokemon = ref("");
let imgPokemon = ref("");
let imgPokemonPixelated = ref("");
let idPokemon = ref("");
let types = ref([]);
let types2 = ref([]);
let weight = ref("");
let height = ref("");
let stats = ref([]);

const firstStats = computed(() => stats.value.slice(0, 3)); // First 3 stats
const secondStats = computed(() => stats.value.slice(3));  // Remaining stats

let colorContenedorPrincipal = ref("#c5c8c4"); // Color de fondo predeterminado
let colorContenedorPokemon = ref("#fff");  // Color de contenedor predeterminado

async function find() {
  let res;
  types.value = [];
  types2.value = [];
  if (findPokemon.value) {
    res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${findPokemon.value.toLowerCase()}`
    );
    imgPokemon.value = res.data.sprites.other["official-artwork"].front_default;
    imgPokemonPixelated.value = res.data.sprites.other.showdown.front_default;
    namePokemon.value = res.data.name.toUpperCase();
    idPokemon.value = res.data.id;
    res.data.types.forEach((element) => {
      switch (element.type.name) {
        case "fire":
          types.value.push("./img/fire.png");
          break;
        case "water":
          types.value.push("./img/agua.png");
          break;
        case "grass":
          types.value.push("./img/planta.png");
          break;
        case "electric":
          types.value.push("./img/electrico.png");
          break;
        case "ice":
          types.value.push("./img/hielo.png");
          break;
        case "fighting":
          types.value.push("./img/lucha.png");
          break;
        case "poison":
          types.value.push("./img/veneno.png");
          break;
        case "ground":
          types.value.push("./img/tierra.png");
          break;
        case "flying":
          types.value.push("./img/volador.png");
          break;
        case "psychic":
          types.value.push("./img/psiquico.png");
          break;
        case "bug":
          types.value.push("./img/bicho.png");
          break;
        case "rock":
          types.value.push("./img/roca.png");
          break;
        case "ghost":
          types.value.push("./img/fantasma.png");
          break;
        case "dragon":
          types.value.push("./img/dragon.png");
          break;
        case "dark":
          types.value.push("./img/siniestro.png");
          break;
        case "steel":
          types.value.push("./img/acero.png");
          break;
        case "fairy":
          types.value.push("./img/hada.png");
          break;
        case "normal":
          types.value.push("./img/normal.png")
          break;
        default:
          break;
      }
      console.log(types);
    });

    res.data.types.forEach((element) => {
      switch (element.type.name) {
        case "fire":
          types2.value.push("./img/fire.svg");
          break;
        case "water":
          types2.value.push("./img/water.svg");
          break;
        case "grass":
          types2.value.push("./img/grass.svg");
          break;
        case "electric":
          types2.value.push("./img/electric.svg");
          break;
        case "ice":
          types2.value.push("./img/ice.svg");
          break;
        case "fighting":
          types2.value.push("./img/fighting.svg");
          break;
        case "poison":
          types2.value.push("./img/poison.svg");
          break;
        case "ground":
          types2.value.push("./img/ground.svg");
          break;
        case "flying":
          types2.value.push("./img/flying.svg");
          break;
        case "psychic":
          types2.value.push("./img/psychic.svg");
          break;
        case "bug":
          types2.value.push("./img/bug.svg");
          break;
        case "rock":
          types2.value.push("./img/rock.svg");
          break;
        case "ghost":
          types2.value.push("./img/ghost.svg");
          break;
        case "dragon":
          types2.value.push("./img/dragon.svg");
          break;
        case "dark":
          types2.value.push("./img/dark.svg");
          break;
        case "steel":
          types2.value.push("./img/steel.svg");
          break;
        case "fairy":
          types2.value.push("./img/fairy.svg");
          break;
        case "normal":
          types2.value.push("./img/normal.svg");
          break;
        default:
          break;
      }
    });
    stats.value = res.data.stats;
    weight.value = res.data.weight;
    height.value = res.data.height;
  }
  const tipoPrincipal = res?.data?.types?.[0]?.type?.name || "normal";
  [colorContenedorPrincipal.value, colorContenedorPokemon.value] = obtenerColoresTipo(tipoPrincipal);
}

function obtenerColoresTipo(tipo) {
  const coloresTipo = {
    fire: ["#F08030", "#F5AC78"],
    water: ["#6890F0", "#9DB7F5"],
    grass: ["#78C850", "#A7DB8D"],
    electric: ["#F8D030", "#FAE078"],
    ice: ["#98D8D8", "#BCE6E6"],
    fighting: ["#C03028", "#D67873"],
    poison: ["#A040A0", "#C183C1"],
    ground: ["#E0C068", "#EBD69D"],
    flying: ["#A890F0", "#C6B7F5"],
    psychic: ["#F85888", "#FA92B2"],
    bug: ["#A8B820", "#C6D16E"],
    rock: ["#B8A038", "#D1C17D"],
    ghost: ["#705898", "#A292BC"],
    dragon: ["#7038F8", "#A27DFA"],
    dark: ["#705848", "#A29288"],
    steel: ["#B8B8D0", "#D1D1E0"],
    fairy: ["#EE99AC", "#F4BDC9"],
    normal: ["#A8A878", "#C6C6A1"]
  };
  const backgroundLayer = document.querySelector('.main-container .background-layer');
  if (backgroundLayer) {
    backgroundLayer.style.background = `linear-gradient(to bottom right, ${coloresTipo[tipo][0]}, ${coloresTipo[tipo][1]}), repeating-radial-gradient(circle at 20% 80%, #0e2206, transparent 10px)`;
  }

  return coloresTipo[tipo] || ["#c5c8c4", "#fff"];
}

function getIcon(statName) {
  const icons = {
    hp: 'las la-heart',
    attack: 'las la-fist-raised',
    defense: 'las la-shield-alt',
    speed: 'las la-running',
    'special-attack': 'las la-bolt',
    'special-defense': 'las la-hat-wizard'
  };
  return icons[statName] || 'las la-question'; // Icono por defecto si no se encuentra
}

</script>
