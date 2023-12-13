// components/MenuPage.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



import Modal from 'react-bootstrap/Modal';


const mostrarPlatos = (setModalShow, setTituloModal, setContendoModal)=>{
  const menuItems = [
    { id: 1, titulo: "Pique Macho", contenido:"El Pique Macho boliviano, exquisita fusión de jugosa carne de vaca y crujientes patatas fritas, no solo deleita el paladar, sino que encapsula la rica herencia culinaria de Bolivia. Este plato emblemático es la expresión viva de la pasión gastronómica y la tradición que perdura en cada bocado.", photo: "https://cdn.bolivia.com/gastronomia/2012/12/11/pique-macho-3502.webp", name: 'Pique Macho', price: 10.99 },
    { id: 2, titulo: "Majadito", contenido:"El majadito, tesoro gastronómico boliviano con orígenes en la época virreinal, cautiva los sentidos al fusionar arroz, carne y especias en una armonía de sabores. Su legado perdura en los departamentos del Beni y Santa Cruz, donde cada bocado es una experiencia única e irresistible.", photo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnGLMkLQCzhrsOAdkXoFWK6ZwcXet_jf6yQfd4eDvApqf-NlpGKQRv9122hqAw2l1iLrD882a67S6g496nWntlWKANoGI-SPPQoEzmeT4QHo_bz1cctGc931MUXjhBDXu34HlNw4mv8yUGnQT3LWYQudeGYq0BbKdHLQixXoRgiq49atw5_gVTWc9_/s1600/majadito-boliviano.webp", name: 'Majadito', price: 12.99 },
    { id: 3, titulo: "Pollo al Horno", contenido:"El pollo al horno, venerado en todo el mundo, alcanza nuevas alturas de exquisitez con el toque distintivo de especias y ingredientes peruanos. Cada jugoso bocado es una oda a la tradición, elevando este plato popular a una experiencia culinaria única y llena de sabor.", photo: "https://cocinemosjuntos.com.co/media/mageplaza/blog/post/t/i/tips-para-preparar-pollo-al-horno-jugoso-y-perfecto_1_.jpg", name: 'Pollo al Horno', price: 8.99 },
    { id: 4, titulo: "Sajta", contenido:"La sajta de pollo, joya culinaria de la región occidental de Bolivia, despierta los sentidos con su fusión de sabores intensos y tradición arraigada. Este plato emblemático se distingue por su picante y la armonía perfecta de ingredientes autóctonos, rindiendo homenaje a la riqueza gastronómica boliviana.", photo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Sajta_de_pollo_Pace%C3%B1o.jpg", name: 'Sajta', price: 8.99 },
    { id: 5, titulo: "Fricase", contenido:"El fricase, tesoro culinario de la región andina, especialmente de La Paz, ha trascendido fronteras para convertirse en un pilar de la cultura gastronómica boliviana. Su sabor auténtico y tradicional conecta con el paladar, dejando una huella inolvidable que celebra la diversidad y riqueza de la cocina boliviana.", photo: "https://i.ytimg.com/vi/U0Dj_jm9W_A/hqdefault.jpg", name: 'Fricase', price: 12.99 },
    { id: 6, titulo: "Charkecan", contenido:"El charkecan, sublime guiso arraigado en la tradición peruana, se extiende con exquisita presencia por las mesas de Bolivia, Chile y Argentina. Esta amalgama de sabores cautiva con su autenticidad, revelando una conexión culinaria que trasciende fronteras y celebra la diversidad de la región.", photo: "https://www.cocina-boliviana.com/base/stock/Recipe/479-image/479-image_web.jpg", name: 'Charkecan', price: 8.99 },
    { id: 7, titulo: "Sopa de Mani", contenido:"La sopa de maní, venerada joya culinaria y orgullo cochabambino, trasciende lo tradicional para convertirse en un pilar de la gastronomía boliviana. Con su cremosidad única y el encanto de los sabores locales, esta sopa es un tributo a la rica herencia culinaria de Bolivia, donde cada cucharada es un viaje por la tradición y la autenticidad.", photo: "https://escociatours.com/wp-content/uploads/2023/07/5-11.jpg", name: 'Sopa de Mani', price: 8.99 },
    { id: 8, titulo: "Silpancho", contenido:"El silpancho, majestuoso plato que ostenta el título de emblemático en la cocina boliviana, cautiva con su fusión única de sabores y texturas. Esta deliciosa creación es un tributo a la rica tradición gastronómica de Bolivia, donde la combinación perfecta de carne, arroz, y huevo deleita los paladares y encanta a los amantes de la cocina auténtica.", photo: "https://azafranbolivia.com/wp-content/uploads/2022/08/platillos-bolivia-gastronomia.jpg", name: 'Silpancho', price: 8.99 }
  ];

  return menuItems.map(item => (
    <Card style={{ width: '18rem', margin: '10px' }} key={item.id}>
      <Card.Img variant="top" src={item.photo} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Button variant="primary" onClick={() => {
          setContendoModal(item.contenido)
          setTituloModal(item.titulo)
          setModalShow(true)
        }}>Informacion</Button>
      </Card.Body>
    </Card>
  ));
};

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.titulo}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <p>
          {props.contenido}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
const MenuPage = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [tituloModal, setTituloModal] = React.useState('');
  const [contenidoModal, setContendoModal] = React.useState('');
  return (
    <div className="promociones-container" >
      
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        titulo={tituloModal}
        contenido={contenidoModal}
      />
      <h1 className='name-menu' style={{ textAlign: 'center', marginTop: '50px', color: 'white', animation: 'fadeInUp 1s ease-in-out' }}>
  ¡Explora nuestro exquisito Menú del Día y déjate llevar por una sinfonía de sabores extraordinarios! Deléitate con opciones cuidadosamente seleccionadas, preparadas con pasión y a un precio irresistible. ¡Descubre una experiencia gastronómica única que te cautivará en cada bocado!
</h1>

      <Container>
        <Row>
          {mostrarPlatos(setModalShow, setTituloModal, setContendoModal)}
        </Row>
      </Container>
    </div>
  );
};

export default MenuPage;
