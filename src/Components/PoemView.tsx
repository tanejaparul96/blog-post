import React,{useState} from 'react';
import './Poem.css'

 function PoemView() {
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')
  const handleSubmit=()=>{
   console.log(text)
   localStorage.setItem("key", text)
  }
  
  return (
    <div className='container'>
      <h2>
        Create a blog:
      </h2>
      <input type="text" value={title} onChange={event=>setTitle(event.target.value)} 
      placeholder='Enter unique title'/>
      <div className='input-container'>
    
      <textarea onChange={event=>setText(event.target.value)} defaultValue={text} 
      placeholder={'Enter text here'} />
      </div>
      <div className='submit-poem'> 
      <button type='submit' onClick={handleSubmit}> Submit</button>
      </div>
    </div>
  )
}
export default PoemView;
