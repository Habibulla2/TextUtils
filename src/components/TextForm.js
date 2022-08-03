import React, {useState} from 'react'
//import PropTypes from 'prop-types'

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
        //console.log("I am copy");
        //var text = document.getElementById("myBox");
        //text.select();
        navigator.clipboard.writeText(text);
        props.showAlert("Copy to clipboard", "success");

    }
    const [text, setText] = useState('');
    //text = "new Text"; // Wrong way to change the state
    //setText("Enter new Text");  // correct way to change the state
  return (
    <>
        <div className="container" style={{color: props.mode ==='light'?'black':'white'}}>
            <h2 className='mb-2'>{props.heading}</h2>
            <div className="mb-3">
                {/* <label for="myBox" class="form-label"></label> */}
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode ==='dark'?'#54adc4':'white',color: props.mode ==='light'?'black':'white'}} onChange={handleOnChange} id="myBox" rows="7"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercast</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercast</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode ==='light'?'black':'white'}}>
            <h2>Your Text Summary</h2>
            <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
            <p> {0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read </p>
            <h3>Preview</h3>
            <p> {text.length>0?text:"Nothing to preview"}</p>
        </div>
    </>
  )
}
