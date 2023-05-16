//Arquivo para tratar o componente de títulos
import styled from "styled-components";

//Criando componenete para os titulos dos livros
//Utilizando PROPS.
//Passamos a cor por parametro
export const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.cor || '#000'};
    font-size: ${props => props.tamanhoFonte || '18px'};
    text-align: ${props => props.alinhamento || 'center'};
    margin: 0;
`