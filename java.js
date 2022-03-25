var contatos = ["Pedro: 123456","Will: 123456","Gustavo: 123456","Ana: 123456"]
var para = document.querySelector('p');
var input = document.querySelector('input');
var btn = document.querySelector('button');

btn.addEventListener('click' , function(){
var procurarNome= input.value;
input.value ='';
input.focus();
for(var i=0; i<contatos.length; i++){
    var splitContatos= contatos[i].split(':');
    if(splitContatos[0]===procurarNome){
        para.textContent= splitContatos[0]+ 'O numero e' + splitContatos[1]+ '.';
        break;
    }else{
        para.textContent="contato nao encontrado.";
    }
}
});