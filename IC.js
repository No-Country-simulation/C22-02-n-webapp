// INICIO DE SESIÓM

// Faces

const cara1 = document.getElementById("cara1")
const cara2 = document.getElementById("cara2")

const mailInput = document.getElementById("mailInput")
const pwInput = document.getElementById("pwInput")

mailInput.addEventListener("input", ()=> {
   if(mailInput.value.trim()) {
        cara1.innerHTML = `<img class="faces-IC" src="../assets/icons/happy-face.svg" alt=""></img>`
    } else {
        cara1.innerHTML = `<img class="faces-IC" src="../assets/icons/serious-face.svg" alt=""></img>`
    } 
})

pwInput.addEventListener("input", ()=> {
    if(pwInput.value.trim()) {
        cara2.innerHTML = `<img class="faces-IC" src="../assets/icons/happy-face.svg" alt=""></img>`
    } else {
        cara2.innerHTML = `<img class="faces-IC" src="../assets/icons/serious-face.svg" alt=""></img>`
    }
})

// Show and Hide PW

const ojoButton = document.getElementById("ojoButton")

ojoButton.addEventListener("click", ()=> {
    if(pwInput.type === "password") {
        ojoButton.innerHTML = `<img class="eye-IC" src="../assets/icons/hide-eye.svg" alt="">`
        pwInput.type = "text"
    } else {
        ojoButton.innerHTML = `<img class="eye-IC" src="../assets/icons/show-eye.svg" alt="">`
        pwInput.type = "password"
    }
})

// COLOR IC

const submitButton = document.getElementById("submitButton");
submitButton.style.transition = "background-color 0.5s ease";

// Función para verificar si ambos inputs están completos
const verificarInputs = () => {
    if (pwInput.value.trim() && mailInput.value.trim()) {
        submitButton.style.backgroundColor = "#152740";
        submitButton.disabled = false;
    } else {
        submitButton.style.backgroundColor = "#929DAD";
        submitButton.disabled = true;
    }
};

// Agregar eventos de input a ambos campos
mailInput.addEventListener("input", verificarInputs);
pwInput.addEventListener("input", verificarInputs);


// VALIDACIÓN DE DATOS

//mail

// contraseña

// FUNCIONALIDAD OLVIDE CONTRASEÑA