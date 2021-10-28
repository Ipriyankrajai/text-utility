import React, { useState } from 'react'

export default function Inputbox() {
    // const txtbox=document.getElementById("myBox");
    // const convertToUpper=()=>{
    //     // console.log(text.toUpperCase())
    //     txtbox.value=txtbox.value.toUpperCase();
    // }
    const convertToUpper=()=>{
        // console.log(text.toUpperCase())
        var newText=text.toUpperCase();
        setText(newText);
    }
    const convertToLower=()=>{
        // console.log(text.toUpperCase())
        var newText=text.toLowerCase();
        setText(newText);
    }
    const editTextbox=(e)=>{
        setText(e.target.value);
    }
    const [text, setText] = useState("a");
    return (
        <>
            <div className="my-3">
                <textarea className="form-control" id="myBox" value={text} rows="8" onChange={editTextbox} ></textarea>
                {/* <textarea className="form-control" id="myBox"  rows="3"  ></textarea> */}

            </div>
            <button type="button" class="btn btn-primary mx-1 my-2" onClick={convertToUpper}>ToUppercase</button>
            <button type="button" class="btn btn-primary mx-1 my-2" onClick={convertToLower}>ToLowercase</button>
            <h1>Review</h1>
            <p>total number of words {text.split(' ').length} and total number of letters are {text.length}</p>
            <h1>Preview</h1>
            <p>{text}</p>
        </>
    )
}
