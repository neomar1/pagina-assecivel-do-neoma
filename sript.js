document. addEventListener ('DOMContentLoaded', function() {

const botaoacessilidade= this.document. getElementById('botao acessibilidade');
const opcoescessilidade= this.document. getElementById('opcoesacebilidade');
 
botaoacessilidade.classList.toggle('clik' function(){
     botaoacessilidade.classList.toggle('apresenta botao')
     botaoacessilidade.classList.toggle('apresenta lista')
})



     const aumentaFonteBotao = this. getElementByld('aumenta-fonte');
     const diminuiFonteBotao = this. getElementById('diminuirfonte');
     
     let tamanhoAtualdaFonte = 1;
     
     aumentaFonteBotao.addEventListener('click',function () {
     tamanhoAtualdaFonte += 0.1;
     document.body.style.fontSize = `${tamanhoAtualdaFonte}rem`
     
     })
     
     diminuiFonteBotao.addEventListener('click',function () {
     tamanhoAtualdaFonte += 0.1;
     document.body.style.fontSize = `${tamanhoAtualdaFonte}rem`
     
     
     })
