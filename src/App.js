// import logo from './logo.svg';
import './App.css';
import Navbar from './compenents/Navbar';
import TextForm from './compenents/TextForm';
import About from './compenents/About';
import Alert from './compenents/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
     msg : message,
      type : type
    }
    )

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
      if(mode=== 'light'){
        setMode('dark');
        showAlert("Dark Mode has been enabled","success");
        document.body.style.backgroundColor = '#052c65';
        document.body.style.color = 'white'
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("light Mode has been enabled","success");
        document.body.style.color = '#052c65'
      }
  }
  return (
    <>

      <Router>
        <Navbar mode={mode} title="TextUtils" aboutText="MyAbout" toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className='container my-4'>
          {/* <TextForm heading="User Address" /> */}
          <Routes>
            <Route path="/" element={<TextForm heading="User Address" showAlert={showAlert} />} />
            {/* <Alert msg={msg} /> */}
            <Route path="/about" element={<About />} />
          </Routes>
          {/* <About /> */}
        </div>
      </Router>
    </>
  );

}

export default App;
