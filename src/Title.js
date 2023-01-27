import React, { useState } from 'react';
import './abc.css'

const Welcome = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark-background' : 'light-background'} onClick={() => setDarkMode(!darkMode)}>
      <h1>Welcome!</h1>
      <h2>To my Portfolio Website</h2>
      
    </div>
    
  );
};

export default Welcome;
