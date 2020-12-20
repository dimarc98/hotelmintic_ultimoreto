import VueRouter from "vue-router";
import AgregarReserva from "./components/AgregarReserva";
import VerReservas from "./components/VerReservas";
import EliminarReserva from "./components/EliminarReserva";

const router = new VueRouter({
  //mode: "history",
  routes: [
    {
      name: "agregarReserva",
      path: "/agregarReserva/",
      component: AgregarReserva
    },
    {
      name: "verReservas",
      path: "/verReservas",
      component: VerReservas
    },
    {
      name: "borrarReservas",
      path: "/borrarReservas",
      component: EliminarReserva
    }
  ]
});

export default router;
