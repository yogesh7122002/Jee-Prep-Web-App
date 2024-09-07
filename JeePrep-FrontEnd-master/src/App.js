
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './Component/Pages/Home';
import Practice from './Component/Pages/Practice';
import About from './Component/Pages/About';
import Navbar from './Component/Navbar/Navbar';
import Signup from './Component/RegisterLogin/Signup';
import Login from './Component/RegisterLogin/Login';
import PrivateRoutes from './Component/Utility/PrivateRoutes';
import { AuthProvider } from './Component/Utility/AuthContexProvider';
import Footer from './Component/Footer/Footer';
import Submit from './Component/Quize/Submit';
import SimpleQuestion from './Component/Quize/SimpleQuestion';
import AdminDashBoard from './Component/Admin/AdminDashBoard';
import Profile from './Component/RegisterLogin/Profile';
import MockQuize from './Component/Quize/MockQuize';
import MockQuizeStart from './Component/Notes/MockQuizeStart';
import Quize from './Component/Quize/Quize';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>

      <Route element={<PrivateRoutes/>}>

      <Route path='/practice' element={<Practice/>}></Route>
      <Route path='/about-us' element={<About/>}></Route>
      {/* <Route path='/mock-quize' element={<MockQuize/>}></Route>
      <Route path='/quize-now' element={<Quize/>}></Route>
      <Route path='/mock-quize-start' element={<MockQuizeStart/>}></Route> */}
      </Route>
      <Route path='/submit' element={<Submit/>} ></Route>
      <Route path='/signup/*' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/chapterwise-question' element={<SimpleQuestion/>}/>
      <Route path='/admin' element={<AdminDashBoard/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/mock-quize' element={<MockQuize/>}></Route>
      <Route path='/quize-now' element={<Quize/>}></Route>
      <Route path='/mock-quize-start' element={<MockQuizeStart/>}></Route>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
