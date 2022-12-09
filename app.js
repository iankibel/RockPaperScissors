let puntosUsuario = 0;
let puntosPC = 0;

let instrucciones = document.querySelector("#instrucciones");
let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
let contenedorPuntosPC = document.querySelector("#puntos-computadora");
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let elegiTuArma = document.querySelector("#elegi-tu-arma");

let conteendorEleccionUsuario = document.querySelector("#eleccion-usuario");
let conteendorEleccionPC = document.querySelector("#eleccion-computadora");

let botonesArmas = document.querySelectorAll(".arma");
let reiniciar = document.querySelector("#reiniciar")

botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});

function iniciarTurno(e) {
    
    let eleccionPC = Math.floor(Math.random() * 3)
    let eleccionUsuario = e.currentTarget.id

    // rock => 0
    // paper => 1
    // scissors => 2

    switch (eleccionPC) {
        case 0:
            eleccionPC = "rock✊"
            break;
        case 1:
            eleccionPC = "paper🤚"
            break;
        case 2:
            eleccionPC = "scissors✌"
            break;
    }

    if(
        (eleccionUsuario === "rock✊" && eleccionPC === "scissors✌") ||
        (eleccionUsuario === "paper🤚" && eleccionPC === "rock✊") ||
        (eleccionUsuario === "scissors✌" && eleccionPC === "paper🤚")
    ) {
        ganaUsuario();
    } else if (
        (eleccionPC === "rock✊" && eleccionUsuario === "scissors✌") ||
        (eleccionPC === "paper🤚" && eleccionUsuario === "rock✊") ||
        (eleccionPC === "scissors✌" && eleccionUsuario === "paper🤚")
    ) {
        ganaPC();
    } else {
        empate();
    }
    mensaje.classList.remove("disabled");
    conteendorEleccionUsuario.innerText = eleccionUsuario;
    conteendorEleccionPC.innerText = eleccionPC;

    if (puntosPC === 5 || puntosUsuario === 5) {
        if (puntosUsuario === 5) {
            instrucciones.innerText = "Ganaste el juego!"
        }
        if (puntosPC === 5) {
            instrucciones.innerText = "La computadora ganó el juego!"
        }
        elegiTuArma.classList.add("disabled")
        reiniciar.classList.remove("disabled")
        reiniciar.addEventListener("click", reiniciarJuego)
    }
}

function ganaUsuario() {
    puntosUsuario ++;
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorGanaPunto.innerText = "You scored!"
}

function ganaPC() {
    puntosPC ++;
    contenedorPuntosPC.innerText = puntosPC;
    contenedorGanaPunto.innerText = "The computer scored!"
}

function empate() {
    contenedorGanaPunto.innerText = "It's a tie!"
}

function reiniciarJuego() {
    reiniciar.classList.add("disabled")
    elegiTuArma.classList.remove("disabled")
    mensaje.classList.add("disabled")

    puntosUsuario = 0;
    puntosPC = 0;

    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorPuntosPC.innerText = puntosPC;

    instrucciones.innerText = "First to score 5, wins"
}