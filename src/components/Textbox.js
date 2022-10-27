import React, { useState } from 'react';

export default function Textbox(props) 
{
  const [text, updateText] = useState('');

  const handleOnChange = (e)=>
  {
    updateText(e.target.value);
  }
  const handleUpperCase = ()=>
  {
    updateText(text.toUpperCase());
    props.showAlert('Converted to upper case','scucess');
  }
  const handleLowerCase = ()=>  
  {
    updateText(text.toLocaleLowerCase());
    props.showAlert('Converted to lower case','scucess');
  }
  const handleRemoveExtraSpaces = ()=>
  {
    updateText(text.replace(/\s+/g, " "));
    props.showAlert('Extra spaces are removed','scucess');
  };
  const handleCopy = ()=>
  {
    navigator.clipboard.writeText(text);
    props.showAlert('Text copied!','scucess');
  }
  const handleClearText = ()=>
  {
    updateText('');
    props.showAlert('Text cleared','scucess');
  }
  return (    
    <>  
    <textarea className="w3review my-3" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'?'white':'gray',color: props.mode === 'light'?'black':'white'}} rows="9" cols="90"></textarea><br/>
    <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleUpperCase}>Upper case</button>
    <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleLowerCase}>Lower case</button>
    <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
    <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy</button>
    <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleClearText}>Clear</button>
    <p className={`text-${props.mode=='light'?'dark':'light'}`}>Total no of characters : {text.length}</p>
    <p className={`text-${props.mode=='light'?'dark':'light'}`}>Total no of characters : {text.split(' ').length}</p>
    <p className={`text-${props.mode=='light'?'dark':'light'}`}>Approx time to read : {text.split(' ').length*0.008} Mins</p>
    <h3 className={`text-${props.mode=='light'?'dark':'light'}`}>Preview</h3>
    <p className={`text-${props.mode=='light'?'dark':'light'}`}>{text===''?'Please enter the text to preview':text}</p>
    </>
  )
}