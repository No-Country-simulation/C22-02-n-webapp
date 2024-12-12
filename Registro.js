// REGISTRO

// FULL NAME FACE

const Nombre = document.getElementById("fullName")
const face1 = document.getElementById("face-1")

Nombre.addEventListener("input", ()=> {
    if(Nombre.value.trim()) {
        face1.innerHTML = `<img class="faces" src="../assets/icons/happy-face.svg" alt="">`
    } else{
        face1.innerHTML = `<img class="faces" src="../assets/icons/serious-face.svg" alt="">`
    }
})

// MAIL FACE

const email = document.getElementById("mail")
const face2 = document.getElementById("face-2")

email.addEventListener("input", ()=> {
    if(email.value.trim()) {
        face2.innerHTML = `<img class="faces" src="../assets/icons/happy-face.svg" alt="">`
    } else {
        face2.innerHTML = `<img class="faces" src="../assets/icons/serious-face.svg" alt="">`
    }
})

// BOTH PASSWORD FACE

const password = document.getElementById("pw");
const repeatPw = document.getElementById("repeatpw")
const face3 = document.getElementById("face-3")
const face4 = document.getElementById("face-4")

password.addEventListener("input", ()=> {
    if(password.value.trim()) {
        face3.innerHTML = `<img class="faces" src="../assets/icons/happy-face.svg" alt="">`
    } else {
        face3.innerHTML = `<img class="faces" src="../assets/icons/serious-face.svg" alt="">`
    }
})

repeatPw.addEventListener("input", ()=> {
    if(repeatPw.value.trim()) {
        face4.innerHTML = `<img class="faces" src="../assets/icons/happy-face.svg" alt="">`
    } else {
        face4.innerHTML = `<img class="faces" src="../assets/icons/serious-face.svg" alt="">`
    }
})

// Funcionalidad ver/ocultar contraseña

const firstEye = document.getElementById("firstEye")
const secondEye = document.getElementById("secondEye")
const pw = document.getElementById("pw")
const repeatpw = document.getElementById("repeatpw")

const showEye = `<img class="eyes" src="../assets/icons/show-eye.svg" alt="">`
const hideEye = `<img class="eyes" src="../assets/icons/hide-eye.svg" alt="">`

const showPw = ()=> {
    pw.type = "text"
}

const hidePw = ()=> {
    pw.type = "password"
}

const showRepeatPw = ()=> {
    repeatpw.type = "text"
}

const hideRepeatPw = ()=> {
    repeatpw.type = "password"
}

firstEye.addEventListener("click", ()=> {
    if (pw.type === "password") {
        showPw()
        firstEye.innerHTML = hideEye
    } else {
        hidePw()
        firstEye.innerHTML = showEye
    }
})

secondEye.addEventListener("click", ()=> {
    if (repeatpw.type === "password") {
        showRepeatPw()
        secondEye.innerHTML = hideEye
    } else {
        hideRepeatPw()
        secondEye.innerHTML = showEye
    }
})

// VALIDAR CAMPOS

const logButton = document.getElementById("submit");

logButton.addEventListener("click", ()=> {

    // Obtención de datos

    const fullName = document.getElementById("fullName").value
    const mail = document.getElementById("mail").value
    const pw = document.getElementById("pw").value
    const repeatpw = document.getElementById("repeatpw").value

    // Validación de datos

    // Nombre

    if (!fullName) {

    } else if (fullName.length >= 100) {
        
    }

    // mail

    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!regexEmail.test(mail)) {
        
    }

    // pw and repeatpw

    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!regexPassword.test(pw)) {
        
    }

    if (!regexPassword.test(repeatpw)) {
        
    }

    if (pw !== repeatpw) {
        
    }
})