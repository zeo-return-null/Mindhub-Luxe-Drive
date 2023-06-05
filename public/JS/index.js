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
let planes = document.getElementById("contenedosPlanes")
let tarjetasAutos = document.getElementById("contenedorCards");
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
let form = document.getElementById("form-contacto")


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

    case "sucursal":
      planes.style.display = "none";
      servicios.style.display = "none";
      contactanos.style.display = "none";
      tarjetasAutos.style.display = "none";
      contenedorInf.style.display = "none";
      filtrosBusqueda.style.display = "none";
      containerDetalles.style.display = "none"
      carousel.style.display = "flex";
      sucursales.style.display = "flex";
      sucursales.innerHTML = `
      <p class="titulo">VISITA NUESTRAS SUCURSALES</p>
      <section class="sucursalesN" id="nombreSucursales">
      </section>
      <section id="datosSucursal">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26286841.516049135!2d-84.8853213479625!3d-36.46135129368378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaf5f5fdc667%3A0x3d2f77992af00fa8!2sArgentina!5e0!3m2!1ses!2sar!4v1685836421014!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
      `;
      imprimirNombre(mapasDireccion)
      detalleSu(mapasDireccion)
      break;

    case "servicios":
      planes.style.display = "none";
      sucursales.style.display = "none";
      contactanos.style.display = "none";
      tarjetasAutos.style.display = "none";
      contenedorInf.style.display = "none";
      filtrosBusqueda.style.display = "none";
      fadeout.style.display = "none"
      carousel.style.display = "flex";
      containerDetalles.style.display = "none"
      servicios.style.display = "flex";
      getServicios();
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
      carousel.style.display = "flex";
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

inputSearch.addEventListener("keyup", function (e) {
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