import React from 'react'
import { useState } from 'react'
import NotesShow from './Notesshow';

export default function TextArea(props) {
    const [text, settext] = useState('');
    const [head, sethead] = useState('');

    const textSubmit = (e)=>{
        e.preventDefault();
        let arr = props.data;
        arr.push({head ,  text , index:arr.length});
        props.setData(arr);
        sethead('');
        settext('');
    }
    

  return (
    <>
    <form className="container my-3" onSubmit={textSubmit}>
    <h2>Enter Your Notes here !! </h2>
    <input type="text" className="form-control my-2" id="heading" onChange={(e)=>{sethead(e.currentTarget.value)}} value = {head} placeholder = "heading" />
    <textarea  className = "form-control text-dark bg-light" name="textarea" onChange={(e)=>{settext(e.currentTarget.value)}} value = {text} id="txt" cols="40" rows="10"></textarea>

    <button type= 'button' id='btn' className='btn btn-primary my-2' onClick = {textSubmit} >Submit</button>
    </form>
    <div className="container mx-2" style={{display :'flex'}}>
        <NotesShow data = {props.data} setdata = {props.setData}  />

    </div>
    {/* {console.log('hello')} */}
    
    </>
  )
}
