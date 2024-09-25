
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VendingMachine from './VendingMachine';


import Takis from './Takis';
import Candy from './Candy';
import Snickers from './Snickers';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<VendingMachine />} />
            <Route exact path="/snickers" element={<Snickers />} />
            <Route exact path="/takis" element={<Takis />} />
            <Route exact path="/candy" element={<Candy />} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
