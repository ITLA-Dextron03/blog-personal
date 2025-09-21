export  async function ajax(props)  {
    let { url, cbSuccess } = props;

    try {
        let response = await fetch(url);

        if (!response.ok) throw new Error(`Ocurrio un error (${response.status}): ${response.statusText}`);

        let json = await response.json();

        cbSuccess(json);

    } catch (error) {
        document.getElementById("main").innerHTML = error;
    }
}