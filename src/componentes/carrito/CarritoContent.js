import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CarritoElement from "./CarritoElement";
import Swal from "sweetalert2"
import CarritoVacio from "./CarritoVacio";
import { dataContext } from "../context/DataContxt";

export default function CarritoContents() {
    const { LibroDeCarrito, setLibroDeCarrito } = useContext(dataContext)

    if (LibroDeCarrito.length === 0) {

        return <CarritoVacio />

    }

    const vaciarCarrito = () => {
        Swal.fire({
            title: "¿Esta seguro que desea vaciar el carrito",
            icon: "question",
            buttons: true,
            dangerMode: true,
            showCancelButton: true,

        })
            .then((result) => {
                if (result.isConfirmed) {
                    setLibroDeCarrito([])
                    return
                }
            })
    }
    const formatoNumero = (number) => {
        return new Intl.NumberFormat().format(number)
    }
    const precioTotalCarrito = LibroDeCarrito.reduce((a, b) => a + b.precioCarrito, 0)

    return (

        <div className="h-100">
            <div className="container h-100 py-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-10">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <div>
                                <Link to='/' >
                                    <button className="text-light btn btn-dark btn-lg p-2">Volver</button>
                                </Link>
                            </div>

                            <button type="button" class="btn btn-dark btn-lg" onClick={vaciarCarrito}>Vaciar carrito  <i class="bi bi-cart-x"></i></button>

                        </div>
                    </div>
                </div>

                <CarritoElement />

                <div className="container h-100 py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-10">
                            <div className="card rounded-3 mb-4">
                                <div className="card-body p-4">
                                    <div className="d-flex justify-content-between">
                                        <div className='col-3'><h4><span>Total a pagar : </span></h4></div>
                                        <div className='col-3'><h4> $ {formatoNumero(precioTotalCarrito)}</h4></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container h-100 py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-10">
                            <div className="row d-flex justify-content-between align-items-center">
                                <button type="button" className="btn btn-dark btn-block btn-lg ">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}
