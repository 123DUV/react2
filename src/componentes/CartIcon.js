import React, { useContext } from 'react';
import { dataContext } from "../componentes/context/DataContxt";
import { FaShoppingCart } from 'react-icons/fa'; // Suponiendo que estás usando react-icons
import './CartIcon.css'

export default function CartIcon() {
  const { LibroDeCarrito } = useContext(dataContext);

  // Calcular la cantidad total de artículos en el carrito
  const totalItems = LibroDeCarrito.reduce((total, item) => total + item.cantidad, 0);

  return (
    <div className="cart-icon">
      <FaShoppingCart />
      {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
    </div>
  );
}
