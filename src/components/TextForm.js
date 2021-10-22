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

    return (
        <div>
            <h2 className="mb-3 mt-3">{props.formName}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" placeholder="Enter text here..." value={text} onChange={handleUpChange} rows="8"></textarea>
            </div>
            <div className="grid">
            <button
                className="btn btn-outline-primary"
                onClick={handleUpClick}
            >
                Convert to UpperCase
            </button>
            <button
                className="btn btn-outline-primary"
                onClick={handleLwClick}
            >
                Convert to LowerCase
            </button>
            </div>

        </div>
    )
}

export default TextForm
