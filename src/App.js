import './App.css';
import Login from './Components/Login';
import MainUi from './Components/MainUi';
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
      <Route path='/main' element={<MainUi/>}></Route>
    </Routes>
</BrowserRouter>

  );
}

export default App;
