<script>
import Navbar from "./components/Navbar.vue";
import Weather from "./components/Weather.vue";

export default {
  components: {
    Navbar,
    Weather
  },
  }
</script>

<template>
  <Navbar />
  <Weather :lat="57.7072326" :lon="11.9670171"/>
<main>
  <RouterView />
</main>

</template>
