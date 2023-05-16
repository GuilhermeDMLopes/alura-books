//Arquivo contendo os requisitos para o componente logo
//Componentes são funções que retornam um HTML

//importando estilo para logo
import './estilo.css';
//importando logo
import logo from '../../imagens/logo.svg';

function Logo() {
    return (
        <div className="logo">
            <img 
                src={logo} 
                alt="Logo do Alura Books" 
                className="logo-img"
            ></img>
          <p><strong>Alura</strong>Books</p>
        </div>
    )
}

export default Logo;