const button = document.getElementById("addCount");
const reset = document.getElementById("reset")

const count = document.getElementById("count")


let counter = 0

count.innerHTML = counter

button.addEventListener("click", () => {
    counter += 1;
    count.innerHTML = counter
})

reset.addEventListener("click", () => {
    counter = 0
    count.innerHTML = counter
})

