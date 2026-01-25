console.log("Hello Worlds");

let button = document.getElementById("myButton");
let message = document.getElementById("message");

button.addEventListener("click", function() {
    message.textContent = "Sikeresen rákattintottál a gombra!";
});