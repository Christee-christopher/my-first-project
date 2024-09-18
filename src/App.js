
import './App.css';
import Nav from './components/Nav';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './Pages/HomeScreen';
import AboutUs from './Pages/AboutUs';
import Books from './Pages/Books';
import Contact from './Pages/Contact';




function App() {
  return (

    <div className="">
    
    <Nav />

    <BrowserRouter >
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path='/about' element={<AboutUs />} />
        
        <Route path='/books' element={<Books />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>


      

      
      
    </div>
  );
}

export default App;
