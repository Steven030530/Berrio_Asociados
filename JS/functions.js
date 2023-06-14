
let slideIndex = 0;
showSlides();

let nosotros = document.querySelector("#text-nosotros");
let test = document.querySelectorAll(".bq-service");
let texto = document.querySelector("#texto-servicios");
let ceo = document.querySelector("#CEO");
let logo = document.querySelector("#logo-partI");
let cotenedor_menu = document.querySelector(".menu-simply");
let text_simply = document.querySelectorAll(".text_simply");


test[0].addEventListener("mouseover",function(event){
    texto.style.display = "block"
    texto.innerHTML = "Tu información contable y financiera al día, te ofrecemos servicios como:<br><br> <li>Registro de Información Contable</li> <li>Informes Financieros</li> <li> Obligaciones Fiscales</li> <li>Asesoría NIIF</li>"
})

test[0].addEventListener("mouseout",function(event){
    texto.style.display = "none"
})

test[1].addEventListener("mouseover",function(event){
    texto.style.display = "block"
    texto.innerHTML = "No dejes que te sancione la Administración de Impuestos, te ofrecemos servicios como:<br><br> <li>Declaraciones Tributarias (Impuesto de Renta, IVA, Retenciones en la Fuente, Industria y Comercio, etc.)</li> <li>Presentación de Información Exógena</li> <li> Planeación Tributaria</li> <li>Devolución de Saldos a Favor</li>"
})

test[1].addEventListener("mouseout",function(event){
    texto.style.display = "none"
})


test[2].addEventListener("mouseover",function(event){
    texto.style.display = "block"
    texto.innerHTML = "Lleva tu negocio a otro nivel con herramientas de inteligencia artificial y analítica de datos, te ofrecemos servicios como:<br><br> <li>Creación de tableros de control con Power BI</li> <li>Automatización de Procesos</li> <li>Potencialización de Negocios con Data</li> <li>Capacitación en herramientas Business Intelligence</li> <li>Creación Macros en Excel</li> <li>Capacitaciones en Excel</li>"
})

test[2].addEventListener("mouseout",function(event){
    texto.style.display = "none"
})


test[3].addEventListener("mouseover",function(event){
    texto.style.display = "block"
    texto.innerHTML = "No pierdas alcance de tus negocios por no estar en el Internet, te ofrecemos servicios como:<br><br> <li>Creación Paginas Web desde Cero</li> <li>Desarrollos Front-End ( Diseño y Estilos de la Pagina Web)</li> <li>Desarrollos Backend (Funcionalidades de la pagina)</li>"
})

test[3].addEventListener("mouseout",function(event){
    texto.style.display = "none"
})


nosotros.innerHTML = "Somos una empresa de consultoría con más de 8 años de experiencia en los diferentes sectores de la economía, estamos comprometidos con el desarrollo y crecimiento de los negocios utilizando herramientas tecnológicas para disminuir las cargas operativas y automatizar procesos contables, tributarios, análisis de datos, desarrollos personalizados en Excel y plataformas web. "

ceo.addEventListener("mouseover",function(event){
    nosotros.style.transition = "all 2s"
    nosotros.style.color = "gold";
    nosotros.style.filter = "hue-rotate(89deg)";
})

ceo.addEventListener("mouseout",function(event){
    nosotros.style.color = "white";
    
})







function showSlides(){

    let text = ["La Dian se pronuncia sobre las declaraciones Ineficaces",
                "Noticias en Analisis de Datos e Inteligencia de Negocios",
                "Reforma Laboral en Colombia, enterate de los posibles cambios",
                "Python y la Competitividad en el Mundo Laboral"]

    let parrafo = document.getElementById("text-img");
    let i;
    let slides = document.getElementsByClassName("image-slice");
    let link = document.querySelector(".link");
    let x = window.matchMedia("(max-width: 1000px)");
    
    for (i=0; i < slides.length;i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length){slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].style.opacity = "50%";
    
    setTimeout(showSlides,6000); 

    if(slideIndex == 1){
        parrafo.innerHTML = text[slideIndex-1]
        parrafo.style.color = "white";
        parrafo.style.fontSize = "32px"
        link.setAttribute("href","https://incp.org.co/wp-content/uploads/2023/05/Concepto-100202208-049-de-2023-DIAN.pdf")
        link.setAttribute("target","_blank")      
        link.innerHTML = "Ver articulo Declaraciones Ineficaces"
        link.style.fontSize = "45px"
        link.style.right = "-734px"
        if(x.matches){
            parrafo.style.fontSize = "16px"
            link.style.fontSize="20px"
            link.style.right = "-50px"
        }
        
    }
    
    if(slideIndex == 2){
        parrafo.innerHTML = text[slideIndex-1]
        parrafo.style.color = "white";
        parrafo.style.fontSize = "30px"
        parrafo.style.left = "50px"
        link.setAttribute("href","https://www.larepublica.co/analisis-de-datos")      
        link.innerHTML = "Noticias en Inteligencia de Negocios" 
        link.style.fontSize = "45px"
        link.style.right = "-234px"

        if(x.matches){
            parrafo.style.fontSize = "16px"
            link.style.fontSize="20px"
            link.style.right = "-50px"
        }
        
    }


    if(slideIndex == 3){
        parrafo.innerHTML = text[slideIndex-1]
        parrafo.style.color = "white";
        parrafo.style.fontSize = "50px"
        parrafo.style.left = "50px"
        link.setAttribute("href","https://www.portafolio.co/uploads/files/2023/03/16/P.L.367-2023C%20-REFORMA%20LABORAL-.pdf")      
        link.innerHTML = "Consulta el Texto del Proyecto a la Reforma Laboral" 
        link.style.fontSize = "45px"
        link.style.right = "-234px"

        if(x.matches){
            parrafo.style.fontSize = "16px"
            link.style.fontSize="20px"
            link.style.right = "-50px"
        }
        
    }

    if(slideIndex == 4){
        parrafo.innerHTML = text[slideIndex-1]
        parrafo.style.color = "white";
        parrafo.style.fontSize = "50px"
        parrafo.style.left = "50px"
        link.setAttribute("href","https://cio.com.mx/python-un-lenguaje-esencial-para-la-competitividad-laboral/")      
        link.innerHTML = "Aprende Python y sus Ventajas" 
        link.style.fontSize = "45px"
        link.style.right = "-234px"

        if(x.matches){
            link.style.fontSize="20px"
            link.style.right = "-50px"
        }
        
    }

    else{
        parrafo.innerHTML = text[slideIndex-1]
        parrafo.style.color = "white";
        parrafo.style.fontSize = "46px"
        parrafo.style.left = "10px"
         
    }
    
  
}

