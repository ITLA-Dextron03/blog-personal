export const cambiarPasaTiempo = (json) => {
    const pasatiempos = json.map(p => p);

    const $titlePasatiempo = document.querySelector(".title-pasatiempo"),
            $textPasatiempo = document.querySelector(".text-pasatiempo"),
            $img = document.querySelector(".img-pasatiempo");

    document.addEventListener("click", e=>{
        if(e.target.matches(".enlacepasatiempo")){
            e.preventDefault();

            const $li = e.target;

            pasatiempos.forEach(element => {
                if($li.textContent == element.nombre){
                    $titlePasatiempo.textContent = element.nombre;
                    $img.src = element.url;
                    $img.alt = element.nombre;
                    $textPasatiempo.textContent = element.texto;
                }
            });
        }
    })
}