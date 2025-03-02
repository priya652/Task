import './App.css';
import Login from './Components/Login';
import Main from './Components/Main';
import SignUp from './Components/SignUp';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<SignUp/>}>
      </Route>
      <Route path='/' element={<Login/>}>
      </Route>
      <Route path='/main' element={<Main/>}></Route>
    </Routes>
</BrowserRouter>

  );
}

export default App;
