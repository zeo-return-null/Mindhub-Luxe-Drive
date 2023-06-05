arrayPlanes = []
function paginaPlanes(id) {
    tarjetasAutos.style.display = "none";
    filtrosBusqueda.style.display = "none";
    carousel.style.display = "flex";
    contenedorInf.style.display = "none";
    fadeout.style.display = "none"
    window.scrollTo({top: 0, behavior: "smooth"})
    arrayPlanes = autosTotal.filter(autos => autos.id === id);
    for (var i = 0; i < arrayPlanes.length; i++) {
    planes.style.display = "flex";
    planes.innerHTML = `
    <div class="paginaPlanes">
    <h2 class="tituloPlanes" >LA FORMA MÁS FÁCIL DE ACCEDER A TU NUEVO 0KM</h2>
    <h3 class="subtituloPlanes" >Todo lo que necesitas saber sobre Luxe Drive Planes</h3>
    <div class="columnasPlanes">
        <div class="preguntasFrecuentes">
            <p style="font-weight: bold; text-align: center;"> Preguntas Frecuentes</p>
            <div class="faq-container">
                <div class="faq-item">
                    <button class="faq-question">¿Qué es un Plan de Ahorro para fines determinados?</button>
                    <div class="faq-answer">
                        <p>El Plan de Ahorro es un sistema a través del cual un grupo determinado de personas
                            realiza un
                            aporte mensual a un fondo común para la compra de bienes (automotor en este caso)
                            que se
                            adjudicarán por sorteo y licitación de acuerdo con la disponibilidad y durante la
                            vigencia
                            del plan (generalmente 84 meses). </p>
                    </div>
                </div>
                <div class="faq-item">
                    <button class="faq-question">
                        ¿Qué es la Cuota Pura? ¿Qué es un Plan 100% y un Plan 70/30?</button>
                    <div class="faq-answer">
                        <p>Es el importe resultante de dividir el Valor Móvil vigente a la fecha de pago, por la
                            cantidad de meses de duración del plan (plan 100%), o bien de dividir el 70% del
                            Valor
                            Móvil
                            a ser pagado en cuotas que, sumado al 30% que se pagará al momento de la
                            adjudicación,
                            completará el Valor Móvil total del automotor (plan 70/30). </p>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question">¿El valor de la cuota es variable?</button>
                    <div class="faq-answer">
                        <p> La Cuota Pura se determina según el Valor Móvil vigente a la fecha de emisión de
                            cada
                            cuota.
                            En la modalidad de Plan de Ahorro las cuotas no tienen interés. Si hubiese una baja
                            en
                            la
                            lista de precios la Cuota Pura disminuirá en idéntica proporción, mientras que si
                            hubiese un
                            aumento la Cuota Pura se ajustará en el mismo porcentaje. Los aumentos no afectan a
                            las
                            cuotas ya abonadas, de esta manera el ahorrista se capitaliza.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="calculadora">
            <p style="font-weight: bold; text-align: center; font-size: 30px;">Calculá tu Plan</p>

       
<div class="calculator">
        <label class= "price" for="price">1. El precio de tu nuevo Luxe es: </label>
        <p id="price">$${arrayPlanes[0].price}USD</p>
        <img src="${arrayProducto[0].image}" alt="${arrayProducto[0].name}">
        <h3>2. Elegí el Plan que más te guste</h3>
        <div class= "botoneraPlanes">
            <button class="nombrePlan" onclick="calculate('plan100')">Plan 100%</button>
            <button class="nombrePlan" onclick="calculate('plan7030')">Plan 70/30</button>
        </div>
        <div class="resultado" id="result"></div>
            <h3 class="nuevo0KM">Tu nuevo 0km está muy cerca!</h3>
        </div>
        <div class="informacionP"> 
        <p class= "saberMas"> Si querés saber más acerca de este u otro vehículo, no dudes en contactarnos </p> 
        <button onclick="contactoForm(${arrayPlanes[i].id})" class="cotizacionPlanes" value="${arrayPlanes[i].id}">Quiero que me contacten<i class="fa-solid fa-arrow-up-right-from-square"></i></button>
        </div>
</div>

      `
}
}

function calculate(plan) {
    var priceText = document.getElementById("price").innerText;
    var price = parseFloat(priceText.replace("$", "").replace("USD", ""));
    var results = document.getElementById("result");
    var months = 84;
  
    results.innerHTML = "";
  
    if (plan === "plan100") {
      var planText = "100%";
      var cuota = (price / months).toFixed(2);
  
      var resultText = document.createElement("p");
      resultText.textContent = "Con el Plan " + planText + ", financiás tu nuevo Luxe en " + months + " cuotas mensuales de tan solo " + cuota + " USD";
      results.appendChild(resultText);
    } else if (plan === "plan7030") {
      var planText = "70/30";
      var cuota = ((price * 0.7) / months).toFixed(2);
      var montoRestante = (price * 0.3).toFixed(0);
  
      var resultText = document.createElement("p");
      resultText.textContent = "Con el Plan " + planText + ", financiás tu nuevo Luxe en " + months + " cuotas mensuales de tan solo " + cuota + " USD y al momento de adjudicar solo resta abonar " + montoRestante + " USD";
      results.appendChild(resultText);
    }
  }
  