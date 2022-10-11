/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Planos from '../components/Planos';

function Ofertas() {
  const history = useNavigate();
  return (
    <div className="Ofertas">
      <Header />
      <Planos />
      <Button
        onClick={() => history('/')}
        variant="danger"
        className="position-absolute end-0 p-3"
      >
        Ops! Errei meu cep!
      </Button>
      <Footer />
    </div>
  );
}

export default Ofertas;
