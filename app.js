let amigos=[]

function adicionarAmigo() {
    const nome = document.getElementById('amigo').value;


    if (nome !== "" && !amigos.includes(nome)) {
        amigos.push(nome);
        exibirListaAmigos()
        document.getElementById('amigo').value = ""; 
    } else if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado. Tente outro.");
    } else {
        alert("Por favor, digite um nome válido.");
    }
}
function exibirListaAmigos() {
    const listaAmigosDiv = document.getElementById('listaAmigos');
    listaAmigosDiv.innerHTML = "";

    amigos.forEach(amigo => {
        const amigoSecreto = document.createElement('li');
        amigoSecreto.textContent = amigo;
        listaAmigosDiv.appendChild(amigoSecreto);
    });
}

function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert("Não há amigos para sortear.");
        return;  
    } 
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    alert(`O amigo secreto sorteado é: ${amigoSorteado}`);
    amigos.splice(indiceSorteado, 1);
    exibirListaAmigos()
}