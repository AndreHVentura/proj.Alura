function pesquisar() {
  // Seleciona a seção onde os resultados da pesquisa serão exibidos.
  let section = document.getElementById("resultados-pesquisa");

  // Inicializa uma string vazia para armazenar os resultados formatados em HTML.
  let resultados = "";

  // Itera sobre cada dado na lista de dados.
  for (let dado of dados) {
    // Concatena a string 'resultados' com o HTML formatado para cada dado.
    // O HTML inclui um div com a classe 'item-resultado', um título com um link
    // para o detalhe do dado e uma descrição.
    resultados += `<div class="item-resultado">
        <h2>
          <a href="${dado.link}" target="_blank" style="text-decoration: none;">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">
          ${dado.descricao}
        </p>
      </div>`;
  }

  // Atribui o conteúdo HTML completo da string 'resultados' à propriedade innerHTML
  // da seção, substituindo o conteúdo anterior.
  section.innerHTML = resultados;
}
