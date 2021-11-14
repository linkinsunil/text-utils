import React from 'react'
import { useState } from 'react'


const TextForm = (props) => {
    const [text, setText] = useState("")

    const handleUpChange = (e) => {
        setText(e.target.value);
    }
    const handleUpClick = () => {
        let convertedText = text.toUpperCase();
        setText(convertedText)
        text ? props.showAlert("Text converted to uppercase successfully", "success") : props.showAlert("Enter some text first", "warning")
    }
    const handleLwClick = () => {
        let convertedText = text.toLowerCase();
        setText(convertedText)
        text ? props.showAlert("Text converted to lowercase successfully", "success") : props.showAlert("Enter some text first", "warning")
    }
    const handleClearClick = () => {
        setText("")
        text ? props.showAlert("Text cleared successfully", "success") : props.showAlert("Enter some text first", "warning")
    }
    const handleRemoveExtraSpaceClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        text ? props.showAlert("Extra spaces removed successfully", "success") :props.showAlert("Enter some text first", "warning")
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text)
        text ? props.showAlert("Text copied successfully", "success") : props.showAlert("Enter some text first", "warning")
    }


    return (
        <div style={{color:props.mode==='dark'?'white':'black'}}>
            <h2 className="mb-3 mt-3">{props.formName}</h2>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#495057':'white', color:props.mode==='light'?'black':'white', border:props.mode==='light'?'1px solid #ced4da':'1px solid #495057' }} id="myBox" placeholder="Enter text here..." value={text} onChange={handleUpChange} rows="10"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLwClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleRemoveExtraSpaceClick}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy</button>
            <div className="my-3">
                {text.length > 0 ? <h4>Your Text Summary</h4> : ""}
                {text.length > 0 ? <p className="small">{text.split(/\s+/).filter((el) => el.length !== 0).length} Words and {text.length} Characters</p> : ""}
                {text.length > 0 ? <p className="small">{(0.008 * text.split(' ').filter((el) => el.length !== 0).length).toFixed(2)} Minutes Read</p> : ""}
                {text.length > 0 ? <h4>Preview</h4> : ""}
                {text.length > 0 ? <h6>{text}</h6> : ""}
            </div>
        </div>
    )
}

export default TextForm
