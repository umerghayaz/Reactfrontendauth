import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Router,Route, Link ,BrowserRouter,useNavigate} from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Guest from './navbar/guest';
import Auth from './navbar/auth';
import AuthUser from './components/AuthUser';
import Privateroutes from './components/Privateroutes';

function App() {
  const {getToken} = AuthUser();
  let navigate = useNavigate();

  // console.log(getToken())
  if(getToken()=='null'){
    return <Guest />
  }
  else {
  return (
      <Auth />
  );  
}
// return (
// <div>    <Routes>
//         <Route >
//             {/* <Route path='/' element={<Users/>} /> */}
//             <Route path="/" element={<Home />} />
//                     <Route path="/dashboard" element={<Dashboard />} />   
//                     <Route path="/home" element={<Home />} />         </Route>
//         <Routes>
                    
//                 </Routes>
//         <Route path='/login' element={<Login/>}/>
//       </Routes></div>  
// );

}

export default App;
