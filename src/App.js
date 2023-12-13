
import './App.css';
// App.js
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from '../src/Components/Header';
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
    <HashRouter>
      {/* Muestra el componente Header en la parte superior de la aplicación */}
      <Header />

      {/* Muestra el componente Section, podrías personalizarlo según tus necesidades */}
      
      
      {/* Definición de rutas */}
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/home" Component={Home} />
        <Route path="/menupage" Component={MenuPage} />
        <Route path="/promociones" Component={Promociones} />
        <Route path="/extranjeros" Component={Extranjeros} />
        <Route path="/tradicionales" Component={Tradicionales} />
        <Route path="/videos" Component={Videos} />
        <Route path="/registro" Component={Registro} />
        <Route path="/pedidos" Component={Pedidos} />
        <Route path="/perfil" Component={Perfil} />
        <Route path="/contactos" Component={Contactos} />
        {/* Agrega rutas para otras páginas */}
      </Routes>

      {/* Muestra el componente Footer en la parte inferior de la aplicación */}
      <Footer />
    </HashRouter>
  );
}

export default App;

