import React, { useState } from "react";

export default function TextForm(props) {
  // function hendleUpClick call
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UPPER CASE","success");
  };
  const handleLpClick=()=>{
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lower case","success");
  }
  const handleOnClick = (event) => {
    setText(event.target.value);
    // let newText=text.toUpperCase();
    // setText(newText);
  };
  const clearText=()=>{
    setText("");
  }
  //Copy Text
  const copyText=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  //Remove extra space in paragraph
  const removeExtraSpace=()=>{
    let newText=text.split(/[ ]+/)
    props.showAlert("Remove Extra text","success");
    setText(newText.join(" "));
  }
  const [text, setText] = useState("");
  // text='update Text' worng way to update
  // setText('updated text'); right wat to change
  return (
      <>
    {/* <div className={`container bg-${props.mode}`}> */}
    <div className="container">
      <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.analyze}</h1>
      <div className="mb-3">
        <textarea  className={`form-control `} id="myBox" style={{color:props.mode==='dark'?'white':'black', backgroundColor:props.mode==='dark'?'#213140':'white'  }} placeholder="Please Enter The Text" value={text} onChange={handleOnClick} rows="8"></textarea>
      </div>
      <button className="btn btn-primary mt-3 mx-1" onClick={handleUpClick}>ConvertToUPPERCASE</button>
      <button className="btn btn-primary mt-3 mx-1" onClick={handleLpClick}>ConvertToLowarCase</button>
      <button className="btn btn-primary mt-3 mx-1" onClick={clearText}>Clear Text</button>
      <button className="btn btn-primary mt-3 mx-1" onClick={copyText}>Text Text</button>
      <button className="btn btn-primary mt-3 mx-1" onClick={removeExtraSpace}>Remove Extra Space</button>
    </div>
    <div className="container my-3">
        <h2 style={{color:props.mode==='dark'?'white':'black'}}>Your text Summery</h2>
        <p style={{color:props.mode==='dark'?'white':'black'}}>{text.split(" ").length-1} word and {text.length} charactors</p>
        <h2 style={{color:props.mode==='dark'?'white':'black'}}>Previous</h2>
        <p style={{color:props.mode==='dark'?'white':'black'}}>{text}</p>
    </div>
    </>
  );
}
