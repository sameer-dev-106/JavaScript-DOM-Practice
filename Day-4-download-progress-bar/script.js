let grow = 0;
let btn = document.querySelector('button');
let h2 = document.querySelector('h2');
let inner = document.querySelector('.inner');

btn.addEventListener('click', () => {
    btn.style.pointerEvents = 'none';
    btn.innerHTML = 'Downlonding...';
    btn.style.opacity = 0.7;

    let num = 50 + Math.floor(Math.random() * 50);

    console.log('Your file will be downloaded in', num / 10, 'seconds');

    let int = setInterval(() => {
        grow++;
        h2.innerHTML = grow + '%';
        inner.style.width = grow + '%';
    }, num);

    setTimeout(() => {
        clearTimeout(int);
        btn.innerHTML = 'Downloaded';
        btn.style.opacity = 0.5;
    }, num * 100);
});