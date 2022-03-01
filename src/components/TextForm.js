import React, {useState} from 'react'

export default function TextForm(props) {
   
   
    const handleUpClick = ()=>{
        //  console.log('Uppercase was clicked : ' + text);
         let newText = text.toUpperCase();
         setText(newText);
         props.showAlert('Converted to upperCase', 'success');
    }

    const handleLowClick = ()=>{
        
         let newText = text.toLowerCase();
         setText(newText);
         props.showAlert('Converted to lowerCase', 'success');
    }

    const handleClearClick = ()=>{
         let newText = '';
         setText(newText);
         props.showAlert('Text cleared', 'success');
       
    }

    const handleCpClick = ()=>{
        
      // let newText = document.getElementById('myBox');
      // newText.select();
      // navigator.clipboard.writeText(newText.value);
       navigator.clipboard.writeText(text);
      // document.getSelection().removeAllRanges();
      props.showAlert('Copied to Clipboard', 'success');
 }

    const handleExtraSpaces = ()=>{
        
     let newText = text.split(/[ ]+/);
     setText(newText.join(" "));
     props.showAlert('Extra spaces removed', 'success');
}

    const handleOnChange = (event)=>{
        // console.log('On change');
        setText(event.target.value);
        
   }
    const [text, setText] = useState(''); //yad rakhvu
    // text = "new text"; //Wrong way to change the state
    // setText('new Text'); //correct way to change the state

      return (
          <>
    <div className='container' style={{color: props.mode === "dark"?'white':'#042743'}}>
        <h1 className='mb-4'>{props.heading} </h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'light', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to upperCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to lowerCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCpClick}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to preview'}</p>
    </div>
    </>

  )
}


