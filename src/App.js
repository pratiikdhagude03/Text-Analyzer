import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {

  const [alert, setAlert] = useState({
    // msg:"Light Mode is enable",
    // ty:"success"
    msg:"",
    ty:""
  })
  const showAlert= (message,type)=>{
    setAlert({
      msg:message,
      ty:type
    })
    setTimeout(()=>{
          setAlert({
            msg:"",
            ty:""
          }); 
    },3000);
  }


  const[mode,setMode]=useState('light');
  const toggelmode= ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.background='#042743'
      document.body.style.color='white'
      showAlert("Dark Mode is enable","success")
      document.title='TextUtils-Dark Mode'
    }else{
      setMode('light')
      document.body.style.background='white'
      document.body.style.color='black'
      showAlert("Light Mode is enable","success")
      document.title='TextUtils-light Mode'
    }
  }
  
  
  return (
    <>
      <Navbar title="Home" mode={mode} toggelmode={toggelmode}/>
      <Alert alert={alert}/>

      <div className="container">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
