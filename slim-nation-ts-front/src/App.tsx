import React,{useState,createContext} from 'react';

import { Routes, Route } from 'react-router-dom'
import { NotFoundPage,LoginPage,AllProductsPage, NewProductPage, HomePage, SignInPage, NewDishPage } from './pages';
import { Header} from "./components"
import './App.css';
import { ICurrUser } from './types/types';

const userInitialState = { user: { userName: "", email: "" }, accessToken: "", refreshToken: "" }

const CurrentUserContext = createContext({ currentUserData:userInitialState, setCurrentUserData: (userInitialState:ICurrUser) => { } });


function App() {
  const[currentUserData, setCurrentUserData] =useState<ICurrUser>(userInitialState)
  return (
    <CurrentUserContext.Provider value = {{currentUserData, setCurrentUserData}}><Header />
    <div>
      <Routes>
          {currentUserData.accessToken ?<>
       <Route path="/" element={<HomePage/>}/>
        <Route path="/add-new-product" element={<NewProductPage/>}/>
        <Route path="/products-list" element={<AllProductsPage/>} />
        <Route path="/add-complex-product" element={<NewDishPage/>} /></> :
        <><Route path="login" element={<LoginPage/>}/>
        <Route path="sign-in" element={<SignInPage />} /></>}
        
        
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
   
  </div></CurrentUserContext.Provider>);
}

export default App;
