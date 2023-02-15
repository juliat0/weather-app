
<script>
import Weather from "./components/Weather.vue";


export default {
  components: {
    Weather,
  },
  }
</script>
<template>
  <Weather lat="57.7089" lon="11.9746"/>
<main>
<RouterView />
</main>
</template>
