import React from 'react';
import { Header,  SignInForm} from "./components"
import { Routes, Route } from 'react-router-dom'
import { NotFoundPage,LoginPage,AllProductsPage, NewProductPage } from './pages';

import './App.css';

function App() {
  return (<><Header/>
    <div>
      <Routes>
        {/* <Route path="/" element={Home}/> */}
        <Route path="login" element={<LoginPage/>}/>
        <Route path="signIn" element={<SignInForm/>}/>
        <Route path="/add-new-product" element={<NewProductPage/>}/>
        <Route path="/products-list" element={<AllProductsPage/>} />
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
   
  </div></>);
}

export default App;
