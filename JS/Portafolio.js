const portafolioActivitiesData = [
    {
        nombre: "Taller 1: Variables e Impresión",
        linkYoutube: "https://youtu.be/N_ZH7FxDV54",
        descripcion: "Actividad hecha en PSeint donde se ve la forma de leer y recibir instrucciones del usuario",
        descarga: "Descargables\Taller 1.zip",
        linkGithub: "#",
        imagen: "img\\Portafolio_Images\\PSEINT.webp"
    },
    {
        nombre: "Taller 2: Condicionales",
        linkYoutube: "https://youtu.be/s5rW_Nc3Ysk",
        descripcion: "Actividad hecha en PSeint donde se ve la forma del flujo de trabajo por medio de condicionales",
        descarga: "Descargables\\Taller 2.zip",
        linkGithub: "#",
        imagen: "img\\Portafolio_Images\\PSEINT.webp"
    },
    {
        nombre: "Taller 3: Ciclos",
        linkYoutube: "https://youtu.be/WyWt5YVFFAU",
        descripcion: "Actividad hecha en PSeint donde se ve la forma del flujo de trabajo por medio de ciclos",
        descarga: "Descargables\\Taller 3.zip",
        linkGithub: "#",
        imagen: "img\\Portafolio_Images\\PSEINT.webp"
    },
    {
        nombre: "Taller 4: Arrays",
        linkYoutube: "https://youtu.be/BsGK8ox_OBo",
        descripcion: "Actividad hecha en PSeint donde se ve la forma del flujo de trabajo por medio de arrays",
        descarga: "Descargables\\Taller 4.zip",
        linkGithub: "#",
        imagen: "img\\Portafolio_Images\\PSEINT.webp"
    },
    {
        nombre: "Taller 5: Funciones y Control de Versiones",
        linkYoutube: "#",
        descripcion: "Actividad donde se emplea el uso de Git y de funciones en PSeint para manejar elementos como reutilización de código y control de versiones.",
        descarga: "Descargables\\Taller 5.zip",
        linkGithub: "https://github.com/AGHERSE/Sofka-Repo-Cantera-I",
        imagen: "img\\Portafolio_Images\\GIT.png"
    },
    {
        nombre: "Taller 6: Ejercicios Java",
        linkYoutube: "#",
        descripcion: "Actividad hecha en Java con Netbeans donde se ve la forma del flujo de trabajo por medio de las anteriores actividades.",
        descarga: "Descargables\\Taller 6.zip",
        linkGithub: "https://github.com/AGHERSE/Sofka-Taller6",
        imagen: "img\\Portafolio_Images\\Java.png"
    },
    {
        nombre: "Taller 7: Ejercicio HTML",
        linkYoutube: "#",
        descripcion: "Uso de HTML para la creación de una hoja de vida.",
        descarga: "Descargables\\Taller 7.zip",
        linkGithub: "https://github.com/AGHERSE/Sofka-Taller7",
        imagen: "img\\Portafolio_Images\\HTMLCSSJAVASCRIPT.jpg"
    },
    {
        nombre: "Taller 8: Ejercicio CSS",
        linkYoutube: "#",
        descripcion: "Uso de CSS para la creación de estilos de la hoja de vida de la actividad 7.",
        descarga: "Descargables\\Taller 7.zip",
        linkGithub: "https://github.com/AGHERSE/Sofka-Taller7",
        imagen: "img\\Portafolio_Images\\HTMLCSSJAVASCRIPT.jpg"
    },
    {
        nombre: "Taller 9: Ejercicio Javascript",
        linkYoutube: "#",
        descripcion: "Uso de Javascript para la creación de funciones en la hoja de vida de la actividad 7",
        descarga: "Descargables\\Taller 7.zip",
        linkGithub: "https://github.com/AGHERSE/Sofka-Taller7",
        imagen: "img\\Portafolio_Images\\HTMLCSSJAVASCRIPT.jpg"
    },
    {
        nombre: "Taller 10: Taller Final HTML5, CSS y Javascript",
        linkYoutube: "#",
        descripcion: "Realización de un taller utilizando HTML, CSS y Javascript",
        descarga: "Descargables\\Taller 7.zip",
        linkGithub: "https://github.com/AGHERSE/Sofka-Taller7",
        imagen: "img\\Portafolio_Images\\HTMLCSSJAVASCRIPT.jpg"
    },
    {
        nombre: "Taller 10.2: Listas",
        verPagina: "listaColor.html",
        linkYoutube: "#",
        descripcion: "Uso de HTML, CSS y Javascript para cambiar de color ciertos list item.",
        descarga: "Descargables\\Taller 7.zip",
        linkGithub: "https://github.com/AGHERSE/Sofka-Taller7",
        imagen: "img\\Portafolio_Images\\HTMLCSSJAVASCRIPT.jpg"
    }
]

function mostrarTalleres(){
    const talleres = document.getElementById("talleres-hechos");
    
    portafolioActivitiesData.forEach(elemento => {
        talleres.innerHTML += `
        <div class="col-3">
        <div class="card text-center">
            <div class="card-header bg-dark" style="color: white;">
                <h2>${elemento.nombre}</h2>
                <img src="${elemento.imagen}" width="100%">
            </div>
            <div class="card-body">
                <p>${elemento.descripcion}</p>
                <a class="btn roxo-secondary-theme" href="${elemento.verPagina}">Ver Página</a>
                <a class="btn vermelho-secondary-theme" href="${elemento.linkYoutube}">Ver Video Youtube</a>
                <a class="btn bg-dark text-light" href="${elemento.linkGithub}">Ver Repositorio</a>
                <a class="btn btn-primary" href="${elemento.descarga}" download>Descargar</a>
            </div>
        </div>
        </div>
        `;
    });
}