
let slideIndex = 0;
showSlides()


function showSlides(){
    let text = ["Descarga la nueva resolucion sobre NIIF","Analitica de Datos con Power BI","Reforma Laboral","Python y las ventajas de la data"]
    parrafo = document.getElementById("text-img");
    let i;
    let slides = document.getElementsByClassName("image-slice");
    for (i=0; i < slides.length;i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length){slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    
    setTimeout(showSlides,5000);  
    if(slideIndex == 1){
        parrafo.innerHTML = text[slideIndex-1]
        parrafo.style.color = "red";
    }
    
    else{
        parrafo.innerHTML = text[slideIndex-1]
        parrafo.style.color = "white";
    }
    
}

addEventListener()
