<template>
  <div id="agregarReserva">
    <h3>Agregar Reserva</h3>
    <label for="id">Id</label> &nbsp;
    <input v-model="id" id="id" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <label for="quien_reserva">Nombre de quien reserva</label>&nbsp;
    <input v-model="quien_reserva" id="quien_reserva" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <label for="fecha_entrada">Fecha de ingreso</label> &nbsp;
    <input v-model="fecha_entrada" id="fecha_entrada" type="date" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <label for="fecha_salida">Fecha de salida</label> &nbsp;
    <input v-model="fecha_salida" id="fecha_salida" type="date" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <label for="numero_noches" >Numero de noches</label> &nbsp;
    <input v-model="numero_noches" id="numero_noches" type="numeric"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <label for="tipo_habitacion">Tipo habitacion</label> &nbsp;
    <select name="tipo_habitacion" v-model="tipo_habitacion" id="tipo_habitacion">
        <option value="Sencilla">Sencilla</option>
        <option value="Doble" selected>Doble</option>
        <option value="Suite">Suite</option>
    </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <label for="numero_personas" >Numero de personas</label> &nbsp;
    <input v-model="numero_personas" id="numero_personas" type="numeric"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <label for="numero_habitacion" >Numero de habitacion</label> &nbsp;
    <input v-model="numero_habitacion" id="numero_habitacion" type="numeric"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <label for="precio" >Valor</label> &nbsp;
    <input v-model="precio" id="precio" type="numeric"/><br> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button v-on:click="agregarOrden">Agregar Reserva</button><br> <br>
    <p>La reserva a nombre de {{ quien_reserva }} fue recibida</p>
    <img src="https://cutt.ly/AhDZbi6" width="400" height="250" alt="Visualización de una habitación sencilla"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://cutt.ly/FhDZOfJ" width="450" height="250" alt="Visualización de una habitación doble">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://cutt.ly/ahDZGDG" width="370" height="250" alt="Visualización de una habitación suite">  
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
        .post("https://hotelmintic-ultimoreto.herokuapp.com/agregarReserva", datosJSON)
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
  #agregarReserva{
  height: 66vh;
  margin: 2%;
  padding: 0%;
  background: #F1F1ED;
  text-align: center;
}

#agregarReserva h3{
  width: 100%;
  align-items: center;
  color: #8014F5;
  font-family: "Trebuchet MS", Verdana, Arial, Helvetica, sans-serif;
  text-align: center;  
}

#agregarReserva button{
  color: #F5ECDA;
  background: #24BD28;
  border: 1px solid #A41DE0;
  border-radius: 100px;
  padding: 10px 60px;
  text-align: center;
}

#agregarReserva button:hover{
  color: #F5ECDA; 
  background: #E5E7E9; 
  border: 5px solid #E5E7E9;
  text-align: center;
}
#agregarReserva p{
  width: 100%;
  align-items: center;
  color: #8014F5;
  font-family: "Trebuchet MS", Verdana, Arial, Helvetica, sans-serif;
  
}
</style>>
 