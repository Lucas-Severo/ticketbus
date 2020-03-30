
// redirect to index
if (!(sessionStorage.getItem("name") && sessionStorage.getItem("origin") && sessionStorage.getItem("destiny")))
    window.location.assign('index.html');

sessionStorage.removeItem('seat');

document.querySelector(".name").innerHTML = "Nome: " + sessionStorage.getItem("name");
document.querySelector(".origin").innerHTML = "Origem: " + sessionStorage.getItem("origin");
document.querySelector(".destiny").innerHTML = "Destino: " + sessionStorage.getItem("destiny");

// date
const dateObject = new Date();
document.querySelector(".date").innerHTML = "Data da reserva: " + 
    `${dateObject.getDate()}/${dateObject.getMonth()}/${dateObject.getFullYear()}`;

// hour
document.querySelector(".hour").innerHTML = "Horário: " + 
    `${dateObject.getHours()}:${dateObject.getMinutes()}:${dateObject.getSeconds()}`;
    
const seatInfo = document.querySelector(".seat");
const seatElement = document.querySelectorAll(".banco");

// select seat
seatElement.forEach((element) => {
    element.addEventListener("click", function(){
        selected = document.querySelector('.selected');
        
        if(selected)
            selected.classList.toggle('selected');

        element.classList.toggle("selected");
        sessionStorage.setItem('seat', element.innerHTML);
        seatInfo.innerHTML = "Banco: " + element.innerHTML;
    });
});

// print
document.querySelector(".info-field .submit").addEventListener("click", function(){
    if(sessionStorage.getItem('seat')) {
        document.querySelector(".bus").style.display = "none";
        document.querySelector(".info").classList.toggle("print");
        window.print();
        document.querySelector(".bus").style.display = "flex";
        document.querySelector(".info").classList.toggle("print");
    }
});