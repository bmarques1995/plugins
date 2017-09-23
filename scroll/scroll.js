function detectaDev() { 
    var txt = navigator.userAgent;
    txt = txt.toLowerCase();
    if(txt.match(/playstation/i)||txt.match(/xbox/i)||txt.match(/nintendo/i))
        return 3;
    if( txt.match(/windows phone/i) || txt.match(/iphone/i) || txt.match(/ipad/i) || txt.match(/ipod/i) || txt.match(/blackberry/i) || (txt.match(/android/i)))
        return 2;
    if(txt.match(/win/i)||txt.match(/linux/i)||txt.match(/macintosh/i)) 
        return 1;
    return 0;
}
window.onload = function(){
    switch(detectaDev()){
        case 0:
            return;
        case 1:
            break;
        case 2:
            return;
        case 3:
            break;
        default:
            return;
    }
    var corpo = {};
    corpo.elemento = document.querySelector("body");
    corpo.elemento.style.overflow = 'hidden';
    if(corpo.elemento.addEventListener){
        corpo.elemento.addEventListener("mousewheel", rolagem, false);
        corpo.elemento.addEventListener("wheel", rolagem, false);
        corpo.elemento.addEventListener("DOMMouseScroll", rolagem, false);
    }
    else
        corpo.elemento.attachEvent("onmousewheel", rolagem);
    function rolagem(e){
        var e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        window.scrollBy(0,(-50)*delta);
    }
}
document.onkeydown = function(e) {
    e = e || window.event;
    var f = parseInt(e.keyCode);
    switch(f){
        case 38:
          window.scrollBy(0,-20);
          return;
        case 40:
          window.scrollBy(0,20);
          return;
        default:
          return;
    }
};