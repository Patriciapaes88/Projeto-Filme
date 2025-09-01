import React, { useState, useEffect } from 'react';
import CampoBusca from '../componentes/CampoBusca';
import CartaoFilme from '../componentes/CartaoFilme';
import Paginacao from '../componentes/Paginacao';

function Busca() {
  const [termo, setTermo] = useState('');
  const [filmes, setFilmes] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

  const API_KEY = 'b456ad0b';

  const buscarFilmes = async () => {
    if (!termo) return;
    setCarregando(true);
    setErro('');
    try {
      const resposta = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${termo}&page=${pagina}`
      );
      const dados = await resposta.json();
      if (dados.Response === 'True') {
        setFilmes(dados.Search);
      } else {
        setErro(dados.Error);
        setFilmes([]);
      }
    } catch (err) {
      setErro('Erro ao buscar filmes.');
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    if (termo) {
      buscarFilmes();
    }
  }, [pagina]);

  return (
    <div>
      <CampoBusca
        termo={termo}
        setTermo={setTermo}
        buscarFilmes={buscarFilmes}
        setPagina={setPagina}
      />

      {carregando && <p>Carregando...</p>}
      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      {termo && filmes.length > 0 && (
        <p style={{ textAlign: 'center' }}>
          Resultados para: <strong>{termo}</strong>
        </p>
      )}

      {/* ✅ Aqui aplicamos o layout em grid */}
      <div className="container-filmes">
        {filmes.map((filme) => (
          <CartaoFilme key={filme.imdbID} filme={filme} />
        ))}
      </div>

      {filmes.length > 0 && (
        <Paginacao pagina={pagina} setPagina={setPagina} />
      )}
    </div>
  );
}

export default Busca;
