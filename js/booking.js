
// redirect to index
if (!(sessionStorage.getItem("name") && sessionStorage.getItem("origin") && sessionStorage.getItem("destiny")))
    window.location.assign('index.html');

sessionStorage.removeItem('seat');

document.querySelector(".name").innerHTML = "Nome: " + sessionStorage.getItem("name");
document.querySelector(".origin").innerHTML = "Origem: " + sessionStorage.getItem("origin");
document.querySelector(".destiny").innerHTML = "Destino: " + sessionStorage.getItem("destiny");

// time
setInterval(function(){
    const dateObject = new Date();

    // date
    document.querySelector(".date").innerHTML = "Data da reserva: " + 
    `${("0"+dateObject.getDate()).slice(-2)}/${("0"+(dateObject.getMonth() + 1)).slice(-2)}/${dateObject.getFullYear()}`;

    // hour
    document.querySelector(".hour").innerHTML = "Horário: " + 
    `${("0"+dateObject.getHours()).slice(-2)}:${("0"+dateObject.getMinutes()).slice(-2)}:${("0"+dateObject.getSeconds()).slice(-2)}`;
}, 1000);
    
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