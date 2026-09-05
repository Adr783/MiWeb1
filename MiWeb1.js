const tabs = document.querySelectorAll(".tab");
const contenido = document.getElementById("contenido");

const textos = {
    inicio: "Texto de la pestaña Inicio.",
    "sobre-mi": "Texto de la pestaña Sobre mí.",
    contacto: "Texto de la pestaña Contacto."
};

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        tabs.forEach(boton => {
            boton.classList.remove("active");
        });

        tab.classList.add("active");

        const seccion = tab.dataset.tab;
        contenido.textContent = textos[seccion];
    });
});
