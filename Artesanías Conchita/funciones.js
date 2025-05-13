document.addEventListener("DOMContentLoaded", () => {
  // 🌗 Modo oscuro / claro
  const toggle = document.getElementById("modo-oscuro-toggle");
  toggle?.addEventListener("click", () => {
    document.body.classList.toggle("modo-oscuro");
  });

  // 🌍 Cambio de idioma
  const idiomaSelect = document.getElementById("idioma");
  const traducciones = {
    es: {
      bienvenida: "Bienvenido a Artesanías Conchita",
      subtitulo: "Descubre nuestras hermosas creaciones.",
      objetivo: "Negocio de venta de artesanías"
    },
    en: {
      bienvenida: "Welcome to Artesanías Conchita",
      subtitulo: "Discover our beautiful creations.",
      objetivo: "Handicraft shop"
    }
  };

  idiomaSelect?.addEventListener("change", () => {
    const idioma = idiomaSelect.value;
    const t = traducciones[idioma];

    if (t) {
      const bienvenida = document.getElementById("bienvenida");
      const subtitulo = document.getElementById("subtitulo");
      const objetivo = document.getElementById("objetivo");

      bienvenida.textContent = t.bienvenida;
      subtitulo.textContent = t.subtitulo;
      objetivo.textContent = t.objetivo;
    }
  });
});