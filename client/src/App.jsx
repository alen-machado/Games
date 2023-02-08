import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import  CardDetail  from "./components/CardDetail.jsx";
import  CreateGame  from "./components/CreateGame.jsx";
import  HomePage  from "./components/HomePage.jsx";
import  LandingPage  from "./components/LandingPage.jsx";
import  NotFound  from "./components/NotFound.jsx"
import  AboutMe  from "./components/AboutMe.jsx"

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={ < LandingPage /> } />
     <Route path='/home' element={ < HomePage /> } />
     <Route path='/home/:id' element={ < CardDetail /> } />
     <Route path='/create' element={ < CreateGame /> } />
     <Route path='*' element={ < NotFound /> } />
     <Route path='/AboutMe' element={ < AboutMe /> } />

    </Routes>
   </BrowserRouter>
  );
}

export default App;