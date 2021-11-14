import './App.css';
import NavBar from './components/NavBar/NavBar';
import Alert from './components/Alert/Alert';
import TextForm from './components/TextForm/TextForm';
import AboutUs from './components/About/AboutUs';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if(mode==="dark"){
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert("Light mode enabled successfully", "success")
    } else {
      setMode("dark")
      document.body.style.backgroundColor="#071c30"
      showAlert("Dark mode enabled successfully", "success")
    }
  }

  return (
    <Router>
      <div>
        <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            <Route exact path="/text-utils">
              <TextForm formName="Enter text below to analyze" mode={mode} showAlert={showAlert} />
            </Route>
            <Route exact path="/about">
              <AboutUs mode={mode} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
