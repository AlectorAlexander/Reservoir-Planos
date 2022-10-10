import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { IMaskInput } from 'react-imask';

function Cep() {
  return (
    <Form.Group className="bg-dark rounded-5">
      <div className="mb-3 p-5">
        <Form.Label
          htmlFor="emailInput"
        >
          CEP:
          {' '}
          <IMaskInput
            mask="00000-000"
            type="text"
            placeHolder="Insira seu cep."
          />
        </Form.Label>
      </div>
      <Button variant="primary" type="submit">
        Enter
      </Button>

    </Form.Group>
  );
}

export default Cep;
