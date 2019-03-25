// Constante que recebe a array com cada div dos .color-box;
const colors = document.querySelectorAll('.color-box div');


// Função que aplica as cores e o atributo do evento no HTML;
// Serve para reduzir a quantidade de código no HTML;
function applyColor() {

  colors.forEach(function(element) {

    let eachColor = element.innerHTML;
    element.style.backgroundColor = eachColor;
    element.setAttribute('onclick', 'copyTextColor(this)');

  })
  
}

// Chamada da função que aplica as cores e o atributo;
applyColor();


// Função que seleciona a cor do elemento div e o copia para o clipboard; 
function copyTextColor(e) {

  let selectedColor = e.innerHTML;
  let clipboardText = document.getElementById('clipboard-text');
  clipboardText.innerHTML = selectedColor;
  clipboardText.select();
  document.execCommand('copy');

  let mensagem = document.querySelector('.message').innerHTML = "Cor " + selectedColor + " copiada";

  let box = document.querySelector('.message-field');
  box.style.transform = "translate3d(0, 0, 0)";

  window.setTimeout(() => {
    box.style.transform = "translate3d(0, 200px, 0)";
  }, 800);
  
}


