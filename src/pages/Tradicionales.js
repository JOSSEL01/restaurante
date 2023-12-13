import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import plato1 from '../assets/img/plato1.jpg';
import plato2 from '../assets/img/plato2.jpg';
import plato3 from '../assets/img/plato3.jpg';
import plato4 from '../assets/img/plato4.jpg';
import plato5 from '../assets/img/plato5.jpg';
import plato6 from '../assets/img/plato6.jpg';
import plato7 from '../assets/img/plato7.jpg';

const Tradicionales = () => {
  const [currentGroup, setCurrentGroup] = useState(1);
  const [hoveredImagesTop, setHoveredImagesTop] = useState(Array(3).fill(false));
  const [hoveredImagesBottom, setHoveredImagesBottom] = useState(Array(3).fill(false));
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [titles] = useState(["Pique Macho", "Pescado Frito", "Papas a la Huancaina", "Silpancho", "Majadito", "Salteñas", "Título 7"]);

  const groups = 2; // Número total de grupos
  const imagesPerPage = 6;

  // Lista de imágenes para cada grupo
  const imageGroups = [
    [plato1, plato2, plato3, plato4, plato5, plato6], // Grupo 1 (Primera hoja)
    [plato7], // Grupo 2 (Segunda hoja)
    // Puedes agregar más grupos según sea necesario
  ];

  // Lógica para calcular índices de imágenes en el grupo actual
  const indexOfLastImage = currentGroup * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = imageGroups[currentGroup - 1].slice(indexOfFirstImage, indexOfLastImage);

  // Cambiar de grupo
  const handleGroupChange = (group) => {
    setCurrentGroup(group);
  };

  // Abrir el modal con la imagen seleccionada
  const openModal = (image) => {
    setModalImage(image);
    setShowModal(true);
  };

  // Cerrar el modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="promociones-container">
      <h1 style={{ textAlign: 'center', marginTop: '50px', color: 'white', animation: 'fadeInUp 1s ease-in-out' }}>Platos Tradicionales</h1><br />

      <Container>
        {[...Array(2).keys()].map((row) => (
          <div key={row}>
            <Row>
              {currentImages.slice(row * 3, row * 3 + 3).map((image, index) => (
                <Col
                key={index}
                xs={4}
                md={4}
                style={{ marginBottom: '15px' }}
                onMouseEnter={() => {
                  // ...
                }}
                onMouseLeave={() => {
                  // ...
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
                      transform: (row === 0 ? hoveredImagesTop[index] : hoveredImagesBottom[index]) ? 'scale(1.1)' : 'scale(1)',
                    }}
                  />
                  <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '16px', fontWeight: 'bold', color: 'white' }}>
                    {/* Agrega la propiedad color: 'white' */}
                    {titles[index]}
                  </div>
                </div>
              </Col>
              ))}
            </Row>
            {row === 0 && <div style={{ marginBottom: '30px' }}></div>} {/* Espacio vertical */}
          </div>
        ))}
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

export default Tradicionales;
