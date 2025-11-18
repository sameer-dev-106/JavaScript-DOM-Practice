let box = document.querySelector('#box');
let btn = document.querySelector('button');
let h1 = document.querySelector('h1');



btn.addEventListener('click', function () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    box.style.backgroundColor = `rgb(${r},${g},${b})`;
    h1.innerHTML = `rgb(${r},${g},${b})`

});
