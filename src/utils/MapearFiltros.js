function normalizeText(texto) {
    return (texto || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }
  
  
export function mapearFiltrosParaAPI(filtros) {
    let filtrados = data;

if (filtros.textoPesquisa) {
  const texto = normalizeText(filtros.textoPesquisa);
  filtrados = filtrados.filter(v => normalizeText(`${v.fabricante} ${v.nomeVeiculo}`).includes(texto));
}

if (filtros.textoLoc) {
  const texto = normalizeText(filtros.textoLoc);
  filtrados = filtrados.filter(v => normalizeText(`${v.cidade} - ${v.estado}`).includes(texto));
}

setVeiculosFiltrados(filtrados);
    return {
      carroceria: filtros.categoriaSelecionada,
      tipoVeiculo: filtros.tipoSelecionado,
      precoMin: filtros.precoMin || undefined,
      precoMax: filtros.precoMax || undefined,
      quilometragemMax: filtros.quilometragemMax || undefined,
      anoFabricacao: filtros.anoMin || undefined,
      anoModelo: filtros.anoMax || undefined,
      // outros campos, se desejar:
      // cambio: filtros.cambio,
      // combustivel: filtros.combustivel,
      // corId: filtros.corId,
      // cidade: filtros.textoLoc (se aplicável),
    };
  }