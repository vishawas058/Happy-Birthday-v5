document.addEventListener('mousemove', function(e){
    let body = document.querySelector('body');
    let heart = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;
    heart.style.left = x+'px';
    heart.style.top = y+'px';

    let size = Math.random() * 10;
    heart.style.width = 4 * size+'px';
    heart.style.height = 4 * size+'px';

    let transformValue = Math.random() * 360;
    heart.style.transform = 'rotate('+ transformValue +'deg)';

    body.appendChild(heart);

    setTimeout(function(){
        heart.remove();
    },1000)
})

let mailBox = document.querySelector('.mail')
let boxmail = document.querySelector('.boxMail')
var close = document.querySelector('.fa-xmark')
mailBox.onclick = function(){
    mailBox.classList.toggle('active')
    boxmail.classList.add('active')
}

close.addEventListener('click', function(){
    boxmail.classList.remove('active')
})