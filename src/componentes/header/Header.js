
import './header.css'
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import ContactsIcon from '@mui/icons-material/Contacts';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link } from 'react-router-dom'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Cookies from 'universal-cookie'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MagicMenu from '../magicMenu/MagicMenu.js'
import { dataContext } from '../context/DataContxt'
import CartIcon from '../CartIcon';

export default function Header() {
    function whatsapp() {
        const telefono = '3123123122'
        const mensaje = 'Hola quiero mas info'
        const url = `http://api.whatsapp.com/send?phone=${telefono}&texto=${encodeURIComponent(mensaje)}`
        window.open(url, "_blank")
    }
  

    const { LibroDeCarrito } = useContext(dataContext)

    const totalItems = LibroDeCarrito.reduce((total, item) => total + item.cantidad, 0)

    return (
        <div className='contenedor'>
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container-fluid">
                    <img src='mc.gif' className='logo' alt='' />
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <MagicMenu/>
                        {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">



                            <li className="nav-item" >
                                <HomeIcon />
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item px-3">
                                <ArticleIcon />
                                <a className="nav-link " href="https://www.youtube.com/@AsianHalfSquat">Tutoriales</a>
                            </li>


                            <Link to='/registro'>
                                <li className="nav-item">
                                    <PersonAddIcon />
                                    <a className="nav-link disabled" aria-disabled="true">Registrarse</a>
                                </li>
                            </Link>
                            <Link to='/login'>
                                <li className="nav-item">
                                    <LoginIcon />
                                    <a className="nav-link disabled" aria-disabled="true">Iniciar Sesion</a>
                                </li>
                            </Link>

                            <li className="nav-item">
                                <WhatsAppIcon />
                                <a className="nav-link " aria-disabled="true" onClick={whatsapp} >whatsapp</a>
                            </li>


                        </ul> */}
                       
                        





                        <div className='cssCarrito'>
                            <Link to='/carrito'>
                                <CartIcon />
                            </Link>
                        </div>
                        


                    </div>
                </div>
            </nav>

        </div>
    )
}
