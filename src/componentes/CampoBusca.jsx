function CampoBusca({ termo, setTermo, buscarFilmes, setPagina }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setPagina(1); // Reinicia na primeira página
    buscarFilmes();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
        placeholder="Digite o nome do filme..."
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default CampoBusca;
