import React, { useState, useEffect } from 'react';
import './section';

function TextSwitcher() {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['freelancer', 'front end developer'];
  const [displayText, setDisplayText] = useState(texts[textIndex]);
  const [deleteMode, setDeleteMode] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDeleteMode(true);
      setTimeout(() => {
        setDeleteMode(false);
        setTextIndex((textIndex + 1) % texts.length);
      }, 200); // Delay before switching to the next text
    }, 2000); // Interval between text changes

    return () => clearInterval(interval);
  }, [textIndex, texts.length]);

  useEffect(() => {
    let newText = texts[textIndex];
    if (deleteMode && newText.length > 0) {
      newText = newText.slice(0, -1);
      if (newText === 'freelancer') {
        newText = 'freelancer'.slice(0, -1);
      } else if (newText === 'front end developer') {
        newText = 'freelancer'.slice(0, -1);
      }
    }
    setDisplayText(newText);
  }, [textIndex, deleteMode, texts]);

  return (
    <div className='container-div'>
      <p className="impression-me">Hello! am Maxwel a 
      <span className="impression">{displayText}</span></p>
    </div>
  );
}

export default TextSwitcher;
