<!-- Representa el html (Estructura) -->
<template>
  <div id="app">
    <div class="header">
      <h1>Hotel Mintic</h1>
      <h2>Hotelmintic@gmail.com 300123456</h2>
        <nav>
          <button v-on:click="verreservas" > Consultar reserva </button> 
          <button v-on:click="agregarreservas" > Agregar Reserva </button>
          <button v-on:click="borrarreservas" > Borrar Reserva </button>
          
        </nav>
    </div>
    <router-view></router-view>
    <div class="footer">
      <h2>Gracias por preferirnos</h2>
    </div>
  </div>
</template>

<!-- Representa el js (Comportamiento) -->
<script>
import AgregarReserva from "./components/AgregarReserva";
import VerReservas from "./components/VerReservas";
import EliminarReserva from "./components/EliminarReserva";
  export default {
    name: 'App',
    components: { AgregarReserva, VerReservas, EliminarReserva},
    
    methods: {
      verreservas: function(){
        if(this.$route.name != "verReservas"){
          this.$router.push({name: "verReservas"})
      }  

    },

      agregarreservas: function(){
        if(this.$route.name != "agregarReserva"){
          this.$router.push({
            name:"agregarReserva", 
            params:{dato: "Dato creado"}})
          }
      },

      borrarreservas: function(){
        if(this.$route.name != "borrarReservas"){
          this.$router.push({
            name:"borrarReservas", 
            params:{dato: "Dato eliminado"}})
          }
      },
    },
};
</script>

// Representa el css (estilo) -->
<style>
body{
  margin: 0 0 0 0;
}

.header{
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 50px; background-color: #160FBD ; color:#F5ECDA ;
  display: flex;
  justify-content: space-between; align-items: center;
}

.header h1{
  width: 20%;
  text-align: center;
}
.header h2{
  width: 20%;
  text-align: center;
}

.header nav {
  height: 100%;
  width: 45%;
  display: flex; 
  justify-content: space-around; 
  align-items: center;
  font-size: 20px;
}

.header nav button{
  color: #F5ECDA;
  background: #24BD28;
  border: 1px solid #A41DE0;
  border-radius: 100px;
  padding: 10px 60px;
}

.header nav button:hover{
  color: #F5ECDA; 
  background: #E5E7E9; 
  border: 5px solid #E5E7E9;
}



.footer{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px; 
  background-color: #8014F5; 
  color: #F5ECDA;
}

.footer h2{
  width: 100%;
  height: 100%;
  display: flex; 
  justify-content: center; 
  align-items: center;
}


</style>
