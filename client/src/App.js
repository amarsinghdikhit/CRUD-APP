import './App.css';

import AddUser from './components/AddUser';
import AllUsers from './components/Allusers';
import NavBar from './components/NavBar';
import CRUDAPP from './components/CRUDAPP';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import EditUser from './components/EditUser';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<CRUDAPP/>}/>
        <Route path='/add' element={<AddUser/>}/>
        <Route path='/all' element={<AllUsers/>}/>
        <Route path='/edit/:id' element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
