// src/App.jsx
import { useState } from "react";
import Cartao from "./Componentes/Cartao";
import Saudacao from "./Componentes/Saudacao";
import "./index.css";

function App() {
  const [nome, setNome] = useState("");

  return (
    <div className="container">
      <h1>Exemplo de Props com Input</h1>

      <Cartao titulo="Digite seu nome">
        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="input-nome"
        />
      </Cartao>

      <Cartao titulo="Saudação Personalizada">
        <Saudacao nome={nome} />
      </Cartao>
    </div>
  );
}

export default App;
