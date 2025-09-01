import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Busca from "./paginas/Busca";
import Favoritos from "./paginas/Favoritos";
import { FavoritosProvider } from "./context/FavoritosContext";
import Detalhes from "./paginas/Detalhes";
import './estilos/geral.css';


function App() {
  return (
    <FavoritosProvider>
      <BrowserRouter>
        <div>
          <h1>🎬 Filmes.com</h1>
          <Routes>
            <Route path="/" element={<Busca />} />
            <Route path="/favoritos" element={<Favoritos />} />
             <Route path="/detalhes/:id" element={<Detalhes />} />
          </Routes>
        </div>
      </BrowserRouter>
    </FavoritosProvider>
  );
}

export default App;
