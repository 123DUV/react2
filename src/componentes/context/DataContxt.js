import { createContext } from "react";
import React, { useState } from 'react';


export const dataContext = createContext();
const DataProvider = ({children})=>{
    const [LibroDeCarrito, setLibroDeCarrito]=useState([])
    const[cantidadElementos, setCantidadElementos]=useState(0)
    return(
        <dataContext.Provider value={{LibroDeCarrito, setLibroDeCarrito, cantidadElementos, setCantidadElementos}}>
            {children}
        </dataContext.Provider>
    )

    
}
export default DataProvider;