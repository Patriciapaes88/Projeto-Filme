import { createContext, useState, useEffect } from "react";

export const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  // Carrega favoritos salvos do localStorage ao iniciar
  useEffect(() => {
    const favoritosSalvos = localStorage.getItem("favoritos");
    if (favoritosSalvos) {
      setFavoritos(JSON.parse(favoritosSalvos));
    }
  }, []);

  // Atualiza localStorage sempre que favoritos mudarem
  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  const adicionarFavorito = (filme) => {
    if (!favoritos.some((f) => f.imdbID === filme.imdbID)) {
      setFavoritos([...favoritos, filme]);
    }
  };

  const removerFavorito = (id) => {
    setFavoritos(favoritos.filter((f) => f.imdbID !== id));
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, adicionarFavorito, removerFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}
