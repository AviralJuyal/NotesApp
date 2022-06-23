import React,{useState , useEffect} from 'react'
import Modal from 'react-awesome-modal';


export default function Edit(props) {
    const [head, sethead] = useState(props.id.head);
    const [text, settext] = useState(props.id.text);
    console.log(props.id);
    let closeModal = ()=>{
        props.setIsModalOpen(false);
    }

    
    
    const textSubmit = ()=>{
        // const newValue = {Element.head:head , Element.desc:text};
        const x = props.data.filter((Element)=> Element.index === props.id) 
        
        x.head = head;
        x.desc = text;
        const b = props.data.filter((Element)=> Element.index === props.id?x:Element) 
        props.setdata(b);
        // console.log(props.data);
    }
  return (
    <>
    <Modal
        visible={props.isModalOpen}
        width="80%"
        height="80%"
        effect="fadeInUp"
        onClickAway={closeModal}
      >
         <form className="container my-3" onSubmit={textSubmit}>
    <h2>Enter Your Notes here !! </h2>
    <input type="text" className="form-control my-2" id="heading" onChange={(e)=>{sethead(e.currentTarget.value)}} value = {head} placeholder = "heading" />
    <textarea  className = "form-control text-dark bg-light" name="textarea" onChange={(e)=>{settext(e.currentTarget.value)}} value = {text} id="txt" cols="40" rows="10"></textarea>

    <button type= 'button' id='btn' className='btn btn-primary my-2' onClick = {textSubmit} >Submit</button>
    </form>
      </Modal>
    </>
  )
}
