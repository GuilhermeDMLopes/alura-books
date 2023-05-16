//Arquivo contendo os requisitos para o componente Icones
//Componentes são funções que retornam um HTML

//Importando imagens
import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
//importando estilo para logo
import './estilo.css';

//Variavel para guardar os icones em uma lista e mostrar no .map
const icones = [perfil, sacola];

function IconesHeader() {
    return (        
        <ul className="icones">
            { icones.map( (icone) => (
                <li className="icone"><img src={icone} alt="Icones"></img></li>
            ) ) }
        </ul>
    )
}

export default IconesHeader;