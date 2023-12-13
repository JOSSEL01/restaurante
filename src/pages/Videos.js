import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Videos = () => {
  return (
    <div className="promociones-container">
      <h1 style={{ textAlign: 'center', marginTop: '50px', color: 'white', animation: 'fadeInUp 1s ease-in-out' }}>Date un gustito, prueba algunos de estos ¡¡¡DELICIOSOS PLATOS!!!</h1><br />
      <Container fluid>
        <Row>
          <Col sm={12} md={6}>
            <iframe
              title="Video1"
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/bp0wwT_JwhQ?si=uhoetxZQZJJJ1tOc"
              frameBorder="0"
              allowFullScreen
            />
          </Col>
          <Col sm={12} md={6}>
            <iframe
              title="Video2"
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/jy7CDq6J3YY?si=_MeYIjE1ApudZEmz"
              frameBorder="0"
              allowFullScreen
            />
          </Col>
          <Col sm={12} md={6}>
            <iframe
              title="Video2"
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/1n6bq4wfoSU?si=Ouby-UfazeLXat5y"
              frameBorder="0"
              allowFullScreen
            />
          </Col>
          <Col sm={12} md={6}>
            <iframe
              title="Video2"
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/4NigVJNto6Q?si=J6VPZLIkj_72POAX"
              frameBorder="0"
              allowFullScreen
            />
          </Col>
          <Col sm={12} md={6}>
            <iframe
              title="Video2"
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/KNqAmskJ0yA?si=BwwXUiX0fQ5iLtN_"
              frameBorder="0"
              allowFullScreen
            />
          </Col>
          <Col sm={12} md={6}>
            <iframe
              title="Video2"
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/cSmSxuWFzc0?si=1HI2zn7s9s6ynnuS"
              frameBorder="0"
              allowFullScreen
            />
          </Col>
          <Col sm={12} md={6}>
            <iframe
              title="Video2"
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/lu4LEK6-iLo?si=tZWEy6GO1SjLlG4U"
              frameBorder="0"
              allowFullScreen
            />
          </Col>
          <Col sm={12} md={6}>
            <iframe
              title="Video2"
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/8oCpX7wkZqk?si=lUOZl5Yq6S-s5FXB"
              frameBorder="0"
              allowFullScreen
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Videos;
