import About from "./components/About";
import Inputbox from "./components/Inputbox";
import Navbar from "./components/Navbar";
import { useState } from 'react'
import Alert from "./components/Alert";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light");
  const toggleMode = () => {
    const boxip = document.getElementById("myBox")
    if (mode === 'light') {
      setmode("dark");
      showAlert("success","dark mode enable");

      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
      if(boxip){
      boxip.style.backgroundColor = "#0d346c";
      boxip.style.color = "white";
    }


    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      if(boxip){
      boxip.style.backgroundColor = "white";
      boxip.style.color = "black";
      }
      showAlert("success","light mode enable");

    }
  }

  const [alert, setalert] = useState(null);

  const showAlert=(type,msg)=>{
    setalert({
      msg:msg,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);

  }
  return (
    <>
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode}  showAlert={showAlert}/>
      <Alert alert={alert} />
      <div className="container">

        {/* <About/> */}
        <Switch>
          <Route path="/about">
            <About mode={mode} />
          </Route>
          <Route path="/">
          <Inputbox showAlert={showAlert} />
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
