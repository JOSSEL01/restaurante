// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.svg'
import facebook from '../assets/img/facebook.svg'
import instagram from '../assets/img/instagram.svg'
import whatsapp from '../assets/img/whatsapp.svg'
import telegram from '../assets/img/telegram.svg'
import youtube from '../assets/img/youtube.svg'
import twitterx from '../assets/img/twitterx.svg'
import tiktok from '../assets/img/tiktok.svg'

const Footer = () => {
  return (
    <footer className='text-white py-4 bg-dark'>
  <div className='container'>
    <div className='row'>
      <div className='col-12 col-md-3 text-center'>
        <Link to='/'>
          <img src={logo} className='mx-auto my-2' height='250' alt='Logo' />
        </Link>
      </div>
      <div className='col-12 col-md-3'>
        <ul className='list-unstyled'>
          <li className='text-center'>
            <h4>HORARIOS DE ATENCIÓN</h4>
            <h5>Lunes a Viernes</h5>
            <h6>11:30 - 14:30</h6>
            <h6>18:00 - 21:30</h6>
            <br />
            <h5>Sabado</h5>
            <h6>18:00 - 21:30</h6>
          </li>
        </ul>
      </div>
      <div className='col-12 col-md-3'>
        <ul className='list-unstyled'>
          <li className='text-center'>
          <h5>
  "Embárcate en un viaje gastronómico excepcional en nuestro restaurante, donde cada plato es una obra maestra de sabores exquisitos. Descubre el deleite de una experiencia culinaria inigualable y déjate llevar por la magia de los aromas y texturas que te esperan. ¡Bienvenido a un festín para tus sentidos en el corazón de la gastronomía sublime!"
</h5>

          </li>
        </ul>
      </div>
      
      <div className='col-12 col-md-3'>
      <ul className='list-unstyled d-flex flex-column align-items-start'>
        <li className='font-weight-bold mb-2 text-white'><h4>Contactanos:</h4></li>
        <li className='social-icon' style={{ marginBottom: '20px' }}>
          <a href="https://www.facebook.com/joseandres.mamanimollericona/" className="text-white mr-3">
            <img src={facebook} alt="facebook" className="icon" style={{ width: '30px', height: '30px', marginRight: '10px'}} />
          </a>

          <a href="https://www.instagram.com/josemanmol/" className="text-white mr-3">
            <img src={instagram} alt="instagram" className="icon" style={{ width: '30px', height: '30px', marginRight: '10px'}} />
          </a>

          <a href="https://wa.me/78911358?text=Bienvenido/a%20a%20Sabor-Fusion!%20Descubre%20una%20experiencia%20culinaria%20única%20en%20casa.%20Llama%20ahora%20y%20disfruta%20de%20sabores%20extraordinarios.%20¡Haz%20tu%20pedido%20y%20déjate%20sorprender!%20#HazTuPedido%20#DeliciasEnCasa%20#SaborFusion" className="text-white mr-3">
            <img src={whatsapp} alt="whatsapp" className="icon" style={{ width: '30px', height: '30px', marginRight: '10px'}} />
          </a>
          <a href="https://t.me/JOSSEL_s" className="text-white mr-3">
            <img src={telegram} alt="telegram" className="icon" style={{ width: '30px', height: '30px', marginRight: '10px'}} />
          </a>
          <a href="https://www.youtube.com/@joseandresmamanimollericon4468" className="text-white mr-3">
            <img src={youtube} alt="youtube" className="icon" style={{ width: '30px', height: '30px', marginRight: '10px'}} />
          </a>
          <a href="https://twitter.com/jamm030197" className="text-white mr-3">
            <img src={twitterx} alt="twitterx" className="icon" style={{ width: '30px', height: '30px', marginRight: '10px'}} />
          </a>
          <a href="https://www.tiktok.com/@jossel.0103" className="text-white">
            <img src={tiktok} alt="tiktok" className="icon" style={{ width: '30px', height: '30px', marginRight: '10px'}} />
          </a>
        </li>
      </ul>
    </div>
  



      <div className='col-12'>
        <p className='text-center mb-0 mt-2'>© 2023 Sabor-Fusion. Todos los derechos reservados.</p>
      </div>
    </div>
  </div>
</footer>



  );
}

export default Footer;
