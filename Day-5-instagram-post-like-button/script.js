let like = document.querySelector('.ri-heart-line');
let bkm = document.querySelector('.ri-bookmark-line');
let h3 = document.querySelector('h3');
let post = document.querySelector('.post');
let love = document.querySelector('#love');



like.addEventListener("dblclick", () => {
    like.classList.remove('ri-heart-line');
    like.classList.add('ri-heart-fill');
    like.style.color = 'red';

    h3.innerHTML = `69 likes`

    love.style.opacity = 1;
    love.style.transform = 'translate(-50%,-50%) scale(1) rotate(0deg)';

    setTimeout(() => {
        love.style.transform = 'translate(-50%,-300%) scale(1) rotate(60deg)';
    }, 800)

    setTimeout(() => {
        love.style.opacity = 0
    }, 1000);

    setTimeout(() => {
        love.style.transform = 'translate(-50%,-50%) scale(0) rotate(-60deg)';
    }, 1400)
});

like.addEventListener('click', () => {
    like.classList.remove('ri-heart-fill');
    like.classList.add('ri-heart-line');
    like.style.color = 'black';

    h3.innerHTML = `68 likes`
})

bkm.addEventListener('click', () => {
    bkm.classList.remove('ri-bookmark-line');
    bkm.classList.add('ri-bookmark-fill');

});

bkm.addEventListener('dblclick', () => {
    bkm.classList.remove('ri-bookmark-fill');
    bkm.classList.add('ri-bookmark-line');
});


post.addEventListener('dblclick', () => {

    like.classList.remove('ri-heart-line');
    like.classList.add('ri-heart-fill');
    like.style.color = 'red';

    h3.innerHTML = `69 likes`;


    love.style.opacity = 1;
    love.style.transform = 'translate(-50%,-50%) scale(1) rotate(0deg)';

    setTimeout(() => {
        love.style.transform = 'translate(-50%,-300%) scale(1) rotate(60deg)';
    }, 800)

    setTimeout(() => {
        love.style.opacity = 0
    }, 1000);

    setTimeout(() => {
        love.style.transform = 'translate(-50%,-50%) scale(0) rotate(-60deg)';
    },1400)
});
