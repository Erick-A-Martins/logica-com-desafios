let amigos = [];

function adicionar () {
    let nomeAmigo = document.getElementById('nome-amigo');
    if(nomeAmigo.value == "") {
        alert("Informe o nome do amigo!");
        return;
    }

    if(amigos.includes(nomeAmigo.value)) {
        alert("Nome informado já existe!");
        nomeAmigo.value = "";
        return;
        
    }

    let listaAmigos = document.getElementById('lista-amigos');
    amigos.push(nomeAmigo.value);
    
    if(listaAmigos.textContent == "") {
        listaAmigos.textContent = nomeAmigo.value;
    } else {
        listaAmigos.textContent += `, ${nomeAmigo.value}`;
    }

    nomeAmigo.value = "";
}

function sortear () {
    if(amigos.length < 4) {
        alert("Adicione pelo menos 4 amigos!");
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {

        if (i == amigos.length - 1) {
            sorteio.innerHTML += amigos[i] + " --> " + amigos[0] + "<br>";
        } else {
            sorteio.innerHTML += amigos[i] + " --> " + amigos[i + 1] + "<br>";
        }
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar () {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = "";
    document.getElementById('lista-sorteio').innerHTML = "";
}
