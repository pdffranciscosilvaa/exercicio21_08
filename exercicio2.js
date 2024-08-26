function gerarValores() {
    let valores = [];
    for (let i = 0; i < 5; i++) {
        let numAleatorio = Math.floor(Math.random() * 10) + 1;
        valores.push(numAleatorio);
    }
    document.getElementById("numeros").innerText = `Números gerados: ${valores.join(", ")}`;
    return valores;
}

function calcularSoma() {
    let valores = gerarValores();
    let soma = valores.reduce((acc, val) => acc + val, 0);
    document.getElementById("resultado").innerText = `A soma dos números é: ${soma}`;
}