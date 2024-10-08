import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import Swal from 'sweetalert2';
import colombiaData from './colombia';
import ImagenPerfilError from './body/error.png';

export default function Registro() {
    let URL = process.env.REACT_APP_ENVIRONMENT || 'http://localhost:3001';
    console.log('Environment URL:', URL);
    console.log('Process Env:', process.env);

    const [identificacionError, setIdentificacionError] = useState(false);
    const [nomError, setNomError] = useState(false);
    const [apellidoError, setApellidoError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [emailErrorVacio, setErrorEmailVacio] = useState(false);
    const [direccionError, setDireccionError] = useState(false);
    const [telefonoError, setTelefonoError] = useState(false);
    const [fechaNacimientoError, setFechaNacimientoError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrorRepeat, setPasswordErrorRepeat] = useState(false);
    const [passComparacion, setPassComparacion] = useState(false);
    const [departamento, setDepartamento] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [ciudades, setCiudades] = useState([]);
    const [vistaPrevia, setVistaPrevia] = useState(null);
    const [file, setFile] = useState(null);
    const[imagenPerfil, setImagenPerfil] = useState(null);
    const form = useRef();

    useEffect(() => {
        const departamentoSeleccionado = colombiaData.find(item => item.departamento === departamento);
        if (departamentoSeleccionado) {
            setCiudades(departamentoSeleccionado.ciudades);
        } else {
            setCiudades([]);
        }
    }, [departamento]);

    function idError() {
        setIdentificacionError(false);
    }

    function nombreError() {
        setNomError(false);
    }

    function apelliError() {
        setApellidoError(false);
    }

    function errorEmail() {
        setEmailError(false);
        setErrorEmailVacio(false);
    }

    function dirError() {
        setDireccionError(false);
    }

    function telError() {
        setTelefonoError(false);
    }

    function fechaNacimientoErrorFuncion() {
        setFechaNacimientoError(false);
    }

    function passError() {
        setPasswordError(false);
    }

    function passRepeat() {
        setPassComparacion(false);
        setPasswordErrorRepeat(false);
    }

    const [values, setValues] = useState({
        identificacion: "",
        nombres: "",
        apellidos: "",
        email: "",
        direccion: "",
        departamento: "",
        ciudad: "",
        telefono: "",
        fechaNacimiento: "",
        password: "",
        passRepeat: ""
    });
    console.log(values);

    const handleChange = (e) => {
        if (e.target.name === 'foto') {
            const file = e.target.files ? e.target.files[0] : null
            setValues({ ...values, [e.target.name]: file });
            setFile(file)
            
        } else {
            setValues({ ...values, [e.target.name]: e.target.value });
        }

        // const { name, value } = e.target;
        // const newValues = {
        //     ...values,
        //     departamento: departamento,
        //     ciudad: ciudad,
        //     [name]: value,
        // };
        // setValues(newValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let validPassword = /^(?=.*[A-Z]).{8,}$/;
        let validEmail = /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(\.\w{2,10})+$/;

        if (values.identificacion.length < 5 || values.identificacion.length > 10 || values.identificacion.length === 0) {
            setIdentificacionError(true);
            return;
        }
        if (values.nombres.length < 3 || values.nombres.length === 0) {
            setNomError(true);
            return;
        }
        if (values.apellidos.length < 3 || values.apellidos.length === 0) {
            setApellidoError(true);
            return;
        }
        if (values.email.length === 0) {
            setErrorEmailVacio(true);
            return;
        }
        if (!validEmail.test(values.email)) {
            setEmailError(true);
            return;
        }
        if (values.direccion.length < 15) {
            setDireccionError(true);
            return;
        }
        if (values.telefono.length < 10 || values.telefono.length > 10) {
            setTelefonoError(true);
            return;
        }
        if (values.fechaNacimiento === "") {
            setFechaNacimientoError(true);
            return;
        }
        if (!validPassword.test(values.password)) {
            setPasswordError(true);
            return;
        }
        if (values.passRepeat.length === 0) {
            setPasswordErrorRepeat(true);
            return;
        }
        if (values.password !== values.passRepeat) {
            setPassComparacion(true);
            return;
        }
        if (!file) {
            setImagenPerfil(true); // Muestra el error si no hay imagen seleccionada
            return;
        }

        console.log(`${URL}/registro-usuario`);
        console.log("hola")


        const formData = new FormData();
        console.log(formData);
        for (const [key, value] of Object.entries(values)) {
            formData.append(key, value);
        }

        fetch(`${URL}/registro-usuario`, {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (response.status === 200) {
                    Swal.fire({
                        title: "Usuario creado con éxito",
                        icon: "success"
                    });
                    form.current.reset();
                    window.location.hash = '/login';
                }
                if (response.status === 400) {
                    Swal.fire({
                        title: "No fue posible crear el usuario porque ya existe la cedula ingresada: " + values.identificacion,
                        icon: "warning"
                    });
                }
            })
            .catch((error) => {
                Swal.fire({
                    title: "No fue posible finalizar el proceso de registro por un error interno del servidor ",
                    icon: "error"
                });
            });
    };

    return (
        <div className='container'>
            <Header />
            <form onSubmit={handleSubmit} ref={form}>
                <section className="vh-100 bg-image">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="card">
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Registro</h2>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="departamento">Departamento</label>
                                        <select id="departamento" className="form-control" name='departamento' value={departamento} onChange={(e) => setDepartamento(e.target.value)}>
                                            <option value="">Selecciona un departamento</option>
                                            {colombiaData.map((departamento, index) => (
                                                <option key={index} value={departamento.departamento}>{departamento.departamento}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="ciudad">Ciudad</label>
                                        <select id="ciudad" className="form-control" name='ciudad' value={ciudad} onChange={(e) => setCiudad(e.target.value)}>
                                            <option value="">Selecciona una ciudad</option>
                                            {ciudades.map((ciudad, index) => (
                                                <option key={index} value={ciudad}>{ciudad}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="form-outline mb-4">

                                        <label className="form-label" htmlFor="form3Example1cg" >Identificación</label>
                                        <input type="number" id="form3Example0cg" className="form-control" name='identificacion' placeholder='Deber estar entre 5 y 10 dígitos' onChange={handleChange} onClick={idError} />
                                        {identificacionError ? <p style={{ color: 'red' }}>La identificación debe estar entre 5 y diez números</p> : ""}


                                    </div>

                                    <div className="form-outline mb-4">

                                        <label className="form-label" htmlFor="form3Example1cg" >Nombre</label>
                                        <input type="text" id="form3Example1cg" className="form-control" name='nombres' placeholder='Debe ser de mínimo tres caracteres' onChange={handleChange} onClick={nombreError} />
                                        {nomError ? <p style={{ color: 'red' }}>El nombre debe contener mínimo 3 caracteres</p> : ""}

                                    </div>

                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form3Example1cg">Apellido</label>
                                        <input type="text" id="form3Example2cg" className="form-control form-control-lg" name='apellidos' placeholder='Debe ser de mínimo tres caracteres' onChange={handleChange} onClick={apelliError} />
                                        {apellidoError ? <p style={{ color: 'red' }}>El apellido debe contener mínimo 3 caracteres</p> : ""}

                                    </div>

                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form3Example3cg">Email</label>
                                        <input type="text" id="form3Example3cg" className="form-control form-control-lg" name='email' placeholder='Debe ser un formato válido. Ejemplo: alguien@gmail.com' onChange={handleChange} onClick={errorEmail} />
                                        {emailError ? <p>El email debe tener la estructura de una dirección de correo electrónico. Verbigracia: alguien@gmail.com</p> : ""}
                                        {emailErrorVacio ? <p style={{ color: 'red' }}>Debe introducir una dirección de correo electrónico.</p> : ""}
                                    </div>

                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form3Example3cg">Dirección</label>
                                        <input type="text" id="form3Example4cg" className="form-control form-control-lg" name='direccion' placeholder='Debe ser de mínimo quince caracteres' onChange={handleChange} onClick={dirError} />
                                        {direccionError ? <p style={{ color: 'red' }}>La dirección debe contener mínimo 15 caracteres</p> : ""}

                                    </div>

                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form3Example3cg">Teléfono</label>
                                        <input type="number" id="form3Example5cg" className="form-control form-control-lg" name='telefono' placeholder='Debe ser de diez números' onChange={handleChange} onClick={telError} />
                                        {telefonoError ? <p style={{ color: 'red' }}>El teléfono debe ser de 10 números</p> : ""}
                                    </div>

                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form3Example3cg">Fecha de nacimiento</label>
                                        <input type="date" id="form3Example6cg" className="form-control form-control-lg" name='fechaNacimiento' placeholder='Debe ser de diez números' onChange={handleChange} onClick={fechaNacimientoErrorFuncion} />
                                        {fechaNacimientoError ? <p style={{ color: 'red' }}>Debe introducir una fecha de nacimiento</p> : ""}
                                    </div>



                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form3Example4cg">Contraseña</label>
                                        <input type="password" id="form3Example7cg" className="form-control form-control-lg" name='password' onChange={handleChange} onClick={passError} />
                                        {passwordError ? <p style={{ color: 'red' }}>La contraseña no cumple con los requisitos mínimos solicitados(Mínimo 8 caracteres de longitud. Almenos una letra mayúscula. Almenos una letra minúscula. Almenos un número. Almenos un caracter especial).</p> : ""}
                                    </div>

                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form3Example4cdg">Repetir contraseña</label>
                                        <input type="password" id="form3Example8cdg" className="form-control form-control-lg" name='passRepeat' onChange={handleChange} onClick={passRepeat} />
                                        {passComparacion ? <p style={{ color: 'red' }}>Las contraseñas ingresadas no coinciden</p> : ""}
                                        {passwordErrorRepeat ? <p style={{ color: 'red' }}>Este campo no puede quedar vacío.</p> : ""}

                                    </div>
                                    <div>
                                        <input type='file' name='foto' accept='.jpg,.jpeg,.png,.gif' formEncType='multipart/form-data' onChange={handleChange}  />
                                        {imagenPerfil?(<p>Debe seleccionar un imagen</p>):("")}
                                    </div>


                                    <div className="d-flex justify-content-center">
                                        <button type='submit' className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                    </div>
                                    <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to='/login' className="fw-bold text-body"><u>Login here</u></Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
            <Footer />
        </div>
    );
}