import React, { useContext } from 'react';
import logo from '../Resevoir Planos/default_765x625.png';
import '../App.css';
import Cep from '../components/cepRequire';
import Context from '../context/Context';
import Success from '../components/addresConfirm';
import Error from '../components/notWork';

function Home() {
  const { page, setPage } = useContext(Context);
  /* Eu decidi criar uma função para alterar os componentes de
  requisição e validação do Cep informado pelo usuário, ao invés de
  usar o routers, porque acreditei que essa abordagem pouparia tempo e
  código, além de deixar a aplicação mais performática */
  const rightComponent = () => {
    if (page === 'cep') return <Cep />;
    if (page === 'error') return <Error />;
    if (page === 'returns') return <Success />;
    return setPage('cep');
  };
  return (
    <div className="App">
      <header className="App-header">
        <img className="zindex" src={logo} alt="logo" />
        {rightComponent()}
      </header>
    </div>
  );
}

export default Home;
