// RENDER HTML 
const app = document.querySelector('#app');

app.innerHTML = `
<div class="container-fluid">
        <div class="row">
            <div class="col-md-12 portada-img">
            <button class="ham"></button>
            <nav class="navbar">
              <ul>
                <li><a class="menuLink" href="#">Home</a></li>
                <li><a class="menuLink" href="#">Nosotros</a></li>
                <li><a class="menuLink" href="#">Motos</a></li>
                <li><a class="menuLink" href="#">Contactanos</a></li>
              </ul>
            </nav>
                <h2 class="titulo">M O T O R A M A<br><span>Tu moto, única</span></h2>
                <a href="#productoscta" id="cta">VER MODELOS</a>
                </div>
        </div>
    </div>

    <div class="aboutus">
        <div class="imagen"></div>
        <div class="texto">
        <h2>Sos original,<br> tu moto también</h2>
        <p class="subtexto"></p>
        <a href="#productoscta" id="cta_dos">VER MODELOS</a>
        </div>
    </div>

    <h2 class="sub-clientes">Clientes</h2>
    <div class="expand">
    <div class="clientes">
        <div class="panel" style="background-image: url('./img/cliente_uno.jpg')">
                    </div>
        <div class="panel" style="background-image: url('./img/cliente_dos.jpg')">
                    </div>
        <div class=" panel " style="background-image: url( './img/cliente_tres.jpg') ">
                    </div>
        <div class="panel " style="background-image: url( './img/cliente_cuatro.jpg') ">
                    </div>
        <div class="panel " style="background-image: url( './img/cliente_cinco.jpg') ">
                    </div>
    </div>
</div>
    <main>
    <h2 class="titulo-productos" id="productoscta">Motos en venta</h2>
    <section>
            <div class="container-filter">
                <input type="text" name="" id="input-filder" placeholder="Filter by Style" onkeyup="filtrarProductos(event)">
                <button type="button" onclick="ordenar()"></button>
            </div>
            <div class="container">
            <div class="row" id="row-productos"></div>

            </div>
        </section>
    </main>
</div>

    <footer>
    <form>
    </form>
    </footer>
    
    `;

// inner TEXT

let subtexto = document.querySelector('.subtexto');
subtexto.textContent = "En MOTORAMA trabajamos desde 1990 para acercar motos únicas a personas únicas. Desde nuestro taller en San Justo hemos armado más de 150 motos que han recorrido todo el país. Elegí tu moto soñada y nosotros la hacemos realidad."


// SELECTORES
let navbar = document.querySelector(".navbar");
let ham = document.querySelector(".ham");

// HANDLER
ham.addEventListener("click", toggleHamburger);

function toggleHamburger() {
    navbar.classList.toggle("showNav")
    ham.classList.toggle("showClose")
}

// PRODUCTOS - OBJ
class Producto {
    id;
    img;
    precio;
    descripcion;
    tipo;

    constructor(id, img, precio, descripcion, tipo) {
        this.id = id;
        this.img = img;
        this.precio = precio;
        this.descripcion = descripcion;
        this.tipo = tipo;

    }

}
// ARRAY DE PRODUCTOS

let listProductos = [];

let listProductosFiltrados = [];

//sigue el orden que construi (. . . .)
let nuevoProducto = new Producto(0, "https://thumpertalk.com/applications/core/interface/imageproxy/imageproxy.php?img=http://thebikeshed.cc/wp-content/uploads/2014/10/CRD-XR600-1.jpg&key=3374aafe783c641e5831e44c7177268f941faa4c24595c6c26aeedeeac757054", 700000, "Honda XR600", "Scrambler")

listProductos.push(nuevoProducto)
nuevoProducto = new Producto(1, "https://i.pinimg.com/736x/2c/c8/6b/2cc86b815d3b4593db00c6580c4e6f1c.jpg", 650000, "Honda CB750", "Cafe Racer")

listProductos.push(nuevoProducto)

nuevoProducto = new Producto(3, "http://www.bikebound.com/wp-content/uploads/2017/12/Suzuki-Savage-Street-Tracker.jpg", 600000, "Suzuki LS650 Savage", "Tracker")

listProductos.push(nuevoProducto)
nuevoProducto = new Producto(4, "http://www.caferacerpasion.com/wp-content/uploads/2015/06/honda-tiger-200-brat-style-mm8-malamadre-motorcycles-1-600x375.jpg", 350000, "Honda Tiger 200", "Brat")

listProductos.push(nuevoProducto)
nuevoProducto = new Producto(5, "http://www.caferacerpasion.com/wp-content/uploads/2015/02/yamaha-scorpio-225-brat-style-malamadre-motorcycles-1-600x390.jpg", 390000, "Yamaha Scorpio 225", "Brat")

listProductos.push(nuevoProducto)
nuevoProducto = new Producto(6, "http://www.caferacerpasion.com/wp-content/uploads/2017/09/yamaha-xsr900-abarth-cafe-racer-1-500x439.jpg", 800000, "Yamaha XSR900", "Cafe Racer")

listProductos.push(nuevoProducto)

listProductosFiltrados = listProductos;

// RENDERIZAR RECORRIENDO EL ARRAY 
listProductos.forEach(x => {
    insertarCard(x);
})

function insertarCard(producto) {
    let row = document.querySelector("#row-productos");

    // DIV COL
    let div_col = document.createElement('div');
    div_col.classList.add('col-md-4')

    // CARD!
    let card = document.createElement('div');
    card.classList.add('card')


    // IMAGEN
    let img = document.createElement('img');
    img.src = producto.img
    img.classList.add("card-img-top")
    img.classList.add('image')

    // CARD BODY
    let card_body = document.createElement('div');
    card_body.classList.add('card-body')

    //h5, p y precio

    let card_title = document.createElement('h5');
    card_title.classList.add('card-title')
    card_title.textContent = producto.descripcion

    let card_text = document.createElement('p');
    card_text.classList.add('card-text')
    card_text.textContent = producto.tipo

    let precio_text = document.createElement('p');
    precio_text.classList.add('card-precio')
    precio_text.textContent = producto.precio



    // AÑADIR ELEMENTOS

    card_body.appendChild(card_title)

    card_body.appendChild(card_text)

    card_body.appendChild(precio_text)


    card.appendChild(img)
    card.appendChild(card_body)

    div_col.appendChild(card)

    row.appendChild(div_col)
}


// HANDLEANDO EL INPUT PERRI

function filtrarProductos(input) {
    console.log("FUNCIONO PERRO");
    let valorAFiltrar = input.target.value;
    listProductosFiltrados = listProductos.filter(x => x.tipo.toUpperCase().includes(valorAFiltrar.toUpperCase()))
    let row = document.querySelector("#row-productos");
    row.innerHTML = ""
    listProductosFiltrados.forEach(x => {
        insertarCard(x)
    })
}

// HANDLEANDO EL BUTUN

function ordenar() {
    listProductosFiltrados.sort(comparar)
    let row = document.querySelector("#row-productos");
    row.innerHTML = ""
    listProductosFiltrados.forEach(x => {
        insertarCard(x)
    })
}

function comparar(producto1, producto2) {
    if (producto1.precio < producto2.precio) {
        return -1
    }
    if (producto1.precio > producto2.precio) {
        return 1
    }
    return 0
}

// CLIENTES - FOTOS

// SELECTOR
const panels = document.querySelectorAll('.panel');

//Agregar event listener a cada panel 
panels.forEach(panel => {
    panel.addEventListener('click', (event) => {
        removeActiveClasses()
        panel.classList.add('active');
        event.stopPropagation();
    })
})

// HANDLER
const removeActiveClasses = () => {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}

// CLICK AFUERA
body = document.querySelector('body');

body.addEventListener('click', removeActiveClasses)