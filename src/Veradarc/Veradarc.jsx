import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Veradarc = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [emailError, setEmailError] = useState("Please repeat")
  const [passwordError, setPasswordError] = useState("Please repeat")


  useEffect(() => {
    if (password !== confirm) {
      setPasswordError("пароли не совпадают")
    } else {
      setPasswordError("")
    }
  }, [confirm, password])

  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 6) {
      setPasswordError("Минимальное количество символов - 6")

    } else {
      setPasswordError("")
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

  const handleConfirmChange = (e) => {
    setConfirm(e.target.value)
  }

  return (
    <div>
      <div className='glx'>
        <h1>Восстановление пароля</h1>
        <div className='l'> </div>
      </div>
      <div className='in' >
        {(passwordDirty && passwordError) && <div style={{ color: "red" }}>{passwordError}</div>}
        <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' type="password" placeholder='Придумайте пароль*' />
        <input onChange={handleConfirmChange} value={confirm} onBlur={e => blurHandler(e)} name='password' type="password" placeholder='Повторите пароль*' />
      </div>
      <div className='text'>
        <span className='sp'>Придумайте новый пароль, минимальное количество символов - 6</span>
      </div>
      <div className='ha'>
        <button className='btt4'>Сменить пароль</button>
      </div>
      <div className='gluxverj'>
        <div className='verj4'>
         
          <Link to={"/registration"}>Регистрация</Link>
          <Link to={"/ver"}>Забыли пароль?</Link>
        </div>
      </div>


    </div>
  )
}
