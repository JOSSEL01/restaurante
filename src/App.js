
import './App.css';
// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';
import Home from '../src/pages/Home'; // crea un archivo Home.js para la página de inicio
import MenuPage from '../src/pages/MenuPage'; // crea un archivo MenuPage.js para la página del menú
// Importa otros elementes y páginas según sea necesario
import Promociones from '../src/pages/Promociones';
import Extranjeros from '../src/pages/Extranjeros';
import Tradicionales from '../src/pages/Tradicionales';
import Videos from '../src/pages/Videos';
import Registro from '../src/pages/Registro';
import Pedidos from '../src/pages/Pedidos';
import Perfil from '../src/pages/Perfil';
import Contactos from '../src/pages/Contactos';
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
      <BrowserRouter>
     
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/menupage" element={<MenuPage/>} />
        <Route path="/promociones" element={<Promociones/>} />
        <Route path="/extranjeros" element={<Extranjeros/>} />
        <Route path="/tradicionales" element={<Tradicionales/>} />
        <Route path="/videos" element={<Videos/>} />
        <Route path="/registro" element={<Registro/>} />
        <Route path="/pedidos" element={<Pedidos/>} />
        <Route path="/perfil" element={<Perfil/>} />
        <Route path="/contactos" element={<Contactos/>} />
        {/* Agrega rutas para otras páginas */}
      </Routes>

      {/* Muestra el elemente Footer en la parte inferior de la aplicación */}
      <Footer />
    </BrowserRouter>
   
  );
}

export default App;

