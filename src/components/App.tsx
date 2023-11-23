import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderContent from './common/header';
import HomeContent from '../pages/homepage';
function App() {
  return (
    <div className='container-xl'>
       
    <HeaderContent/>
    
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeContent/>}></Route>

        </Routes>
     </BrowserRouter>

     

    </div>

  );
}

export default App;
