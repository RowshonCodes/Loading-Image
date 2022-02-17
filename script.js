let loadText = document.querySelector('.loading-text');
let bg = document.querySelector('.bg');

let load = 0;
let fade = 1;
let filter = 30;

let int = setInterval(blurring, 30)

function fader(value){
    fade = fade - value;
    return fade;
}

function filt(value){
    filter = filter - value;
    return filter;
}

function blurring() {
    load++;

     if (load > 99) {
        clearInterval(int)
    }
 
    loadText.innerText = `${load}%`;
    loadText.style.opacity = fader(0.01);
    bg.style.filter = `blur(${filt(0.3)}px)`;
}