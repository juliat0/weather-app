
<script>
import Weather from "./components/Weather.vue";


export default {
  components: {
    Weather,
  },
  }
</script>
<template>
  <Weather lat="35.6895" lon="139.6917"/>
<main>
<RouterView />
</main>
</template>
