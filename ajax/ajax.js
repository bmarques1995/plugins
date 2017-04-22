/*
*  Na função, o parâmetro
* method recebe um número
* inteiro, onde 0 corresponde 
* a get e 1 a post
*/
function ajax(ip,method,func,args){
    var req;
    if (window.XMLHttpRequest)
        req = new XMLHttpRequest();
    else
        req = new ActiveXObject("Microsoft.XMLHTTP");
    req.onreadystatechange = func;
    method = parseInt(method);
    switch(method){
        case 0:
            req.open("GET",ip+"?"+args);
            req.send();
            break;
        case 1:
            req.open("POST",ip);
            req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            req.send(args);
            break;
        default:
            console.error("Erro fatal, valor inválido");
            break;
    }
}