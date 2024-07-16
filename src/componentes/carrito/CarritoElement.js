import React, { useContext } from 'react';
import { dataContext } from '../context/DataContxt';

export default function CarritoElement() {
    const { LibroDeCarrito, setLibroDeCarrito } = useContext(dataContext);

    const eliminarLibroDelCarrito = (e) => {
        const librosFiltrados = LibroDeCarrito.filter((filtro) => filtro.id !== Number(e.currentTarget.id));
        setLibroDeCarrito(librosFiltrados);
    };

    const cantidad = (e, id) => {
        const valor = e.target.value;
        setLibroDeCarrito((actualesLibs) => {
            return actualesLibs.map((libro) => {
                if (libro.id === id) {
                    return { ...libro, precioCarrito: libro.precioOriginal * valor, cantidad: valor };
                }
                return libro;
            });
        });
    };

    const formatoNumero = (number) => {
        return new Intl.NumberFormat().format(number);
    };

    return LibroDeCarrito.map((libro) => {
        return (
            <section className="h-100" key={libro.id}>
                <div className="card rounded-3 mb-4">
                    <div className="card-body p-4">
                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="col-md-2 col-lg-2 col-xl-2">
                                <img
                                    src={libro.image}
                                    className='img-fluid rounded-3' alt='imagen' />
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                                <p className="lead fw-normal mb-2">{libro.title}</p>
                               
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                <button data-mdb-button-init data-mdb-ripple-init className="btn btn-link px-2"
                                     onClick={() => cantidad({ target: { value: libro.cantidad - 1 }}, libro.id)}>
                                    <i className="fas fa-minus"></i>
                                </button>

                                <input id={libro.id} min="0" name="quantity" value={libro.cantidad} type="number" onChange={(e) => cantidad(e, libro.id)}
                                    className="form-control form-control-sm" 
                                    readOnly/>

                                <button data-mdb-button-init data-mdb-ripple-init className="btn btn-link px-2"
                                    onClick={() => {
                                        const input = document.getElementById(libro.id);
                                        if (input) input.stepUp();
                                        cantidad({ target: input }, libro.id);
                                    }}>
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h5 className="mb-0">${formatoNumero(libro.precioCarrito)}</h5>
                            </div>
                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                <button className="btn btn-danger" id={libro.id} onClick={eliminarLibroDelCarrito}> <i className="bi bi-trash3-fill"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    });
}



