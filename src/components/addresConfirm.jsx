import React, { useContext } from 'react';
import { Form, Button/* , Spinner  */ } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Context from '../context/Context';

function Success() {
  const { setPage, Data } = useContext(Context);
  const history = useNavigate();

  const cepReturn = async () => {
    setPage('cep');
  };

  const { localidade } = Data;
  const question = `Você mora em ${localidade}?`;
  return (
    <Form.Group className="bg-dark rounded-5 col">
      <div className="mb-3 p-3">
        <Form.Label
          htmlFor="cepInput"
        >
          <p>
            {' '}
            {question}
            {' '}
          </p>
        </Form.Label>
      </div>
      <div className=" d-flex flex-column">
        <Button
          className="m-2"
          variant="primary"
          type="submit"
          onClick={() => history('/ofertas')}
        >
          Sim
        </Button>
        <Button
          className="m-2"
          variant="danger"
          type="submit"
          onClick={cepReturn}
        >
          Tentar de novo
        </Button>
      </div>

    </Form.Group>
  );
}

export default Success;
