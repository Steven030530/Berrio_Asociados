
let slideIndex = 0;
showSlides();

let nosotros = document.querySelector("#text-nosotros");
let test = document.querySelectorAll(".bq-service");
let texto = document.querySelector("#texto-servicios");
let ceo = document.querySelector("#CEO");



test[0].addEventListener("mouseover",function(event){
    texto.style.display = "block"
    texto.innerHTML = "Tu informacion contable y financiera al dia, te ofrecemos servicios como:<br><br> <li>Registro de Información Contable</li> <li>Informes Financieros</li> <li> Obligaciones Fiscales</li> <li>Asesoria NIIF</li>"
})

test[0].addEventListener("mouseout",function(event){
    texto.style.display = "none"
})

test[1].addEventListener("mouseover",function(event){
    texto.style.display = "block"
    texto.innerHTML = "No dejes que te sancione la Administracion de Impuestos, te ofrecemos servicios como:<br><br> <li>Declaraciones Tributarias (Impuesto de Renta, IVA, Retenciones en la Fuente, Industria y Comercio, etc.)</li> <li>Presentacion de Información Exogena</li> <li> Planeacion Tributaria</li> <li>Devolucion de Saldos a Favor</li>"
})

test[1].addEventListener("mouseout",function(event){
    texto.style.display = "none"
})


test[2].addEventListener("mouseover",function(event){
    texto.style.display = "block"
    texto.innerHTML = "Lleva tu negocio a otro nivel con herramientas de inteligencia artificial y analitica de datos, te ofrecemos servicios como:<br><br> <li>Creacion de tableros de control con Power BI</li> <li>Automatizacion de Procesos</li> <li>Potencializacion de Negocios con Data</li> <li>Capacitación en herramientas Business Inteligence</li> <li>Creacion Macros en Excel</li> <li>Capacitaciones en Excel</li>"
})

test[2].addEventListener("mouseout",function(event){
    texto.style.display = "none"
})


test[3].addEventListener("mouseover",function(event){
    texto.style.display = "block"
    texto.innerHTML = "No pierdas alcance de tus negocios por no estar en el Internet, te ofrecemos servicios como:<br><br> <li>Creacion Paginas Web desde Cero</li> <li>Desarrollos Front-End ( Diseño y Estilos de la Pagina Web)</li> <li>Desarrollos Backend (Funcionalidades de la pagina)</li>"
})

test[3].addEventListener("mouseout",function(event){
    texto.style.display = "none"
})


nosotros.innerHTML = "Somos una empresa de consultoria con más de 8 años de experiencia en los diferentes sectores de la economía, estamos comprometidos con el desarrollo y crecimiento de los negocios utilizando herramientas tecnológicas para disminuir las cargas operativas y automatizar procesos contables, tributarios, análisis de datos, desarrollos personalizados en excel y plataformas web. "

ceo.addEventListener("mouseover",function(event){
    nosotros.style.transition = "all 2s"
    nosotros.style.color = "gold";
    nosotros.style.filter = "hue-rotate(-180deg)";
})

ceo.addEventListener("mouseout",function(event){
    nosotros.style.color = "white";
    
})



function showSlides(){

    let text = ["INCP abre al publico el debate sobre las NIIF 9 y 7",
                "Analitica de Datos con Power BI:<br> Explora todo tu negocio con herramientas de inteligencia empresarial y lleva tu negocio a otro nivel",
                "Reforma Laboral",
                "Python y las ventajas de la data"]

    let parrafo = document.getElementById("text-img");
    let i;
    let slides = document.getElementsByClassName("image-slice");
    let link = document.querySelector(".link");
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
        parrafo.style.right = "230px"
        link.setAttribute("href","https://www.google.com")
        link.setAttribute("target","_blank")      
        link.innerHTML = "Realiza tus comentarios sobre las NIIF" 
    }
    
    if(slideIndex == 2){
        parrafo.innerHTML = text[slideIndex-1]
        parrafo.style.color = "white";
        parrafo.style.fontSize = "32px"
        parrafo.style.right = "230px"
        link.setAttribute("href","https://www.facebook.com")      
        link.innerHTML = "Ingresa a Facebook" 
    }



    else{
        parrafo.innerHTML = text[slideIndex-1]
        parrafo.style.color = "white";
        parrafo.style.fontSize = "46px"
        parrafo.style.left = "10px"
         
    }
    
  
}

