import React, { useState} from 'react'

export default function About() {
    let [colorsStyle,setColorStyle] = useState({
        backgroundColor: "darkblue",
        color: 'white'
        // TransitionEvent :'0.3s ease'
    });

    let toggleMode = () => {
        console.log('btn clicked');
        let lightcolorsStyle = {
            backgroundColor : 'white',
            color : 'darkblue'
        }

        let darkcolorsStyle = {
            backgroundColor: "darkblue",
            color: 'white'
        }

        // console.log(newcolorsStyle);
        if(colorsStyle.backgroundColor === lightcolorsStyle.backgroundColor){
            // setColorStyle(lightcolorsStyle);
            console.log('was light')
            setColorStyle(darkcolorsStyle);
        }else{
            console.log('was dark')
            setColorStyle(lightcolorsStyle);
        }

        console.log(colorsStyle);
    }



    return (
        <div className="container">
        <h1> About Us</h1>

        <div className="accordion" id="accordionExample"  >
            <div className="accordion-item" style={colorsStyle}>
                <h2 className="accordion-header" style={colorsStyle}>
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={colorsStyle}>
                        Accordion Item #1
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
                    <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={colorsStyle}>
                <h2 className="accordion-header" >
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"  style={colorsStyle}>
                        Accordion Item #2
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={colorsStyle} >
                <h2 className="accordion-header"  >
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"  style={colorsStyle}>
                        Accordion Item #3
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
        </div>


        <button className="btn btn-primary my-3" onClick={toggleMode}>Enable Dark Mode Button</button>
        </div>

    )
}
