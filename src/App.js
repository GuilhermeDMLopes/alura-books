import './App.css';
import Header from './componentes/Header';

//Variavel para guardar os textos da lista e mostrar no .map
//Colocada no arquivo index.js em componentes/OpcoesHeader.
//const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

//Guardando icones da aplicação
//Colocada no arquivo index.js em componentes/Icones.
//const icones = [perfil, sacola];

function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
