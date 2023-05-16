//Arquivo contendo os requisitos para o componente Opções no Header
//Componentes são funções que retornam um HTML

import styled from 'styled-components';

//Criando componente estilizado para opcoes
const Opcoes = styled.ul`
  display: flex;
`

//Criando componente estilizado para cada Opcao
const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;  
`

//Variavel para guardar os textos da lista e mostrar no .map
const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function OpcoesHeader() {
    return (
        <Opcoes>
          { textoOpcoes.map( (texto) => (
            <Opcao><p>{texto}</p></Opcao>
          ) ) }
        </Opcoes>
    )
}

export default OpcoesHeader;