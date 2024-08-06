let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let nouvil = document.querySelector('.nouvil');
window.onscroll = function ()
{
    let valu = scrollY;
    stars.style.left = valu + 'px';
    moon.style.top = valu * 4   + 'px';
    mountains3.style.top = valu * 2   + 'px';
    mountains4.style.top = valu * 1.5   + 'px';
    river.style.top = valu + 'px';
    boat.style.top = valu + 'px';
    boat.style.left = valu * 3 + 'px';
    nouvil.style.fontSize = valu  + 'px';
    if(scrollY >= 70) {
        nouvil.style.fontSize = 80 +'px';
        nouvil.style.position = 'fixed';
    }
    if(scrollY >= 490) {
        nouvil.style.display = 'none';
    }else{
        nouvil.style.display = 'block';
    }
    if(scrollY >= 127) {
        document.querySelector('.main').style.background = 'linear-gradient(#376281, #10001f)';
    }else {
        document.querySelector('.main').style.background = 'linear-gradient(#200016 , #10001f)';
    }
}