import './App.css';
import Savequipos from './componentesStudent/guardarStudent'; 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Modificar from './componentesStudent/ModificarStudent';
import ListadoS from './componentesStudent/ListaStudent';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
        <Route exact path='/' element={<ListadoS/>}/>
          <Route exact path='/guardar' element={<Savequipos />}/>
          <Route exact path='/modificar' element={<Modificar/>}/>
        </Routes>


      </Router>

    </div>
  );
}

export default App;
