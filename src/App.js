
import './App.css';
import Inicio from './componentes/Inicio';
import NotFound from './componentes/NotFound';
import Registro from './componentes/Registro';
import SesionIniciada from './componentes/SesionIniciada';
import { Routes, Route, HashRouter } from "react-router-dom"
import Login from './componentes/Login';
import DataProvider from './componentes/context/DataContxt';
import CarritoVacio from './componentes/carrito/CarritoVacio';
function App() {
  return (
    <DataProvider>
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<Inicio />} />
          <Route exact path='/registro' element={<Registro />} />
          {/* <Route exact path='/sesion' element={<Login/>}/> */}
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/sesioniniciada' element={<SesionIniciada />} />

          <Route exact path='*' element={<NotFound />} />
          <Route exact path='/carrito-vacio' element={<CarritoVacio />} />
        </Routes>
      </HashRouter>
    </DataProvider>

  );
}

export default App;
