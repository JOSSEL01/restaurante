// components/Header.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.svg';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
        <img src={logo} alt='logo' className="logo-img"></img>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <Link class="nav-link" aria-current="page" to="/promociones">Promociones</Link>
                </li>

                <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/menupage">Menu</Link>
                </li>

                <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/tradicionales">Platos Tradicionales</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/extranjeros">Platos Extranjeros</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/videos">Videos</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/registro">Registro</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/pedidos">Pedidos</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/perfil">Perfil</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/contactos">Contactos</Link>
                </li>
                
                </ul>
            </div>
        </div>
    </nav>
    
  );
}

export default Header;
