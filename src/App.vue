<template>
  <div class="main-container">
    <section class="fake" v-show="!namePokemon && !imgPokemon">

    </section>
    <section class="pokemon-section" v-show="namePokemon && imgPokemon">
      <div class="pokemon-container">
        <div class="pokemon-name">
          <h1 class="name-pokemon">{{ namePokemon }}</h1>
        </div>
        <div class="pokemon-details">
          <div class="pokemon-types">
            <div v-for="(tipo, i) in types" :key="i" class="div-type">
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
            <q-btn @click="find()" class="btn">
              <q-icon name="las la-search"></q-icon>
            </q-btn>
          </div>
        </div>
        <div class="pokemon-stats">
          <div class="cont-stats">
            <div class="screen-pokemon">
              <div class="div-name-pokemon-screen">
                <h2>{{ namePokemon }}</h2>
              </div>
              <div class="div-image-pokemon-screen">
                <img :src="imgPokemonPixelated" alt="" />

              </div>
              <div class="div-types-pokemon-screen">
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
      </div>
    </section>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'Pokemon Solid';
  src: url('/fonts/Pokemon Solid.ttf') format('truetype');
}

@font-face {
  font-family: "Flexo-Medium";
  src: url('/fonts/Flexo-Medium.ttf') format('truetype');
}

@font-face {
  font-family: "Pixelify Sans";
  src: url('fonts/PixelifySans-VariableFont_wght.ttf') format('truetype');
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.main-container {
  padding-top: 50px;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  background-color: #c5c8c4;
}

.fake {
  height: 39vh;
  width: 100%;
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
  background-color: rgb(131, 221, 76);
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
  letter-spacing: 10px;
  font-size: 12vh;
  font-weight: bolder;
}

.cont-pokemon-image img {
  width: 29vw;
  position: absolute;
  top: 17vh;
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
  width: 8vw;
}

.pokemon-id {
  font-size: 11vw;
  margin-top: 6%;
  position: relative;
  font-weight: bolder;
  display: flex;
  color: #0e220693;
  left: 8%;
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
  height: 100%;
}

.pokemon-finder {
  display: flex;
  align-items: end;
  justify-content: end;
  width: 100%;
  padding-top: 10px;
  background-color: rgb(130, 16, 39);
  clip-path: polygon(61% 0, 100% 0, 100% 100%, 37% 100%)
}

.div-finder {
  display: flex;
  align-items: center;
  justify-content: end;
  width: 60%;
  height: 9vh;
  background-color: crimson;
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
  background-color: #1f2131;
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
  height: 60%;
  background-color: #481010 !important;
  border: none;
  color: white;
  font-size: 2vh;
  cursor: pointer;
  border-radius: 0 10px 10px 0;

}

.b q-icon {
  font-size: 2vh;
}

.pokemon-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  background-color: rgb(130, 16, 39);
  padding: .3% 0 .3% 0;
}

.cont-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: crimson;
  width: 99%;
  height: 100%;
}

.screen-pokemon {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 35%;
  height: 90%;
  padding: 15px;
  background-color: #1f2131;
  border-radius: 10px;
  border: 5px solid #5a110f;
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
  position: relative;

}

.div-image-pokemon-screen img {
  width: 120px;
  filter: drop-shadow(8px 8px 10px rgba(0, 0, 0, 0.63));
  position: absolute;
}

.div-types-pokemon-screen {
  display: flex;
  align-items: space-between;
  justify-content: space-between;
  width: 100%;
}

.types-pokemon-screen-id h3{
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
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 90%;
  padding: 15px;
}

.div-weigth-height {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 33%;
}

.div-weight {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
}

.div-height {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}


</style>

<script setup>
import axios from "axios";
import { ref } from "vue";
let findPokemon = ref("");
let namePokemon = ref("");
let imgPokemon = ref("");
let imgPokemonPixelated = ref("");
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
    imgPokemonPixelated.value = res.data.sprites.other.showdown.front_default;
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
