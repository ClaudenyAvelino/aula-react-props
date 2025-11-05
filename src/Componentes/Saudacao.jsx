// src/Componentes/Saudacao.jsx
import "./Saudacao.css";

function Saudacao({ nome }) {
  return (
    <h2 className="saudacao">
      {nome ? `Olá, ${nome}! Seja bem-vindo(a)!` : "Digite seu nome acima "}
    </h2>
  );
}

export default Saudacao;
