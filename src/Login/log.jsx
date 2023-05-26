import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Popup({togglePopup}) {
  return (
    <div className='popup'> 
        <div className='modal'>
            <div className='sxal'>
              <p>Данные введены неверно</p>
            </div>
            <div className='lav'>
              <button className='kk' onClick={togglePopup}>ok</button>
            </div>
          </div>
        
      
    </div>
  );
}

function Login() {
  const [isOpen, setIsOpen] = useState(false);
  const [disabled, setDisabled] = useState(false)

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className='head'>
        <h1>Авторизация</h1>
      </div>
      <div className='put'>
        <input className='pt' type="text" placeholder='E-mail' />
        <input className='pt' type="text" placeholder='password' />
      </div>
      <div className='ok'>
        <div className='ook'>
          <input className='ok1' type="checkbox" onChange={(e) => setDisabled(e.target.checked)} name="" id="" />
         <div className='l'> </div> <p className='p'>Согласен на обработку персональных данных</p>
        </div>
      </div>
      <div className='btt7'>
        <button disabled={!disabled} onClick={togglePopup} className='btt8'>Войти</button>
      </div>
      {isOpen ? <Popup togglePopup={togglePopup} /> : null}
      
      <div className='verj'>
        <Link to={"/registration"}>Регистрация</Link>
        <Link to={"/ver"}>Забыли пароль?</Link>
       
      </div>
    </div>
  );
}

export default Login;
