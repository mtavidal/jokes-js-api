
function novaPiada() {
    let endpoint = 'https://official-joke-api.appspot.com/random_joke';
    fetch(endpoint)
    .then (response => {
        return response.json();
    })
    .then (data => {
        let piadaDiv = document.getElementById("piada");
        piadaDiv.textContent = data.setup;
        let botao = document.getElementById("botaoResposta");
        botao.onclick = () => {
            let piadaRespostaDiv = document.getElementById("piadaResposta");
            piadaRespostaDiv.textContent = "Answer: " + data.punchline;
        }
        botaoNovapiada.disabled = false;
    })
    
}


let botaoNovapiada = document.getElementById("botaoNovapiada");
botaoNovapiada.onclick = () => {
    botaoNovapiada.disabled = true;
    novaPiada();
    let piadaRespostaDiv = document.getElementById("piadaResposta");
    piadaRespostaDiv.textContent = null;
}

