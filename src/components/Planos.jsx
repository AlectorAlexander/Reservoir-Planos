/* eslint-disable react/jsx-filename-extension */
import React, { useContext, useEffect } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import Context from '../context/Context';
/* Criei o objeto "planos" para simular o que seria uma API de planos de internet.
Eu gostei muito de desenvolver esse projeto por ser simples, mas se
houvesse mais tempo para a entrega, eu criaria uma API de planos no
Back para deixar a aplicação mais completa e imersiva  */
import planos from '../planos';

function Planos() {
  const {
    Data, setData,
  } = useContext(Context);

  useEffect(() => {
    if (!Data) {
      const data = JSON.parse(localStorage.getItem('user'));
      setData(data);
    }
  }, []);

  return (
    <div className="Planos d-flex flex-wrap justify-content-center container-fluid">
      {Data && planos.map((el) => {
        const {
          plan_code: planCode, minutes, internet, price, plan_type: planType, operator,
        } = el;
        const {
          cep, logradouro, bairro, localidade, uf, ddd,
        } = Data;
        return (
          <Card className="m-3" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{ planCode }</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{`Plano ${planType}, operadora ${operator}`}</Card.Subtitle>
              <ListGroup variant="flush">
                <ListGroup.Item>{`${internet} de internet`}</ListGroup.Item>
                <ListGroup.Item>{`por R$${price}`}</ListGroup.Item>
                <ListGroup.Item>{`${minutes} minutos`}</ListGroup.Item>
              </ListGroup>
              <Card.Text>
                {`Oferta localizada próxima ao bairro ${bairro}, ${logradouro}, com o cep ${cep}, em ${localidade}-${uf}, DDD ${ddd}.`}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Planos;
