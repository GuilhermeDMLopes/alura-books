//Arquivo referente aos serviços de livros
//importando Axios
import axios from 'axios';

//Criando 'API' para fazer as chamadas na API
//axios cria essa 'API'. Podemos configurar os Headers, Autenticação, etc dentro do objeto. Vamos colocar a URL base
//URL base que o axios vai buscar (Ex: http://localhost:8000/livros)
const favoritosAPI = axios.create({baseURL: "http://localhost:3300/favoritos"})

//Função para pegar os livros do backend
//Como nossa URL base já tem /livros, passaremos apenas '/' para o get
//Req é o que mandamos para API. Res é o que a API responde
async function getFavoritos() {
    const response = await favoritosAPI.get('/')

    //Axios retorna a resposta da API em uma response.data
    return response.data
}

async function postFavorito(id) {
    await favoritosAPI.post(`/${id}`)
}

async function deleteFavorito(id) {
    await favoritosAPI.delete(`/${id}`)
}

export {
    getFavoritos,
    postFavorito,
    deleteFavorito
}