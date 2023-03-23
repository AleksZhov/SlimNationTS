import React from 'react';
import { Header} from "./components"
import { Routes, Route } from 'react-router-dom'
import { NotFoundPage,LoginPage,AllProductsPage, NewProductPage, HomePage, SignInPage } from './pages';

import './App.css';

function App() {
  return (<><Header/>
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="sign-in" element={<SignInPage/>}/>
        <Route path="/add-new-product" element={<NewProductPage/>}/>
        <Route path="/products-list" element={<AllProductsPage/>} />
        <Route path="/add-complex-product" element={<AllProductsPage/>} />
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
   
  </div></>);
}

export default App;
