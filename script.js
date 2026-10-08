
const campoPesquisa = document.getElementById("pesquisa-filme");
const filmes = document.querySelectorAll(".filme");
const mensagemVazia = document.getElementById("sem-resultados");

campoPesquisa.addEventListener("input", () => {
  const pesquisa = campoPesquisa.value.toLowerCase().trim();
  let encontrados = 0;

  filmes.forEach((filme) => {
   const nome = filme.querySelector("h3, p").textContent.toLowerCase();
    const corresponde = nome.includes(pesquisa);

    filme.hidden = !corresponde;
    filme.style.display = corresponde ? "" : "none";

    if (corresponde) {
      encontrados++;
    }
  });

  mensagemVazia.hidden = encontrados > 0;
});
const botoesDetalhes = document.querySelectorAll(".ver-detalhes");

botoesDetalhes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const detalhes = botao.parentElement.querySelector(".detalhes");

    detalhes.hidden = !detalhes.hidden;

    botao.textContent = detalhes.hidden
      ? "Ver detalhes"
      : "Ocultar detalhes";
  });
});
const botoesCupons = document.querySelectorAll(".copiar-cupom");
const mensagemCupom = document.getElementById("mensagem-cupom");

botoesCupons.forEach((botao) => {
  botao.addEventListener("click", async () => {
    const codigo = botao.dataset.cupom;

    try {
      await navigator.clipboard.writeText(codigo);
      mensagemCupom.textContent =
        `Cupom ${codigo} copiado com sucesso!`;
    } catch (erro) {
      mensagemCupom.textContent =
        `Não foi possível copiar automaticamente. Código: ${codigo}`;
    }
  });
});