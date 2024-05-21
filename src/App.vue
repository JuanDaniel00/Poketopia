<template>
  <div class="main-container">
    <section class="pokemon-section">
      <div class="pokemon-container">
        <div class="pokemon-name">
          <img class="pokemon-image" :src="imgPokemon" alt="" />
          <h1 class="name-pokemon">{{ namePokemon }}</h1>
        </div>
        <div class="pokemon-details">
          <div class="pokemon-types">
            <div v-for="(tipo, i) in types" :key="i" class="div-type">
              <img :src=tipo alt="Pokemon Type" />
            </div>
          </div>
          <div class="pokemon-id">
            <p># {{ idPokemon }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="pokemon-stats-section">
      <div class="pokemon-finder">
        <div class="div-finder">
          <input type="text" placeholder="Buscar Pokemon" id="findPokemon" v-model="findPokemon" />
          <button @click="find()">Buscar</button>
        </div>
      </div>
      <div class="pokemon-stats">
        <div class="cont-stats">
          <div class="screen-pokemon">
            <div class="div-name-pokemon-screen">
              <h2>{{ namePokemon }}</h2>
              <h3>{{ idPokemon }}</h3>
            </div>
            <div class="div-image-pokemon-screen">
              <img :src="imgPokemon" alt="Image Pokemon" />
            </div>
            <div class="div-types-pokemon-screen">
              <div class="pokemon-types-screen">
                <img src="" alt="Img types" />
              </div>
            </div>
          </div>
          <div class="stats-pokemon">
            <div class="div-weigth-height">
              <div class="div-weight">
                <h3>Peso</h3>
                <p>(icono) {{ weight }}</p>
              </div>
              <div class="div-height">
                <h3>Altura</h3>
                <p>(icono) {{ height }}</p>
              </div>
            </div>
            <div class="div-stats">
              <div class="div-stats-1">
                <ul>
                  <li>(icono) Hp</li>
                  <li>(icono) Ataque</li>
                  <li>(icono) Defensa</li>
                </ul>
              </div>
              <div class="div-stats-2">
                <ul>
                  <li>(icono) Velocidad</li>
                  <li>(icono) Ataque Especial</li>
                  <li>(icono) Defensa Especial</li>
                </ul>
              </div>
            </div>
            <div class="div-buttons-decoratives">
              <div class="button-dPad"></div>
              <div class="button-abcd"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

.main-container {
  padding-top: 150px;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ff6e6e;
}

.pokemon-section {
  height: 100vh;
}

.pokemon-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.pokemon-name {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
  height: 10vh;
  margin: 1em 0 1em 0;
}

.pokemon-name img {
  width: 320px;
  position: absolute;
  top: 160%;
  left: 60%;
  filter: drop-shadow(8px 8px 10px rgba(0, 0, 0, 0.63));
  z-index: 1;
}

.name-pokemon {
  letter-spacing: 15px;
}

.pokemon-details {
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: row;
  margin-left: 4%;
}

.pokemon-types {
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: row;
}

.div-type {
  margin: 5px;
}

.pokemon-id {
  margin: 3px 0 0 10px;
}

.pokemon-id p {
  font-weight: bolder;
  font-size: 1em;
}

.pokemon-stats-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
}

.cont-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 90vw;
  background-color: #ff6e6e;
}

.screen-pokemon {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
}

.stats-pokemon {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
}
</style>

<script setup>
import axios from "axios";
import { ref } from "vue";
let findPokemon = ref("");
let namePokemon = ref("");
let imgPokemon = ref("");
let idPokemon = ref("");
let types = ref([]);
let weight = ref("");
let height = ref("");
let stats = ref("[]");

async function find() {
  types.value = [];
  if (this.findPokemon) {
    let res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${this.findPokemon}`
    );
    imgPokemon.value = res.data.sprites.other["official-artwork"].front_default;
    namePokemon.value = res.data.name.toUpperCase();
    idPokemon.value = res.data.id;
    res.data.types.forEach((element) => {
      switch (element.type.name) {
        case "fire":
          types.value.push("/img/fire.png");
          break;
        case "water":
          types.value.push("/img/agua.png");
          break;
        case "grass":
          types.value.push("/img/planta.png");
          break;
        case "electric":
          types.value.push("/img/electrico.png");
          break;
        case "ice":
          types.value.push("/img/hielo.png");
          break;
        case "fighting":
          types.value.push("/img/lucha.png");
          break;
        case "poison":
          types.value.push("/img/veneno.png");
          break;
        case "ground":
          types.value.push("/img/tierra.png");
          break;
        case "flying":
          types.value.push("/img/volador.png");
          break;
        case "psychic":
          types.value.push("/img/psiquico.png");
          break;
        case "bug":
          types.value.push("/img/bicho.png");
          break;
        case "rock":
          types.value.push("/img/roca.png");
          break;
        case "ghost":
          types.value.push("/img/fantasma.png");
          break;
        case "dragon":
          types.value.push("/img/dragon.png");
          break;
        case "dark":
          types.value.push("/img/siniestro.png");
          break;
        case "steel":
          types.value.push("/img/acero.png");
          break;
        case "fairy":
          types.value.push("/img/hada.png");
          break;
        case "normal":
          types.value.push("/img/normal.png")
        default:
          break;
      }
      console.log(types);
    });
    weight.value = res.data.weight;
    height.value = res.data.height;
  }
}
</script>
