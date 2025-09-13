const nomes = [];

function adicionarNome() {
  const input = document.getElementById("nomeInput");
  const nome = input.value.trim();
  if (nome) {
    nomes.push(nome);
    atualizarLista();
    input.value = "";
  }
}

function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  nomes.forEach((nome) => {
    const li = document.createElement("li");
    li.textContent = nome;
    lista.appendChild(li);
  });
}

function sortearNomes() {
  if (nomes.length < 2) {
    alert("Adicione pelo menos dois nomes para sortear.");
    return;
  }

  const sorteados = [...nomes];
  for (let i = sorteados.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [sorteados[i], sorteados[j]] = [sorteados[j], sorteados[i]];
  }

  const nomeSorteado = document.getElementById("nomeSorteado");
  nomeSorteado.textContent = `🎉 ${sorteados[0]} foi sorteado! 🎉`;
}