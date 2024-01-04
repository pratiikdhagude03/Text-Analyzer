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

  const removeBodyClasses=()=>{

    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');



  }

  const toggelmode= (cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setMode('dark');
      document.body.style.background='#042743'
      document.body.style.color='white'
      showAlert("Dark Mode is enable","success")
      document.title='TextUtils-Dark Mode'
      document.getElementById('myBox').style.background='rgb(10, 23, 34)'
      document.getElementById('myBox').style.color='white'
    }else{
      setMode('light')
      document.body.style.background='white'
      document.body.style.color='black'
      showAlert("Light Mode is enable","success")
      document.title='TextUtils-light Mode'
      document.getElementById('myBox').style.background='white';
      document.getElementById('myBox').style.color='black'
    }
  }
  
  
  return (
    <>
      <Navbar title="Home" mode={mode} toggelmode={toggelmode}/>
      <hr/>
      <Alert alert={alert}/>
      <hr/>
      

      <div className="container ">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" />
        {/* <About/> */}
      </div>
      <hr/>
    </>
  );
}

export default App;
