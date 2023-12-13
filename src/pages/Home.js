// components/Home.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import back1 from '../assets/img/back1.jpg'
import back2 from '../assets/img/back2.jpg'
import back3 from '../assets/img/back3.jpg'
import back4 from '../assets/img/back4.jpg'
import back5 from '../assets/img/back5.jpg'


const Home = () => {
  return (
        <div>
          <Carousel data-bs-theme="white">
          <Carousel.Item>
          <img
            className="d-block w-100"
            src={back1}
            alt="First slide"
            width="500" height="850"
          />
          <Carousel.Caption>
          <div className="portada">
      <h1 className="titulo">Bienvenido al Sabor Tradicional y Extranjero</h1>
      <p className="descripcion">Descubre todo lo que ofrecemos y empieza tu experiencia con nosotros.</p>
    </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={back2}
            alt="First slide"
            width="500" height="870"
          />
          <Carousel.Caption>
            <h5 className="titulo">"Te esperamos para disfrutar de momentos increíbles que te dejarán con recuerdos para toda la vida."</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={back3}
            alt="First slide"
            width="500" height="870"
          />
          <Carousel.Caption>
            <h5 className="titulo">"No te pierdas nuestra oferta exclusiva, ¡una oportunidad única que no puedes dejar pasar!"</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={back4}
            alt="First slide"
            width="500" height="870"
          />
          <Carousel.Caption>
            <h5 className="titulo">"No hay mejor manera de celebrar que junto a amigos y seres queridos. ¡Te invitamos a ser parte de este momento especial!"</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={back5}
            alt="First slide"
            width="500" height="870"
          />
          <Carousel.Caption>
            <h5 className="titulo">"Ven y descubre las sorpresas que hemos preparado para ti. ¡Te garantizamos una experiencia que superará tus expectativas!"</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

        </div>
      
    
  );
};

export default Home;
