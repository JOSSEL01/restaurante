import React from 'react';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import photo from '../assets/img/photo.png';
import 'hover.css/css/hover-min.css';


const Perfil = () => {
    return (
        <div className="gradient-custom-2" style={{ backgroundColor: '#F56546' }}>
      <Container className="py-5 h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col lg="9" xl="7">

            <Card className="hvr-float-shadow with-shine">
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <Card.Img src={photo}                    
                  alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                  <Button variant="outline-dark" style={{ height: '36px', overflow: 'visible' }}>
                    Editar Perfil
                  </Button>
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <Card.Title as="h5">Jose Andres Mamani Mollericona</Card.Title>
                  <Card.Text>CI: 9924436</Card.Text>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <Card.Text className="mb-1 h5">253</Card.Text>
                    <Card.Text className="small text-muted mb-0">Fotos</Card.Text>
                  </div>
                  <div className="px-3">
                    <Card.Text className="mb-1 h5">1026</Card.Text>
                    <Card.Text className="small text-muted mb-0">Seguidores</Card.Text>
                  </div>
                  <div>
                    <Card.Text className="mb-1 h5">478</Card.Text>
                    <Card.Text className="small text-muted mb-0">Siguiendo</Card.Text>
                  </div>
                </div>
              </div>
              <Card.Body className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">Acerca</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <Card.Text className="font-italic mb-1">Web Developer</Card.Text>
                    <Card.Text className="font-italic mb-1">Vive en Bolivia</Card.Text>
                    <Card.Text className="font-italic mb-0">Me gusta la comida picante</Card.Text>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <Card.Text className="lead fw-normal mb-0">Algunas Fotos</Card.Text>
                  <Card.Text className="mb-0"><a href="#!" className="text-muted">Mostrar mas...</a></Card.Text>
                </div>
                <Row>
  <Col className="mb-2">
    <Card.Img
      src="https://www.correo.ca/wp-content/uploads/2023/08/2400-carne-y-hongos-que-cae-sobre-picante-parilla-parrilla-hongos-pollo.webp"
      alt="image 1"
      className="w-100 rounded-3"
      style={{ width: '300px', height: '200px' }}
    />
  </Col>
  <Col className="mb-2">
    <Card.Img
      src="https://talently.tech/blog/wp-content/uploads/2021/03/marca-personal-para-ingenieros-de-software-1024x768.jpg"
      alt="image 1"
      className="w-100 rounded-3"
      style={{ width: '300px', height: '200px' }}
    />
  </Col>
</Row>
<Row className="g-2">
  <Col className="mb-2">
    <Card.Img
      src="https://convenioandresbello.org/wp-content/uploads/2020/07/noticia49_bolivia_01.jpg"
      alt="image 1"
      className="w-100 rounded-3"
      style={{ width: '300px', height: '200px' }}
    />
  </Col>
  <Col className="mb-2">
    <Card.Img
      src="https://www.comunicare.es/wp-content/uploads/2021/12/diferencia-entre-diseno-web-y-programacion-web.jpg"
      alt="image 1"
      className="w-100 rounded-3"
      style={{ width: '300px', height: '200px' }}
    />
  </Col>
</Row>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    );
};


export default Perfil;