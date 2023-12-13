import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const Contactos = () => {
  return (
    <div className="promociones-container">
      
      <section className=' text-center my-4 mx-3'>
        <h3 className='mb-5' style={{color:'white'}}>Contactanos</h3>
        <div className='row'>
          <div className='col-lg-5'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.1903213100604!2d-68.1427473!3d-16.516486599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf8abf7a6551%3A0xf2103e2d23f9bab0!2sAv.%20Buenos%20Aires%2C%20La%20Paz!5e0!3m2!1ses!2sbo!4v1702424754136!5m2!1ses!2sbo'
              className='w-100'
              style={{ border: '0', height: '300px' }}
              loading='lazy'
            ></iframe>
          </div>
          <div className='col-lg-7'><br />
            <Form>
              <Row className='mb-4'>
                <Col>
                  <Form.Control type='text' placeholder='Primer Nombre' />
                </Col>
                <Col>
                  <Form.Control type='email' placeholder='Direccion Email' />
                </Col>
              </Row>
              <Form.Control type='text' placeholder='Motivo' id='form3Subject' className='mb-4' />
              <Form.Control as='textarea' placeholder='Mensaje' id='form3Textarea' className='mb-4' />
              <Button variant='primary' className="custom-button">
                Enviar
              </Button>
              <ul className='list-unstyled'><br />
                <li>
                  <i className='fas fa-map-marker-alt fa-2x text-primary'></i>
                  <p style={{color:'white'}}>
                    <small>Avenida Buenos Aires #1328 La Paz, Bolivia</small>
                  </p>
                </li>
                <li>
                  <i className='fas fa-phone fa-2x text-primary'></i>
                  <p style={{color:'white'}}>
                    <small>+591 78911358</small>
                  </p>
                </li>
                <li>
                  <i className='fas fa-envelope fa-2x text-primary'></i>
                  <p style={{color:'white'}}>
                    <small>jamm030197@gmail.com</small>
                  </p>
                </li>
              </ul>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactos;
