document.querySelector(".name").innerHTML = "Nome: " + sessionStorage.getItem("name");
document.querySelector(".origin").innerHTML = "Origem: " + sessionStorage.getItem("origin");
document.querySelector(".destiny").innerHTML = "Destino: " + sessionStorage.getItem("destiny");

const dateObject = new Date();

document.querySelector(".date").innerHTML = "Data: " + `${dateObject.getDate()}/${dateObject.getMonth()}/${dateObject.getFullYear()}`;
const seatInfo = document.querySelector(".seat");

const seatElement = document.querySelectorAll(".banco");
seatElement.forEach((element) => {
    element.addEventListener("click", function(){
        seatInfo.innerHTML = "Banco: " + element.innerHTML;
    })
});