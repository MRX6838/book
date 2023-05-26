import React, { useState } from 'react';

function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button onClick={togglePopup} className='btt1'>Войти</button>
      {isOpen && (
        <div className='popup'>
          <div className='popup__content'>
            <div className='sxal'>
              <p>sxal mutq</p>
            </div>
            <div className='lav'>
              <button className='kk' onClick={togglePopup}>ok</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
