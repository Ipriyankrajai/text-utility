import About from "./components/About";
import Inputbox from "./components/Inputbox";
import Navbar from "./components/Navbar";
import { useState } from 'react'
import Alert from "./components/Alert";

function App() {
  const [mode, setmode] = useState("light");
  const toggleMode = () => {
    const boxip = document.getElementById("myBox")
    if (mode === 'light') {
      setmode("dark");
      showAlert("success","dark mode enable");

      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
      boxip.style.backgroundColor = "grey";
      boxip.style.color = "white";



    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      boxip.style.backgroundColor = "white";
      boxip.style.color = "black";
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
      <Navbar mode={mode} toggleMode={toggleMode}  showAlert={showAlert}/>
      <Alert alert={alert} />
      <div className="container">
        <Inputbox showAlert={showAlert} />
        {/* <About/> */}

      </div>
    </>
  );
}

export default App;
