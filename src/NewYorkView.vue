
<script>
import Weather from "./components/Weather.vue";


export default {
  components: {
    Weather,
  },
  }
</script>
<template>
  <Weather lat="40.71427" lon="-74.00597"/>
<main>
<RouterView />
</main>
</template>
