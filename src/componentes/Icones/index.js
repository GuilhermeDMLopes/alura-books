//Arquivo contendo os requisitos para o componente Icones
//Componentes são funções que retornam um HTML

//Importando imagens
import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';


//Criando componente estilizados para os icones
const Icones = styled.ul`
    display: flex;
    align-items: center;
`

//Criando componente estilizado para cada icone
const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`

//Variavel para guardar os icones em uma lista e mostrar no .map
const icones = [perfil, sacola];

function IconesHeader() {
    return (        
        <Icones>
            { icones.map( (icone) => (
                <Icone><img src={icone} alt="Icones"></img></Icone>
            ) ) }
        </Icones>
    )
}

export default IconesHeader;