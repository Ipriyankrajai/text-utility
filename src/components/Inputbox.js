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
    const [text, setText] = useState("");
    const clearData=()=>{
        setText("");
    }
    const capitalfirst=()=>{
        let sentences=text.split(".");
        let finalop="";
        // console.log(sentences);
        sentences.forEach((s)=>{
            const strLen=s.length;

            if(strLen){
                if(s[0]===" " && strLen>=2){
                    // s[1]=s[1].toUpperCase();
                    finalop+=s[0]+s[1].toUpperCase()+s.slice(2)+".";
                    // console.log(s[0]);
                }else{
                    // s[0]=s[0].toLowerCase();
                    finalop+=s[0].toUpperCase()+s.slice(1)+".";
                }

            // s[0].toUpperCase();
            // finalop+=s;
            }
        })
        // console.log(finalop);
        setText(finalop);
    }
    const copyData=()=>{
        const cpyTxt=document.getElementById("myBox");
        cpyTxt.select();
        navigator.clipboard.writeText(cpyTxt.value);

    }
    const removeSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }


    return (
        <>

            <div className="my-3"  >
                <textarea className="form-control" id="myBox" value={text} rows="8" onChange={editTextbox} ></textarea>
                {/* <textarea className="form-control" id="myBox"  rows="3"  ></textarea> */}

            </div>
            <button type="button" className="btn btn-primary mx-1 my-2" onClick={convertToUpper}>ToUppercase</button>
            <button type="button" className="btn btn-primary mx-1 my-2" onClick={convertToLower}>ToLowercase</button>
            <button type="button" className="btn btn-primary mx-1 my-2" onClick={capitalfirst}>Capital first letter</button>
            <button type="button" className="btn btn-primary mx-1 my-2" onClick={removeSpace}>Remove Extra Space</button>
            <button type="button" className="btn btn-primary mx-1 my-2" onClick={copyData}>Copy</button>
            <button type="button" className="btn btn-primary mx-1 my-2" onClick={clearData}>Clear</button>
            <h1>Text Summary</h1>
            <p>total number of words {text.split(' ').length} and total number of letters are {text.length}</p>
            <p>{text.split(' ').length/150} Minutes read</p>
            <h1>Preview</h1>
            <p>{text}</p>

        </>
    )
}
