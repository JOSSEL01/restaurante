import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import platoe1 from '../assets/img/platoe1.jpg';
import platoe2 from '../assets/img/platoe2.jpg';
import platoe3 from '../assets/img/platoe3.jpg';
import platoe5 from '../assets/img/platoe5.jpg';
import platoe6 from '../assets/img/platoe6.jpg';
import platoe from '../assets/img/platoe.jpg';
 // Asegúrate de que la imagen exista en tu proyecto

const Extranjeros = () => {
  const [currentGroup, setCurrentGroup] = useState(1);
  const [hoveredImagesTop, setHoveredImagesTop] = useState(Array(3).fill(false));
  const [hoveredImagesBottom, setHoveredImagesBottom] = useState(Array(3).fill(false));
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const titles = ["Pasta", "Bandeja Paisa", "Arepas", "Churrasco", "Parrilla de Cangrejo", "Brocheta de Lomo", "Título 7"];

  const groups = 2; // Número total de grupos
  const imagesPerPage = 6;

  const imageGroups = [
    [platoe1, platoe2, platoe3, platoe5, platoe6, platoe], // Grupo 1 (Primera hoja)
     // Grupo 2 (Segunda hoja)
    // Puedes agregar más grupos según sea necesario
  ];

  const handleGroupChange = (group) => {
    setCurrentGroup(group);
  };

  const openModal = (image) => {
    setModalImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const renderImagesAndTitles = () => (
    <Row>
      {currentImages.map((image, index) => (
        <Col
        key={index}
        xs={4}
        md={4}
        style={{ marginBottom: '15px' }}
        onMouseEnter={() => {
          const top = currentGroup === 1;
          setHoveredImagesTop((prev) => [...prev.slice(0, index), top, ...prev.slice(index + 1)]);
          setHoveredImagesBottom((prev) => [...prev.slice(0, index), !top, ...prev.slice(index + 1)]);
        }}
        onMouseLeave={() => {
          setHoveredImagesTop((prev) => [...prev.slice(0, index), false, ...prev.slice(index + 1)]);
          setHoveredImagesBottom((prev) => [...prev.slice(0, index), false, ...prev.slice(index + 1)]);
        }}
        onClick={() => openModal(image)}
      >
        <div>
          <Image
            src={image}
            rounded
            style={{
              maxWidth: '100%',
              height: 'auto',
              transition: 'transform 0.2s ease-in-out',
              transform: hoveredImagesTop[index] ? 'scale(1.1)' : 'scale(1)',
            }}
          />
          <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '16px', fontWeight: 'bold', color: 'white' }}>
            {/* Agrega la propiedad color: 'white' */}
            {titles[currentGroup * 3 - 3 + index]}
          </div>
        </div>
      </Col>
      ))}
    </Row>
  );

  const indexOfLastImage = currentGroup * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = imageGroups[currentGroup - 1].slice(indexOfFirstImage, indexOfLastImage);
  const isLastRow = currentGroup === groups;

  return (
    <div className="promociones-container">
      <h1 style={{ textAlign: 'center', marginTop: '50px', color: 'white', animation: 'fadeInUp 1s ease-in-out' }}>Platos Tradicionales</h1><br />

      <Container>
        {renderImagesAndTitles()}
        {isLastRow && <div style={{ marginBottom: '30px' }}></div>} {/* Espacio vertical */}
      </Container>

      <Pagination>
        <Pagination.Prev
          onClick={() => handleGroupChange(currentGroup - 1)}
          disabled={currentGroup === 1}
        />
        {[...Array(groups).keys()].map((group) => (
          <Pagination.Item
            key={group}
            active={group + 1 === currentGroup}
            onClick={() => handleGroupChange(group + 1)}
          >
            {group + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => handleGroupChange(currentGroup + 1)}
          disabled={currentGroup === groups}
        />
      </Pagination>

      <Modal show={showModal} onHide={closeModal} centered size="xl">
        <Modal.Body>
          <Image src={modalImage} rounded fluid />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Extranjeros;
