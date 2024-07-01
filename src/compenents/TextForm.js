import React,{useState} from 'react';



function TextForm(props) {


    const [text,setText] = useState('Enter Text Here');

    function toUpCase(){
        setText(text.toUpperCase());
    }

    function toLoCase(){
        setText(text.toLowerCase());
    }

    function clearText(){
        let newText = "";
        setText(newText);
        console.log(text);
    }

    function removeSpace(){
        let newText = text.split(/\s+/);
        setText(newText.join(" "));
    }

    function copyText(){
        navigator.clipboard.writeText(text);
    }

    const handleChange = (event) =>{
        setText(event.target.value);
    }






    return (
        <>
            <h4>{props.heading}</h4>
            <textarea className="form-control" value={text} onChange={handleChange}  id="myBox"  rows="8"></textarea>

            <div className="btn-box py-3 ">

            <button className="btn btn-primary mx-2" onClick={toUpCase}>Uppercase </button>
            <button className="btn btn-primary mx-2 " onClick={toLoCase}>Lowercase </button>
            <button className="btn btn-primary mx-2" onClick={clearText}>Clear text </button>
            <button className="btn btn-primary mx-2" onClick={copyText}>Copy text </button>
            <button className="btn btn-primary mx-2" onClick={removeSpace}>Remove Extra Space </button>
            

            </div>

            <h1 className='my-4'>Your Text Summary</h1>
            <p>{text.split(" ").length} words  and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </>

    );
}

export default TextForm;

TextForm.defaultProps = { heading: "Enter the text here"};