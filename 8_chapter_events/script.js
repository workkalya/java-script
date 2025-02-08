let button = document.getElementById("mode-btn");
let body = document.querySelector("body");
let div = document.querySelector(".middle");

let isDarkMode = false;

button.addEventListener("click", () => {
    if (!isDarkMode) {
        body.style.backgroundColor = "black";
        div.style.backgroundColor = "rgb(53, 51, 51)";
        button.style.backgroundColor = "gray";
        button.style.color = "white";
        button.innerText = "Light Mode";
        isDarkMode = true;
    } else {
        body.style.backgroundColor = "rgb(184, 238, 58)";
        div.style.backgroundColor = "rgb(255, 127, 7)";
        button.style.backgroundColor = "burlywood";
        button.style.color = "brown";
        button.innerText = "Dark Mode";
        isDarkMode = false;
    }
});