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
        props.showAlert("Text converted to uppercase successfully", "success")
    }
    const handleLwClick = () => {
        let convertedText = text.toLowerCase();
        setText(convertedText)
        props.showAlert("Text converted to lowercase successfully", "success")
    }
    const handleClearClick = () => {
        setText("")
        props.showAlert("Text cleared successfully", "success")
    }
    const handleRemoveExtraSpaceClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed successfully", "success")
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Text copied successfully", "success")
    }


    return (
        <div style={{color:props.mode==='dark'?'white':'black'}}>
            <h2 className="mb-3 mt-3">{props.formName}</h2>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#495057':'white', color:props.mode==='light'?'black':'white', border:props.mode==='light'?'1px solid #ced4da':'1px solid #495057' }} id="myBox" placeholder="Enter text here..." value={text} onChange={handleUpChange} rows="6"></textarea>
            </div>
            <button className="btn btn-outline-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-outline-primary mx-2" onClick={handleLwClick}>Convert to LowerCase</button>
            <button className="btn btn-outline-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-outline-primary mx-2" onClick={handleRemoveExtraSpaceClick}>Remove Extra Spaces</button>
            <button className="btn btn-outline-primary mx-2" onClick={handleCopyClick}>Copy</button>
            <div className="my-3">
                {text.length > 0 ? <h4>Your Text Summary</h4> : ""}
                {text.length > 0 ? <p className="small">{text.split(' ').length} Words and {text.length} Characters</p> : ""}
                {text.length > 0 ? <p className="small">{(0.008 * text.split(' ').length).toFixed(2)} Minutes Read</p> : ""}
                {text.length > 0 ? <h4>Preview</h4> : ""}
                {text.length > 0 ? <h6>{text}</h6> : ""}
            </div>
        </div>
    )
}

export default TextForm
