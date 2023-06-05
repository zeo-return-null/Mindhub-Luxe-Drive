let dataAuto = [];
let modal = document.getElementById("modal")
function contactoForm(id) {
  dataAuto = autosTotal.filter(autos => autos.id === id);
  tarjetasAutos.style.display = "none";
  filtrosBusqueda.style.display = "none";
  planes.style.display = "none";
  carousel.style.display = "flex";
  contenedorInf.style.display = "none";
  fadeout.style.display = "none"
  window.scrollTo({ top: 0, behavior: "smooth" })
  contactanos.style.display = "flex";
  if (id != null) {
    contactanos.innerHTML = `
        <div id="modal"></div>
        <div id="container-info" class="container-info justify-content-center align-items-center container mt-3">
          <form id="form-contacto" action="" class="col-6 d-flex flex-column justify-content-center align-items-center form">
            <div class="mb-4 col-12">
              <label for="nombre" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="nombre" placeholder="Ingrese su nombre" required>
            </div>
            <div class="mb-4 col-12">
              <label for="mail" class="form-label">Mail</label>
              <input type="email" class="form-control" id="mail" placeholder="Ingrese su email" required>
            </div>
            <div class="mb-4 col-12">
              <label for="mensaje" class="form-label">Mensaje</label>
              <textarea class="form-control" id="mensaje" placeholder="Deje su mensaje" rows="3"></textarea>
            </div>
            <input id="send-form" type="submit" value="Enviar" class="btn btn-primary mb-5">
          </form>
          <div class="container-vertical">
            <div class="itemTarjeta">
              <img src="${dataAuto[0].image}" class="zoomable" alt="">
              <h4 class="title">${dataAuto[0].name}</h4>
            </div>
          </div>
        </div>
      `;
      let mensaje = document.getElementById("mensaje");
       mensaje.value = `Me gustaría solicitar una cotización del ${dataAuto[0].name} \n`;
      let form = document.getElementById("form-contacto")
      form.addEventListener("submit", function (e) { actionForm(e) })
    } else {
      contactanos.innerHTML = `
        <div id="modal"></div>
        <div id="container-info" class="container-info mt-3">
          <form id="form-contacto" action="" class="col-12 d-flex flex-column align-items-center justify-content-center  form">
          <div class="mb-4 col-6">
          <label for="nombre" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="nombre" placeholder="Ingrese su nombre">
          </div>
          <div class="mb-4 col-6">
          <label for="mail" class="form-label">Mail</label>
          <input type="email" class="form-control" id="mail" placeholder="Ingrese su email">
          </div>
          <div class="mb-4 col-6">
          <label for="mensaje" class="form-label">Mensaje</label>
          <textarea class="form-control" id="mensaje" placeholder="Deje su mensaje" rows="3"></textarea>
          </div>
          
          <input id="send-form" type="submit" value="Enviar" class="btn btn-primary mb-5">
          </form>
          </div>
          `;
          let form = document.getElementById("form-contacto")
          form.addEventListener("submit", function (e) { actionForm(e) })
        }
        return
  }
  
function actionForm(e) {
  e.preventDefault()
  let formData = {
    email: e.target[1].value,
    name: e.target[0].value,
    message: e.target[2].value
  }
  let modal = document.getElementById("modal")
  let containerInfo = document.getElementById("container-info");
  containerInfo.classList.add("invisible");
  modalTemplate = `
  <h3 class="mt-3 mb-2 text-center">Gracias <b>${formData.name}</b></h4>
  <h5 class="m-3 text-center">Tu mensaje: <i>${formData.message}</i></p>
  <p class="m-3 text-center">ha sido enviado correctamente.</p>
  `
  modal.innerHTML += modalTemplate
}
