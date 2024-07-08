import React, { useContext } from 'react'
import {dataContext} from "../context/DataContxt"

export default function Cards(props) {
 
  const {setLibroDeCarrito} = useContext(dataContext)
  function addToCart(){
    setLibroDeCarrito((currentLibros)=>{
      console.log(currentLibros)
      const isItemFound = currentLibros.find((items)=>items.id==props.items.id);
      console.log(isItemFound);
      if(isItemFound){
        return currentLibros.map((items)=>{
          if(items.id===props.items.id){
            return {...items,cantidad: Number(items.cantidad)+1, precioCarrito: items.precioCarrito+items.precio}
          }else{
            return items;
          }
        })
      }else{
        return [...currentLibros,props.items];
      }
    })
  }
  return (
    <div className='card2'>
        <img src={props.items.image} alt='logo' />
        <div>
            <h5>{props.items.title}</h5>
            <span className='plataforma'>Plataforma <br></br>{props.items.plataforma} <br></br>Precio: {props.items.precio}</span>
            <p>{props.items.descripcion}</p>
            <button
            type='button'
            class="btn btn-primary"
            onClick={addToCart}>Agregar</button>

            <button type="button" class="btn btn-outline-primary">Ver Mas</button>
        </div>
      
    </div>
  )
}
