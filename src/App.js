import About from "./components/About";
import Inputbox from "./components/Inputbox";
import Navbar from "./components/Navbar";
import {useState} from 'react'

function App() {
  const [mode, setmode] = useState("light");
  const toggleMode=()=>{
    const boxip=document.getElementById("myBox")
    if(mode==='light'){
      setmode("dark");

      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
      boxip.style.backgroundColor="grey";
      boxip.style.color="white";



    }
    else{
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      boxip.style.backgroundColor="white";
      boxip.style.color="black";

    }
  }
  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode} />
    <div className="container">
    <Inputbox />
    {/* <About/> */}

    </div>
    </>
  );
}

export default App;
