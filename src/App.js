import React from 'react';
import Header from './components/header/Header';
import InputForm from './components/inputForm/InputForm';
import AllDisplay from './components/displayData/AllDisplay';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { GlobalContextProvider } from './context/GlobalState';


const App = () => {
  return (
    <GlobalContextProvider>
      <Header />
      <InputForm />
      <AllDisplay />
    </GlobalContextProvider>
  )
}

export default App
