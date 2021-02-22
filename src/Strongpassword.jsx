import React from 'react';


const Strongpassword = () =>{
    return(
        <>
        <section className="strongpass">
            <div className="strongpass1">
                <p className="p1">What Is Strong Password ?</p>
                <div>
                    <ol>
                        <li>Password Should be Long and Strong</li>
                        <br/>
                        <li>Password Should Not be easy to Guess</li>
                        <br/>
                        <li>You Should Use a Different Password for Every Account</li>
                        <br/>
                        <li>Password Must Be Unique</li>
                    </ol>
                </div>
            </div>
            <div className="strongpass2">
                <p className="p2">How To Create a Strong Password?</p>
                <ol>
                    <li>Choose a phrase with atleast 8 words</li>
                    <br/>
                    <li>Switch one (or 2) to an uppercase</li>
                    <br/>
                    <li>Switch one to a number</li>
                    <br/>
                    <li>Switch one to a special charactor</li>
                </ol>
            </div>
        </section>
        </>
    )

}
export default Strongpassword;