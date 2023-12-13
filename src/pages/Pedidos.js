import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import plato1 from '../assets/img/plato1.jpg';
import plato2 from '../assets/img/plato2.jpg';
import plato3 from '../assets/img/plato3.jpg';
import platoe2 from '../assets/img/platoe2.jpg';
import platoe5 from '../assets/img/platoe5.jpg';
import platoe1 from '../assets/img/platoe1.jpg';

const productos = [
  {
    id: 1,
    nombre: 'Pique Macho',
    precio: 60,
    imagen: plato1,
  },
  {
    id: 2,
    nombre: 'Pescado Frito',
    precio: 40,
    imagen: plato2,
  },
  {
    id: 3,
    nombre: 'Papas a la Huancaina',
    precio: 45,
    imagen: plato3,
  },
  {
    id: 4,
    nombre: 'Bandeja Paisa',
    precio: 55,
    imagen: platoe2,
  },
  {
    id: 5,
    nombre: 'Churrasco',
    precio: 70,
    imagen: platoe5,
  },
  {
    id: 6,
    nombre: 'Pasta',
    precio: 35,
    imagen: platoe1,
  },
];

const Pedidos = () => {
  const [carrito, setCarrito] = useState([]);
  const divisa = ' BOB';
  const navigate = useNavigate();

  const anyadirProductoAlCarrito = (id) => {
    setCarrito([...carrito, id]);
  };

  const borrarItemCarrito = (id) => {
    setCarrito(carrito.filter((item) => item !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const handleCompraClick = () => {
    navigate('/registro');
  };

  const calcularTotal = () => {
    return carrito.reduce((total, itemId) => {
      const item = productos.find((p) => p.id === itemId);
      return total + item.precio;
    }, 0).toFixed(2);
  };

  return (
    <div className="promociones-container">
      <Container className="mt-5">
      <Row>
        <Col lg={8}>
          <Row>
            {productos.map((producto) => (
              <Col key={producto.id} sm={6} lg={4} className="mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Img src={producto.imagen} className="img-fluid" />
                    <Card.Text>{`${producto.precio}${divisa}`}</Card.Text>
                    <Button onClick={() => anyadirProductoAlCarrito(producto.id)}>+</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col lg={4}>
          <h2 style={{ textAlign: 'center', marginTop: '50px', color: 'white', animation: 'fadeInUp 1s ease-in-out' }}>Carrito</h2>
          <ul className="list-group">
            {Array.from(new Set(carrito)).map((itemId) => {
              const item = productos.find((p) => p.id === itemId);
              const numeroUnidadesItem = carrito.filter((id) => id === itemId).length;

              return (
                <li key={itemId} className="list-group-item text-right mx-2">
                  {`${numeroUnidadesItem} x ${item.nombre} - ${item.precio}${divisa}`}
                  <Button className="btn-danger mx-2" onClick={() => borrarItemCarrito(itemId)}>
                    X
                  </Button>
                </li>
              );
            })}
          </ul>
          <hr />
          <p style={{ textAlign: 'center', color: 'white' }} className="text-right">Total: <span>{calcularTotal()}</span>{divisa}</p>
          <div className="d-flex justify-content-between align-items-center">
            <Button className="btn-danger" onClick={vaciarCarrito}>Vaciar</Button>
            <Button className="custom-button" onClick={handleCompraClick}>
              Comprar
            </Button>
          </div><br />
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Pedidos;
