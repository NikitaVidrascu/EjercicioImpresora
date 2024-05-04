const Encabezado = document.createElement("header");
document.body.appendChild(Encabezado);

const Titulo = document.createElement("h1")
Titulo.textContent="Impresoras 3D";
Encabezado.appendChild(Titulo);

const BarraDeNavegacion = document.createElement("nav");
Encabezado.appendChild(BarraDeNavegacion);

const ListaDeImpresora = document.createElement("ul");
BarraDeNavegacion.appendChild(ListaDeImpresora);

const ElementosDeLaLista1 = document.createElement("li");
ListaDeImpresora.appendChild(ElementosDeLaLista1);

const TextoConEnlaceDeLaLista1 = document.createElement("a");
TextoConEnlaceDeLaLista1.href="#destacados";
TextoConEnlaceDeLaLista1.textContent="Impresoras destacadas";
ElementosDeLaLista1.appendChild(TextoConEnlaceDeLaLista1);

const ElementosDeLaLista2 = document.createElement("li");
ListaDeImpresora.appendChild(ElementosDeLaLista2);

const TextoConEnlaceDeLaLista2 = document.createElement("a");
TextoConEnlaceDeLaLista2.href="#marcas";
TextoConEnlaceDeLaLista2.textContent="Marcas";
ElementosDeLaLista2.appendChild(TextoConEnlaceDeLaLista2);

const ElementosDeLaLista3 = document.createElement("li");
ListaDeImpresora.appendChild(ElementosDeLaLista3);

const TextoConEnlaceDeLaLista3 = document.createElement("a");
TextoConEnlaceDeLaLista3.href="#ofertas";
TextoConEnlaceDeLaLista3.textContent="Ofertas"
ElementosDeLaLista3.appendChild(TextoConEnlaceDeLaLista3);

const ElementosDeLaLista4 = document.createElement("li");
ListaDeImpresora.appendChild(ElementosDeLaLista4);

const TextoConEnlaceDeLaLista4 = document.createElement("a");
TextoConEnlaceDeLaLista4.href="#contacto";
TextoConEnlaceDeLaLista4.textContent="Contactos";
ElementosDeLaLista4.appendChild(TextoConEnlaceDeLaLista4);





const Seccion1 = document.createElement("section");
Seccion1.id="destacados";
document.body.appendChild(Seccion1);

const TituloProductos1 = document.createElement("h2");
TituloProductos1.textContent="Impresoras 3d destacadas";
Seccion1.appendChild(TituloProductos1);

const Producto1 = document.createElement("div");
Producto1.className="productos";
Seccion1.appendChild(Producto1);





const Seccion2 = document.createElement("section");
Seccion2.id="marcas";
document.body.appendChild(Seccion2);

const TituloProductos2 = document.createElement("h2");
TituloProductos2.textContent="Marcas de impresoras 3d";
Seccion2.appendChild(TituloProductos2);

const Producto2 = document.createElement("div");
Producto2.className="marcas";
Seccion2.appendChild(Producto2);





const Seccion3 = document.createElement("section");
Seccion3.id="ofertas";
document.body.appendChild(Seccion3);

const TituloProductos3 = document.createElement("h2");
TituloProductos3.textContent="Ofertas de impresoras 3d";
Seccion3.appendChild(TituloProductos3);

const Producto3 = document.createElement("div");
Producto3.className="ofertas";
Seccion3.appendChild(Producto3);





const Seccion4 = document.createElement("section");
Seccion4.id="contacto";
document.body.appendChild(Seccion4);

const TituloProductos4 = document.createElement("h2");
TituloProductos4.textContent="Contacto";
Seccion4.appendChild(TituloProductos4);

const Producto4 = document.createElement("div");
Producto4.className="formulario-contacto";
Seccion4.appendChild(Producto4);






const PieDePagina = document.createElement("footer");
document.body.appendChild(PieDePagina);

const TextoDelPie = document.createElement("p");
TextoDelPie.textContent=" 2024 Impresoras3D.com";
TextoDelPie.style.color="White";
PieDePagina.appendChild(TextoDelPie);