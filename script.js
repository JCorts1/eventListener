const input = document.querySelector(".input");
const button = document.getElementById("button");
const output = document.querySelector(".output");

button.addEventListener("click", ()=> {
    event.preventDefault();
    const value = input.value;
    output.textContent = "Hello " + value;
})