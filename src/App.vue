<script setup>
</script>

<template>
  <div class="main-container">
    <section class="pokemon-section">
      <div class="pokemon-container">
        <div class="pokemon-name">
          <img class="pokemon-image" src="" alt="Image Pokemon" />
          <h1 class="pokemon-name">Nombre Pokemon</h1>
        </div>
        <div class="pokemon-details">
          <div class="pokemon-types">
            <img alt="Pokemon Types" />
          </div>
          <div class="pokemon-id">
            <h2>Id pokemon</h2>
          </div>
        </div>
      </div>
    </section>
    <section class="pokemon-stats-section">
      <div class="pokemon-finder">
        <div class="div-finder">
          <input type="text" placeholder="Buscar Pokemon" />
          <button>Buscar</button>
        </div>
      </div>
      <div class="pokemon-stats">
        <div class="div-stats">
          <div class="screen-pokemon">
            <div class="div-name-pokemon-screen">
              <h2>Nombre Pokemon</h2>
              <h3>id pokemon</h3>
            </div>
            <div class="div-image-pokemon-screen">
              <img src="" alt="Image Pokemon" />
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
                <p>(icono) peso pokemon</p>
              </div>
              <div class="div-height">
                <h3>Altura</h3>
                <p>(icono) altura pokemon</p>
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
</style>
