// import logo from './logo.svg';
import './App.css';
import Navbar from './compenents/Navbar';
import TextForm from './compenents/TextForm';
import About from './compenents/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [mode,setMode] = useState('light');

  const toggleMode = () => {
      if(mode=== 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#052c65';
        document.body.style.color = 'white'
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        document.body.style.color = '#052c65'


      }
  }
  return (
    <>

      <Router>
        <Navbar mode={mode} title="TextUtils" aboutText="MyAbout" toggleMode={toggleMode}/>
        <div className='container my-4'>
          {/* <TextForm heading="User Address" /> */}
          <Routes>
            <Route path="/" element={<TextForm heading="User Address" />} />
            <Route path="/about" element={<About />} />
          </Routes>
          {/* <About /> */}
        </div>
      </Router>
    </>
  );

}

export default App;
