document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("modo-oscuro-toggle");
    const body = document.body;

    // Cargar modo oscuro guardado
    const modoGuardado = localStorage.getItem("modo");

    if (modoGuardado === "oscuro") {
        body.classList.add("modo-oscuro");
        // Asegúrate de que el span dentro del botón sea el que cambie el texto
        const toggleTextSpan = toggle?.querySelector('#modo-oscuro-toggle-text');
        if (toggleTextSpan) toggleTextSpan.textContent = "☀️ Cambiar modo";
    } else {
        body.classList.remove("modo-oscuro");
        const toggleTextSpan = toggle?.querySelector('#modo-oscuro-toggle-text');
        if (toggleTextSpan) toggleTextSpan.textContent = "🌙 Cambiar modo";
        localStorage.setItem("modo", "claro");
    }

    // Toggle de modo oscuro
    toggle?.addEventListener("click", () => {
        body.classList.toggle("modo-oscuro");
        const modoActual = body.classList.contains("modo-oscuro") ? "oscuro" : "claro";
        const toggleTextSpan = toggle?.querySelector('#modo-oscuro-toggle-text');
        if (toggleTextSpan) toggleTextSpan.textContent = modoActual === "oscuro" ? "☀️ Cambiar modo" : "🌙 Cambiar modo";
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
            "direccion": "<strong>Dirección:</strong> 4ª Calle Oriente, Mercado Municipal No. 1, Local No. 14, Usulután, El Salvador.",
            "visitar-facebook": "Visitar nuestro Facebook",
            "nombre-facebook": "@ArtesaníasConchita",
            // Preguntas Frecuentes
            "preguntas-titulo": "Preguntas Frecuentes",
            "faq-q1": "¿Cuál es su ubicación?",
            "faq-a1": "Nuestra tienda se encuentra ubicada en la 4ª Calle Oriente, Mercado Municipal No. 1, Local No. 14, en Usulután, El Salvador0",
            "faq-q2": "¿Cuál es el procedimiento para adquirir sus productos?",
            "faq-a2": "Para realizar una compra, le invitamos a visitar nuestra tienda física directamente en Usulután.",
            "faq-q3": "¿Ofrecen servicio de entrega a domicilio?",
            "faq-a3": "No, actualmente todas las compras deben realizarse de manera presencial en nuestro establecimiento.",
            "faq-q4": "¿Es posible realizar pedidos personalizados?",
            "faq-a4": "Por el momento, eso depende del tipo de producto que desea personalizar.",
            "faq-q5": "¿Disponen de una plataforma de venta en línea?",
            "faq-a5": "No contamos con tienda en línea. Todas las ventas se efectúan exclusivamente en nuestro local física.",
            "faq-q6": "¿Cuál es el origen de sus productos artesanales?",
            "faq-a6": "La mayoría de nuestros productos son de origen salvadoreño. No obstante, también ofrecemos una selección de artesanías provenientes de otros países de Centroamérica.",
            "faq-q7": "¿Cuál variedad de artesanías ofrecen?",
            "faq-a7": "Nuestra oferta incluye llaveros, gorras, trajes típicos, artículos de cerámica, textiles y una diversidad de otros productos artesanales.",
            "faq-q8": "¿Cuál es el horario de atención de su tienda?",
            "faq-a8": "Estamos a su disposición durante el horario comercial establecido por el Mercado Municipal NO.1 de Usulután. Estos son de 8:00 am hasta las 4:00 pm.",
            "faq-q9": "¿Cuál es el medio de contacto directo con su negocio?",
            "faq-a9": "Puede contactarnos directamente, puede enviarnos un mensaje a tráves de nuestro número de WhatsApp.",
            // Fin Preguntas Frecuentes
            tituloMision: "Misión",
            parrafoMision: `En Artesanías Conchita, nuestra misión es transformar la tradición en creatividad, ofreciendo piezas de artesanía que capturan la esencia y la autenticidad de nuestra cultura. Nos comprometemos a apoyar a los artesanos locales, promoviendo técnicas tradicionales y materiales sostenibles para crear productos únicos que enriquezcan la vida de nuestros clientes. Valoramos la calidad, la originalidad y el compromiso con el medio ambiente en cada creación, buscando siempre hacer de cada pieza un reflejo de la dedicación y la pasión que ponemos en nuestro trabajo.`,
            tituloVision: "Visión",
            parrafoVision: `En Artesanías Conchita, aspiramos a ser el referente principal en el mundo de la artesanía, reconocido por nuestra excelencia en la calidad y la autenticidad de nuestros productos. Imaginamos un futuro en el que nuestras piezas no solo embellezcan hogares y espacios, sino que también inspiren un aprecio más profundo por las tradiciones culturales y el arte hecho a mano. Queremos fomentar un impacto positivo en la comunidad y el medio ambiente, siendo un puente entre el legado artesanal y las nuevas generaciones de apreciadores del arte.`,
            tituloValores: "Valores de la empresa",
            galeriaHistoria: "Galería de nuestra historia",
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
            parrafoHistoria: `En los años 90, Celenia se dedicaba a vender zapatos, pero debido al aumento de la competencia, las ventas comenzaron a disminuir y el negocio no prosperó. Fue entonces cuando su madre le sugirió cambiar de giro e iniciar con la venta de artesanías, comenzando con llaveros. En ese momento, en Usulután no existían tiendas similares, por lo que decidieron abrir un pequeño local en el mercado Número 1 de la ciudad. La novedad del concepto atrajo a los primeros clientes y marcó el inicio de un nuevo camino comercial para Celenia.<br><br> Uno de los mayores retos fue la falta de artesanos y proveedores en Usulután, lo que obligaba a Celenia a viajar constantemente en autobús hacia San Salvador y La Palma, donde sí había productores de artesanías. A menudo tenía dificultades para transportar los productos, especialmente cuando eran frágiles o en grandes cantidades, ya que algunos motoristas no querían aceptarlos en el autobús. A pesar de estos obstáculos, Celenia logró mantener el negocio abastecido y en funcionamiento.<br><br> Con el tiempo, para facilitar la logística del negocio, Celenia adquirió su propio vehículo, lo cual le permitió movilizarse con mayor comodidad y eficiencia. También comenzó a importar productos artesanales desde Guatemala y Nicaragua, donde la mano de obra era más económica y los artículos eran de buena calidad. Esto le ayudó a ampliar su catálogo de productos y ofrecer precios más competitivos, lo cual atrajo a una clientela más amplia y diversa.<br><br> El negocio fue originalmente nombrado "Artesanías Helen", en honor a su hija, pero recientemente fue renombrado como "Artesanías Conchita", en homenaje a su madre, quien fue clave en la fundación del negocio. Este cambio fortaleció la identidad del emprendimiento y su vínculo con la tradición cultural salvadoreña, ya que "Conchita" es ampliamente conocida en la comunidad. Ambas tiendas se volvieron populares tanto entre locales como turistas que buscaban recuerdos o decoraciones hechas a mano con identidad nacional.<br><br> Durante festividades como Semana Santa, las fiestas agostinas, las fiestas patrias de septiembre y las celebraciones de diciembre, las ventas aumentan notablemente gracias al interés por productos típicos. Aunque hay temporadas bajas como octubre, el negocio se mantiene estable y sigue siendo un símbolo de la identidad salvadoreña. Las tiendas continúan siendo muy visitadas por personas nacionales y extranjeras que valoran el trabajo artesanal y desean llevarse un pedacito de El Salvador.`,
            tituloMisionVision: "Misión y Visión de la empresa.",
            labelIdioma: "🌐 Idioma:",
            // Footer (genérico, usar para todas las páginas)
            "footer-texto": "© 2025 Artesanías Conchita",
            // Header (genérico, usar para todas las páginas)
            "nombre-empresa-header": "Artesanías Conchita",
            "modo-oscuro-toggle-text": "🌙 Cambiar modo",

            // --- Textos específicos de la página de Productos (si solo aparecen ahí) ---
            "productos-titulo-pagina": "Productos - Artesanías Conchita", // Título de la pestaña de productos
            "productos-seccion-titulo": "Productos",
            "filtro-todas": "Todas las categorías",
            "filtro-vestidos": "Vestidos",
            "filtro-llaveros": "Llaveros",
            "filtro-gorras": "Gorras",
            "buscador-placeholder": "Buscar productos...", // Placeholder del input de búsqueda
            "producto1": "Vestido típico salvadoreño",
            "producto1-desc": "Luce la herencia de El Salvador con este hermoso vestido, que resalta los colores de nuestra bandera y el espíritu de nuestra gente. Decorado con delicados encajes y los escudos que nos unen como salvadoreños, ideal para cualquier ocasión especial o para llevar el orgullo de nuestra tierra.",
            "producto2": "Colibrí Artesanal de Cuentas",
            "producto2-desc": "Esta hermosa figura de colibrí está meticulosamente elaborada a mano con pequeñas cuentas de colores vibrantes, una técnica artesanal característica de la región centroamericana. Cada pieza es única, reflejando el talento de los artesanos. Es ideal como adorno decorativo para el hogar, llavero, o para añadir un toque distintivo a bolsos y carteras, llevando consigo la esencia de la tradición y el arte local.",
            "producto3": "Gorra estilo artesanal con diseño taurino",
            "producto3-desc": "Esta gorra presenta un diseño único. Su frente de tejido tipo rafia o paja luce un bordado con el nombre El Salvador y el escudo nacional, junto a las letras E y S. La visera está decorada con un bordado detallado de una cabeza de toro y una herradura. La parte trasera es de malla negra, ofreciendo transpirabilidad y comodidad. Un accesorio versátil y con personalidad.",
            "producto4": "Vestido Infantil Típico Salvadoreño",
            "producto4-desc": "Este encantador vestido infantil, que encarna el estilo típico salvadoreño, presenta un diseño fresco y vibrante en tono azul. Destacan sus delicados bordados blancos de motivos florales que adornan el escote y la falda, reflejando la rica tradición textil del país. La parte superior es fruncida para un ajuste cómodo y flexible, mientras que la falda cuenta con detalles de encaje y ojales que no solo realzan su belleza, sino que también le dan un movimiento gracioso. Es la prenda perfecta para celebraciones, eventos culturales o para que las más pequeñas luzcan un atuendo auténtico y lleno de la alegría y el color de las tradiciones de El Salvador.",
            "producto5": "Llavero Delfín de Cuentas Artesanal Salvadoreño",
            "producto5-desc": "Este llamativo llavero presenta un delfín completamente elaborado a mano con pequeñas cuentas de colores azules vibrantes, blancos y plateados, siguiendo la minuciosa tradición artesanal salvadoreña. Cada cuenta está cuidadosamente ensartada para crear una figura detallada y brillante. Es un accesorio funcional y decorativo, perfecto para organizar tus llaves, adornar tu bolso, mochila o incluso como un pequeño obsequio que lleva consigo la creatividad y el arte manual de El Salvador.",
            "producto6": "Vestido de Danza Folklórica Salvadoreña",
            "producto6-desc": "Este vistoso vestido de danza folklórica, confeccionado en un vibrante tono azul satinado, es la elección perfecta para presentaciones artísticas y eventos culturales que celebran las raíces de El Salvador. Cuenta con un escote elástico con volantes y delicados adornos de encaje blanco que añaden un toque de elegancia. La falda, amplia y con múltiples capas de encaje, está diseñada para brindar un volumen impresionante y un movimiento fluido y espectacular, característico de los bailes tradicionales salvadoreños. Es un atuendo que no solo viste, sino que también realza la belleza, el ritmo y la pasión de las tradiciones locales.",

            // --- Navegación (genérica, para todas las páginas) ---
            "nav-inicio": "Inicio",
            "nav-historia": "Historia",
            "nav-productos": "Productos",
            "nav-contacto": "Contacto",
            "nav-preguntas": "Preguntas"
        },
        en: {
            bienvenida: "Welcome to Artesanías Conchita",
            subtitulo: "Discover our beautiful creations.",
            objetivo: "Handicraft Business",
            // Contact and Location
            "titulo-contacto": "Contact and Location",
            "direccion": "<strong>Address:</strong> 4th East Street, Municipal Market No. 1, Local No. 14, Usulután, El Salvador.",
            "visitar-facebook": "Visit our Facebook",
            "nombre-facebook": "@ArtesaníasConchita",
            // Frequently Asked Questions
            "preguntas-titulo": "Frequently Asked Questions",
            "faq-q1": "What is your location?",
            "faq-a1": "Our store is located at 4th East Street, Municipal Market No. 1, Local No. 14, in Usulután, El Salvador.",
            "faq-q2": "What is the procedure to purchase your products?",
            "faq-a2": "To make a purchase, we invite you to visit our physical store directly in Usulután.",
            "faq-q3": "Do you offer home delivery service?",
            "faq-a3": "No, currently all purchases must be made in person at our establishment.",
            "faq-q4": "Is it possible to place personalized orders?",
            "faq-a4": "For now, it depends on the type of product you wish to customize.",
            "faq-q5": "Do you have an online sales platform?",
            "faq-a5": "We do not have an online store. All sales are made exclusively at our physical location.",
            "faq-q6": "What is the origin of your handcrafted products?",
            "faq-a6": "Most of our products are of Salvadoran origin. However, we also offer a selection of handicrafts from other Central American countries.",
            "faq-q7": "What variety of handicrafts do you offer?",
            "faq-a7": "Our offer includes keychains, caps, traditional costumes, ceramic items, textiles, and a variety of other handcrafted products.",
            "faq-q8": "What are your store hours?",
            "faq-a8": "We are available during the commercial hours established by Municipal Market No.1 in Usulután. These are from 8:00 am to 4:00 pm.",
            "faq-q9": "What is the direct contact method for your business?",
            "faq-a9": "You can contact us directly by sending us a message via our WhatsApp number.",
            // End Frequently Asked Questions
            tituloMision: "Mission",
            parrafoMision: `At Artesanías Conchita, our mission is to transform tradition into creativity by offering handcrafted pieces that capture the essence and authenticity of our culture. We are committed to supporting local artisans, promoting traditional techniques and sustainable materials to create unique products that enrich the lives of our customers. We value quality, originality, and environmental responsibility in every creation, always striving to make each piece a reflection of the dedication and passion we put into our work.`,
            tituloVision: "Vision",
            parrafoVision: `At Artesanías Conchita, we aspire to be the leading reference in the world of handicrafts, recognized for our excellence in the quality and authenticity of our products. We envision a future where our pieces not only beautify homes and spaces but also inspire a deeper appreciation for cultural traditions and handmade art. We aim to foster a positive impact on the community and the environment, serving as a bridge between the artisanal legacy and new generations of art appreciators.`,
            tituloValores: "Company Values",
            galeriaHistoria: "Our History Gallery",
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
            parrafoHistoria: `In the 1990s, Celenia dedicated herself to selling shoes, but due to increasing competition, sales began to decline and the business failed to thrive. That’s when her mother suggested changing direction and starting a new venture in selling handicrafts, beginning with keychains. At the time, there were no similar stores in Usulután, so they decided to open a small shop in Market Number 1 of the city. The novelty of the concept attracted the first customers and marked the beginning of a new business path for Celenia.<br><br>One of the biggest challenges was the lack of artisans and suppliers in Usulután, which forced Celenia to travel regularly by bus to San Salvador and La Palma, where handicraft producers were located. She often faced difficulties transporting the products, especially when they were fragile or in large quantities, as some bus drivers refused to carry them. Despite these obstacles, Celenia managed to keep the business stocked and operational.<br><br>Over time, to improve the logistics of the business, Celenia acquired her own vehicle, which allowed her to travel more comfortably and efficiently. She also began importing handmade products from Guatemala and Nicaragua, where labor was more affordable and the items were of good quality. This helped her expand her product catalog and offer more competitive prices, attracting a broader and more diverse customer base.<br><br>The business was originally named "Artesanías Helen," in honor of her daughter, but was recently renamed "Artesanías Conchita," in tribute to her mother, who played a key role in founding the business. This change strengthened the identity of the enterprise and its connection to Salvadoran cultural tradition, as "Conchita" is well known in the community. Both shops became popular among locals and tourists looking for souvenirs or handmade decorations with national identity.<br><br>During festive seasons such as Holy Week, the August holidays, the national holidays in September, and the December celebrations, sales increase significantly due to the demand for traditional products. Although there are slower seasons like October, the business remains stable and continues to be a symbol of Salvadoran identity. The stores are still frequently visited by both national and international customers who value handcrafted work and wish to take a piece of El Salvador with them.`,
            tituloMisionVision: "Mission and Vision of the company",
            labelIdioma: "🌐 Language:",
            // Footer (genérico, usar para todas las páginas)
            "footer-texto": "© 2025 Artesanías Conchita",
            // Header (genérico, usar para todas las páginas)
            "nombre-empresa-header": "Artesanías Conchita",
            "modo-oscuro-toggle-text": "🌙 Change mode",

            // --- Textos específicos de la página de Productos (si solo aparecen ahí) ---
            "productos-titulo-pagina": "Products - Artesanías Conchita", // Título de la pestaña de productos
            "productos-seccion-titulo": "Products",
            "filtro-todas": "All categories",
            "filtro-vestidos": "Dresses",
            "filtro-llaveros": "Keychains",
            "filtro-gorras": "Caps",
            "buscador-placeholder": "Search products...",
            "producto1": "Traditional Salvadoran Dress",
            "producto1-desc": "Showcase the heritage of El Salvador with this beautiful dress, highlighting the colors of our flag and the spirit of our people. Decorated with delicate lace and the emblems that unite us as Salvadorans, it's ideal for any special occasion or to carry the pride of our land.",
            "producto2": "Artisan Beaded Hummingbird",
            "producto2-desc": "This beautiful hummingbird figure is meticulously handcrafted from small, vibrant colored beads, a characteristic artisan technique of the Central American region. Each piece is unique, reflecting the talent of the local artisans. It is ideal as a decorative home ornament, a keychain, or to add a distinctive touch to bags and purses, carrying with it the essence of tradition and local art.",
            "producto3": "Artisan Cap with Bull Design",
            "producto3-desc": "This cap features a unique design. Its raffia-like or straw woven front displays an embroidery with El Salvador and the national shield, alongside E and S. The visor is decorated with a detailed bull's head and horseshoe embroidery. The back is black mesh, offering breathability and comfort. A versatile accessory with personality.",
            "producto4": "Salvadoran Traditional Children's Dress",
            "producto4-desc": "This charming children's dress, embodying the typical Salvadoran style, features a fresh and vibrant blue design. It stands out with its delicate white floral embroideries adorning the neckline and skirt, reflecting the country's rich textile tradition. The smocked top ensures a comfortable and flexible fit, while the skirt boasts lace and eyelet details that not only enhance its beauty but also give it graceful movement. It's the perfect garment for celebrations, cultural events, or for little ones to wear an authentic outfit full of the joy and color of El Salvador's traditions.",
            "producto5": "Salvadoran Artisan Beaded Dolphin Keychain",
            "producto5-desc": "This eye-catching keychain features a dolphin entirely handcrafted from small, vibrant blue, white, and silver beads, following the meticulous Salvadoran artisan tradition. Each bead is carefully strung to create a detailed and shiny figure. It's a functional and decorative accessory, perfect for organizing your keys, adorning your bag, backpack, or even as a small gift that carries the creativity and manual artistry of El Salvador.",
            "producto6": "Salvadoran Folkloric Dance Dress",
            "producto6-desc": "This striking folkloric dance dress, crafted in a vibrant satin blue, is the perfect choice for artistic performances and cultural events celebrating the roots of El Salvador. It features an elastic neckline with ruffles and delicate white lace trim that adds a touch of elegance. The wide skirt, with multiple lace layers, is designed to provide impressive volume and fluid, spectacular movement, characteristic of traditional Salvadoran dances. It's an outfit that not only dresses but also enhances the beauty, rhythm, and passion of local traditions.",

            // --- Navegación (genérica, para todas las páginas) ---
            "nav-inicio": "Home",
            "nav-historia": "History",
            "nav-productos": "Products",
            "nav-contacto": "Contact",
            "nav-preguntas": "FAQ"
        }
    };

    // Función para aplicar la traducción
    function aplicarTraduccion(lang) {
        const t = traducciones[lang];
        if (!t) return;

        // Lista de IDs y su texto correspondiente en el idioma seleccionado
        const ids = [
            // Textos generales que pueden estar en todas las páginas (con IDs genéricos)
            ["bienvenida", t.bienvenida],
            ["subtitulo", t.subtitulo],
            ["objetivo", t.objetivo],
            ["titulo-contacto", t["titulo-contacto"]],
            ["direccion", t["direccion"]],
            ["nombre-facebook", t["nombre-facebook"]],
            ["preguntas-titulo", t["preguntas-titulo"]],
            ["faq-q1", t["faq-q1"]],
            ["faq-a1", t["faq-a1"]],
            ["faq-q2", t["faq-q2"]],
            ["faq-a2", t["faq-a2"]],
            ["faq-q3", t["faq-q3"]],
            ["faq-a3", t["faq-a3"]],
            ["faq-q4", t["faq-q4"]],
            ["faq-a4", t["faq-a4"]],
            ["faq-q5", t["faq-q5"]],
            ["faq-a5", t["faq-a5"]],
            ["faq-q6", t["faq-q6"]],
            ["faq-a6", t["faq-a6"]],
            ["faq-q7", t["faq-q7"]],
            ["faq-a7", t["faq-a7"]],
            ["faq-q8", t["faq-q8"]],
            ["faq-a8", t["faq-a8"]],
            ["faq-q9", t["faq-q9"]],
            ["faq-a9", t["faq-a9"]],
            ["titulo-mision", t.tituloMision],
            ["parrafo-mision", t.parrafoMision],
            ["titulo-vision", t.tituloVision],
            ["parrafo-vision", t.parrafoVision],
            ["titulo-valores", t.tituloValores],
            ["galeria-historia", t.galeriaHistoria],
            ["texto-objetivo", t.textoObjetivo],
            ["titulo-historia", t.tituloHistoria],
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
            ["parrafo-historia", t.parrafoHistoria],
            ["titulo-mision-vision", t.tituloMisionVision],
            ["label-idioma-productos", t.labelIdioma], // Si solo este label tiene este ID, se mantendrá aquí. Si hay un label de idioma en cada página con el mismo ID, mejor cambiar a "label-idioma".
            ["footer-texto", t["footer-texto"]], // ID para el footer, debe ser consistente en todas las páginas
            ["nombre-empresa-header", t["nombre-empresa-header"]],
            ["modo-oscuro-toggle-text", t["modo-oscuro-toggle-text"]],

            // --- IDs de Navegación (ahora genéricos para todas las páginas) ---
            ["nav-inicio", t["nav-inicio"]],
            ["nav-historia", t["nav-historia"]],
            ["nav-productos", t["nav-productos"]],
            ["nav-contacto", t["nav-contacto"]],
            ["nav-preguntas", t["nav-preguntas"]],

            // --- Textos específicos de la página de Productos (Mantener estos si solo existen en productos.html) ---
            ["productos-titulo-pagina", t["productos-titulo-pagina"]], // Título de la pestaña de productos
            ["productos-seccion-titulo", t["productos-seccion-titulo"]],
            ["filtro-todas", t["filtro-todas"]],
            ["filtro-vestidos", t["filtro-vestidos"]],
            ["filtro-llaveros", t["filtro-llaveros"]],
            ["filtro-gorras", t["filtro-gorras"]],
            // "buscador" se manejará por su placeholder
            ["producto1", t.producto1],
            ["producto1-desc", t["producto1-desc"]],
            ["producto2", t.producto2],
            ["producto2-desc", t["producto2-desc"]],
            ["producto3", t.producto3],
            ["producto3-desc", t["producto3-desc"]],
            ["producto4", t.producto4],
            ["producto4-desc", t["producto4-desc"]],
            ["producto5", t.producto5],
            ["producto5-desc", t["producto5-desc"]],
            ["producto6", t.producto6],
            ["producto6-desc", t["producto6-desc"]]
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
                else if (id.startsWith("faq-a") || id.includes("-desc") || id === "parrafo-historia" || id === "parrafo-mision" || id === "parrafo-vision" || id === "texto-objetivo" || id === "direccion") {
                    elemento.innerHTML = texto;
                }
                // Actualizar el título de la página en la pestaña del navegador
                // Esta lógica se vuelve un poco más compleja si quieres un título dinámico para cada página.
                // Para simplificar, si el ID es "productos-titulo-pagina", actualiza ese, sino, déjalo.
                // Idealmente, cada página tendría su propio ID de título de pestaña.
                else if (id === "productos-titulo-pagina") {
                    document.title = texto;
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

        // Manejo específico del placeholder para el buscador (solo en productos.html)
        const buscadorInput = document.getElementById("buscador");
        if (buscadorInput) {
            buscadorInput.placeholder = t["buscador-placeholder"];
        }

        // Si tienes un ID específico para el label de idioma en otras páginas, cámbialo a "label-idioma"
        // y úsalo en el objeto de traducciones. Si solo lo tienes en productos.html y por eso tiene "productos",
        // entonces déjalo como está. Por consistencia, podríamos cambiarlo a "label-idioma" en todas las páginas
        // y usar solo "labelIdioma" en las traducciones.
        const labelIdiomaElement = document.getElementById("label-idioma"); // Asumiendo que ahora usarás un ID genérico "label-idioma" en todas las páginas
        if (labelIdiomaElement) {
            labelIdiomaElement.textContent = t.labelIdioma;
        } else {
            // Si el ID "label-idioma-productos" aún existe en alguna página, lo maneja aquí.
            const labelIdiomaProductosElement = document.getElementById("label-idioma-productos");
            if (labelIdiomaProductosElement) {
                labelIdiomaProductosElement.textContent = t.labelIdioma;
            }
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