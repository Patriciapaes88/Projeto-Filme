import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FavoritosContext } from "../context/FavoritosContext";

function CartaoFilme({ filme }) {
  const navigate = useNavigate();
  const { adicionarFavorito, removerFavorito, favoritos } = useContext(FavoritosContext);

  const jaFavoritado = favoritos.some(f => f.imdbID === filme.imdbID);

  return (
    <div className="cartao-filme">
      <img
        src={filme.Poster !== 'N/A' ? filme.Poster : 'https://via.placeholder.com/220x320?text=Sem+Imagem'}
        alt={filme.Title}
      />
      <h3>{filme.Title}</h3>
      <p>{filme.Year}</p>
      <div className="acoes-filme">
        <button onClick={() => navigate(`/detalhes/${filme.imdbID}`)}>
          Ver Detalhes
        </button>
        <button
          onClick={() => jaFavoritado ? removerFavorito(filme.imdbID) : adicionarFavorito(filme)}
          style={{
            backgroundColor: jaFavoritado ? '#ff6666' : '#66cc66'
          }}
        >
          {jaFavoritado ? "Remover dos Favoritos" : "Favoritar"}
        </button>
      </div>
    </div>
  );
}

export default CartaoFilme;
