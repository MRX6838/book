import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Veradarc } from '../Veradarc/Veradarc'

export const Verkod = ({ email }) => {
  const [isVerified, setIsVerified] = useState(false)
  const [password, setPassword] = useState("")
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [passwordError, setPasswordError] = useState("Please repeat")

  if (isVerified) {
    return <Veradarc />
  }



  const passwordHandlerr = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 6 || e.target.value.length > 20) {
      setPasswordError("введите код подтверждения")
      if (!e.target.value) {
        setPasswordError("введите код подтверждения")
      }
    } else {
      setPasswordError("")
    }
  }


  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'password':
        setPasswordDirty(true)
        break
      default:
        break
    }
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
    setPasswordDirty(true)
  }

  return (
    <div>
      <div className='vernagir'>
        <h1>Восстановление пароля</h1>
      </div>
      <div className='in'>
        <input value={email} type="text" placeholder='E-mail' disabled />
        {(passwordDirty && passwordError) && <div style={{ color: "red" }}>{passwordError}</div>}
        <input onChange={e => passwordHandlerr(e)} value={password} onBlur={e => blurHandler(e)} name='password' type="name" placeholder='Проверочный код' />
      </div>
      <div className='gluxtext'>
        <div className='text'>
          <div className='z'>
            <span>Для восстановления пароля введите почту,
              на которую зарегистрирован аккаунт.
              Мы отправим вам проверочный код.
              Код действителен 30 минут.</span>
          </div>

        </div>
      </div>
      <div className='krkin'>
        <h5>Отправить код повторно</h5>
      </div>
      <div className='but'>
        <button onClick={() => setIsVerified(true)}>Продолжить</button>
        <div className='verj3'>
          <Link to={"/registration"}>Регистрация</Link>
          <Link to={"/ver"}>Забыли пароль?</Link>
        </div>
      </div>

    </div>
  )
}
export default Verkod