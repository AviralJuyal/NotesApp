import React from 'react';


export default function Notesshow(props) {
 
  
    const Delete = (id)=>{
        // console.log(id);
        const x = props.data.filter((Element)=> Element.index !== id) 
        props.setdata(x)
        // props.data.(id);
        // console.log(props.data);
    }

  return (       
      props.data.map((ele,index)=>{
        // console.log(ele);
        return(
          
            <div key = {index} className="card mx-2 " style={{width:'18rem'}} >
            <div className="card-body">
        
                <h3>{ele.head}</h3>
                    <p className="card-text">{ele.text}</p>
                    
                    <button className="btn btn-primary" onClick={()=>{
                        Delete(ele.index);
                    }}>Delete</button>

                    <button className="btn btn-primary" onClick={()=>{
                        props.edit(ele.index);
                    }}>Edit</button>
                </div>
            </div>
        )
      })
  )
     
}
