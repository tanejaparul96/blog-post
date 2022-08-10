//create poem 

import React,{useState} from 'react';
import './Blog.css'
import { useNavigate } from "react-router";

 function PoemView() {
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')
  let navigate = useNavigate();

  const handleSubmit=()=>{
   localStorage.setItem(title, text);
   navigate({
    pathname: '/poemview',
    search: `?${title}`
  });
  //  navigate(`/poemview ${title}`);
  }
  
  return (
    <div className='container'>
      <h2>
        Create a blog:
      </h2>
      <div className='input-container'>
      <input type="text" value={title} onChange={event=>setTitle(event.target.value)} 
      placeholder='Enter unique title'/>
      <textarea onChange={event=>setText(event.target.value)} defaultValue={text} 
      placeholder={'Enter text here'} />
      </div>
      <div className='submit-poem'> 
      <button type='submit' onClick={handleSubmit} disabled={title && text !=="" ? false:true}> Submit</button>
      </div>
    </div>
  )
}
export default PoemView;
