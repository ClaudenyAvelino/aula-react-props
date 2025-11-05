// src/Componentes/Cartao.jsx
import "./Cartao.css";

function Cartao({ titulo, children }) {
    return (
        <div className="cartao">
            <h3>{titulo}</h3>
            {children}
        </div>
    );
}

export default Cartao;
