import './App.css';
import Header from './Header';
import Loginpage from './Loginpage';
import Footer from './Footer';
import Sign from './Sign';
import Mainform from './Mainform';
import Customerdetails from './Customerdetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Header.css';
import React from 'react';


function App() {

  return (
    <div >
      <BrowserRouter>

        <Routes>
          < Route path="/" element={
            <div className='bg'>
              <Header />
              <Loginpage />
              <Footer />
            </div>
          }
            />
            <Route path="/sign" element={<Sign   />} />
            {/* <Route path="/" element={<Sign />} /> */}
            <Route path="/Mainform" element={<Mainform />} />
            <Route path="/Customerdetails" element={<><Mainform /> <Customerdetails /></>} />
        </Routes>
       
      </BrowserRouter>

    </div>
  );
}

export default App;
