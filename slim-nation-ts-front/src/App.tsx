import React from 'react';
import { Header,  LoginForm, SignInForm,SimpleProductForm} from "./components"
import ProductsList from './Presentation/View/product/list/productListView';
import { Routes, Route } from 'react-router-dom'
import { NotFoundPage } from './pages';

import './App.css';

function App() {
  return (<><Header/>
    <div>
      <Routes>
        {/* <Route path="/" element={Home}/> */}
        <Route path="login" element={<LoginForm/>}/>
        <Route path="signIn" element={<SignInForm/>}/>
        <Route path="/add-new-product" element={<SimpleProductForm/>}/>
        <Route path="/products-list" element={<ProductsList/>} />
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
   
  </div></>);
}

export default App;
