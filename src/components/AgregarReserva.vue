<template>
  <div id="agregarReserva">
    <h3>Agregar Reserva</h3>
    <label for="id">Id</label>
    <input v-model="id" id="id" />
    <label for="quien_reserva">Nombre de quien reserva</label>
    <input v-model="quien_reserva" id="quien_reserva" />
    <label for="fecha_entrada">Fecha de ingreso</label>
    <input v-model="fecha_entrada" id="fecha_entrada" type="date" />
    <label for="fecha_salida">Fecha de salida</label>
    <input v-model="fecha_salida" id="fecha_salida" type="date" />
    <label for="numero_noches" >Numero de noches</label>
    <input v-model="numero_noches" id="numero_noches" type="numeric"/>
    <label for="tipo_habitacion">Tipo habitacion</label>
    <input v-model="tipo_habitacion" id="tipo_habitacion" />
    <label for="numero_personas" >Numero de personas</label>
    <input v-model="numero_personas" id="numero_personas" type="numeric"/>
    <label for="numero_habitacion" >Numero de habitacion</label>
    <input v-model="numero_habitacion" id="numero_habitacion" type="numeric" />
    <label for="precio" >Valor</label>
    <input v-model="precio" id="precio" type="numeric"/>
    <button v-on:click="agregarOrden">Agregar Reserva</button>
    <p>la reserva a nombre de {{ quien_reserva }} fue recibida</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AgregarReserva",
  data: function() {
    return {
      id: 0,
      quien_reserva: "",
      fecha_entrada: "",
      fecha_salida: "",
      numero_noches: 0,
      tipo_habitacion: "",
      numero_personas: 0,
      numero_habitacion: 0,
      precio: 0
    };
  },
  methods: {
    mostrarId: function() {
      alert(this.id);
    },
    agregarOrden: function() {
      var datosJSON = {
        id: this.id,
        quien_reserva: this.quien_reserva,
        fecha_entrada: this.fecha_entrada,
        fecha_salida: this.fecha_salida,
        numero_noches: this.numero_noches,
        tipo_habitacion: this.tipo_habitacion,
        numero_personas: this.numero_personas,
        numero_habitacion: this.numero_habitacion,
        precio: this.precio
      };
      axios
        .post("https://hotelmintic.herokuapp.com/reserva/crear/", datosJSON)
        .then(respuesta => {
          alert(respuesta.data.mensaje);
        })
        .catch(error => {
          console.log("Error::",error.response.data)
          alert("error en el servidor");
        });
    }
  },
  created: function() {
    this.datoRecibido = this.$route.params.dato;
  }
};
</script>

<style scoped>
#agregarOrden {
  background-color: beige;
}
</style>
