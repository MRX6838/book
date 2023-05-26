import React, { useState } from 'react'
import Verkod from '../Verkod/Verkod';
import { Link } from 'react-router-dom';

var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


export const Vermail = () => {
  const [isCodeShow, setIsCodeShow] = useState(false)
  const [email, setEmail] = useState("")
  const [emailDirty, setEmailDirty] = useState(false)
  const [emailError, setEmailError] = useState("Please repeat")

  if (isCodeShow) {
    return <Verkod email={email} />
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("попробуйте еще раз")
    } else {
      setEmailError("")
    }

  }


  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true)
        break
      default:
        break
    }
  }

  const handleClick = () => {
    if (emailError) {
      return
    }
    setIsCodeShow(true)
  }

  return (
    <div className='glux'>
      <div>
        <h1 className='voss'>Восстановление пароля</h1>
      </div>
      <div className='pt10'>
        {(emailDirty && emailError) && <div className='pt11' style={{ color: "red" }}>{emailError}</div>}
        <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email' type="text" placeholder='E-mail' />
      </div>
      <div className='tx'>
        <span className='span'>Для восстановления пароля введите почту, на которую зарегистрирован
          аккаунт. Мы отправим вам проверочный код.</span>
      </div>
      <div className='b'>
        <button className='hast' onClick={handleClick}>Получить код</button>
      </div>
      <div className='verj2'>
        <Link to={"/registration"}>Регистрация</Link>
        <Link to={"/ver"}>Забыли пароль?</Link>
      </div>
    </div>
  )
}
