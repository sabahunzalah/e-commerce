import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { React } from 'react-dom';
import '../App.css';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import AppLayout from '../components/Layout';

function AppRoutes() {
  return (
    <div>
   
<BrowserRouter>
<Routes>
  <Route  exact path='/Login' element= {<Login />} />
  <Route  exact path='/Register' element={<AppLayout> <Register /></AppLayout>} />
  <Route  exact path='/' element={ <AppLayout> <Home /></AppLayout>} />
</Routes>
</BrowserRouter>
</div>
  );
}

export default AppRoutes;
