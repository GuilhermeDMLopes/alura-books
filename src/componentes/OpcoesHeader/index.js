//Arquivo contendo os requisitos para o componente Opções no Header
//Componentes são funções que retornam um HTML

//importando estilo para OpcoesHeader
import './estilo.css';

//Variavel para guardar os textos da lista e mostrar no .map
const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function OpcoesHeader() {
    return (
        <ul className="opcoes">
          { textoOpcoes.map( (texto) => (
            <li className="opcao"><p>{texto}</p></li>
          ) ) }
        </ul>
    )
}

export default OpcoesHeader;