//
import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

import Container from 'react-bootstrap/Container';
import com from '../assets/img/com.gif'


function Registro(){
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
    
      setValidated(true);
    };
    

    return (
      <Container fluid>
      <Row className="align-items-stretch" style={{ backgroundColor: 'black' }}>
      <Col md={4} style={{ maxHeight: '100vh', overflow: 'hidden' }}><br /><br /><br />
          <img src={com} alt=" " className="img-fluid" style={{ height: '100%', width: '100%' }} />
        </Col>
        <Col md={8}><br />
        <div style={{ margin: '10px' }}>
            <h1 style={{ textAlign: 'center', marginTop: '50px', color: 'white', animation: 'fadeInUp 1s ease-in-out' }}>Registrate para obtener Beneficios</h1><br />
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01" style={{ color: 'white' }}>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Jose Andres"
            
          />
          <Form.Control.Feedback>Bien!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02" style={{ color: 'white' }}>
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Mamani Mollericona"
            
          />
          <Form.Control.Feedback>Bien!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername" style={{ color: 'white' }}>
          <Form.Label>Nombre de Usuario</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Jossel"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid" style={{ color: 'white' }}>
              Elige otro Nombre de Usuario.
            </Form.Control.Feedback>
          </InputGroup>
        
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} md="3" controlId="validationCustom04" style={{ color: 'white' }}>
          <Form.Label>Pais</Form.Label>
          <Form.Control type="text" placeholder="Bolivia" required />
          <Form.Control.Feedback type="invalid">
          Proporcione una Pais valido.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom03" style={{ color: 'white' }}>
          <Form.Label>Ciudad</Form.Label>
          <Form.Control type="text" placeholder="La Paz" required />
          <Form.Control.Feedback type="invalid">
            Proporcione una Ciudad valida.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustomEmail" style={{ color: 'white' }}>
    <Form.Label>Correo Electrónico</Form.Label>
    <InputGroup hasValidation>
      <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
      <Form.Control
        type="email"
        placeholder="TuCorreo@gmail.com"
        aria-describedby="inputGroupPrepend"
        required
      />
      <Form.Control.Feedback type="invalid" style={{ color: 'white' }}>
        Proporcione un correo electrónico válido.
      </Form.Control.Feedback>
    </InputGroup>
  </Form.Group>
        
      
      </Row>
      <Form.Group className="mb-3" style={{ color: 'white' }}>
        <Form.Check
          required
          label="Acepta los Terminos y Condiciones"
          feedback="Debe aceptar antes de continuar."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit" className="custom-button">
  <h6>Regístrate</h6>
</Button>

    </Form>
        </div>
        </Col>
        
      </Row> 
    </Container>
    );
};


export default Registro;