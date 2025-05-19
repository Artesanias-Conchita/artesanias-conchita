document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("modo-oscuro-toggle");
  const body = document.body;
  const modoGuardado = localStorage.getItem("modo");

  if (modoGuardado === "oscuro") {
    body.classList.add("modo-oscuro");
    if (toggle) toggle.textContent = "☀️ Cambiar modo";
  } else {
    if (toggle) toggle.textContent = "🌙 Cambiar modo";
  }

  toggle?.addEventListener("click", () => {
    body.classList.toggle("modo-oscuro");
    const modoActual = body.classList.contains("modo-oscuro") ? "oscuro" : "claro";
    if (toggle) toggle.textContent = modoActual === "oscuro" ? "☀️ Cambiar modo" : "🌙 Cambiar modo";
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
      tituloHistoria: "Historia de Artesanías Conchita",
      valor1: "Honestidad",
      valor1Desc: "Nos comprometemos a brindar información clara y veraz sobre nuestros productos, asegurando que cada cliente reciba artículos de calidad a precios justos.",
      valor2: "Amabilidad",
      valor2Desc: "Atendemos a cada persona con cortesía y calidez, creando un ambiente acogedor para que nuestros clientes se sientan bienvenidos y valorados.",
      valor3: "Respeto",
      valor3Desc: "Valoramos la diversidad de nuestros clientes y colaboradores, promoviendo un trato digno y cordial en cada interacción.",
      valor4: "Integridad",
      valor4Desc: "Actuamos con transparencia y ética en todas nuestras operaciones, manteniendo la confianza de nuestros clientes y proveedores.",
      valor5: "Responsabilidad",
      valor5Desc: "Nos esforzamos por cumplir con nuestros compromisos y ofrecer productos que representen con orgullo la cultura salvadoreña, garantizando un servicio de calidad.",
      historiaTexto: `En la década de los 90, Celenia inició su camino en el mundo del comercio con la venta de zapatos. Sin embargo, ante el aumento de la competencia, su negocio no prosperó. Fue entonces cuando su madre le sugirió incursionar en la venta de artesanías, un mercado poco explorado en Usulután.
      <br><br>
      Comenzó con la venta de llaveros en un pequeño local del mercado Número 1 de Usulután. Conseguir los productos no fue fácil, ya que los artesanos y proveedores se encontraban en San Salvador y La Palma. Celenia viajaba constantemente en autobús para abastecerse, enfrentando dificultades en el transporte de la mercancía. Con el tiempo, logró adquirir su propio vehículo, lo que facilitó la expansión de su negocio.
      <br><br>
      Gracias a la calidad de sus productos y su esfuerzo, la tienda fue creciendo. Con el tiempo, empezó a importar artesanías de Guatemala y Nicaragua, lo que le permitió ofrecer una mayor variedad y mejores precios. Su éxito la llevó a abrir una segunda tienda, consolidando su presencia en el mercado.
      <br><br>
      Originalmente, su negocio se llamó Artesanías Helen en honor a su hija. Sin embargo, recientemente cambió el nombre a Artesanías Conchita, en tributo a su madre, quien fue clave en la fundación del negocio.
      <br><br>
      Hoy en día, Artesanías Conchita es un referente en la venta de artesanías salvadoreñas, atrayendo tanto a clientes locales como extranjeros. Con cada pieza vendida, se comparte un pedazo de la cultura y tradición de El Salvador.`,
      tituloMisionVision: "Misión y Visión de la empresa",
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
      producto5: "Dolphin Beaded Keychain",
      producto5desc: "Handmade keychain with blue beads representing a Salvadoran sea dolphin.",
      producto6: "Blue Salvadoran Typical Dress",
      producto6desc: "Traditional Salvadoran dress made of blue satin fabric with white lace, ideal for cultural presentations or patriotic celebrations.",
      textoObjetivo: "Artesanías Conchita aims to offer unique, high-quality handcrafted products created with care by talented local artisans. We specialize in handmade items ranging from ceramics and textiles to jewelry and decorative objects, providing customers with authentic traditional pieces from El Salvador and neighboring countries to decorate homes or give as gifts. Each product reflects the tradition and art of past generations, supporting fair trade and preserving artisanal techniques, while offering customers products that tell stories and hold special cultural value.",
      tituloHistoria: "History of Artesanías Conchita",
      valor1: "Honesty",
      valor1Desc: "We are committed to providing clear and truthful information about our products, ensuring every customer receives quality items at fair prices.",
      valor2: "Kindness",
      valor2Desc: "We attend to each person with courtesy and warmth, creating a welcoming environment for our customers to feel valued.",
      valor3: "Respect",
      valor3Desc: "We value the diversity of our customers and collaborators, promoting dignified and cordial treatment in every interaction.",
      valor4: "Integrity",
      valor4Desc: "We act with transparency and ethics in all our operations, maintaining the trust of our customers and suppliers.",
      valor5: "Responsibility",
      valor5Desc: "We strive to fulfill our commitments and offer products that proudly represent Salvadoran culture, guaranteeing quality service.",
      historiaTexto: `In the 1990s, Celenia began her journey in commerce by selling shoes. However, with increasing competition, her business did not prosper. Her mother then suggested venturing into handicrafts, a market little explored in Usulután.
      <br><br>
      She started selling keychains in a small shop at Market Number 1 in Usulután. Obtaining products was not easy, as artisans and suppliers were located in San Salvador and La Palma. Celenia frequently traveled by bus to stock up, facing difficulties transporting merchandise. Over time, she acquired her own vehicle, facilitating business expansion.
      <br><br>
      Thanks to product quality and effort, the store grew. She began importing handicrafts from Guatemala and Nicaragua, offering greater variety and better prices. Success led to opening a second store, consolidating her market presence.
      <br><br>
      Originally named Artesanías Helen after her daughter, the business recently changed to Artesanías Conchita, honoring her mother, key in founding the business.
      <br><br>
      Today, Artesanías Conchita is a reference in Salvadoran handicrafts, attracting local and foreign customers. Each piece sold shares a piece of El Salvador's culture and tradition.`,
      tituloMisionVision: "Mission and Vision of the company",
      labelIdioma: "🌐 Language:"
    }
  };

  function aplicarTraduccion(lang) {
    const t = traducciones[lang];
    if (!t) return;

    const ids = [
      ["bienvenida", t.bienvenida],
      ["subtitulo", t.subtitulo],
      ["objetivo", t.objetivo],
      ["contacto-direccion", t.contactoDireccion],
      ["visitar-facebook", t.visitarFacebook],
      ["preguntas-titulo", t.preguntasTitulo],
      ["titulo-mision", t.tituloMision],
      ["parrafo-mision", t.parrafoMision],
      ["titulo-vision", t.tituloVision],
      ["parrafo-vision", t.parrafoVision],
      ["titulo-valores", t.tituloValores],
      ["galeria-historia", t.galeriaHistoria],
      ["productos", t.productos],
      ["historia-texto", t.historiaTexto],
      ["nav-inicio", t.navInicio],
      ["nav-historia", t.navHistoria],
      ["nav-productos", t.navProductos],
      ["nav-contacto", t.navContacto],
      ["nav-preguntas", t.navPreguntas],
      ["filtro-todas", t.filtroTodas],
      ["filtro-vestidos", t.filtroVestidos],
      ["filtro-llaveros", t.filtroLlaveros],
      ["filtro-gorras", t.filtroGorras],
      ["buscar-productos", t.placeholderBuscar],
      ["producto1", t.producto1],
      ["producto1-desc", t.producto1desc],
      ["producto2", t.producto2],
      ["producto2-desc", t.producto2desc],
      ["producto3", t.producto3],
      ["producto3-desc", t.producto3desc],
      ["producto4", t.producto4],
      ["producto4-desc", t.producto4desc],
      ["producto5", t.producto5],
      ["producto5-desc", t.producto5desc],
      ["producto6", t.producto6],
      ["producto6-desc", t.producto6desc],
      ["texto-objetivo", t.textoObjetivo],
      ["titulo-historia", t.tituloHistoria],
      ["texto-historia", t.textoHistoria],
      ["valor1", t.valor1],
      ["valor1-desc", t.valor1Desc],
      ["valor2", t.valor2],
      ["valor2-desc", t.valor2Desc],
      ["valor3", t.valor3],
      ["valor3-desc", t.valor3Desc],
      ["valor4", t.valor4],
      ["valor4-desc", t.valor4Desc],
      ["valor5", t.valor5],
      ["valor5-desc", t.valor5Desc],
      ["titulo-mision-vision", t.tituloMisionVision],
      ["label-idioma", t.labelIdioma]
    ];

    ids.forEach(([id, texto]) => {
      const elemento = document.getElementById(id);
      if (elemento) {
        if (elemento.tagName.toLowerCase() === "input" || elemento.tagName.toLowerCase() === "textarea") {
          elemento.placeholder = texto;
        } else {
          elemento.textContent = texto;
        }
      }
    });
  }

  // Seleccionar idioma guardado o default
  const idiomaGuardado = localStorage.getItem("idioma") || "es";
  aplicarTraduccion(idiomaGuardado);
  if (idiomaSelect) idiomaSelect.value = idiomaGuardado;

  idiomaSelect?.addEventListener("change", (e) => {
    const nuevoIdioma = e.target.value;
    aplicarTraduccion(nuevoIdioma);
    localStorage.setItem("idioma", nuevoIdioma);
  });
});