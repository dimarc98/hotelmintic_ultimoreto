import VueRouter from "vue-router";
import AgregarReserva from "./components/AgregarReserva";
import VerReservas from "./components/VerReservas";
import EliminarReservas from "./components/EliminarReservas";

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
      component: EliminarReservas
    }
  ]
});

export default router;
