import React, { useContext } from 'react'
import { dataContext } from '../context/DataContxt'


export default function CarritoElement() {
    const { LibroDeCarrito, setLibroDeCarrito } = useContext(dataContext)
    const eliminarLibroDelCarrito = (e) => {
        const librosFiltrados = LibroDeCarrito.filter((filtro) => filtro.id !== Number(e.currentTarget.id))
        setLibroDeCarrito(librosFiltrados)
    }

    const cantidad = () => {
        setLibroDeCarrito((actualesLibs) => {
            console.log("actuales libs: "+actualesLibs)
            return actualesLibs.map((libs) => {
                const valor = document.getElementById(libs.id)
                return { ...libs, precioCarrito: libs.precioCarrito * valor.ariaValueMax, cantidad: valor.value }
            })
        })
    }
    const formatoNumero = (number) => {
        return new Intl.NumberFormat().format(number)


    }
    return LibroDeCarrito.map((libs) => {
        return (
            <section className="h-100">
                <div className="card rounded-3 mb-4">
                    <div className="card-body p-4">
                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="col-md-2 col-lg-2 col-xl-2">
                                <img
                                    src={libs.image}
                                    className='img-fluid rounded-3' alt='imagen' />
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                                <p className="lead fw-normal mb-2">{libs.title}</p>
                                <p><span class="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey</p>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                <button data-mdb-button-init data-mdb-ripple-init class="btn btn-link px-2"
                                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                    <i className="fas fa-minus"></i>
                                </button>

                                <input id={libs.id} min="0" name="quantity" value={libs.cantidad} type="number" onChange={cantidad}
                                    className="form-control form-control-sm" readOnly/>

                                <button data-mdb-button-init data-mdb-ripple-init class="btn btn-link px-2"
                                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h5 className="mb-0">${formatoNumero(libs.precioCarrito)}</h5>
                            </div>
                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                <button className="btn btn-danger" id={libs.id} onClick={eliminarLibroDelCarrito}> <i className="bi bi-trash3-fill"></i></button>
                            </div>
                        </div>
                    </div>
                </div>


            
            </section > 
        )
})
}









