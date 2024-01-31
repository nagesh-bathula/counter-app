const button = document.getElementById("addCount");
const reset = document.getElementById("reset")

const count = document.getElementById("count")


let counter = 0

button.addEventListener("click", () => {
    counter += 1;
    count.innerHTML = counter
})

reset.addEventListener("click", () => {
    count.innerHTML = 0;
})

