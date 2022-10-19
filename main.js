let btn = document.querySelector ('#btnplus')
let btn1 = document.querySelector ('#btnmunys')
let int = document.querySelector ('.numb')

let integer = 0;

btn1.addEventListener("click", function() {
    integer -= 1;
    int.textContent = integer;
})



btn.addEventListener("click", function() {
    integer += 1;
    int.textContent = integer;
})
