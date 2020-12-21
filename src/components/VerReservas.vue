<template>
  <div>
    <h2>Informacion general de todas las reservas</h2>
    <table style="margin: 0 auto;">
      <tr>
        <th>Id</th>
        <th>Nombre</th>
        <th>Fecha de entrada</th>
        <th>Fecha de salida</th>
        <th>Cantidad de noches</th>
        <th>Tipo de habitación</th>
        <th>Personas por habitación</th>
        <th>Número de habitación</th>
        <th>Valor</th>
      </tr>
      <tr v-for="reserve in reservas" v-bind:key="reserve.id">
        <td>{{ reserve.id }}</td>
        <td>{{ reserve.quien_reserva }}</td>
        <td>{{ reserve.fecha_entrada }}</td>
        <td>{{ reserve.fecha_salida }}</td>
        <td>{{ reserve.numero_noches }}</td>
        <td>{{ reserve.tipo_habitacion }}</td>
        <td>{{ reserve.numero_personas }}</td>
        <td>{{ reserve.numero_habitacion }}</td>
        <td>{{ reserve.precio }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "VerReservas",
  data: function() {
    return {
      reservas: []
    };
  },
  beforeCreate: function() {
    axios
      .get("https://hotelmintic.herokuapp.com/reservas/")
      .then(respuesta => {
        this.reservas = respuesta.data;
      })
      .catch(error => {
        console.log(error);
        alert("Error en la peticion con codigo" + error.response.status);
      });
  }
};
</script>

<style scoped>
h2{
  width: 100%;
  align-items: center;
  color: #8014F5;
  font-family: "Trebuchet MS", Verdana, Arial, Helvetica, sans-serif;
  text-align: center;
  
}
table {
   width: 50%;
   border: 1px solid #000;
}
th, td {
   width: 25%;
   text-align: center;
   vertical-align: center;
   border: 1px solid #000;
   border-collapse: collapse;
   padding: 0.3em;
   
}

th {
   background: #F1F1ED;
}
</style>
