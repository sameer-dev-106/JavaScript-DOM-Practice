//task 1

let main = document.querySelector('main');
let btn = document.querySelector('button');

btn.addEventListener('click',()=>{
    let div = document.createElement('div');

    let x = Math.random()*80 ;
    let y = Math.random()*80 ;
    let rt = Math.random()*360 ;
    let sc = Math.random()*2 ;
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

    div.style.height = '50px'
    div.style.width = '50px'
    div.style.backgroundColor = `rgb(${r},${g},${b})`
    div.style.position = 'absolute'
    div.style.left = x+'%'
    div.style.top = y+'%'
    div.style.rotate = rt+'deg'
    div.style.scale = sc

    main.appendChild(div)

})