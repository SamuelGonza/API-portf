// Habilidades de la Seccion "HABILIDADES"

const habilidades = [

    desarrolloWeb = {
        html: {
            imagen: "./multimedia/html.png",
            parrafo: "HTML5: MAQUETACION"
        },
        css: {
            imagen: "./multimedia/css.png",
            parrafo: "CSS3: ESTILOS DEL SITIOO"
        },
        js: {
            imagen: "./multimedia/js.png",
            parrafo: "JavaScript: Funcionalidad de la web"
        },
    },
    diseñoDeLaWeb = {
        ps:{
            imagen: "./multimedia/ps.png",
            parrafo: "Photoshop: Edicion de imagenes",
        },
        fontAwesomeIcons: {
            imagen: "./multimedia/fontawesome.png",
            parrafo: "FontAwesome: Iconos en formato de fuente",
        },
        googleIcons: {
            imagen: "./multimedia/google.png",
            parrafo: "Google Icons/Fonts: Tipografias e iconos para la web",
        }
    },

    baseDeDatos = {
        msql:{
            imagen: "./multimedia/mysql.png",
            parrafo: "MySql: Gestor y creador de bases de datos"
        }
    },

    herramientas = {
        vsc:{
            imagen: "./multimedia/vsc.png",
            parrafo: "Visual Studio Code: Editor de texto"
        },
        terminal:{
            imagen: "./multimedia/terminal.png",
            parrafo: "Terminal de Windows"
        },
        xampp:{
            imagen: "./multimedia/xampp.png",
            parrafo: "Xampp: Servidor Local"
        },
        git:{
            imagen: "./multimedia/git.png",
            parrafo: "Git: Control de versionesl"
        },
        npm:{
            imagen: "./multimedia/npm.png",
            parrafo: "Npm: Manejador de paquetes de Node.js"
        },
       workbench:{
            imagen: "./multimedia/workbench.png",
            parrafo: "MySql Workbench: Interfaz de Mysql"
        },
    },

    backend = {
        nodeJs:{
            imagen: "./multimedia/node.js",
            parrafo: "Node.js: Javascript del lado del servidor"
        },
        express:{
            imagen: "./multimedia/express.png",
            parrafo: "Express.js: Framework de Node.js para realizar servidores"
        },
    }
]

let img = document.querySelector(".h")
let p = document.querySelector(".p")

img.src = habilidades[4].nodeJs.imagen;
p.innerHTML = habilidades[4].nodeJs.parrafo;