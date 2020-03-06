const formElement = document.querySelector(".form-container");

formElement.addEventListener("submit", function(ev){
    ev.preventDefault();

    const form = new FormData(formElement);
    const name = form.get("nome");
    const origin = form.get("origem");
    const destiny = form.get("destino");

    sessionStorage.setItem("name", name);
    sessionStorage.setItem("origin", origin);
    sessionStorage.setItem("destiny", destiny);

    window.location.assign("bus.html");
});