import React,{useState} from 'react'



export default function TextForm(props) {
    const handleSentenseClick=()=>{
        
        let s=text.trim().split('.');
        let buddhi=[];
        for(let i=0;i<s.length;i++){
            if(s[i]!==''){
                buddhi.push(s[i]);
            }
        }
        let arr=[];
        for(let i=0;i<buddhi.length;i++){
            
            let a=buddhi[i].toLowerCase().trim();
            
            //  let final= replacer.concat(allLower.slice(1));
            //  console.log(final);
            let f=a.replace(a[0][0],a[0][0].toUpperCase());
            arr.push(f)
           
        }
        // console.log(text2.replace(text2[0],text2[0].toUpperCase()));
        
        setText(arr.join('. '))
        props.showAlert('Sentense Case Activated','success');

    }
    const handleCapClick=()=>{
        let s=text.trim().split(' ');
        let buddhi=[];
        for(let i=0;i<s.length;i++){
            if(s[i]!==''){
                buddhi.push(s[i]);
            }
        }
        
        let arr=[];
        // for(let i=0;i<s.length;i++){
            
        //     let a=s[i].toLowerCase().trim();
            
        //     //  let final= replacer.concat(allLower.slice(1));
        //     //  console.log(final);
        //     let f;
        //     while(a!==' ')
        //     {
        //         f=a.replace(a[0][0],a[0][0].toUpperCase());
        //     }
            
        //     arr.push(f)
           
        // }
        let i=0;
        while(i<buddhi.length)
        {
            let a=buddhi[i].toLowerCase().trim();
            
            //  let final= replacer.concat(allLower.slice(1));
            //  console.log(final);
            let f;
            
                f=a.replace(a[0][0],a[0][0].toUpperCase());
            
            
            arr.push(f);
            i++;
        }
        // console.log(text2.replace(text2[0],text2[0].toUpperCase()));
        
        setText(arr.join(' '));
        props.showAlert('Capitalize Case Activated','success');
    
    }
    const handleUpClick=()=>{
        setText(text.toUpperCase());
        props.showAlert('Upper Case Activated','success');
    }
    const handleClearClick=()=>{
        setText('');
    }
    const handleLowClick=()=>{
        setText(text.toLowerCase());
        props.showAlert('Lower Case Activated','success');
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const handleCopy=()=>{
        var text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text Copied','success');
    }
    const  [text,setText]=useState('');

  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h2 >{props.heading} </h2>
  <div className="mb-3">
    {/* <label htmlFor="myBox" className="form-label">Enter your text below</label> */}
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
  </div>
  <button className="btn btn-dark mx-1 my-3" onClick={handleSentenseClick}>Convert to Sentense case</button>
  <button className="btn btn-dark mx-1 my-3" onClick={handleCapClick}>Convert to Capitalied case</button>
  <button className="btn btn-success mx-1 my-3" onClick={handleUpClick}>Convert to Upper case</button>
  <button className="btn btn-success mx-1 my-3" onClick={handleLowClick}>Convert to lower case</button>
  <button className='btn btn-info mx-1 my-3' onClick={handleCopy}>Copy Text</button>
  <button className='btn btn-info mx-1 my-3' onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary </h1>
        {/* <p>{text.split(' ').length} words & {text.length} characters</p> */}
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>

has context menu
        <p>{0.008*text.split(' ').length } min read time</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something above'}</p>
    </div>
    </> 
  )
}
