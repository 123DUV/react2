import React from 'react'
import { useState, useEffect } from 'react';
import user from '../usuariosRegistrados.json'
import Cookies from 'universal-cookie';
import Body from '../body/CardList'
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import ContactsIcon from '@mui/icons-material/Contacts';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link } from 'react-router-dom'
//import './usuario.css';





function sesionIniciada() {

    const cookie = new Cookies();
    const nombre = cookie.get('nombre');
    const apellido = cookie.get('apellido');
    const email = cookie.get('email');
    
    function cerrarSesion() {
        window.location.href = '/';
    }

    return (    
        
        <div>
            <div className='contentUsuario'>
                <h3 style={{ color: 'white' }}>!!!Bienvenido!!!</h3>
                <p style={{ color: 'red' }} className='usuarioRegistrado' > <span  style={{ color: 'white' }}>nombre : </span>{nombre}</p> 
                <p style={{ color: 'red' }} className='usuarioRegistrado' ><span  style={{ color: 'white' }}>apellido : </span> {apellido} </p> 
                <p style={{ color: 'red' }} className='usuarioRegistrado' ><span  style={{ color: 'white' }}>Email : </span> {email} </p> 
               
            </div>
            <div className='contenedor'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img src='logo.jpg' className='logo' alt='logo'/>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <HomeIcon/>
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <ArticleIcon/>
                                <a className="nav-link" href="#">Tutoriales</a>
                            </li>

                            <li className="nav-item">
                                <ClearAllIcon/>
                                <a className="nav-link disabled" aria-disabled="true">Referencias</a>
                            </li>

                            <li className="nav-item">
                                <FilePresentIcon/>
                                <a className="nav-link disabled" aria-disabled="true">Recursos</a>
                            </li>

                            <li className="nav-item">
                                <ContactsIcon/>
                                <a className="nav-link disabled" aria-disabled="true">Contacto</a>
                            </li>
                            <Link to='/registro'>
                            <li className="nav-item">
                                <PersonAddIcon/>
                                <a className="nav-link disabled" aria-disabled="true">Registrarse</a>
                            </li>
                            </Link>
                            <Link to='/login'>
                            <li className="nav-item">
                                <LoginIcon/>
                                <a className="nav-link disabled" aria-disabled="true">Iniciar Sesion</a>
                            </li>
                            </Link>
                        </ul>
                        <form className="d-flex" role="search">
                                <button className="btn btn-outline-success" type="button" onClick={cerrarSesion}>Cerrar sesion</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
            <Body></Body>
        </div>
    )
}

export default sesionIniciada;