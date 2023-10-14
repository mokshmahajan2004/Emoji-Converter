import React, {useState} from 'react'
import './Converter.css';
import emojiMap from './emojiMap';

const Converter = () => {
  const message = localStorage.getItem("name");
  const [text,setText]= useState('');
  const [translatedText, setTranslatedText] = useState('');
  const handChange=(e)=>{
    setText(e.target.value);
    
  }
  const handleTranslation = () =>{
    const words = text.toLowerCase().split(' ');
    const translatedWords = words.map((word)=>emojiMap[word] || word);
    const translatedSentence = translatedWords.join(' ');
    setTranslatedText(translatedSentence);
   
  }
  
  return (
    <><div>
   <div id='converterPage'>
   <h1>Welcome {message}!</h1>
     <textarea id='textarea' rows={20} cols={100} onChange={handChange}></textarea>
     </div> 
     <br></br>
     <div>
     <button id='convert' onClick={handleTranslation}>Convert</button>
     </div>
     <div id='output'>
      {translatedText}
     </div>
     </div>
    </>
  )
}

export default Converter