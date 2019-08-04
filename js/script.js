let time = 5000;
let img = document.querySelector('#img')

function ativaUm(){
    img.setAttribute('style', `
    background-image: url(./img/img-1.jpg);
    transition: 2s`
    )
    setTimeout('ativaDois()', time)
}

function ativaDois(){
    img.setAttribute('style', `
    background-image: url(./img/img-2.jpg);
    transition: 2s`
    )
    setTimeout('ativaTres()', time)  
}

function ativaTres(){
    img.setAttribute('style', `
    background-image: url(./img/img-3.jpg);
    transition: 2s`
    )
    setTimeout('ativaUm()', time)
}
