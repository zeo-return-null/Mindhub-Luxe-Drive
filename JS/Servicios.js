async function getServicios() {
 let dataApi;

  await fetch("https://api-luxe-drive.onrender.com/autos")
    .then(response => response.json())
    .then(json => dataApi = json);

    servicios.innerHTML = '<div id="servicios-container"></div>'
    serviciosData = dataApi.servicios;

    serviciosData.forEach(addInfo)
}

function addInfo(e) {
  infoTemplate = `
    <div class="m-4 info-card">
      <h4 class="title text-center">${e.titulo}</h4>
      <p class="mt-4 description text-center">${e.descripcion}</p>
      <p class="small-description text-center">${e.precioDescripcion}</p>
      <p class="price text-center">$${e.precio}</p>
    </div>
    `
  servicios.innerHTML += infoTemplate
}