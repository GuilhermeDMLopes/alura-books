//Criando componenete de pesquisa da aplicação.
//Section é um 'header' para outras partes da aplicação
//Importando Componenete input
import Input from "../Input";
import styled from 'styled-components';
//importando estado
import { useEffect, useState } from "react";
import { getLivros } from "../../servicos/livros";
import { postFavorito } from "../../servicos/favoritos";
//Importando dados dos livros para pesquisa
//import { livros } from './dadosPesquisa'

//Criando container de Pesquisa
const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

//Criando componenete Titulo
const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

//Criando componenete Subtitulo
const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

//Criando componente para os resultados da pesquisa
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

//onBlur é quando clicamos e saimos da caixa de input. o evento.target.value pega o valor que inserimos no campo
function Pesquisa() {
    //Criando estados. livrosPesquisados e setLivrosPesquisados.
    //O State muda de acordo com os tipos de estados. Como são listas, passamos uma lista por parametro []
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);
    //Criando State para armazenar os livros
    const [ livros, setLivros ] = useState([])

    //Criando função para pegar os livros ja que o useEffect não lida muito bem com async/await
    async function fetchLivros() {
        const livrosDaApi = await getLivros()
        setLivros(livrosDaApi)
    }

    //usaremos o useEffect para ter os dados dos livros prontos quando pesquisarmos
    //Recebe a ação que ele vai fazer quando a tela carregar (chamar API de livros)
    //Segundo parametro é uma ação na tela. Ex: quando valor de livros for mudado ([livros])
    useEffect(() => {
        fetchLivros()
    }, [])    

    //Verificando livros pesquisados
    //console.log(livrosPesquisados)

    //Função para adicionar um livro aos favoritos ao clicar nele
    async function insertFavorito(id) {
        await postFavorito(id)
        alert(`Livro de id: ${id} inserido`)
    }

    return(
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input 
                placeholder="Escreva sua próxima leitura" 
                onBlur={evento => {
                    //pega texto digitado pelo usuario
                    const textoDigitado = evento.target.value
                    //Resultado da pesquisa e filtrando apenas os nomes dos livros que encaixam com texto digitado
                    const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado))                    
                    setLivrosPesquisados(resultadoPesquisa)                    
                }} 
            />
            { livrosPesquisados.map( livro => (
                <Resultado onClick={() => insertFavorito(livro.id)}>
                    <p>{livro.nome}</p>
                    <img src={livro.src} alt='imagem do livro'></img>
                </Resultado>
            )) }            
        </PesquisaContainer>
    )
}

export default Pesquisa;