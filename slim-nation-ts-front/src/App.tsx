import React,{useState,createContext,useContext} from 'react';

import { Routes, Route } from 'react-router-dom'
import { NotFoundPage,LoginPage,AllProductsPage, NewProductPage, HomePage, SignInPage, NewDishPage } from './pages';
import { Header } from "./components"
import { userInitialState, CurrentUserContext } from './context/UserContext';
import { ProductsListContext, productListInitState } from './context/ProductsListContext';
import './App.css';
import { ICurrUser,product } from './types/types';


function App() {
  const [currentUserData, setCurrentUserData] = useState<ICurrUser>(userInitialState);
  const [productsList, setProductsList] = useState<product[]>(productListInitState)
  return (
    <CurrentUserContext.Provider value={{ currentUserData, setCurrentUserData }}>
      
      <Header />
      <ProductsListContext.Provider value={{productsList, setProductsList}}>
      <div>
        
      <Routes >
          {currentUserData.accessToken ? <>
          
            <Route path="/" element={<HomePage />} />
            <Route path="/products-list" element={<AllProductsPage/>} />
            <Route path="/add-new-product" element={<NewProductPage />} />
            <Route path="/add-complex-product" element={<NewDishPage />} />
              <Route path="*" element={<NotFoundPage />} />
           
          </> :
            <>
              <Route path="login" element={<LoginPage />} />
              <Route path="sign-in" element={<SignInPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </>}
        
        </Routes>
      </div>
      </ProductsListContext.Provider>
    </CurrentUserContext.Provider>);
}

export default App;
