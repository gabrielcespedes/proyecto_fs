import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";

import MyContext from './my_context';

import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import UserViewBuyer from './views/UserViewBuyer';


import Home from './views/Home';
import Carrito from './views/Carrito';
import Artwork from './views/Artwork';
import NotFound from "./views/NotFound.jsx";
import Registro from "./views/Registro.jsx";
import Login from "./views/Login.jsx";
import Busqueda from './views/Busqueda';
/* import UserCard from './components/UserCard'; */



function App() {
  const endpoint = "/database.json";
  const endpointArtists = "/artistsDB.json";
  const [artworks, setArtworks] = useState([]);
  const [navTotal, setNavTotal] = useState(0); 
  const [artistsInfo, setArtistsInfo] = useState([]);


  useEffect(() => {
    dataArtworks();
    dataArtists();
  }, [])

  const dataArtworks = async () => {
    const responseData = await fetch(endpoint);
    const dataArtworks = await responseData.json();
    dataArtworks.artworks.map(element => element.amount = 0);
    setArtworks([...dataArtworks.artworks]);
  };

  const dataArtists = async () => {
    const responseData = await fetch(endpointArtists);
    const data = await responseData.json();
    setArtistsInfo([...data.artists]);
  };

  const updatingNavTotal = () => {
    //CALCULA EL VALOR TOTAL DEL CARRITO
    let total = 0;
        artworks.forEach((element) => {
            total += element.price * element.amount;
        });
    return total
  };
  const estadoCompartido = {artworks, setArtworks, navTotal, setNavTotal, updatingNavTotal, artistsInfo};

  return (
    
    <MyContext.Provider value={estadoCompartido}>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/carrito' element={<Carrito></Carrito>}></Route>
          <Route path='/busqueda' element={<Busqueda></Busqueda>}></Route>
          <Route path='/artwork/:id' element={<Artwork></Artwork>}></Route>
          <Route path="/Registro" element={<Registro />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profile" element={UserViewBuyer} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer></Footer>                  
      </BrowserRouter>  
    </MyContext.Provider>      
  );
}

export default App;
