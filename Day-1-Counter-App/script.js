let h2 = document.querySelector('h2');
let inc = document.querySelector('.inc');
let dec = document.querySelector('.dec');
let res = document.querySelector('.res');

let a = 0;

inc.addEventListener('click', function () {
    a++;
    h2.innerHTML = a;
    if (a > 0) h2.style.color = 'blue';
});

res.addEventListener('click', function () {
    a = 0;
    h2.innerHTML = a;
    h2.style.color = 'black';

})

dec.addEventListener('click', function () {
    a--;
    h2.innerHTML = a;
    if (a < 0) h2.style.color = 'red';
});