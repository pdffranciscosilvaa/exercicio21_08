function calcularMedia() {
    let numeros = [];
    for (let i = 1; i <= 5; i++) {
        let num = parseInt(document.getElementById('num' + i).value);
        if (num >= 1 && num <= 10) {
            numeros.push(num);
        } else {
            alert("Por favor, insira um número entre 1 e 10 no campo " + i);
            return;
        }
    }
    
    let soma = numeros.reduce((total, num) => total + num, 0);
    let media = soma / numeros.length;
    
    document.getElementById('resultado').textContent = `A média aritmética dos números inseridos é: ${media.toFixed(2)}`;
}