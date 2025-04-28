
function normalizeText(texto) {
  return (texto || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function aplicarFiltros(veiculos, filtros) {
  const {
    textoPesquisa,
    textoLoc,
    categoriaSelecionada,
    tipoSelecionado,
    precoMin,
    precoMax,
    quilometragemMin,
    quilometragemMax,
    anoMin,
    anoMax,
    ordenacao
  } = filtros;

  let filtrados = [...veiculos];

  if (textoPesquisa) {
    const texto = normalizeText(textoPesquisa);
    filtrados = filtrados.filter(v => {
      const nome = normalizeText(`${v.fabricante} ${v.nomeVeiculo}`);
      return nome.includes(texto);
    });
  }

  if (textoLoc) {
    const texto = normalizeText(textoLoc);
    filtrados = filtrados.filter(v => {
      const localVeiculo = normalizeText(`${v.cidade} - ${v.estado}`);
      return localVeiculo.includes(texto);
    });
  }

  if (categoriaSelecionada) {
    filtrados = filtrados.filter(v =>
      normalizeText(v.categoria) === normalizeText(categoriaSelecionada)
    );
  }

  if (tipoSelecionado) {
    filtrados = filtrados.filter(v =>
      normalizeText(v.tipoVeiculo) === normalizeText(tipoSelecionado)
    );
  }

  filtrados = filtrados.filter(v => {
    const preco = v.valor || 0;
    const ano = v.anoFabricacao || 1900;
    const km = v.km || 0;

    return (
      preco >= (parseInt(precoMin) || 0) &&
      preco <= (parseInt(precoMax) || Number.MAX_SAFE_INTEGER) &&
      km >= (parseInt(quilometragemMin) || 0) &&
      km <= (parseInt(quilometragemMax) || Number.MAX_SAFE_INTEGER) &&
      ano >= (parseInt(anoMin) || 1900) &&
      ano <= (parseInt(anoMax) || 2100)
    );
  });

 
  switch (ordenacao) {
    case 'precoAsc':
      filtrados.sort((a, b) => (a.valor || 0) - (b.valor || 0));
      break;
    case 'precoDesc':
      filtrados.sort((a, b) => (b.valor || 0) - (a.valor || 0));
      break;
    case 'anoAsc':
      filtrados.sort((a, b) => (a.anoFabricacao || 0) - (b.anoFabricacao || 0));
      break;
    case 'anoDesc':
      filtrados.sort((a, b) => (b.anoFabricacao || 0) - (a.anoFabricacao || 0));
      break;
    case 'kmAsc':
      filtrados.sort((a, b) => (a.km || 0) - (b.km || 0));
      break;
    case 'kmDesc':
      filtrados.sort((a, b) => (b.km || 0) - (a.km || 0));
      break;
    default:
      break;
  }

  return filtrados;
}
