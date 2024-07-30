function comprar() {
    let quantidadeIngressos = parseInt(document.getElementById('qtd').value);
    let tipoIngressos = document.getElementById('tipo-ingresso');

    // INGRESSOS PISTA
    if(tipoIngressos.value == "pista") {
        comprarPista(quantidadeIngressos);
    } 
    // INGRESSOS SUPERIOR
    else if (tipoIngressos.value == "superior") {
        comprarSuperior(quantidadeIngressos);
    } 
    // INGRESSOS INFERIOR
    else if (tipoIngressos.value == "inferior") {
        comprarInferior(quantidadeIngressos);
    }
    
}

function comprarPista (qtd) {
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    
    if (qtd > quantidadePista) {
        alert("Quantidade indisponível de ingressos para pista!");
    } else {
        quantidadePista -= qtd;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert("Compra realizada com sucesso!");
        
    }
}

function comprarSuperior (qtd) {
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if (qtd > quantidadeSuperior) {
        alert("Quantidade indisponível de ingressos para superior!");
    } else {
        quantidadeSuperior -= qtd;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
        alert("Compra realizada com sucesso!");
    }
}

function comprarInferior (qtd) {
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (qtd > quantidadeInferior) {
        alert("Quantidade indisponível de ingressos para inferior!");
    } else {
        quantidadeInferior -= qtd;
        document.getElementById('qtd-inferior').textContent = quantidadeInferior;
        alert("Compra realizada com sucesso!");
    }
}