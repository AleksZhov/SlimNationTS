import React from 'react';
import LoginForm from './components/LoginForm';
import SignInForm from './components/SignInForm';
// import SimpleProductForm from './components/SimpleProductForm';

import './App.css';

function App() {
  return (
    <div>
    <h1 className=' text-5xl font bold underline'>Hello project!!!!!</h1>
      <LoginForm />
      <SignInForm/>
      {/* <SimpleProductForm/> */}
   
  </div>);
}

export default App;
