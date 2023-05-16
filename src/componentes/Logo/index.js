//Arquivo contendo os requisitos para o componente logo
//Componentes são funções que retornam um HTML

//importando logo
import logo from '../../imagens/logo.svg';
import styled from 'styled-components';

//Criando container com componente estilizado para div Logo
const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;   
`

//Criando componenete estilizado para imagem da logo
const LogoImage = styled.img`
    margin-right: 10px;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage 
                src={logo} 
                alt="Logo do Alura Books"               
            ></LogoImage>
          <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo;