let mapasDireccion;

async function infoAutos() {
  const response = await fetch("https://api-luxe-drive.onrender.com/autos");
  const dataApi = await response.json();
  return dataApi.mapas;
}

infoAutos().then(data => {
  mapasDireccion = data;
  let nombres = imprimirNombre(mapasDireccion);
  mapasDireccion.forEach(mapa => {
    const nombre = mapa.nombre;

  });
});

function imprimirNombre(array) {
  let infSu = document.getElementById("nombreSucursales")
  let nombreConcesionarios = "";
  for (var i = 0; i < array.length; i++) {
    let nombre = array[i].nombre;
    nombreConcesionarios += `
      <a href="#mapaD" onclick="detalleSu(${array[i].id})" value="${array[i].id}"><i class="fa-solid fa-location-dot"></i> ${nombre}</a>
    `;
  }

  infSu.innerHTML = nombreConcesionarios;
}

function detalleSu(id) {
  let infoSucursales = document.getElementById("datosSucursal");
  infoSucursales.style.display = "flex";

  let datosSucursal = mapasDireccion.filter(mapa => mapa.id === id);
  if (datosSucursal.length > 0) {
    let detalleHtml = "";
    for (let i = 0; i < datosSucursal.length; i++) {
      detalleHtml += `
        <div class="tarjetaInfoS" id="mapaD">
          <h1>${datosSucursal[i].nombre}</h1>
          <p> Dirección: ${datosSucursal[i].direccion}</p>
          <p>Telefono: ${datosSucursal[i].telefono}</p>
        </div>

        <div class="imgSucursales">
          <img src="${datosSucursal[i].image}" alt="">
        </div>
        <aside>${datosSucursal[i].maps}</aside>
      `;
    }
    infoSucursales.innerHTML = detalleHtml;
  }
}

    