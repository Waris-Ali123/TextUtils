import React,{useState} from 'react';
// import Alert from './Alert';



function TextForm(props) {


    const [text,setText] = useState('Enter Text Here');
    // const [msg,setMsg] = useState(null);
    
    function toUpCase(){
        setText(text.toUpperCase());
        props.showAlert('Converted to uppercase',"success");
    }
    
    function toLoCase(){
        setText(text.toLowerCase());
       props.showAlert('Converted to Lowercase',"success");
    }
    
    function clearText(){
        let newText = "";
        setText(newText);
        console.log(text);
        props.showAlert('Text Cleared',"danger");
        // msg = 'Text Cleared';
    }
    
    function removeSpace(){
        let newText = text.split(/\s+/);
        setText(newText.join(" "));
        props.showAlert('Extra Spaces Removed',"success");
        // msg = 'Extra Spaces Removed';
    }
    
    function copyText(){
        navigator.clipboard.writeText(text);
        // msg = 'Text Copied';
        props.showAlert('Text Copied',"success");
    }

    const handleChange = (event) =>{
        setText(event.target.value);
    }






    return (
        <>
            <h4>{props.heading}</h4>
            
            
            <textarea className="form-control" value={text} onChange={handleChange}  id="myBox"  rows="8"></textarea>

            <div className="btn-box py-3 ">

            <button className="btn btn-primary mx-2 my-1" onClick={toUpCase}>Uppercase </button>
            <button className="btn btn-primary mx-2 my-1 " onClick={toLoCase}>Lowercase </button>
            <button className="btn btn-primary mx-2 my-1" onClick={clearText}>Clear text </button>
            <button className="btn btn-primary mx-2 my-1" onClick={copyText}>Copy text </button>
            <button className="btn btn-primary mx-2 my-1" onClick={removeSpace}>Remove Extra Space </button>
            

            </div>

            <h1 className='my-4'>Your Text Summary</h1>
            <p>{text.split(/\s/).filter((ele)=>{return ele.length!=0} ).length} words  and {text.length} characters</p>
            <p>{0.008 * text.split(/\s/).filter((ele)=>{return ele.length!=0} ).length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </>

    );
}

export default TextForm;

TextForm.defaultProps = { heading: "Enter the text here"};