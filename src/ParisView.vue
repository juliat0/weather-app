
<script>
import Weather from "./components/Weather.vue";


export default {
  components: {
    Weather,
  },
  }
</script>
<template>
  <Weather lat="48.8566" lon="2.3522"/>
<main>
<RouterView />
</main>
</template>
