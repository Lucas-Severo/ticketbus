const formElement = document.querySelector(".form-container");

formElement.addEventListener("submit", function(ev){
    ev.preventDefault();

    const form = new FormData(formElement);
    const name = form.get("nome");
    const origin = form.get("origem");
    const destiny = form.get("destino");

    if(origin != destiny) {
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("origin", origin);
        sessionStorage.setItem("destiny", destiny);
        window.location.assign("bus.html");
    } else {
        const result = document.querySelector("#result");
        result.style.display = "Flex";

        setTimeout(() => {result.style.display = "None"}, 2000);
    }
});