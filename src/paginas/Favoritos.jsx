import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";
import CartaoFilme from "../componentes/CartaoFilme";

function Favoritos() {
  const { favoritos } = useContext(FavoritosContext);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Meus Favoritos</h2>
      {favoritos.length === 0 ? (
        <p>Nenhum filme favoritado ainda.</p>
      ) : (
        <div className="container-filmes">
        { favoritos.map((filme) => (
          <CartaoFilme key={filme.imdbID} filme={filme} />
        ))}
    </div>
  )}
  </div>
  );
}

export default Favoritos;

