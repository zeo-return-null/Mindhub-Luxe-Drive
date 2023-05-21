async function infoAutos() {
    let dataApi;
    
    await fetch("https://api-luxe-drive.onrender.com/autos")
      .then(response => response.json())
      .then(json => dataApi = json);
  
    if (Array.isArray(dataApi.autos)) {
      autosTotal = dataApi.autos;
      mostrar();
      inicio = autosTotal.map(auto => ({ 
        image: auto.image, 
        name: auto.name, 
        motor: auto.motor,
        potencia: auto.potencia,
        torque: auto.torque,
        transmision: auto.transmision,
        performance: auto.performance,
        price: auto.price
      })); // Obtener datos de la API y asignarlos a inicio
    }
    imprimir(inicio)
  }

infoAutos();
let autosTotal
let inicio = [];
let tarjetasAutos = document.getElementById("contenedorCards")
let planes = document.getElementById("contenedosPlanes")
let sucursales = document.getElementById("contenedorSucursales")
let servicios = document.getElementById("contenedorServicios")
let contactanos = document.getElementById("contenedorContactanos")
let contenedorInf = document.getElementById("atCliente")
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
        console.log(menuNavegacion);
    });
}

function mostrar(id) {
    switch (id) {
        case "planes":
            servicios.style.display = "none"
            sucursales.style.display = "none"
            contactanos.style.display = "none"
            tarjetasAutos.style.display = "none"
            contenedorInf.style.display = "none"
            planes.style.display = "flex"
            planes.innerHTML = `
            <p>PAGINA DE LOS PLANES</p>
            `
            break;
        case "sucursal":
            planes.style.display = "none"
            servicios.style.display = "none"
            contactanos.style.display = "none"
            tarjetasAutos.style.display = "none"
            contenedorInf.style.display = "none"
            sucursales.style.display = "flex"
            sucursales.innerHTML = `
            <p>PAGINA DE LAS SUCURSALES</p>
            `
            break;
        case "servicios":
            planes.style.display = "none"
            sucursales.style.display = "none"
            contactanos.style.display = "none"
            tarjetasAutos.style.display = "none"
            contenedorInf.style.display = "none"
            servicios.style.display = "flex"
            servicios.innerHTML = `
            <p>PAGINA DE LOS SERVICIOS</p>
            `
            break;
            case "contactanos":
            planes.style.display = "none"
            servicios.style.display = "none"
            sucursales.style.display = "none"
            tarjetasAutos.style.display = "none"
            contenedorInf.style.display = "none"
            contactanos.style.display = "flex"
            contactanos.innerHTML = `
            <p>PAGINA DEL FORMULARIO DE CONTACTO</p>
            `
            break;
        default:
            planes.style.display = "none"
            servicios.style.display = "none"
            sucursales.style.display = "none"
            contactanos.style.display = "none"
            contenedorInf.style.display = "flex"
            tarjetasAutos.style.display = "flex"
            imprimir(inicio)
    }
}

function imprimir(elemento){
    let tarjetas = ""
    for (var i = 0; i < elemento.length; i++){
        tarjetas += `
        <div class="itemTarjeta">
                <img src="${elemento[i].image}" class="zoomable" alt="">
                <p>${elemento[i].name}</p>
                <button onclick="detalle(${elemento[i].id})" class="detalles botonCard" id="detalles" value="${elemento[i].id}" id="detalles">Ver Detalles</button> 
                <a href="#">Pedí tu cotización <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
        `
    }
    tarjetasAutos.innerHTML = tarjetas
}

let body = document.getElementById("body")
let fadeout = document.getElementById("contenedorDetalles")
let containerDetalles = document.getElementById("containerDetalles")
let arrayProducto = []
function detalle(id) {
    fadeout.style.display = "flex"
    fadeout.style.top = window.scrollY + "px"
    fadeout.style.left = window.scrollX + "px"
    body.style.overflow = "hidden"
    arrayProducto = inicio.filter(autos => autos.id === id);
    for (var i = 0; i < arrayProducto.length; i++) {
        containerDetalles.innerHTML = ` 
        <div class="detallesDos">
        <p>MODELO: ${arrayProducto[i].name}</p>
        <img src="${arrayProducto[i].image}"alt="${arrayProducto[i].name}">
        <p>MOTOR: ${arrayProducto[i].motor}</p>
        <p>POTENCIA: ${arrayProducto[i].potencia}</p>
        </div>
        <div class="detallesDos">
        <p>TORQUE: ${arrayProducto[i].torque}</p>
        <p>TRANSMISIÓN: ${arrayProducto[i].transmision}</p>
        <p>PERFORMANCE: ${arrayProducto[i].performance}</p>
        <p>PRECIO: ${arrayProducto[i].price}USD</p>
        </div>`
    }

    fadeout.addEventListener("click", function (event) {
        fadeout.style.display = "none"
        body.style.overflow = "scroll"
    })

}
