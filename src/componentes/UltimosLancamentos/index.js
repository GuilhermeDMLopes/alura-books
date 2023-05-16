//Criando componenete de ultimos lançamentos de livros da aplicação.
//importando dados de ultimos lançamentos
import { Titulo } from '../Titulo/index.js';
import { livros } from './dadosUltimosLancamentos.js';
import styled from 'styled-components';
//importando card recomenda
import CardRecomenda from '../CardRecomenda/index.js';
//Importando imagem
import imagemLivro from '../../imagens/livro2.png'

//Criando componente para ultimos lançamentos
const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

//Criando componente para os novos livros que podem ser inseridos
const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`
//Passando uma props em Titulo
//Passando a cor preta por parametro
function UltimosLancamentos() {
    return(
        <UltimosLancamentosContainer>
            <Titulo 
                cor="#EB9B00" 
                tamanhoFonte="36px"                
                >
                    ÚLTIMOS LANÇAMENTOS
                </Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src} alt='imagem livro lancamento'></img>
                ))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imagemLivro}
            />            
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos