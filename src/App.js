import { Route, Routes } from 'react-router-dom';
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


function App() {
  return (
    <>
    
      <Routes>
        <Route path='/' element={<DashboardPage></DashboardPage>}></Route>
        <Route path='/Create' element={<CreatePage></CreatePage>}></Route>
        <Route path='/All' element={<NewPage></NewPage>}></Route>
        <Route path='/Canceled' element={<CanceledPage></CanceledPage>}></Route>
        <Route path='/Completed' element={<CompletedPage></CompletedPage>}></Route>
        <Route path='*' element={<Page404></Page404>}></Route>
        <Route path='/Profile' element={<ProfilePage></ProfilePage>}></Route>
        <Route path='/Progress' element={<ProgressPage></ProgressPage>}></Route>
        <Route path='/Login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/Registration' element={<RegistrationPage></RegistrationPage>}></Route>
        <Route path='/Forgetpass' element={<ForgetpassPage></ForgetpassPage>}></Route>
      </Routes>
      <FullScreenLoader></FullScreenLoader>
    </>
  );
}

export default App;
