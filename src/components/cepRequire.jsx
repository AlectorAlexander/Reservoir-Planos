import React, { useContext, useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { IMaskInput } from 'react-imask';
import Context from '../context/Context';
import getCep from '../services/FetchCep';

function Cep() {
  const [cep, setCep] = useState('');
  const {
    setLoading, Loading, setPage, setData,
  } = useContext(Context);

  const button = () => {
    if (cep.length < 9) {
      return 'secondary';
    }
    return 'primary';
  };

  const cepRequest = async (value) => {
    setLoading(true);
    const newCep = value.replace('-', '');
    const { data } = await getCep(newCep);
    setLoading(false);
    if (data.erro) {
      setPage('error');
    }
    if (data.cep) {
      setData(data);
      /* Aqui, eu envio as mesmas informações pro Context Api,
      e pro LocalStorage. Faço isso, ao invés de escolher só uma opção
      para passar informações, porque acredito que a busca de
      informações no Provider tem um processamento mais rápido do
      que seria a busca no LocalStorage, no entanto o Provider não
      guarda as informações após um refresh, então caso o usuário dê um
      F5 na rota '/ofertas', os dados do LocalStorage serão usados */
      localStorage.setItem('user', JSON.stringify(data));
      setPage('returns');
    }
  };

  const rightRender = Loading ? (<Spinner animation="border" />) : (
    <Form.Label
      htmlFor="cepInput"
    >
      <p> Veja as ofertas </p>
      <p> disponiveis em sua região: </p>
      <IMaskInput
        id="cepInput"
        className="rounded-5 p-2 w-50"
        mask="00000-000"
        value={cep}
        onChange={(({ target }) => setCep(target.value))}
        type="text"
        placeholder="Insira seu cep."
      />
    </Form.Label>
  );
  return (
    <Form.Group className="bg-dark rounded-5 col">
      <div className="mb-3 p-3">
        {rightRender}
      </div>
      <Button
        variant={button()}
        value={cep}
        type="submit"
        disabled={cep.length < 9}
        onClick={(({ target }) => cepRequest(target.value))}
      >
        Navegar entre planos
      </Button>

    </Form.Group>
  );
}

export default Cep;
