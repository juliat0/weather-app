<template>
    <div id="city">
    <div id="city-box">
    <h2 id="heading">Gothenburg Names </h2>
    <ul>
        <li v-for="city in names" :key="city.name" >{{ city }}</li>
    </ul>
</div>
</div>
</template>
<script>
export default {


created() {
fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=57.7089&lon=11.9746&limit=5&appid=71a5072e9ccf183e0eb6d30ff86b258d`)
  .then((response) => response.json())
  .then((result) => {
    this.names = result[0].local_names
  });
},
data() {
return {
names: []
};
},
};
</script>
<style>
#city-box {
  background-color:beige;
  display:flex ;
  align-items: center;
flex-direction: column;
width: 20rem;
height: auto;
border-radius: 25px;
}
#city {
  padding-top: 3rem;
  display: flex;
  justify-content: space-around;
}
#heading {
    padding: 1rem;
}

</style>
