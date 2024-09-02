import React, { useState } from 'react';
import './MagicMenu.css'; // Importa el CSS aquí
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';
import { FaShoppingCart } from 'react-icons/fa';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom'

const MagicMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  function whatsapp() {
    const telefono = '3123123122'
    const mensaje = 'Hola quiero mas info'
    const url = `http://api.whatsapp.com/send?phone=${telefono}&texto=${encodeURIComponent(mensaje)}`
    window.open(url, "_blank")
}

  return (
    <div className="navigation">
      <ul>
        <li 
          className={`list ${activeIndex === 0 ? 'active' : ''}`}
          onClick={() => handleClick(0)}
        >
          <a href="#">
            <span className="icon">
              <HomeIcon/>
            </span>
            
            <span className="text">Inicio</span>
            <span className="circle"></span>
          </a>
        </li>
        <li 
          className={`list ${activeIndex === 1 ? 'active' : ''}`}
          onClick={() => handleClick(1)}
        >
          <a href="https://www.youtube.com/@AsianHalfSquat">
            <span className="icon">
              <ArticleIcon/>
            </span>
            <span className="text">Profile</span>
            <span className="circle"></span>
          </a>
        </li>
        <li 
          className={`list ${activeIndex === 2 ? 'active' : ''}`}
          onClick={() => handleClick(2)}
        >
          <Link to='/registro'>
          <a href="">
            <span className="icon">
              <PersonAddIcon/>
            </span>
            <span className="text">Message</span>
            <span className="circle"></span>
          </a>
          </Link>
        </li>
        <li 
          className={`list ${activeIndex === 3 ? 'active' : ''}`}
          onClick={() => handleClick(3)}
        >
          <Link to='/login'>
          <a href="#">
            <span className="icon">
              <LoginIcon/>
            </span>
            <span className="text">Login</span>
            <span className="circle"></span>
          </a>
          </Link>
        </li>
        
        <div
          className="indicator"
          style={{ transform: `translateX(${activeIndex * 63}px)` }} // Ajusta el desplazamiento según tu diseño
        ></div>
      </ul>
    </div>
  );
};

export default MagicMenu;
