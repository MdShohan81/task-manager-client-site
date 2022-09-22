import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import CreatePage from './pages/CreatePage';
import NewPage from './pages/NewPage';
import CanceledPage from './pages/CanceledPage';
import CompletedPage from './pages/CompletedPage';
import Page404 from './pages/Page404';
import ProfilePage from './pages/ProfilePage';
import ProgressPage from './pages/ProgressPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import ForgetpassPage from './pages/ForgetpassPage';

import FullScreenLoader from './components/MasterLayout/FullScreenLoader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getToken } from './helper/SessionHelper';
import { Fragment } from 'react';


function App() {

  if(getToken()){
    return (
      <Fragment>
          <BrowserRouter>
          <Routes>
              <Route path='/' element={<DashboardPage></DashboardPage>}></Route>
              <Route path='/Create' element={<CreatePage></CreatePage>}></Route>
              <Route path='/All' element={<NewPage></NewPage>}></Route>
              <Route path='/Progress' element={<ProgressPage></ProgressPage>}></Route>
              <Route path='/Completed' element={<CompletedPage></CompletedPage>}></Route>
              <Route path='/Canceled' element={<CanceledPage></CanceledPage>}></Route>
              <Route path='/Profile' element={<ProfilePage></ProfilePage>}></Route>
              <Route path='*' element={<Page404></Page404>}></Route>
              </Routes>
          </BrowserRouter>
              
          
          <FullScreenLoader></FullScreenLoader>
          <ToastContainer></ToastContainer>
      </Fragment>
  );
  }
  else{
    return (
      <Fragment>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<DashboardPage></DashboardPage>}></Route>
          <Route path='/Login' element={<LoginPage></LoginPage>}></Route>
          <Route path='/registration' element={<RegistrationPage></RegistrationPage>}></Route>
          <Route path='/Forgetpass' element={<ForgetpassPage></ForgetpassPage>}></Route>
          <Route path='*' element={<Page404></Page404>}></Route>
          

        </Routes>
        </BrowserRouter>
        <FullScreenLoader></FullScreenLoader>
        <ToastContainer></ToastContainer> 
      </Fragment>
    );
  }

  
}

export default App;
