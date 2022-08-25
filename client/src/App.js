//Trabajo desarrollado por: Laura Montalvo y Kevin Sisa
//Aplicaciones web y móviles
//Registro de autores

import {BrowserRouter, Routes,Route} from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import Create from './views/Create';
import Update from './views/Update';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route exact path="/edit/:id" element={<Update/>} />
        <Route exact path="/new" element={<Create/>} />
        <Route path ="/" element={<Main/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
