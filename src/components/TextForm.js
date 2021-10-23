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
    }

    const handleLwClick = () => {
        let convertedText = text.toLowerCase();
        setText(convertedText)
    }

    const handleClearClick = () => {
        setText("")
    }

    return (
        <div>
            <h2 className="mb-3 mt-3">{props.formName}</h2>
            <p className="small">{(0.008 * text.split(' ').length).toFixed(2)} Minutes Read</p>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" placeholder="Enter text here..." value={text} onChange={handleUpChange} rows="8"></textarea>
            </div>

            <div>
                <p>{text.split(' ').length} words and {text.length} characters</p>
            </div>

            <div className="grid">
            <button
                className="btn btn-outline-primary"
                onClick={handleUpClick}
            >
                Convert to UpperCase
            </button>
            <button
                className="btn btn-outline-primary mx-2"
                onClick={handleLwClick}
            >
                Convert to LowerCase
            </button>
            <button
                className="btn btn-outline-primary mx-2"
                onClick={handleClearClick}
            >
                Clear Text
            </button>
            </div>
            <div className="my-3">
                {text.length > 0 ? <h2>Preview</h2> : ""}
                {text.length > 0 ? <h6>{text}</h6> : ""}
            </div>

        </div>
    )
}

export default TextForm
