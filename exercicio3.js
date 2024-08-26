function gerarNumerosAleatorios() {
    const numeros = [];
    for (let i = 0; i < 5; i++) {
      numeros.push(Math.floor(Math.random() * 10) + 1);
    }
    return numeros;
  }
  
  function calcularSomaParesImpares(numeros) {
    let somaPares = 0;
    let somaImpares = 0;
    numeros.forEach(numero => {
      if (numero % 2 === 0) {
        somaPares += numero;
      } else {
        somaImpares += numero;
      }
    });
    return { somaPares, somaImpares };
  }
  
  const numerosAleatorios = gerarNumerosAleatorios();
  
  const resultado = calcularSomaParesImpares(numerosAleatorios);
  
  const elementoResultado = document.getElementById('resultado');
  elementoResultado.textContent = `A soma dos números pares é: ${resultado.somaPares} e a soma dos números ímpares é: ${resultado.somaImpares}`;