import React from 'react';
// import LoginForm from './components/LoginForm';
// import SignInForm from './components/SignInForm';
import SimpleProductForm from './components/SimpleProductForm';
import ComplexProductCalculatorForm from './components/ComplexProductCalculatorForm';
import productsList from './productsList/productsList';

import './App.css';

function App() {
  return (
    <div>
      {/* <LoginForm />
      <SignInForm/> */}
      <SimpleProductForm />
      <ComplexProductCalculatorForm data={ productsList} />
   
  </div>);
}

export default App;
