function paginaPlanes(id) {
    tarjetasAutos.style.display = "none";
    filtrosBusqueda.style.display = "none";
    carousel.style.display = "none";
    contenedorInf.style.display = "none";
    fadeout.style.display = "none"
    window.scrollTo({top: 0, behavior: "smooth"})
    planes.style.display = "flex";
    planes.innerHTML = `
      <p>PAGINA DE LOS PLANES</p>
      `;
}