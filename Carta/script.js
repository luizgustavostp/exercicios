const papel = document.getElementById("iloveyou")
const carta = document.getElementById("carta")
const abrirr = document.getElementById("abrir")


function abrir() {
        papel.style.animationDirection = "normal"
        carta.style.animationDirection = "normal"
        abrirr.style.animationDirection = "normal"
        papel.style.animationPlayState = "running"
        carta.style.animationPlayState = "running"
        abrirr.style.animationPlayState = "running"
}
