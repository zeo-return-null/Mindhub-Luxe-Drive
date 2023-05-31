async function infoAutos() {
  let dataApi;

  await fetch("https://api-luxe-drive.onrender.com/autos")
    .then(response => response.json())
    .then(json => dataApi = json);

  autosTotal = dataApi.autos;
  mostrar();
  for (var i = 0; i < autosTotal.length; i++) {
    if (autosTotal[i].categoria === "pickup") {
      pickup.push(autosTotal[i])
    } else if (autosTotal[i].categoria === "SUV") {
      SUV.push(autosTotal[i])
    } else if (autosTotal[i].categoria === "sedan") {
      sedan.push(autosTotal[i])
    } else if (autosTotal[i].categoria === "sport") {
      sport.push(autosTotal[i])
    }
  }

  imprimir(autosTotal);

}

infoAutos();

let autosTotal;
let SUV = [];
let sport = [];
let sedan = [];
let pickup = [];
let inicio = [];
let filtrosBusqueda = document.getElementById("containerBusqueda")
let carousel = document.getElementById("carousel")
let tarjetasAutos = document.getElementById("contenedorCards");
let planes = document.getElementById("contenedosPlanes");
let sucursales = document.getElementById("contenedorSucursales");
let servicios = document.getElementById("contenedorServicios");
let contactanos = document.getElementById("contenedorContactanos");
let contenedorInf = document.getElementById("atCliente");
let checkboxChequeados = []
let arrayFiltro = []
let search = ""
let inputSearch = document.getElementById("inputSearch")
const carouselContainer = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
let currentIndex = 0;

function showItem(index) {
  carouselItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showItem(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showItem(currentIndex);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

let menuNavegacion = document.getElementsByClassName("nav-item");
for (var i = 0; i < menuNavegacion.length; i++) {
  const item = menuNavegacion[i];
  item.addEventListener("click", function (e) {
    mostrar(e.target.id);
  });
}

function mostrar(id) {
  switch (id) {
    case "planes":
      servicios.style.display = "none";
      sucursales.style.display = "none";
      contactanos.style.display = "none";
      tarjetasAutos.style.display = "none";
      contenedorInf.style.display = "none";
      filtrosBusqueda.style.display = "none";
      containerDetalles.style.display = "none"
      fadeout.style.display = "none"
      carousel.style.display = "none";
      planes.style.display = "flex";
      planes.innerHTML = `
        <p>PAGINA DE LOS PLANES</p>
        `;
      break;
    case "sucursal":
      planes.style.display = "none";
      servicios.style.display = "none";
      contactanos.style.display = "none";
      tarjetasAutos.style.display = "none";
      contenedorInf.style.display = "none";
      filtrosBusqueda.style.display = "none";
      containerDetalles.style.display = "none"
      carousel.style.display = "none";
      sucursales.style.display = "flex";
      sucursales.innerHTML = `
        <p>PAGINA DE LAS SUCURSALES</p>
        `;
      break;
    case "servicios":
      planes.style.display = "none";
      sucursales.style.display = "none";
      contactanos.style.display = "none";
      tarjetasAutos.style.display = "none";
      contenedorInf.style.display = "none";
      filtrosBusqueda.style.display = "none";
      fadeout.style.display = "none"
      carousel.style.display = "none";
      containerDetalles.style.display = "none"
      servicios.style.display = "flex";
      servicios.innerHTML = `
        <p>PAGINA DE LOS SERVICIOS</p>
        `;
      break;
    case "contactanos":
      planes.style.display = "none";
      servicios.style.display = "none";
      sucursales.style.display = "none";
      tarjetasAutos.style.display = "none";
      contenedorInf.style.display = "none";
      filtrosBusqueda.style.display = "none";
      containerDetalles.style.display = "none"
      fadeout.style.display = "none"
      carousel.style.display = "none";
      contactoForm()
      break;
    default:
      planes.style.display = "none";
      servicios.style.display = "none";
      sucursales.style.display = "none";
      contactanos.style.display = "none";
      fadeout.style.display = "none"
      carousel.style.display = "flex";
      contenedorInf.style.display = "flex";
      tarjetasAutos.style.display = "flex";
      inputSearch.value = ""
      arrayFiltro = autosTotal
      checkboxChequeados = []
      filtroCategoria(autosTotal)
      imprimir(autosTotal);
  }
}

function imprimir(elemento) {
  let tarjetas = "";
  for (var i = 0; i < elemento.length; i++) {
    tarjetas += `
      <div class="itemTarjeta">
        <img src="${elemento[i].image}" class="zoomable" alt="">
        <p>${elemento[i].name}</p>
        <button onclick="detalle(${elemento[i].id})" class="detalles botonCard" id="detalles" value="${elemento[i].id}" id="detalles">Ver Detalles</button>
        <button onclick="contactoForm(${elemento[i].id})" class="cotizacion enlace" value="${elemento[i].id}">Pedí tu cotización <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
      </div>
    `;
  }
  tarjetasAutos.innerHTML = tarjetas;
}

function contactoForm(id) {
  tarjetasAutos.style.display = "none";
  filtrosBusqueda.style.display = "none";
  carousel.style.display = "none";
  contenedorInf.style.display = "none";
  fadeout.style.display = "none"
  contactanos.style.display = "flex";
  contactanos.innerHTML = `
  <p>PAGINA DEL FORMULARIO DE CONTACTO</p>
  `;
}

let containerDetalles = document.getElementById("containerDetalles")
let fadeout = document.getElementById("contenedorDetalles")
let arrayProducto = []
function detalle(id) {
  tarjetasAutos.style.display = "none";
  filtrosBusqueda.style.display = "none";
  carousel.style.display = "none";
  contenedorInf.style.display = "none";
  fadeout.style.display = "flex"
  arrayProducto = autosTotal.filter(autos => autos.id === id);
  for (var i = 0; i < arrayProducto.length; i++) {
    containerDetalles.innerHTML = ` 
         <section class="imagenDetalles">
                <div class="infCompra">
                    <aside class="containerInf">
                        <p class="nombreImg">${arrayProducto[0].name}</p>
                        <button onclick="contactoForm(${arrayProducto[i].id})" class="cotizacion" value="${arrayProducto[i].id}">Pedí tu cotización <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                    </aside>
                </div>
                <div class="imgAuto">
                    <img src="${arrayProducto[0].image}" alt="${arrayProducto[0].name}">
                </div>
            </section>
            <h3 class="detallesMas">Más sobre los Detalles <i class="fa-solid fa-angles-down"></i></h3>
            <section>
                <div class="motor">
                    <div class="imgMotor">
                        <img src="./Imagenes/motor.png" alt="motorref">
                    </div>
                    <div class="motorInfo">
                        <h1>MOTOR</h1>
                        <p>${arrayProducto[0].motor}</p>
                    </div>
                </div>
                <div class="potencia">
                    <div class="potenciaInf">
                        <h1>POTENCIA</h1>
                        <p>${arrayProducto[0].potenciaDescripcion}</p>
                    </div>
                    <div class="imgPotencia">
                        <img src="./Imagenes/potencia.jpg" alt="potenciaref">
                    </div>
                </div>
                <div class="torque">
                    <div class="imgTorque">
                        <img src="./Imagenes/torque.png" alt="motorref">
                    </div>
                    <div class="torqueInf">
                        <h1>TORQUE</h1>
                        <p>${arrayProducto[0].torqueDescripcion}</p>
                    </div>
                </div>
                </div>
                <div class="transmision">
                    <div class="transmisionInf">
                        <h1>TRANSMISIÓN</h1>
                        <p>${arrayProducto[0].transmision}</p>
                    </div>
                    <div class="imgTransmision">
                        <img src="./Imagenes/transmision.png" alt="potenciaref">
                    </div>
                </div>
                <div class="performance">
                    <div class="performanceInf">
                        <h1>PERFORMANCE</h1>
                        <p>${arrayProducto[0].performance}</p>
                    </div>
                </div>
            </section>
            <section class="muestraCompra">
                <div class="imgD">
                    <img src="${arrayProducto[0].image}" alt="${arrayProducto[0].name}">
                </div>
                <div class="detalleCompra">
                    <p class="precio">$${arrayProducto[0].price} USD</p>
                    <button onclick="contactoForm(${arrayProducto[i].id})" class="cotizarComprar" value="${arrayProducto[i].id}">COTIZÁ Y COMPRA</button>
                </div>
            </section>
`
  }

}

inputSearch.addEventListener("keyup", function (e){
  let datoDelInput = e.target.value
  search = datoDelInput.trim().toLowerCase()
  filtrosCombinados()
})

function filtroCategoria(nuevoArray) {
  let categorias = nuevoArray.map(item => item.categoria)
  let categoriaSinRepetir = new Set(categorias)
  let categoriaCheckbox = [...categoriaSinRepetir]
  let categoriasLuxe = ""
  categoriaCheckbox.map(categoria =>
    categoriasLuxe += `
    <label><input type="checkbox" value="${categoria}"> ${categoria}</label>
    `)
  document.getElementById("checkbox").innerHTML = categoriasLuxe

  checkboxListener()

}
function checkboxListener() {
  let checkbox = document.querySelectorAll('input[type=checkbox]')
  for (i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener("change", function () {
      checkboxChequeados = []
      for (i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
          checkboxChequeados.push(checkbox[i].value)
        }
      }
      filtrosCombinados()
    })
  }

}

function filtrosCombinados() {
  var filtro = []
  if (search !== "" && checkboxChequeados.length > 0) {
    checkboxChequeados.map(categoria => filtro.push(...arrayFiltro.filter(item =>
      item.name.toLowerCase().trim().includes(search) && item.categoria === categoria)
    ))
  }
  else if (search !== "" && checkboxChequeados.length == 0) {
    filtro = arrayFiltro.filter(item => item.name.toLowerCase().trim().includes(search))
  }
  else if (search === "" && checkboxChequeados.length > 0) {
    checkboxChequeados.map(categoria =>
      filtro.push(...arrayFiltro.filter(item => item.categoria === categoria))
    )
  }
  else {
    filtro = arrayFiltro
  }
  filtro.length > 0 ?
    imprimir(filtro) :
    tarjetasAutos.innerHTML = `
    <div class="ceroResultado">
       <img src="./Imagenes/busqueda0.png" alt="sin resultado">
      </div>
    `
}