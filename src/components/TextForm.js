import React, { useState } from "react";

export default function TextForm(props) {

    const handleUpClick= ()=>{
        console.log("uppercase click");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLowClick= ()=>{
        console.log("Lowercase click");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleOnChange= (event)=>{

        console.log("change");
        setText(event.target.value);
    }
    const handleCopy= ()=>{
        var text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Content copy !!","success");
    }

   const handleExtraSpace= ()=>{
       let ptext=text.split(/[ ]+/);
       setText(ptext.join(" "));
       props.showAlert("Remove Extra Space","success");
   }
    const[text,setText]=useState("Enter text here");
    //setText("fuck you");
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
       
        
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-warning mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
      <button className="btn btn-warning mx-2" onClick={handleLowClick} >Convert to Uppercase</button>
      <button className="btn btn-warning mx-2" onClick={handleCopy} >Copy</button>
      <button className="btn btn-warning mx-2" onClick={handleExtraSpace} >Extra Space</button>
    </div>

    <div className="container my-2">
        <h2>Your Text Summary</h2>
         Word :<p> {text.split(" ").length}</p>
         Character :<p>{text.length}</p>
         Time require to Read :<p>{0.008*text.split(" ").length}</p>
    </div>

    </>
  );
}
