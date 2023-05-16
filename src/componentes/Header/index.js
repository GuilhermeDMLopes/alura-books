//Arquivo contendo os requisitos para o componente HEADER
//Componentes são funções que retornam um HTML

//Importando CSS
import './estilo.css';
//Importanto componenetes para o Header
import IconesHeader from '../../componentes/Icones';
import Logo from '../../componentes/Logo';
import OpcoesHeader from '../../componentes/OpcoesHeader';

function Header() {
    return (
        <header className="App-header">
            <Logo/>
            <OpcoesHeader/>     
            <IconesHeader/>     
      </header>
    )
}

export default Header;