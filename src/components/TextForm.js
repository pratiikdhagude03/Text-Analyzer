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
        document.getSelection().removeAllRanges();
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
          //style={{background:'rgb(10, 23, 34)'}}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" onClick={handleLowClick} >Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" onClick={handleCopy} >Copy</button>
      <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" onClick={handleExtraSpace} >Extra Space</button>
    </div>

    <div className="container my-2">
        <h2>Your Text Summary</h2>
         Word :<p> {text.split(/\s+/).filter((element)=>{ return element.length!==0}).length  }</p>
         Character :<p>{text.length}</p>
         Time require to Read :<p>{0.008*text.split(" ").filter((element)=>{ return element.length!==0}).length} min</p>
    </div>

    </>
  );
}
