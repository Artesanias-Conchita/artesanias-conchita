document.addEventListener("DOMContentLoaded", function () {
  const filtroCategoria = document.getElementById("categoria");
  const buscador = document.getElementById("buscador");
  const productos = document.querySelectorAll(".producto");

  function filtrarProductos() {
    const categoriaSeleccionada = filtroCategoria.value.toLowerCase();
    const textoBusqueda = buscador.value.toLowerCase();

    productos.forEach(producto => {
      const categoria = producto.getAttribute("data-categoria").toLowerCase();
      const nombre = producto.querySelector("h3").textContent.toLowerCase();
      const descripcion = producto.querySelector("p").textContent.toLowerCase();

      const coincideCategoria = categoriaSeleccionada === "todas" || categoria === categoriaSeleccionada;
      const coincideBusqueda = nombre.includes(textoBusqueda) || descripcion.includes(textoBusqueda);

      if (coincideCategoria && coincideBusqueda) {
        producto.style.display = "block";
      } else {
        producto.style.display = "none";
      }
    });
  }

  filtroCategoria.addEventListener("change", filtrarProductos);
  buscador.addEventListener("input", filtrarProductos);
});