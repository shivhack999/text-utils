import './App.css';
import DarkMode from './conponents/DarkMode';
// import Nav from './conponents/Nav';
import Navbar from './conponents/Navbar';
import TextForm from './conponents/TextForm';
import Alert from './conponents/Alert';
 import React, { useState } from 'react';
/*------router data Start------ */
// import {BrowserRouter as Switch,Route} from "react-router-dom";
/*------router data End------ */

function App(props) {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const [textColor, setTextColor] = useState('dark');
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      setTextColor('dark');
      showAlert(" Light mode has been enable. ", "success");
      document.body.style.backgroundColor = 'white';
      document.title = 'Light Mode';
      setInterval(() => {
        document.title = '😂😂😂😂😂';
      }, 2000);
      //set time periad is used to do anything in continiouslly in fixed time periadnpm  
      setInterval(() => {
        document.title = '😁😁😁😁';
      }, 1500);
    }
    else {
      setMode('dark');
      setTextColor('light');
      showAlert(" Dark mode has been enable. ", "success");
      document.body.style.backgroundColor = '#213140';
      document.title = 'Dark Mode';
    }
  }
  return (
    <>
      {/* <router> */}
        <Navbar title2='TextUtil' mode={mode} textColor={textColor} toggleMode={toggleMode} />
        {/*<Navbar/>
          <Nav title="hello" ></Nav>
          <Nav/>
          lecture 7// this is comment line*/}
        <Alert alert={alert} />
        <TextForm showAlert={showAlert} analyze="Enter the text below Analyze" mode={mode} />
        {/* <DarkMode/> */}
        <DarkMode />
        {/* <Switch>
          <Route path="/DarkMode">
          <DarkMode />
          </Route>
        </Switch> */}
      {/* </router> */}
    </>
  );
}
export default App;