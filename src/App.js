
import './App.css';
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/Components/Header';
import Section from '../src/Components/Section';
import Footer from '../src/Components/Footer';
import Home from '../src/pages/Home'; // crea un archivo Home.js para la página de inicio
import MenuPage from '../src/pages/MenuPage'; // crea un archivo MenuPage.js para la página del menú
// Importa otros componentes y páginas según sea necesario
import Promociones from '../src/pages/Promociones';
import Extranjeros from '../src/pages/Extranjeros';
import Tradicionales from '../src/pages/Tradicionales';
import Videos from '../src/pages/Videos';
import Registro from '../src/pages/Registro';
import Pedidos from '../src/pages/Pedidos';
import Perfil from '../src/pages/Perfil';
import Contactos from '../src/pages/Contactos';


function App() {
  return (
    <Router>
      {/* Muestra el componente Header en la parte superior de la aplicación */}
      <Header />

      {/* Muestra el componente Section, podrías personalizarlo según tus necesidades */}
      <Section />
      
      {/* Definición de rutas */}
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menupage" element={<MenuPage />} />
        <Route path="/promociones" element={<Promociones/>}/>
        <Route path="/extranjeros" element={<Extranjeros/>}/>
        <Route path="/tradicionales" element={<Tradicionales/>}/>
        <Route path="/videos" element={<Videos/>}/>
        <Route path="/registro" element={<Registro/>}/>
        <Route path="/pedidos" element={<Pedidos/>}/>
        <Route path="/perfil" element={<Perfil/>}/>
        <Route path="/contactos" element={<Contactos/>}/>
        {/* Agrega rutas para otras páginas */}
      </Routes>

      {/* Muestra el componente Footer en la parte inferior de la aplicación */}
      <Footer />
    </Router>
  );
}

export default App;

