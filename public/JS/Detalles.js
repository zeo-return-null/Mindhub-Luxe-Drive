let containerDetalles = document.getElementById("containerDetalles")
let fadeout = document.getElementById("contenedorDetalles")
let arrayProducto = []
function detalle(id) {
  tarjetasAutos.style.display = "none";
  filtrosBusqueda.style.display = "none";
  carousel.style.display = "none";
  contenedorInf.style.display = "none";
  window.scrollTo({top: 0, behavior: "smooth"})
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
                    <button onclick="paginaPlanes(${arrayProducto[i].id})" class="cotizarComprar" value="${arrayProducto[i].id}">COTIZÁ Y COMPRA</button>
                </div>
            </section>
`
  }

}
