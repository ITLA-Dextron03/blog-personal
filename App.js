import { cambiarPasaTiempo } from "./app/assets/js/cambiarPasatiempo.js"
import { ajax } from "./app/helper/ajax.js"

export const App = () => {
    ajax({
            url:"https://github.com/ITLA-Dextron03/blog-personal/tree/main/app/assets/pasatiempos.json",
            cbSuccess:cambiarPasaTiempo
        });
}
