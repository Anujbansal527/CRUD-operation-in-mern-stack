import './App.css';
import AddUser from './Component/AddUser';
import AllUser from './Component/AllUser';
import CRUD from './Component/CRUD';
import EditUser from './Component/EditUser';
import NavBar from './Component/NavBar';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path='/' element={<CRUD/>} />
        <Route path='/alluser' element={<AllUser/>} />
        <Route path='/adduser' element={<AddUser/>} />
        <Route path='/editUser/:id' element={<EditUser/>} />
      </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
