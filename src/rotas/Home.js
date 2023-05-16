//Importante componente de Pesquisa
import Pesquisa from '../componentes/Pesquisa';
import styled from 'styled-components';
import UltimosLancamentos from '../componentes/UltimosLancamentos';

//Criando componente estilizado
//Criamos um container que vai ter uma div estilizada. Dentro dela escreveremos o CSS da div
//Atraves dos container, não precisaremos mais dos arquivos CSS.
const AppContainer = styled.div`  
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589); 
`
//Removendo o Header do App e colocando ele em index.js para aparecer em todas as paginas
//Trocando o nome da pagina App para Home
function Home() {
  return (
    <AppContainer>      
      <Pesquisa/>
      <UltimosLancamentos/>
    </AppContainer>
  );
}

export default Home;
