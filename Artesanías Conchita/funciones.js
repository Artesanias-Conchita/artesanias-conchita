document.addEventListener("DOMContentLoaded", () => {
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

  const idiomaSelect = document.getElementById("idioma");

  const traducciones = {
    es: {
      bienvenida: "Bienvenido a Artesanías Conchita",
      subtitulo: "Descubre nuestras hermosas creaciones.",
      objetivo: "Negocio de venta de artesanías",
      contactoDireccion: "Dirección: 4ª Calle Oriente, Mercado Municipal No. 1, Local No. 14, Usulután.",
      visitarFacebook: "Visitar nuestro Facebook",
      preguntasTitulo: "Preguntas Frecuentes",
      tituloMision: "Misión",
      parrafoMision:  "En Artesanías Conchita, nuestra misión es transformar la tradición en creatividad, ofreciendo piezas de artesanía que capturan la esencia y la autenticidad de nuestra cultura. Nos comprometemos a apoyar a los artesanos locales, promoviendo técnicas tradicionales y materiales sostenibles para crear productos únicos que enriquezcan la vida de nuestros clientes. Valoramos la calidad, la originalidad y el compromiso con el medio ambiente en cada creación, buscando siempre hacer de cada pieza un reflejo de la dedicación y la pasión que ponemos en nuestro trabajo.",
      tituloVision: "Visión",
      parrafoVision:  "En Artesanías Conchita, aspiramos a ser el referente principal en el mundo de la artesanía, reconocido por nuestra excelencia en la calidad y la autenticidad de nuestros productos. Imaginamos un futuro en el que nuestras piezas no solo embellezcan hogares y espacios, sino que también inspiren un aprecio más profundo por las tradiciones culturales y el arte hecho a mano. Queremos fomentar un impacto positivo en la comunidad y el medio ambiente, siendo un puente entre el legado artesanal y las nuevas generaciones de apreciadores del arte.",
      tituloValores: "Valores de la empresa",
      galeriaHistoria: "Galería de nuestra historia",
      productos: "Productos",
      historiaTexto: "En la década de los 90, Celenia inició su camino en el mundo del comercio...",
      navInicio: "Inicio",
      navHistoria: "Historia",
      navProductos: "Productos",
      navContacto: "Contacto",
      navPreguntas: "Preguntas",
      filtroTodas: "Todas las categorías",
      filtroVestidos: "Vestidos",
      filtroLlaveros: "Llaveros",
      filtroGorras: "Gorras",
      placeholderBuscar: "Buscar productos...",
      producto1: "Vestido típico salvadoreño",
      producto1desc: "Vestido tradicional con los colores de la bandera de El Salvador, adornado con encajes y escudos nacionales.",
      producto2: "Llavero artesanal de colibrí",
      producto2desc: "Hecho a mano con mostacillas de colores, inspirado en la fauna salvadoreña.",
      producto3: "Gorra estilo artesanal con diseño taurino",
      producto3desc: "Gorra con bordados culturales salvadoreños y diseño de toro.",
      producto4: "Vestido típico infantil azul",
      producto4desc: "Vestido tradicional para niña, con bordados artesanales y encaje floral.",
      producto5: "Llavero artesanal de delfín con cuentas",
      producto5desc: "Llavero hecho a mano con cuentas azules representando un delfín del mar salvadoreño.",
      producto6: "Vestido típico salvadoreño azul",
      producto6desc: "Vestido tradicional de El Salvador, confeccionado en tela satinada azul con encajes blancos, ideal para presentaciones culturales o celebraciones patrias.",
      textoObjetivo:  "Artesanías Conchita tiene como objetivo ofrecer productos artesanales únicos y de alta calidad, creados con esmero por talentosos artesanos locales. Nos especializamos en artículos hechos a mano que van desde cerámica y textiles hasta joyería y objetos decorativos, brindando a nuestros clientes piezas auténticas tradicionales de El Salvador y de los países hermanos para decorar el hogar o regalar. Cada producto refleja la tradición y el arte de generaciones pasadas, apoyando el comercio justo y la preservación de técnicas artesanales, mientras ofrecemos a nuestros clientes productos que cuentan historias y tienen un valor cultural especial.",
      labelIdioma: "🌐 Idioma:"
    },
    en: {
      bienvenida: "Welcome to Artesanías Conchita",
      subtitulo: "Discover our beautiful creations.",
      objetivo: "Handicraft Business",
      contactoDireccion: "Address: 4th East Street, Municipal Market No. 1, Local No. 14, Usulután.",
      visitarFacebook: "Visit our Facebook",
      preguntasTitulo: "Frequently Asked Questions",
      tituloMision: "Mission",
      parrafoMision: "At Artesanías Conchita, our mission is to transform tradition into creativity, offering handcrafted pieces that capture the essence and authenticity of our culture. We are committed to supporting local artisans, promoting traditional techniques and sustainable materials to create unique products that enrich the lives of our customers. We value quality, originality, and environmental responsibility in every creation, always striving to make each piece a reflection of the dedication and passion we put into our work.",
      tituloVision: "Vision",
      parrafoVision: "At Artesanías Conchita, we aspire to be the leading reference in the world of handicrafts, recognized for our excellence in the quality and authenticity of our products. We envision a future in which our pieces not only beautify homes and spaces but also inspire a deeper appreciation for cultural traditions and handmade art. We aim to foster a positive impact on the community and the environment, serving as a bridge between the artisanal legacy and new generations of art enthusiasts.",
      tituloValores: "Company Values",
      galeriaHistoria: "Our History Gallery",
      productos: "Products",
      historiaTexto: "In the 1990s, Celenia began her journey in the world of commerce by selling shoes...",
      navInicio: "Home",
      navHistoria: "History",
      navProductos: "Products",
      navContacto: "Contact",
      navPreguntas: "FAQ",
      filtroTodas: "All categories",
      filtroVestidos: "Dresses",
      filtroLlaveros: "Keychains",
      filtroGorras: "Caps",
      placeholderBuscar: "Search products...",
      producto1: "Typical Salvadoran Dress",
      producto1desc: "Traditional dress with the colors of El Salvador's flag, decorated with lace and national emblems.",
      producto2: "Handmade Hummingbird Keychain",
      producto2desc: "Handcrafted with colorful beads, inspired by Salvadoran wildlife.",
      producto3: "Artisan Cap with Bull Design",
      producto3desc: "Cap with Salvadoran cultural embroidery and bull design.",
      producto4: "Blue Traditional Children's Dress",
      producto4desc: "Traditional girl's dress with handmade embroidery and floral lace.",
      producto5: "Beaded Dolphin Keychain",
      producto5desc: "Handmade keychain with blue beads representing a Salvadoran sea dolphin.",
      producto6: "Blue Salvadoran Traditional Dress",
      producto6desc: "Traditional Salvadoran dress made of satin fabric with white lace, perfect for cultural presentations or national celebrations.",
      textoObjetivo: "Artesanías Conchita aims to offer unique, high-quality handcrafted products, carefully created by talented local artisans. We specialize in handmade items ranging from ceramics and textiles to jewelry and decorative objects, providing our customers with authentic traditional pieces from El Salvador and neighboring countries to decorate their homes or give as gifts. Each product reflects the tradition and art of past generations, supporting fair trade and the preservation of artisanal techniques, while offering our customers products that tell stories and hold special cultural value.",
      labelIdioma: "🌐 Language:"
    }
  };

  const aplicarTraduccion = (idioma) => {
    const t = traducciones[idioma];
    if (!t) return;

    const ids = [
      ["bienvenida", t.bienvenida],
      ["subtitulo", t.subtitulo],
      ["objetivo", t.objetivo],
      ["direccion", t.contactoDireccion],
      ["titulo-mision", t.tituloMision],
      ["parrafo-mision", t.parrafoMision],
      ["titulo-vision", t.tituloVision],
      ["parrafo-vision", t.parrafoVision],
      ["titulo-valores", t.tituloValores],
      ["galeria-historia", t.galeriaHistoria],
      ["historia", t.historiaTexto],
      ["nav-inicio", t.navInicio],
      ["nav-historia", t.navHistoria],
      ["nav-productos", t.navProductos],
      ["nav-contacto", t.navContacto],
      ["nav-preguntas", t.navPreguntas],
      ["filtro-todas", t.filtroTodas],
      ["filtro-vestidos", t.filtroVestidos],
      ["filtro-llaveros", t.filtroLlaveros],
      ["filtro-gorras", t.filtroGorras],
      ["producto1", t.producto1],
      ["producto1desc", t.producto1desc],
      ["producto2", t.producto2],
      ["producto2desc", t.producto2desc],
      ["producto3", t.producto3],
      ["producto3desc", t.producto3desc],
      ["producto4", t.producto4],
      ["producto4desc", t.producto4desc],
      ["producto5", t.producto5],
      ["producto5desc", t.producto5desc],
      ["producto6", t.producto6],
      ["producto6desc", t.producto6desc],
      ["label-idioma", t.labelIdioma],
      ["texto-objetivo", t.textoObjetivo]
    ];

    ids.forEach(([id, texto]) => {
      const el = document.getElementById(id);
      if (el) el.textContent = texto;
    });

    const inputBuscar = document.getElementById("buscador");
    if (inputBuscar && t.placeholderBuscar) {
      inputBuscar.placeholder = t.placeholderBuscar;
    }

    const btnFacebook = document.querySelector("a[target='_blank']");
    if (btnFacebook && btnFacebook.textContent.includes("Facebook")) {
      btnFacebook.textContent = t.visitarFacebook;
    }

    const productosTitulo = document.querySelector("h2[data-section='productos']");
    if (productosTitulo) productosTitulo.textContent = t.productos;

    const preguntasTitulo = document.querySelector("h2#preguntas-titulo");
    if (preguntasTitulo) preguntasTitulo.textContent = t.preguntasTitulo;
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