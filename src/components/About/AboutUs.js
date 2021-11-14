import React from 'react'

const AboutUs = (props) => {
    const style = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white'
    }

    return (
        <>
        <h2 className="my-3" style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>About TextUtils</h2>
        <div className="accordion" id="accordion">
            <div className="accordion-item" style={style}>
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Made by Sunil Vishwakarma (<a href="https://www.linkedin.com/in/linkinsunil/">linkinsunil</a>)</strong> 
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This project is a follow-up of a youtube react tutorial.</strong> This project is one of many projects in ReactJS and Vanilla JavaScript / ES6 which is hosted on my <a href="https://www.github.com/linkinsunil">github profile</a>. Check them out now. If you like my profile and repos, you can follow me to get back to them anytime.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={style}>
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free To Use</strong> 
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is a multipurpose text utility application.</strong> You can format your text via TextUtils app and can convert your text to upper case, lower case, copy it, remove extra space between text, clear the text box, find reading time of text entered, find total words or characters in the text and can see the preview of the entered text.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={style}>
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Other projects by Sunil Vishwakarma</strong> 
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p>Other projects by Sunil Vishwakarma are hosted on <a href="https://www.github.com/linkinsunil">github profile</a></p>
                        <p>Some of them are:</p>
                        <ul>
                            <li><a href="https://linkinsunil.github.io/#/">Portfolio</a></li>
                            <li><a href="https://linkinsunil.github.io/flashtype/">FlashType</a></li>
                            <li><a href="https://linkinsunil.github.io/namely/">Namely</a></li>
                            <li><a href="https://linkinsunil.github.io/linkin-news/">Linkin News</a></li>
                            <li><a href="https://linkinsunil.github.io/calculator/">Calculator</a></li>
                            <li><a href="https://linkinsunil.github.io/pokedex/">Pokedex</a></li>
                            <li><a href="https://linkinsunil.github.io/flexbox-visual-guide/">FlexBox Visual Guide</a></li>
                            <li><a href="https://lessuglyui.netlify.app/">LessUglyUI</a></li>
                            <li><a href="https://www.github.com/linkinsunil">Github Readme</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutUs
