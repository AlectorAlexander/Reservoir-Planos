import React, { useContext } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Cep from '../components/cepRequire';
import Context from '../context/Context';
import Success from '../components/addresConfirm';
import Error from '../components/notWork';

function Home() {
  const { page, setPage } = useContext(Context);
  const rightComponent = () => {
    if (page === 'cep') return <Cep />;
    if (page === 'error') return <Error />;
    if (page === 'returns') return <Success />;
    return setPage('cep');
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {rightComponent()}
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
