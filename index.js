/* Constante de objetos.
   Almacena todos los vehiculos. */
const autosStock = [ /* Vehiculos Nobles y deportivos */
    {
        id: 1,
        modelo: 'Audi A3',
        descripcion: `El Audi A3 Sportback (hatchback) es un auto compacto 
        premium destacado por su excelente calidad de materiales y dinámica de manejo, 
        equipado habitualmente con eficientes motores Turbo (TFSI). Importado de Alemania, 
        resalta en el mercado por su diseño deportivo y elegante, su andar refinado de alta 
        gama y un equipamiento tecnológico y de seguridad al más alto nivel.`,
        imagen: 'assets/nobles-y-deportivos/audi-a3.png',
        tipo: "noble"
    },

    {
        id: 2,
        modelo: 'Chevrolet Cruze',
        descripcion: `El Chevrolet Cruze es un auto compacto (sedán o hatchback) destacado por su motor 1.4 
        Turbo de 153 CV, que combina excelente agilidad con bajo consumo. 
        Fabricado en Argentina, resalta en el mercado por su andar confortable, 
        alta tecnología de conectividad y un sólido equipamiento de seguridad de serie.`,
        imagen: 'assets/nobles-y-deportivos/chevrolet-cruze.png',
        tipo: 'noble'
    },

    {
        id: 3,
        modelo: 'Fiat Cronos',
        descripcion: `El Fiat Cronos es un sedán compacto destacado por ser el auto más vendido de 
        Argentina, equipado con el confiable y económico motor 1.3 Firefly. Fabricado en Córdoba, 
        resalta en el mercado por su excelente relación precio-producto, un espacio interior y baúl 
        muy amplios, y un costo de mantenimiento sumamente accesible.`,
        imagen: 'assets/nobles-y-deportivos/fiat-kronnos.png',
        tipo: 'noble'
    },

    {
        id: 4,
        modelo: 'Nissan Sentra',
        descripcion: `El Nissan Sentra es un sedán mediano destacado por su alto confort 
        de marcha y su motor 2.0 aspirado de 147 CV, que ofrece una entrega de potencia 
        suave y progresiva. Importado de México, resalta en su segmento por su refinada
         calidad de materiales, un espacio interior sumamente amplio y un completísimo paquete
          de asistencias a la conducción (ADAS) de serie.`,
        imagen: 'assets/nobles-y-deportivos/nissan-sentra.png',
        tipo: 'noble'
    },

    {
        id: 5,
        modelo: 'Toyota Corolla',
        descripcion: `El Toyota Corolla es un sedán mediano destacado por ser el 
        auto más vendido del mundo y un referente absoluto en confiabilidad, disponible 
        con motor 2.0 naftero o variantes híbridas autorrecargables. Fabricado en Brasil, 
        resalta en el mercado por su excelente confort de marcha, su gran valor de reventa y
         el paquete de seguridad activa Toyota Safety Sense de serie.`,
        imagen: 'assets/nobles-y-deportivos/toyota-corolla.png',
        tipo: 'noble'
    },

    {
        id: 6,
        modelo: 'Volkswagen Golf',
        descripcion: `El Toyota Corolla es un sedán mediano destacado por ser el auto más 
        vendido del mundo y un referente absoluto en confiabilidad, disponible con motor 2.0 
        naftero o variantes híbridas autorrecargables. Fabricado en Brasil, resalta en el mercado 
        por su excelente confort de marcha, su gran valor de reventa y el paquete de seguridad activa
         Toyota Safety Sense de serie.`,
        imagen: 'assets/nobles-y-deportivos/volkswagen-golf.png',
        tipo: 'noble'
    },

    {
        id: 7,
        modelo: 'Aston Martin DB11',
        descripcion: `El Aston Martin DB11 es un gran turismo de superlujo destacado por su diseño 
        británico icónico y su motor biturbo (V8 o V12) que ofrece prestaciones brutales con un refinamiento 
        excepcional. Importado de Inglaterra, resalta como una pieza de colección exclusiva por su artesanía 
        interior hecha a mano, su imponente presencia y un equilibrio perfecto entre la comodidad para viajes 
        largos y el rendimiento de un superdeportivo.`,
        imagen: 'assets/premiums-y-superdeportivos/aston-martin-db11.png',
        tipo: 'premiun'
         
    },

    {
        id: 8,
        modelo: 'Audi R8',
        descripcion: `El Audi R8 es un superdeportivo icónico destacado por su motor 
        V10 atmosférico y la tracción quattro, que combinan prestaciones brutales con una 
        precisión excepcional. Importado de Alemania, destaca por su construcción ultraligera, su 
        tecnología de vanguardia y un equilibrio perfecto entre el rendimiento de circuito y 
        la comodidad para el uso diario.`,
        imagen: 'assets/premiums-y-superdeportivos/audi-r8.png',
        tipo: 'premiun'
    },

    {
        id: 9,
        modelo: 'Chevrolet Corvette',
        descripcion: `El Chevrolet Corvette es el ícono definitivo del muscle car
         americano evolucionado en superdeportivo, destacando por su potente motor
          V8, su agresivo diseño aerodinámico de motor central y un rendimiento de
           pista que compite mano a mano con el lujo europeo a una fracción de su precio.`,
        imagen: 'assets/premiums-y-superdeportivos/chevrolet-corvette.png',
        tipo: 'premiun'
    },

    {
        id: 10,
        modelo: 'Ford Mustang',
        descripcion: `El Ford Mustang es la máxima leyenda de los pony cars americanos, 
        un ícono de libertad y potencia que destaca por su inconfundible motor V8 Coyote,
         un diseño musculoso e imponente y una experiencia de conducción pura y emocionante 
         cargada de tecnología moderna.`,
        imagen: 'assets/premiums-y-superdeportivos/ford-mustang.png',
        tipo: 'premiun'
    },

    {
        id: 11,
        modelo: 'Mercedes Benz AMG GTs',
        descripcion: `El Mercedes-AMG GT S es la síntesis perfecta entre elegancia suprema y 
        deportividad pura, impulsado por un feroz motor V8 Biturbo que entrega una aceleración 
        deslumbrante, acompañado de un diseño estilizado de capó extendido y un habitáculo de 
        máximo lujo centrado en el piloto.`,
        imagen: 'assets/premiums-y-superdeportivos/mercedes-benz-amg.png',
        tipo: 'premiun'
    },

    {
        id: 12,
        modelo: 'Porsche 911',
        descripcion: `El Porsche 911 es la definición atemporal del deportivo perfecto
        , una leyenda de la ingeniería alemana que combina su icónico motor bóxer trasero
         y un diseño inconfundible con un equilibrio inigualable entre rendimiento de pista 
         y elegancia para el uso diario.`,
        imagen: 'assets/premiums-y-superdeportivos/porsche-911.png',
        tipo: 'premiun'
    },
];


function mostrarAuto(productosFiltrados){
    const contenedorProductosNobles = document.getElementById('div-nobles');
    const contenedorProductosPremiun = document.getElementById('div-premiuns');

    if(productosFiltrados.length==0){
        contenedorProductosNobles.innerHTML = '<p>No se encontraron vehiculos.</p>';
        return;
    }
    let productoss;
    for(let i=0; i < productosFiltrados.length; i++ ){
        productoss = productosFiltrados[i]
        if(productoss.tipo == 'noble'){
            console.log('noble');
            contenedorProductosNobles.innerHTML +=
            `<div class="div-auto" id="${productoss.nombre}">

                <div class="div-imagenAuto" id="${productoss.nombre}">

                    <img class="imagenes-autos" src="${productoss.imagen}" alt="${productoss.modelo}">

                </div>

                <div class="div-infoAuto" id="info-${productoss.modelo}">

                    <h2 class="marca-auto">
                        ${productoss.modelo}
                    </h2>

                    <p class="info-auto">
                        ${productoss.descripcion}
                    </p>

                </div>

            </div>`
        }else if(productoss.tipo == 'premiun'){
            console.log('premiun');
            contenedorProductosPremiun.innerHTML += 
            `<div class="div-auto" id="${productoss.nombre}">

                <div class="div-imagenAuto" id="${productoss.nombre}">

                    <img class="imagenes-autos" src="${productoss.imagen}" alt="${productoss.modelo}">

                </div>

                <div class="div-infoAuto" id="info-${productoss.modelo}">

                    <h2 class="marca-auto">
                        ${productoss.modelo}
                    </h2>

                    <p class="info-auto">
                        ${productoss.descripcion}
                    </p>

                </div>

            </div>`;
        }
    }
}


function busqueda(){
    console.log('anda');
    const textoBusqueda = document.getElementById('barraBusqueda').value.toLowerCase();
    if(textoBusqueda.length == 0){
        return;
    }



    const productosFiltrados = autosStock.filter(auto =>
        auto.modelo.toLowerCase().includes(textoBusqueda)
    )

    if(productosFiltrados.length == 0){
        return;
    }

    const resBusquedaDiv = document.getElementById('div-autoBusqueda');

    resBusquedaDiv.innerHTML = productosFiltrados.map( productoss =>
        `<div class="div-autoBusqueda" id="div-${productoss.nombre}">

                <div class="div-imagenAutoBusqueda" id="img-a3Busqueda">

                    <img class="imagenes-autosBusqueda" src="${productoss.imagen}" alt="${productoss.modelo}">

                </div>

                <div class="div-infoAutoBusqueda" id="info-${productoss.modelo}">

                    <h2 class="marca-autoBusqueda">
                        ${productoss.modelo}
                    </h2>

                    <p class="info-autoBusquea">
                        ${productoss.descripcion}
                    </p>

                </div>

            </div>`
    ).join('')
    
    abrirVentFlotante();
}

document.getElementById('search-button').addEventListener('click', busqueda);
document.getElementById('cerrar').addEventListener('click', cerrar)
document.getElementById('cerrarSobreNosotros').addEventListener('click', cerrarSobreNosotross)
mostrarAuto(autosStock);


/* Ventana flotante */
function abrirVentFlotante(){
    document.getElementById('ventFlotante').style.display="flex";
}

function cerrar(){
    document.getElementById('ventFlotante').style.display="none";
}

function abrirSobreNosotros(){
    document.getElementById('ventSobreNosotros').style.display="flex";
}

function cerrarSobreNosotross(){
    document.getElementById('ventSobreNosotros').style.display="none";
}