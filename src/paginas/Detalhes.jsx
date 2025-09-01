import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Detalhes() {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function buscarDetalhes() {
      setCarregando(true);
      const resposta = await fetch(`https://www.omdbapi.com/?apikey=b456ad0b&i=${id}&plot=full`);
      const dados = await resposta.json();
      setFilme(dados);
      setCarregando(false);
    }

    buscarDetalhes();
  }, [id]);

  if (carregando) return <p>Carregando detalhes...</p>;
  if (!filme || filme.Response === "False") return <p>Filme não encontrado.</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{filme.Title} ({filme.Year})</h2>
      <img
        src={filme.Poster !== "N/A" ? filme.Poster : "https://via.placeholder.com/200x300"}
        alt={filme.Title}
        style={{ width: "200px" }}
      />
      <p><strong>Gênero:</strong> {filme.Genre}</p>
      <p><strong>Diretor:</strong> {filme.Director}</p>
      <p><strong>Atores:</strong> {filme.Actors}</p>
      <p><strong>Sinopse:</strong> {filme.Plot}</p>
      <p><strong>Duração:</strong> {filme.Runtime}</p>
      <p><strong>Nota IMDb:</strong> {filme.imdbRating}</p>

      {/* ✅ Botão de voltar colocado corretamente aqui */}
      <button onClick={() => navigate("/")}>🔙 Voltar à busca</button>
    </div>
  );
}

export default Detalhes;
