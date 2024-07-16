import React from 'react'
import imagen from '../carritoVacio.jpeg'


export default function CarritoVacio() {
  return (
    <div className="container-fluid  mt-100">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">              
            </div>
            <div className="card-body cart">
              <div className="col-sm-7 mx-auto empty-cart-cls text-center">
                <img src={imagen} alt='carritoVacio' className="img-fluid mb-4 mr-3"/>
                <h3><strong>Your Cart is Empty</strong></h3>
                <h4>Add something to make me happy 😃</h4>
                <a href="/" className="btn btn-primary cart-btn-transform m-3" data-abc="true">continue shopping</a>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}