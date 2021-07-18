const startMinutes = 60;
let time = startMinutes * 60;

setInterval(update, 1000)

const countDown = document.getElementById('count');
function update(){
    const minutes = Math.floor(time/60);
    const seconds =  time % 60;
    countDown.innerHTML = `00 H | ${minutes} M | ${seconds} S` 
    time--;
}

const nome = document.getElementById("nameUser");
const tel = document.getElementById("nameCel");
const email = document.getElementById("nameEmail");
const cadastro = document.getElementById("cadastro");

function salvaResposta(){
    localStorage.setItem("name", nome.value);
    localStorage.setItem("telefone", tel.value);
    localStorage.setItem("email", email.value);
}

cadastro.addEventListener('click', salvaResposta())