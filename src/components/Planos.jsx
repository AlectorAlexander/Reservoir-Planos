/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import planos from '../planos';

function Planos() {
  return (
    <div className="Planos d-flex flex-wrap justify-content-center container-fluid">
      {planos.map((el) => {
        const {
          plan_code: planCode, minutes, internet, price, plan_type: planType, operator,
        } = el;
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
                Some quick example text to build on the card title and make up the
                bulk of the cards content.
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
