import React, { useState } from 'react';
import { Col, Container, Modal, Row } from 'react-bootstrap';
import ModalImage from 'react-modal-image';
import pro1 from '../assets/img/pro1.jpg';
import pro2 from '../assets/img/pro2.jpg';
import pro3 from '../assets/img/pro3.jpg';



const Promociones = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const images = [pro1, pro2, pro3];

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="promociones-container">
      <h1 className="mb-4 " style={{ textAlign: 'center', marginTop: '50px', color: 'white', animation: 'fadeInUp 1s ease-in-out' }}>
  ¡Descubre las irresistibles promociones del día que preparamos especialmente para ti! Deléitate con sabores extraordinarios a precios increíbles. ¡Una experiencia culinaria única te espera!
</h1>

<Container>
  <Row xs={1} md={2} lg={3} className="g-4">
    {images.map((image, index) => (
      <Col key={index}>
        <div style={{ margin: '10px', borderRadius: '10px', overflow: 'hidden' }}>
          <ModalImage
            small={image}
            large={image}
            alt={`Promoción ${index + 1}`}
            className="zoom-in" // Aplica la clase de animación aquí si es necesario
            style={{ width: '100%', height: 'auto', borderRadius: '10px' }} // Agrega bordes redondeados
          />
        </div>
      </Col>
    ))}
  </Row>
  <Modal show={showModal} onHide={closeModal} size="xl">
        <Modal.Body>
          <img
            src={selectedImage}
            alt="Promoción"
            style={{ width: '100%', height: 'auto' }}
          />
        </Modal.Body>
      </Modal>
</Container>

      
    </div>
  );
};

export default Promociones;
