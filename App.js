import { cambiarPasaTiempo } from "./app/assets/js/cambiarPasatiempo.js"
import { ajax } from "./app/helper/ajax.js"

export const App = () => {
    ajax({
            url:"./app/assets/pasatiempos.json",
            cbSuccess:cambiarPasaTiempo
        });
}