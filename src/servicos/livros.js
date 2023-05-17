//Arquivo referente aos serviços de livros
//importando Axios
import axios from 'axios';

//Criando 'API' para fazer as chamadas na API
//axios cria essa 'API'. Podemos configurar os Headers, Autenticação, etc dentro do objeto. Vamos colocar a URL base
//URL base que o axios vai buscar (Ex: http://localhost:8000/livros)
const livrosAPI = axios.create({baseURL: "http://localhost:3300/livros"})

//Função para pegar os livros do backend
//Como nossa URL base já tem /livros, passaremos apenas '/' para o get
//Req é o que mandamos para API. Res é o que a API responde
async function getLivros() {
    const response = await livrosAPI.get('/')

    //Axios retorna a resposta da API em uma response.data
    return response.data
}

export {
    getLivros
}