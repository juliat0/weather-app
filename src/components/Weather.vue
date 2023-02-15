<script>
  export default {

    props: ['lat', 'lon'],

  created() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&units=metric&appid=71a5072e9ccf183e0eb6d30ff86b258d`)
      .then((response) => response.json())
      .then((result) => {
        this.place = result.name;
        this.weatherTemp = result.main.temp;
        this.description = result.weather[0].description;
        this.feelLike = result.main.feels_like;
        let weatherIcon = result.weather[0].main


        if(weatherIcon == 'Mist'){
          this.mist = true;
        }
        if(weatherIcon == 'Thunderstorm'){
          this.thunderstorm = true;
        }
        if(weatherIcon == 'Drizzle'){
          this.raining = true;
        }
        if(weatherIcon == 'Rain'){
          this.raining = true;
        }
        if(weatherIcon == 'Snow'){
          this.snow = true;
        }
        if(weatherIcon == 'Clear'){
          this.sunny = true;
        }
        if(weatherIcon == 'Clouds'){
          this.cloudy = true;
        }
        if(weatherIcon == 'Fog'){
          this.fog = true;
        }
      });
  },
  data() {
    return {
      feelLike: null,
      cloudy: false,
      fog: false,
      mist: false,
      raining: false,
      snow: false,
      sunny: false,
      thunderstorm: false,
    };
  },
};
</script>
<template>
  <div id="weather">
  <div id="weather-box">
  <h1 id="city-name">{{ place }}</h1>
  <p> {{ description }}</p>
  <img class="icon" v-if="cloudy" alt="Cloudy" src="/assets/cloudy.png" />
  <img class="icon" v-if="fog" alt="Fog" src="/assets/fog.png" />
  <img class="icon" v-if="mist" alt="Mist" src="/assets/mist.png" />
  <img class="icon" v-if="raining" alt="Rain" src="/assets/raining.png" />
  <img class="icon" v-if="snow" alt="Snow" src="/assets/snow.png" />
  <img class="icon" v-if="sunny" alt="Sun" src="/assets/sun.png" />
  <img class="icon" v-if="thunderstorm" alt="Thunderstorm" src="/assets/thunderstorm.png" />
  <p> {{ weatherTemp }} °C</p>
  <p> Feels like {{ feelLike }}</p>

</div>
</div>
</template>
<style lang="scss">
$primary-color: beige;
#weather-box {
  background-color:$primary-color;
  display:flex ;
  align-items: center;
flex-direction: column;
width: 20rem;
height: auto;
border-radius: 25px;
}
#weather {
  padding-top: 3rem;
  display: flex;
  justify-content: space-around;
}
.icon {
  width: 15rem;

}
</style>
