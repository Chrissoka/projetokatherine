const efeito = document.querySelector(".efeito");

function digitacao(texto, contador) {
  if (contador < texto.length) {
    setTimeout(() => {
      efeito.textContent += texto.charAt(contador);
      contador++;
      digitacao(texto, contador);
    }, 89);
  }
}

digitacao("Mulheres podem fazer tudo que os homens fazem, mas mulheres possuem maior capacidade de imaginar - Katherine C. G. Johnson", 0);


