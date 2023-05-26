import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Reg = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [hordAnuny, setHordanuny] = useState("")
  const [password, setPassword] = useState("")
  const [repassword, setRepassword] = useState("")
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [emailError, setEmailError] = useState("Минимальное количество символов - 6")
  const [passwordError, setPasswordError] = useState("Минимальное количество символов - 6")
  const [RepasswordError, setRepasswordError] = useState("Минимальное количество символов - 6")
  const [error, setError] = useState({})

  const emailHandler = (e) => {
    setEmail(e.target.value)
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("попробуйте еще раз")
    } else {
      setEmailError("")
    }

  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 6) {
      setPasswordError("Минимальное количество символов - 6")
      if (!e.target.value) {
        setPasswordError("Минимальное количество символов - 6")
      }
    } else {
      setPasswordError("")
    }
  }

  const RepasswordHandler = (e) => {
    setRepassword(e.target.value)
    if (e.target.value.length < 6) {
      setRepasswordError("Минимальное количество символов - 6")
      if (!e.target.value) {
        setRepasswordError("Минимальное количество символов - 6")
      }
    } else {
      setRepasswordError("")
    }
  }
  const ok = function (e) {
    if (e.target.value.length < 2) {
      setName("Anunyd Dzi Ex Jan")
      console.log("pxer")

    }
  }
  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
      default:
          break
    }
  }
  const blurOk = (e) => {
    switch (e.target.name) {
      case "name":
        setName(true)
        break
      default:
          break
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
    setEmailDirty(true)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
    setPasswordDirty(true)
  }
  const handleRepasswordChange = (event) => {
    setPassword(event.target.value)
    setPasswordDirty(true)
  }

  const handleClick = () => {
    const error = {}
    if(!name.trim()) {
      error.name = "Write your name"
    }
    if(!surname.trim()) {
      error.surname = "Write your surname"
    }
    if(!hordAnuny.trim()) {
      error.hordAnuny = "Write your father name"
    }
    setError(error)
    
  }



  return (
    <div className='mega'>
      <div className='head'>
        <h1>Регистрация</h1>
      </div>
      <div className='minihead'>
        <Link to={"/login"}>Вход</Link>
      </div>
      <div className='put5'>
        {(emailDirty && emailError) && <div style={{ color: "red" }}>{emailError}</div>}
        <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email' type="text" placeholder='E-mail' />
        <input type="text" placeholder='Фамилия*' />
        <span>{error?.surname}</span>
        <input type="text" onChange={ok} onBlur={e=> blurOk(e)} placeholder='Имя*' />
        <span>{error?.name}</span>
        <input type="text" placeholder='Отчество*' />
        <input type="date" placeholder='Дата рождения*' />
      </div>
      <div className='probel'></div>
      <div className='btt1'>
        <button className='bt1'>Я рекламодатель</button>
        <button className='bt2'>Я автор</button>
      </div>
      <div className='probel'></div>
      <div className='btt2'>
        <input type="text" placeholder='Псевдоним' />
        {(passwordDirty && passwordError) && <div style={{ color: "red" }}>{emailError}</div>}
        <input onChange={e => {
          passwordHandler(e)
        }} value={password} onBlur={e => blurHandler(e)} name='password' type="password" placeholder='Придумайте пароль*' />
        {(passwordDirty && RepasswordError) && <div style={{ color: "red" }}>{emailError}</div>}
        <input onChange={e => RepasswordHandler(e)} value={repassword} onBlur={e => blurHandler(e)} name='password' type="password" placeholder='Повторите пароль*' />
      </div>
      <div className='pahanj'>
        <span>Минимальное количество символов - 6</span>
      </div>
      <div className='probel1'></div>
      <div className='radio'>
        <input className='galchka' type="checkbox" />
        <p>Согласен на обработку персональных данных</p>
      </div>
      <div className='probel1'></div>
      <div className='final' action=''>
        <div className='final'>
          <button className='bt3' onClick={handleClick}>Регистрация</button>
        </div>
      </div>

    </div>
  )
}

export default Reg;
