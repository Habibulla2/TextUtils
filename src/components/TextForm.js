import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");

    }
    const handleOnChange = (event)=>{
        //console.log("On Change");
        setText(event.target.value);
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces", "success");

    }
    const handleCopy = ()=>{
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to clipboard", "success");

    }
    const [text, setText] = useState('');
    //text = "new Text"; // Wrong way to change the state
    //setText("Enter new Text");  // correct way to change the state
  return (
    <>
        <div className="container" style={{color: props.mode ==='light'?'black':'white'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                {/* <label for="myBox" class="form-label"></label> */}
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode ==='dark'?'grey':'white',color: props.mode ==='light'?'black':'white'}} onChange={handleOnChange} id="myBox" rows="7"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercast</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Uppercast</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode ==='light'?'black':'white'}}>
            <h2>Your Text Summary</h2>
            <p> {text.split(" ").length} words and {text.length} character</p>
            <p> {0.008*text.split(" ").length} Minutes read </p>
            <h3>Preview</h3>
            <p> {text.length>0?text:"Enter something in the textBox to preview it here"}</p>
        </div>
    </>
  )
}
