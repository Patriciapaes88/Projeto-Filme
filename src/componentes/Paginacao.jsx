function Paginacao({ pagina, setPagina, buscarFilmes }) {
  const irParaPaginaAnterior = () => {
    if (pagina > 1) {
      setPagina(p => p - 1);
      buscarFilmes();
    }
  };

  const irParaProximaPagina = () => {
    setPagina(p => p + 1);
    buscarFilmes();
  };

  return (
    <div className="paginacao">
      <button onClick={irParaPaginaAnterior} disabled={pagina === 1}>
        Página Anterior
      </button>
      <span style={{ margin: "0 1rem" }}>Página {pagina}</span>
      <button onClick={irParaProximaPagina}>
        Próxima Página
      </button>
    </div>
  );
}

export default Paginacao;
