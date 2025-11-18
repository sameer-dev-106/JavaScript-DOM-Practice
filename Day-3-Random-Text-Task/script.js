let arr = ['Harsh bhai', 'Sarthak bhai', 'Sheryians is Best.', 'harsh bhaiya is great.', 'JS is Love', 'Keep practicing guys...'];


let main = document.querySelector('main');
let btn = document.querySelector('button');

btn.addEventListener('click', () => {
    let h1 = document.createElement('h1');
    h1.innerHTML = arr[Math.floor(Math.random()*arr.length)];

    let x = Math.random() * 80;
    let y = Math.random() * 80;
    let rt = Math.random() * 360;
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);


    h1.style.position = 'absolute'
    h1.style.left = x + '%'
    h1.style.top = y + '%'
    h1.style.rotate = rt + 'deg'
    h1.style.color = `rgb(${r},${g},${b})`

    main.appendChild(h1);
    
}) 