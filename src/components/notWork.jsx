import React, { useContext } from 'react';
import { Form, Button/* , Spinner  */ } from 'react-bootstrap';
import Context from '../context/Context';

function Error() {
  const { setPage } = useContext(Context);

  const cepReturn = async () => {
    setPage('cep');
  };

  return (
    <Form.Group className="bg-dark rounded-5 col">
      <div className="mb-3 p-3">
        <Form.Label
          htmlFor="cepInput"
        >
          <p> Ops! </p>
          <p> Cep inválido! </p>
        </Form.Label>
      </div>
      <Button
        variant="primary"
        type="submit"
        onClick={cepReturn}
      >
        Tentar de novo
      </Button>

    </Form.Group>
  );
}

export default Error;
