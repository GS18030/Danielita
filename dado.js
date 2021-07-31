function start(){

    document.getElementById("results").innerHTML = ""
    document.getElementById("mensaje").innerHTML = "Buenas noches señorita, este importante mensaje es para seguirle diciendo cada minutito cuanto te quiero. Cada día te extraño un poquito más y cada mensajito me da un poquito más de ganas de darte un abaracito muy suavecito. Este ratito quise hacerte este detalle jajaja sencillo pero esque tenia otra idea y no pude avanzar jajaja y me agarro el tiempo. Ahorita estoy hablando en whatsapp hablando por llamada con vos y te estoy diciendo que ya voy a terminar jajaja espero te guste el detallito si y recordarte que sos muy importante para mi y que cada que se me ocurra un detalle para vos sera siempre con mucho cariño"
    document.getElementById("mensaje2").innerHTML = ""
    document.getElementById("pregunta").innerHTML = "¿Estas de acuerdo que tu novio te quiere mucho?"
    document.getElementById("introd").innerHTML = " <img class='img-result' src='amor.png' alt=''>"
    document.getElementById("primero").style.opacity = "0";
    document.getElementById("segundo").style.opacity = "1";
} 

function colocarSi(){
    document.getElementById("no").innerHTML = "SI"
    document.getElementById("si").innerHTML = "NO"
}

function colocarNo(){
    document.getElementById("no").innerHTML = "NO"
    document.getElementById("si").innerHTML = "SI"
}

function si(){
    document.getElementById("results").style.opacity = "0";
    document.getElementById("mensaje").style.opacity = "0";
    document.getElementById("mensaje2").style.opacity = "0";
    document.getElementById("pregunta").innerHTML  = " <img class='img-result2' src='foto.jpg' alt=''>";
    document.getElementById("introd").style.opacity = "0";
    document.getElementById("bienvenida").innerHTML  = "Te adoro mi amor";
    document.getElementById("si").style.opacity = "0";
    document.getElementById("no").style.opacity = "0";

}
