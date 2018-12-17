const palavraContrario = (sentenca) => {
  const arrayPalavras = sentenca.split(' ')
  const arrayPalavrasContrario = []

  arrayPalavras.forEach(palavra => {
    let palavraAoContrario = ''
    for (let i = palavra.length - 1; i >= 0; i--) {
      palavraAoContrario += palavra[i]
    }
    arrayPalavrasContrario.push(palavraAoContrario)
  });
  return arrayPalavrasContrario.join(' ')
}

const test = palavraContrario('12 23 34')
console.log(test)