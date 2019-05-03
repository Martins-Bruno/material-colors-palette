// Constante que recebe a NodeList com cada div dos .color-box:
const colors = document.querySelectorAll('.color-box div');

// Função que aplica as cores e o atributo do evento click no HTML (serve para reduzir a quantidade de código no HTML):
function applyColor() {

  colors.forEach(function(element) {

    let eachColor = element.innerHTML;
    element.style.backgroundColor = eachColor;
    element.setAttribute('onclick', 'copyTextColor(this)');

  })
}

// Chamada da função que aplica as cores e o atributo:
applyColor();


// Função que seleciona a cor do elemento div clicado e o copia para o clipboard: 
function copyTextColor(e) {

  let selectedColor = e.innerHTML;
  let clipboardText = document.getElementById('clipboard-text');
  clipboardText.innerHTML = selectedColor;
  clipboardText.select();
  document.execCommand('copy');

  // Cria a mensagem de cópia:
  let mensagem = document.querySelector('.message').innerHTML = "Cor " + selectedColor + " copiada";

  // Aplica a cor clicada no fundo da mensagem:
  let corMensagem = document.querySelector('.message');
  corMensagem.style.backgroundColor = selectedColor;

  let box = document.querySelector('.message-field');
  box.style.visibility = "visible";
  box.style.opacity = "1";


  clipboardText.setAttribute('disabled', 'true');

  window.setTimeout(() => {
    clipboardText.removeAttribute('disabled', 'true');
  }, 350);

  window.setTimeout(() => {
    box.style.visibility = "hidden";
    box.style.opacity = "0";
  }, 900);

}


