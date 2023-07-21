import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";

import MyContext from './my_context';

import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Carousel from './components/Carousel';

import Home from './views/Home';
import NotFound from "./views/NotFound.jsx";
import Registro from "./views/Registro.jsx";
import Login from "./views/Login.jsx";



function App() {
  const endpoint = "/database.json";
  const [artworks, setArtworks] = useState([]);
  const estadoCompartido = {artworks, setArtworks};

  useEffect(() => {
    dataArtworks();
  }, [])

  const dataArtworks = async () => {
    const responseData = await fetch(endpoint)
    const dataArtworks = await responseData.json();
    setArtworks(dataArtworks.artworks);
  }

  return (
    <MyContext.Provider value={estadoCompartido}>
      <BrowserRouter>
        <Navbar></Navbar>
        <Carousel></Carousel>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer></Footer>                  
      </BrowserRouter>  
    </MyContext.Provider>      
  );
}

export default App;
