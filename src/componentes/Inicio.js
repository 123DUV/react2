
import React from 'react'

import Footer from './footer/Footer';
import CardList from './body/CardList';
import Header from './header/Header';
import Carrusel from './carrusel/Carrusel';
import CartIcon from '../componentes/CartIcon';
import BarraLateral from './BarraRedesSociales/BarraLateral';
import MagicMenu from './magicMenu/MagicMenu';
function Inicio() {
  return (
   <div>
      <Header/> 
      <Carrusel/>
      <CardList/>
      <BarraLateral/>
      <Footer/>
      

   </div>
     
  );
}

export default Inicio
