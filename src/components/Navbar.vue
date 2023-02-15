<template>
    <div class="pos-f-t"> <!-- Navbar from Bootstrap -->
      <div class="collapse" :class="{ show: showMenu }" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <h4 class="text-white"><RouterLink class="nav-link" to="/">Home</RouterLink></h4>
          <h4 class="text-white"><RouterLink class="nav-link" to="/gothenburg">Gothenburg</RouterLink></h4>
          <h4 class="text-white"><RouterLink class="nav-link" to="/newyork">New York</RouterLink></h4>
          <h4 class="text-white"><RouterLink class="nav-link" to="/paris">Paris</RouterLink></h4>
          <h4 class="text-white"><RouterLink class="nav-link" to="/stockholm">Stockholm</RouterLink></h4>
          <h4 class="text-white"><RouterLink class="nav-link" to="/tokyo">Tokyo</RouterLink></h4>
          <h4 class="text-white"><RouterLink class="nav-link" to="/other">A list</RouterLink></h4>
        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" @click="toggleMenu">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div>
        <input type="text" name="lat" id="lat" placeholder="Latitude" v-model="lat">
        <input type="text" name="lon" id="lon" placeholder="Longitude" v-model="lon">
        <button @click="search">Search</button>

    </div>
      </nav>
    </div>
    <Weather v-if="showWeather" :lat="lat" :lon="lon"/>
  </template>
  <script>
import Weather from './Weather.vue';
  export default {
    components: {
    Weather,
  },
    data() {
      return {
        showMenu: false,
        lat: '',
      lon: '',
      showWeather: false,
      };
    },
    methods: {
      toggleMenu() {
        this.showMenu = !this.showMenu;
      },
      search() {
      this.showWeather = true;
    },
    },
  };
  </script>
