document.addEventListener("DOMContentLoaded", () => {
  // 🌗 Modo oscuro / claro
  const toggle = document.getElementById("modo-oscuro-toggle");
  const body = document.body;

  const modoGuardado = localStorage.getItem("modo");
  if (modoGuardado === "oscuro") {
    body.classList.add("modo-oscuro");
    toggle.textContent = "☀️ Cambiar modo";
  } else {
    toggle.textContent = "🌙 Cambiar modo";
  }

  toggle?.addEventListener("click", () => {
    body.classList.toggle("modo-oscuro");
    const modoActual = body.classList.contains("modo-oscuro") ? "oscuro" : "claro";
    toggle.textContent = modoActual === "oscuro" ? "☀️ Cambiar modo" : "🌙 Cambiar modo";
    localStorage.setItem("modo", modoActual);
  });

  // 🌍 Cambio de idioma
  const idiomaSelect = document.getElementById("idioma");
  const traducciones = {
    es: {
      bienvenida: "Bienvenido a Artesanías Conchita",
      subtitulo: "Descubre nuestras hermosas creaciones.",
      objetivo: "Negocio de venta de artesanías",
      contactoTitulo: "Contacto y Ubicación",
      contactoDireccion: "Dirección: 4ª Calle Oriente, Mercado Municipal No. 1, Local No. 14, Usulután.",
      visitarFacebook: "Visitar nuestro Facebook",
      preguntasTitulo: "Preguntas Frecuentes",
      misionTitulo: "Misión",
      misionTexto: "En Artesanías Conchita, nuestra misión es transformar la tradición en creatividad, ofreciendo piezas de artesanía que capturan la esencia y la autenticidad de nuestra cultura...",
      visionTitulo: "Visión",
      visionTexto: "En Artesanías Conchita, aspiramos a ser el referente principal en el mundo de la artesanía, reconocido por nuestra excelencia en la calidad y la autenticidad de nuestros productos...",
      productosTitulo: "Productos",
      vestido1: "Vestido típico salvadoreño",
      vestido2: "Vestido típico infantil azul",
      vestido3: "Vestido típico salvadoreño azul",
      llavero1: "Llavero artesanal de colibrí",
      llavero2: "Llavero artesanal de delfín con cuentas",
      gorra1: "Gorra estilo artesanal con diseño taurino"
    },
    en: {
      bienvenida: "Welcome to Artesanías Conchita",
      subtitulo: "Discover our beautiful creations.",
      objetivo: "Handicraft shop",
      contactoTitulo: "Contact and Location",
      contactoDireccion: "Address: 4th East Street, Municipal Market No. 1, Local No. 14, Usulután.",
      visitarFacebook: "Visit our Facebook",
      preguntasTitulo: "Frequently Asked Questions",
      misionTitulo: "Mission",
      misionTexto: "At Artesanías Conchita, our mission is to transform tradition into creativity, offering craft pieces that capture the essence and authenticity of our culture...",
      visionTitulo: "Vision",
      visionTexto: "At Artesanías Conchita, we aspire to be the main reference in the world of handicrafts, recognized for our excellence in quality and authenticity...",
      productosTitulo: "Products",
      vestido1: "Traditional Salvadoran Dress",
      vestido2: "Blue Traditional Child Dress",
      vestido3: "Blue Salvadoran Traditional Dress",
      llavero1: "Handmade Hummingbird Keychain",
      llavero2: "Beaded Dolphin Keychain",
      gorra1: "Artisan Cap with Bull Design"
    }
  };

  const aplicarTraduccion = (idioma) => {
    const t = traducciones[idioma];
    if (t) {
      const bienvenida = document.getElementById("bienvenida");
      const subtitulo = document.getElementById("subtitulo");
      const objetivo = document.getElementById("objetivo");
      const contactoTitulo = document.querySelector("h2");
      const contactoDireccion = document.querySelector("main p");
      const btnFacebook = document.querySelector("a[target='_blank']");
      const preguntasTitulo = document.querySelector("h2");
      const misionTitulo = document.getElementById("mision-titulo");
      const misionTexto = document.getElementById("mision-texto");
      const visionTitulo = document.getElementById("vision-titulo");
      const visionTexto = document.getElementById("vision-texto");
      const productosTitulo = document.querySelector("h2[data-section='productos']");

      const vestido1 = document.getElementById("vestido1");
      const vestido2 = document.getElementById("vestido2");
      const vestido3 = document.getElementById("vestido3");
      const llavero1 = document.getElementById("llavero1");
      const llavero2 = document.getElementById("llavero2");
      const gorra1 = document.getElementById("gorra1");

      if (bienvenida) bienvenida.textContent = t.bienvenida;
      if (subtitulo) subtitulo.textContent = t.subtitulo;
      if (objetivo) objetivo.textContent = t.objetivo;
      if (contactoTitulo && contactoTitulo.textContent.includes("Contacto")) contactoTitulo.textContent = t.contactoTitulo;
      if (contactoDireccion && contactoDireccion.textContent.includes("Dirección")) contactoDireccion.textContent = t.contactoDireccion;
      if (btnFacebook && btnFacebook.textContent.includes("Facebook")) btnFacebook.textContent = t.visitarFacebook;
      if (preguntasTitulo && preguntasTitulo.textContent.includes("Preguntas")) preguntasTitulo.textContent = t.preguntasTitulo;
      if (misionTitulo) misionTitulo.textContent = t.misionTitulo;
      if (misionTexto) misionTexto.textContent = t.misionTexto;
      if (visionTitulo) visionTitulo.textContent = t.visionTitulo;
      if (visionTexto) visionTexto.textContent = t.visionTexto;
      if (productosTitulo) productosTitulo.textContent = t.productosTitulo;

      if (vestido1) vestido1.textContent = t.vestido1;
      if (vestido2) vestido2.textContent = t.vestido2;
      if (vestido3) vestido3.textContent = t.vestido3;
      if (llavero1) llavero1.textContent = t.llavero1;
      if (llavero2) llavero2.textContent = t.llavero2;
      if (gorra1) gorra1.textContent = t.gorra1;
    }
  };

  const idiomaGuardado = localStorage.getItem("idioma");
  if (idiomaGuardado && traducciones[idiomaGuardado]) {
    idiomaSelect.value = idiomaGuardado;
    aplicarTraduccion(idiomaGuardado);
  }

  idiomaSelect?.addEventListener("change", () => {
    const idioma = idiomaSelect.value;
    localStorage.setItem("idioma", idioma);
    aplicarTraduccion(idioma);
  });
});
