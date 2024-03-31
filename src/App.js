import './App.css';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import AboutUs from './components/about-us/about-us';
import NavBar from './components/nav-bar/nav-bar';
import ContactUs from "./components/contact-us/contact-us"
import Menu from "./components/menu/menu"
import OrderNow from './components/order-now/order-now';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useEffect, useState } from 'react';
import data from './data';

function App() {

  const [dishes, setDishes] = useState([])
  const categories = [...new Set(dishes.map(dish => dish.category))];

  useEffect(() =>{
    setDishes(data)
  })

  

 

  


  return (
    <Router>
      <div className="App">
        <NavBar categories={categories}/>
        <Routes>
        <Route element={<Home />}
          path='/'
        />
        <Route element={<AboutUs />}
        path='/about-us'
         />
         <Route element={<ContactUs />}
        path='/contact-us'
         />
         <Route element={<Menu dishes={dishes}/>}
         path='/menu'  />
         <Route element={<OrderNow />}
         path='/order-now'  />
        </Routes>
        
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
