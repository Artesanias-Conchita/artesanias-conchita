document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("modo-oscuro-toggle");
    const body = document.body;

    // Cargar modo oscuro guardado
    const modoGuardado = localStorage.getItem("modo");

    if (modoGuardado === "oscuro") {
        body.classList.add("modo-oscuro");
        if (toggle) toggle.textContent = "☀️ Cambiar modo";
    } else {
        body.classList.remove("modo-oscuro");
        if (toggle) toggle.textContent = "🌙 Cambiar modo";
        localStorage.setItem("modo", "claro");
    }

    // Toggle de modo oscuro
    toggle?.addEventListener("click", () => {
        body.classList.toggle("modo-oscuro");
        const modoActual = body.classList.contains("modo-oscuro") ? "oscuro" : "claro";
        if (toggle) toggle.textContent = modoActual === "oscuro" ? "☀️ Cambiar modo" : "🌙 Cambiar modo";
        localStorage.setItem("modo", modoActual);
    });

    const idiomaSelect = document.getElementById("idioma");

    // Objeto de traducciones para todos los textos de la web
    const traducciones = {
        es: {
            bienvenida: "Bienvenido a Artesanías Conchita",
            subtitulo: "Descubre nuestras hermosas creaciones.",
            objetivo: "Negocio de venta de artesanías",
            // Contacto y Ubicación
            "titulo-contacto": "Contacto y Ubicación",
            // La dirección ahora incluye la etiqueta strong directamente en el texto
            "direccion": "<strong>Dirección:</strong> 4ª Calle Oriente, Mercado Municipal No. 1, Local No. 14, Usulután.",
            "visitar-facebook": "Visitar nuestro Facebook", // Texto para el botón
            "nombre-facebook": "@ArtesaníasConchita",
            // Fin Contacto y Ubicación
            preguntasTitulo: "Preguntas Frecuentes",
            tituloMision: "Misión",
            parrafoMision: `En Artesanías Conchita, nuestra misión es transformar la tradición en creatividad, ofreciendo piezas de artesanía que capturan la esencia y la autenticidad de nuestra cultura. Nos comprometemos a apoyar a los artesanos locales, promoviendo técnicas tradicionales y materiales sostenibles para crear productos únicos que enriquezcan la vida de nuestros clientes. Valoramos la calidad, la originalidad y el compromiso con el medio ambiente en cada creación, buscando siempre hacer de cada pieza un reflejo de la dedicación y la pasión que ponemos en nuestro trabajo.`,
            tituloVision: "Visión",
            parrafoVision: `En Artesanías Conchita, aspiramos a ser el referente principal en el mundo de la artesanía, reconocido por nuestra excelencia en la calidad y la autenticidad de nuestros productos. Imaginamos un futuro en el que nuestras piezas no solo embellezcan hogares y espacios, sino que también inspiren un aprecio más profundo por las tradiciones culturales y el arte hecho a mano. Queremos fomentar un impacto positivo en la comunidad y el medio ambiente, siendo un puente entre el legado artesanal y las nuevas generaciones de apreciadores del arte.`,
            tituloValores: "Valores de la empresa",
            galeriaHistoria: "Galería de nuestra historia",
            productos: "Productos",
            // Navegación (Coinciden con los IDs del HTML)
            "nav-inicio": "Inicio",
            "nav-historia": "Historia",
            "nav-productos": "Productos",
            "nav-contacto": "Contacto",
            "nav-preguntas": "Preguntas",
            // Fin Navegación
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
            textoObjetivo: `Artesanías Conchita tiene como objetivo ofrecer productos artesanales únicos y de alta calidad, creados con esmero por talentosos artesanos locales. Nos especializamos en artículos hechos a mano que van desde cerámica y textiles hasta joyería y objetos decorativos, brindando a nuestros clientes piezas auténticas tradicionales de El Salvador y de los países hermanos para decorar el hogar o regalar. Cada producto refleja la tradición y el arte de generaciones pasadas, apoyando el comercio justo y la preservación de técnicas artesanales, mientras ofrecemos a nuestros clientes productos que cuentan historias y tienen un valor cultural especial.`,
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
            parrafoHistoria: `En la década de los 90, Celenia inició su camino en el mundo del comercio con la venta de zapatos. Sin embargo, ante el aumento de la competencia, su negocio no prosperó. Fue entonces cuando su madre le sugirió incursionar en la venta de artesanías, un mercado poco explorado en Usulután.<br><br>Comenzó con la venta de llaveros en un pequeño local del mercado Número 1 de Usulután. Conseguir los productos no fue fácil, ya que los artesanos y proveedores se encontraban en San Salvador y La Palma. Celenia viajaba constantemente en autobús para abastecerse, enfrentando dificultades en el transporte de la mercancía. Con el tiempo, logró adquirir su propio vehículo, lo que facilitaría la expansión de su negocio.<br><br>Gracias a la calidad de sus productos y su esfuerzo, la tienda fue creciendo. Con el tiempo, empezó a importar artesanías de Guatemala y Nicaragua, lo que le permitió ofrecer una mayor variedad y mejores precios. Su éxito la llevó a abrir una segunda tienda, consolidando su presencia en el mercado.<br><br>Originalmente, su negocio se llamó Artesanías Helen en honor a su hija. Sin embargo, recientemente cambió el nombre a Artesanías Conchita, en tributo a su madre, quien fue clave en la fundación del negocio.<br><br>Hoy en día, Artesanías Conchita es un referente en la venta de artesanías salvadoreñas, atrayendo tanto a clientes locales como extranjeros. Con cada pieza vendida, se comparte un pedazo de la cultura y tradición de El Salvador.`,
            tituloMisionVision: "Misión y Visión de la empresa.",
            labelIdioma: "🌐 Idioma:",
            // Footer
            "footer-texto": "© 2025 Artesanías Conchita",
            // Header
            "nombre-empresa": "Artesanías Conchita"
        },
        en: {
            bienvenida: "Welcome to Artesanías Conchita",
            subtitulo: "Discover our beautiful creations.",
            objetivo: "Handicraft Business",
            // Contact and Location
            "titulo-contacto": "Contact and Location",
            // La dirección ahora incluye la etiqueta strong directamente en el texto
            "direccion": "<strong>Address:</strong> 4th East Street, Municipal Market No. 1, Local No. 14, Usulután.",
            "visitar-facebook": "Visit our Facebook", // Texto para el botón
            "nombre-facebook": "@ArtesaníasConchita",
            // End Contact and Location
            preguntasTitulo: "Frequently Asked Questions",
            tituloMision: "Mission",
            parrafoMision: `At Artesanías Conchita, our mission is to transform tradition into creativity, offering handcrafted pieces that capture the essence and authenticity of our culture. We are committed to supporting local artisans, promoting traditional techniques and sustainable materials to create unique products that enrich the lives of our customers. We value quality, originality, and environmental responsibility in every creation, always striving to make each piece a reflection of the dedication and passion we put into our work.`,
            tituloVision: "Vision",
            parrafoVision: `At Artesanías Conchita, we aspire to be the leading reference in the world of handicrafts, recognized for our excellence in the quality and authenticity of our products. We envision a future in which our pieces not only beautify homes and spaces but also inspire a deeper appreciation for cultural traditions and handmade art. We aim to foster a positive impact on the community and the environment, serving as a bridge between the artisanal legacy and new generations of art enthusiasts.`,
            tituloValores: "Company Values",
            galeriaHistoria: "Our History Gallery",
            productos: "Products",
            // Navigation (Coinciden con los IDs del HTML)
            "nav-inicio": "Home",
            "nav-historia": "History",
            "nav-productos": "Products",
            "nav-contacto": "Contact",
            "nav-preguntas": "FAQ",
            // End Navigation
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
            textoObjetivo: `Artesanías Conchita aims to offer unique, high-quality handcrafted products created with care by talented local artisans. We specialize in handmade items ranging from ceramics and textiles to jewelry and decorative objects, providing customers with authentic traditional pieces from El Salvador and neighboring countries to decorate homes or give as gifts. Each product reflects the tradition and art of past generations, supporting fair trade and preserving artisanal techniques, while offering customers products that tell stories and hold special cultural value.`,
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
            parrafoHistoria: `In the 90s, Celenia began her journey in the world of commerce selling shoes. However, due to increased competition, her business did not prosper. It was then that her mother suggested venturing into the sale of handicrafts, a little-explored market in Usulután.<br><br>She started by selling keychains in a small shop at Market Number 1 in Usulután. Sourcing products was not easy, as artisans and suppliers were located in San Salvador and La Palma. Celenia traveled constantly by bus to stock up, facing difficulties in transporting goods. Over time, she managed to acquire her own vehicle, which facilitated the expansion of her business.<br><br>Originally, her business was named Artesanías Helen in honor of her daughter. However, she recently changed the name to Artesanías Conchita, in tribute to her mother, who was key to the business's founding.<br><br>Today, Artesanías Conchita is a benchmark in the sale of Salvadoran handicrafts, attracting both local and foreign customers. With each piece sold, a piece of the culture and tradition of El Salvador.`,
            tituloMisionVision: "Mission and Vision of the company",
            labelIdioma: "🌐 Language:",
            // Footer
            "footer-texto": "© 2025 Artesanías Conchita",
            // Header
            "nombre-empresa": "Artesanías Conchita"
        }
    };

    // Función para aplicar la traducción
    function aplicarTraduccion(lang) {
        const t = traducciones[lang];
        if (!t) return;

        // Lista de IDs y su texto correspondiente en el idioma seleccionado
        const ids = [
            ["bienvenida", t.bienvenida],
            ["subtitulo", t.subtitulo],
            ["objetivo", t.objetivo],
            // Contacto y Ubicación
            ["titulo-contacto", t["titulo-contacto"]],
            ["direccion", t["direccion"]],
            // ["visitar-facebook", t["visitar-facebook"]], // NO USAR AQUÍ, se maneja de forma especial
            ["nombre-facebook", t["nombre-facebook"]],
            // Fin Contacto y Ubicación
            ["preguntas-titulo", t.preguntasTitulo],
            ["titulo-mision", t.tituloMision],
            ["parrafo-mision", t.parrafoMision],
            ["titulo-vision", t.tituloVision],
            ["parrafo-vision", t.parrafoVision],
            ["titulo-valores", t.tituloValores],
            ["galeria-historia", t.galeriaHistoria],
            ["productos", t.productos],
            // Navegación (Coinciden con los IDs del HTML)
            ["nav-inicio", t["nav-inicio"]],
            ["nav-historia", t["nav-historia"]],
            ["nav-productos", t["nav-productos"]],
            ["nav-contacto", t["nav-contacto"]],
            ["nav-preguntas", t["nav-preguntas"]],
            // Fin Navegación
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
            ["parrafo-historia", t.parrafoHistoria],
            ["titulo-mision-vision", t.tituloMisionVision],
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
            ["label-idioma", t.labelIdioma],
            // Footer
            ["footer-texto", t["footer-texto"]], // Corregido: Ahora es un array
            // Header
            ["nombre-empresa", t["nombre-empresa"]] // Corregido: Ahora es un array
        ];

        ids.forEach(([id, texto]) => {
            const elemento = document.getElementById(id);
            if (elemento) {
                if (elemento.tagName.toLowerCase() === "input" || elemento.tagName.toLowerCase() === "textarea") {
                    elemento.placeholder = texto;
                } else if (elemento.tagName.toLowerCase() === "option") {
                    elemento.textContent = texto;
                }
                // Usar innerHTML para párrafos con saltos de línea (br) o para texto con negrita (strong)
                else if (id === "parrafo-historia" || id === "parrafo-mision" || id === "parrafo-vision" || id === "texto-objetivo" || id === "direccion") {
                    elemento.innerHTML = texto;
                }
                // Actualizar el título de la página en la pestaña del navegador
                else if (id === "titulo-contacto") {
                    document.title = texto + " - Artesanías Conchita"; // Mantener el sufijo de la empresa
                    elemento.textContent = texto; // También actualiza el h2 en la página
                }
                else {
                    elemento.textContent = texto;
                }
            }
        });

        // Manejo específico para el botón de Facebook, ya que no es un texto simple en un elemento genérico
        const botonFacebook = document.getElementById("boton-facebook");
        if (botonFacebook) {
            botonFacebook.textContent = t["visitar-facebook"];
        }
    }

    // Cargar idioma guardado o establecer español por defecto
    const idiomaGuardado = localStorage.getItem("idioma");

    if (idiomaGuardado) {
        aplicarTraduccion(idiomaGuardado);
        if (idiomaSelect) idiomaSelect.value = idiomaGuardado;
    } else {
        aplicarTraduccion("es");
        if (idiomaSelect) idiomaSelect.value = "es";
        localStorage.setItem("idioma", "es"); // Guardar "es" como valor inicial
    }

    // Cambiar idioma al seleccionar una opción
    idiomaSelect?.addEventListener("change", (e) => {
        const nuevoIdioma = e.target.value;
        aplicarTraduccion(nuevoIdioma);
        localStorage.setItem("idioma", nuevoIdioma);
    });
});