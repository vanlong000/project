import React from 'react';
import Home from './pages/Home';
import Header from './Components/ShareComponents/Header';
import Footer from './Components/ShareComponents/Footer';
import Blog from './pages/Blog';
import BlogDetail from './pages/Blog-Detail';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import CartPage from './pages/CartPage';
import Menu from './pages/Menu';

import Product_details1 from './pages/Product_details1';
import Product_details3 from './pages/Product_details3';
import Product_details2 from './pages/Product_details2';

// import { BrowserRouter, useLocation } from "react-router-dom";

function App() {
  return (
    <div>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Blog" element={<Blog/>}/>
    <Route path="/Menu" element={<Menu/>}/>
    <Route path="/BlogDetail" element={<BlogDetail/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    
    <Route path="/Cartpage" element={<CartPage/>}></Route>
    <Route path="/product_details2" element={<Product_details2 />}/>
    <Route path="/product_details1" element={<Product_details1 />}/>
    <Route path="/product_details3" element={<Product_details3 />}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App;
