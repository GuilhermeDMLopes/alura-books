//Arquivo contendo os requisitos para o componente HEADER
//Componentes são funções que retornam um HTML

//Importanto componenetes para o Header
import IconesHeader from '../../componentes/Icones';
import Logo from '../../componentes/Logo';
import OpcoesHeader from '../../componentes/OpcoesHeader';
import styled from 'styled-components';

//Criando um Container oara Header
const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>     
            <IconesHeader/>     
      </HeaderContainer>
    )
}

export default Header;