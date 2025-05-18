document.addEventListener("DOMContentLoaded", () => {
  // Control modo oscuro y claro
  const toggle = document.getElementById("modo-oscuro-toggle");
  const body = document.body;

  // Cargar modo guardado en localStorage
  const modoGuardado = localStorage.getItem("modo");
  if (modoGuardado === "oscuro") {
    body.classList.add("modo-oscuro");
    toggle.textContent = "☀️ Cambiar modo";
  } else {
    toggle.textContent = "🌙 Cambiar modo";
  }

  // Evento para cambiar modo
  toggle?.addEventListener("click", () => {
    body.classList.toggle("modo-oscuro");
    const modoActual = body.classList.contains("modo-oscuro") ? "oscuro" : "claro";
    toggle.textContent = modoActual === "oscuro" ? "☀️ Cambiar modo" : "🌙 Cambiar modo";
    localStorage.setItem("modo", modoActual);
  });

  // Select de idiomas
  const idiomaSelect = document.getElementById("idioma");

  // Objeto con traducciones completas
  const traducciones = {
    es: {
      bienvenida: "Bienvenido a Artesanías Conchita",
      subtitulo: "Descubre nuestras hermosas creaciones.",
      objetivo: "Negocio de venta de artesanías",
      objetivoDetalle: `Artesanías Conchita tiene como objetivo ofrecer productos artesanales únicos y de alta calidad, creados con esmero por talentosos artesanos locales. Nos especializamos en artículos hechos a mano que van desde cerámica y textiles hasta joyería y objetos decorativos, brindando a nuestros clientes piezas auténticas tradicionales de El Salvador y de los países hermanos para decorar el hogar o regalar. Cada producto refleja la tradición y el arte de generaciones pasadas, apoyando el comercio justo y la preservación de técnicas artesanales, mientras ofrecemos a nuestros clientes productos que cuentan historias y tienen un valor cultural especial.`,
      contactoDireccion: "Dirección: 4ª Calle Oriente, Mercado Municipal No. 1, Local No. 14, Usulután.",
      visitarFacebook: "Visitar nuestro Facebook",
      preguntasTitulo: "Preguntas Frecuentes",
      tituloMision: "Misión",
      parrafoMision: "En Artesanías Conchita, nuestra misión es transformar la tradición en creatividad, ofreciendo piezas de artesanía que capturan la esencia y la autenticidad de nuestra cultura. Nos comprometemos a apoyar a los artesanos locales, promoviendo técnicas tradicionales y materiales sostenibles para crear productos únicos que enriquezcan la vida de nuestros clientes. Valoramos la calidad, la originalidad y el compromiso con el medio ambiente en cada creación, buscando siempre hacer de cada pieza un reflejo de la dedicación y la pasión que ponemos en nuestro trabajo.",
      tituloVision: "Visión",
      parrafoVision: "En Artesanías Conchita, aspiramos a ser el referente principal en el mundo de la artesanía, reconocido por nuestra excelencia en la calidad y la autenticidad de nuestros productos. Imaginamos un futuro en el que nuestras piezas no solo embellezcan hogares y espacios, sino que también inspiren un aprecio más profundo por las tradiciones culturales y el arte hecho a mano. Queremos fomentar un impacto positivo en la comunidad y el medio ambiente, siendo un puente entre el legado artesanal y las nuevas generaciones de apreciadores del arte.",
      tituloValores: "Valores de la empresa",
      galeriaHistoria: "Galería de nuestra historia",
      productos: "Productos",
      historiaTexto: `En la década de los 90, Celenia inició su camino en el mundo del comercio con la venta de zapatos. Sin embargo, ante el aumento de la competencia, su negocio no prosperó. Fue entonces cuando su madre le sugirió incursionar en la venta de artesanías, un mercado poco explorado en Usulután.
      <br><br>
      Comenzó con la venta de llaveros en un pequeño local del mercado Número 1 de Usulután. Conseguir los productos no fue fácil, ya que los artesanos y proveedores se encontraban en San Salvador y La Palma. Celenia viajaba constantemente en autobús para abastecerse, enfrentando dificultades en el transporte de la mercancía. Con el tiempo, logró adquirir su propio vehículo, lo que facilitó la expansión de su negocio.
      <br><br>
      Gracias a la calidad de sus productos y su esfuerzo, la tienda fue creciendo. Con el tiempo, empezó a importar artesanías de Guatemala y Nicaragua, lo que le permitió ofrecer una mayor variedad y mejores precios. Su éxito la llevó a abrir una segunda tienda, consolidando su presencia en el mercado.
      <br><br>
      Originalmente, su negocio se llamó Artesanías Helen en honor a su hija. Sin embargo, recientemente cambió el nombre a Artesanías Conchita, en tributo a su madre, quien fue clave en la fundación del negocio.
      <br><br>
      Hoy en día, Artesanías Conchita es un referente en la venta de artesanías salvadoreñas, atrayendo tanto a clientes locales como extranjeros. Con cada pieza vendida, se comparte un pedazo de la cultura y tradición de El Salvador.`,
      tituloHistoria: "Historia de Artesanías Conchita",
      tituloMisionVision: "Misión y Visión de la empresa",
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
      producto7: "Gorra artesanal de flores coloridas",
      producto7desc: "Gorra decorada a mano con flores de tela en colores vivos, resaltando la alegría salvadoreña.",
      producto8: "Vestido típico blanco con encaje",
      producto8desc: "Vestido tradicional blanco con detalles de encaje artesanal y bordado de flores."
    },
    en: {
      bienvenida: "Welcome to Artesanías Conchita",
      subtitulo: "Discover our beautiful creations.",
      objetivo: "Handicraft business",
      objetivoDetalle: `Artesanías Conchita aims to offer unique and high-quality handcrafted products, carefully created by talented local artisans. We specialize in handmade items ranging from ceramics and textiles to jewelry and decorative objects, providing our customers with authentic traditional pieces from El Salvador and neighboring countries to decorate homes or give as gifts. Each product reflects the tradition and art of past generations, supporting fair trade and the preservation of artisanal techniques, while offering customers products that tell stories and have special cultural value.`,
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
      historiaTexto: `In the 1990s, Celenia began her journey in the world of commerce by selling shoes. However, due to increasing competition, her business did not thrive. It was then that her mother suggested she explore the sale of handicrafts, a market little explored in Usulután.
      <br><br>
      She began by selling keychains in a small stall at Usulután's Market Number 1. Obtaining the products was not easy, as the artisans and suppliers were located in San Salvador and La Palma. Celenia frequently traveled by bus to stock up, facing difficulties in transporting the merchandise. Over time, she managed to acquire her own vehicle, which made it easier to expand her business.
      <br><br>
      Thanks to the quality of her products and her hard work, the store grew. Eventually, she began importing handicrafts from Guatemala and Nicaragua, allowing her to offer a greater variety and better prices. Her success led her to open a second store, consolidating her market presence.
      <br><br>
      Originally, her business was called Artesanías Helen in honor of her daughter. However, she recently changed the name to Artesanías Conchita, as a tribute to her mother, who was key in founding the business.
      <br><br>
      Today, Artesanías Conchita is a benchmark in the sale of Salvadoran handicrafts, attracting both local and foreign customers. With each piece sold, a piece of El Salvador's culture and tradition is shared.`,
      tituloHistoria: "History of Artesanías Conchita",
      tituloMisionVision: "Mission and Vision of the Company",
      navInicio: "Home",
      navHistoria: "History",
      navProductos: "Products",
      navContacto: "Contact",
      navPreguntas: "Questions",
      filtroTodas: "All categories",
      filtroVestidos: "Dresses",
      filtroLlaveros: "Keychains",
      filtroGorras: "Caps",
      placeholderBuscar: "Search products...",
      producto1: "Salvadoran traditional dress",
      producto1desc: "Traditional dress with the colors of El Salvador's flag, adorned with lace and national emblems.",
      producto2: "Handmade hummingbird keychain",
      producto2desc: "Handcrafted with colorful beads, inspired by Salvadoran fauna.",
      producto3: "Artisanal cap with bull design",
      producto3desc: "Cap with Salvadoran cultural embroidery and bull design.",
      producto4: "Blue traditional children's dress",
      producto4desc: "Traditional dress for girls, with handcrafted embroidery and floral lace.",
      producto5: "Handmade dolphin bead keychain",
      producto5desc: "Handmade keychain with blue beads representing a Salvadoran sea dolphin.",
      producto6: "Blue Salvadoran traditional dress",
      producto6desc: "Traditional El Salvador dress made of blue satin fabric with white lace, ideal for cultural presentations or patriotic celebrations.",
      producto7: "Colorful floral artisanal cap",
      producto7desc: "Cap decorated by hand with brightly colored fabric flowers, highlighting Salvadoran joy.",
      producto8: "White traditional dress with lace",
      producto8desc: "Traditional white dress with artisanal lace details and floral embroidery."
    }
  };

  // Función para traducir y actualizar textos
  function traducir(idioma) {
    document.getElementById("bienvenida").textContent = traducciones[idioma].bienvenida;
    document.getElementById("subtitulo").textContent = traducciones[idioma].subtitulo;
    document.getElementById("objetivo").textContent = traducciones[idioma].objetivo;
    document.getElementById("objetivoDetalle").innerHTML = traducciones[idioma].objetivoDetalle;
    document.getElementById("contactoDireccion").textContent = traducciones[idioma].contactoDireccion;
    document.getElementById("visitarFacebook").textContent = traducciones[idioma].visitarFacebook;
    document.getElementById("preguntasTitulo").textContent = traducciones[idioma].preguntasTitulo;
    document.getElementById("tituloMision").textContent = traducciones[idioma].tituloMision;
    document.getElementById("parrafoMision").textContent = traducciones[idioma].parrafoMision;
    document.getElementById("tituloVision").textContent = traducciones[idioma].tituloVision;
    document.getElementById("parrafoVision").textContent = traducciones[idioma].parrafoVision;
    document.getElementById("tituloValores").textContent = traducciones[idioma].tituloValores;
    document.getElementById("galeriaHistoria").textContent = traducciones[idioma].galeriaHistoria;
    document.getElementById("productos").textContent = traducciones[idioma].productos;
    document.getElementById("historiaTexto").innerHTML = traducciones[idioma].historiaTexto;
    document.getElementById("tituloHistoria").textContent = traducciones[idioma].tituloHistoria;
    document.getElementById("tituloMisionVision").textContent = traducciones[idioma].tituloMisionVision;
    document.getElementById("navInicio").textContent = traducciones[idioma].navInicio;
    document.getElementById("navHistoria").textContent = traducciones[idioma].navHistoria;
    document.getElementById("navProductos").textContent = traducciones[idioma].navProductos;
    document.getElementById("navContacto").textContent = traducciones[idioma].navContacto;
    document.getElementById("navPreguntas").textContent = traducciones[idioma].navPreguntas;
    document.getElementById("filtroTodas").textContent = traducciones[idioma].filtroTodas;
    document.getElementById("filtroVestidos").textContent = traducciones[idioma].filtroVestidos;
    document.getElementById("filtroLlaveros").textContent = traducciones[idioma].filtroLlaveros;
    document.getElementById("filtroGorras").textContent = traducciones[idioma].filtroGorras;
    document.getElementById("buscar").placeholder = traducciones[idioma].placeholderBuscar;
    // Productos y descripciones (del 1 al 8)
    for (let i = 1; i <= 8; i++) {
      const prodId = `producto${i}`;
      const prodDescId = `producto${i}desc`;
      if (traducciones[idioma][prodId]) document.getElementById(prodId).textContent = traducciones[idioma][prodId];
      if (traducciones[idioma][prodDescId]) document.getElementById(prodDescId).textContent = traducciones[idioma][prodDescId];
    }
  }

  // Evento al cambiar idioma en el select
  idiomaSelect.addEventListener("change", (e) => {
    const idiomaSeleccionado = e.target.value;
    traducir(idiomaSeleccionado);
  });

  // Inicializamos con español
  traducir("es");
});