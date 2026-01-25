document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("myButton");
    let message = document.getElementById("message");

    button.addEventListener("click", function() {
        // Ha van már szöveg, töröljük, különben írjuk ki
        if (message.textContent === "") {
            message.textContent = "Sikeresen rákattintottál a gombra!";
        } else {
            message.textContent = "";
        }
    });
});