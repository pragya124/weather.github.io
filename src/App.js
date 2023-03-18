import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Search from "./component/Layout/Search";
import Header from "./component/Layout/Header";
import Weather from "./component/Layout/Weather";
import './App.css';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Header />} />
      <Route path='/search' element={<Search />} />
      <Route path='/weather' element={<Weather />} />
    </Routes>
    </>
  );
};

export default App;
