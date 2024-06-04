import React, { useContext } from 'react'
import {dataContxt} from "../context/DataContxt"

export default function Cards(props) {
  const {setLibrosDeCarrito} = useContext(dataContxt)
  function addToCart(){
    setLibrosDeCarrito((currentLibros)=>{
      const isItemFound = currentLibros.find((item)=>item.id===props.item.id);
      console.log(isItemFound);
      if(isItemFound){
        return currentLibros.map((item)=>{
          if(item.id===props.item.id){
            return {...item,cantidad: Number(item.cantidad)+1, precioCarrito: item.precioCarrito+item.precio}
          }else{
            return item;
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
            onClick={}

            <button type="button" class="btn btn-outline-primary">Comprar</button>
        </div>
      
    </div>
  )
}
