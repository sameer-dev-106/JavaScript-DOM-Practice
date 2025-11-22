let main = document.querySelector('main');
let cursor = document.querySelector('#cursor');
let h2 = document.querySelector('.box h2');


var i = 0;

main.addEventListener('mousemove', (dets) => {
    cursor.style.left = dets.x +'px'
    cursor.style.top = dets.y +'px'
})

document.body.addEventListener('keydown', function(dets) {
    h2.innerHTML = dets.code
})