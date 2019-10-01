import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { navigate } from 'gatsby'
import { getFirebase } from './firebase'

const Login = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [auth, setAuth] = useState()

  const handleEmail = e => setEmail(e.target.value)
  const handlePass = e => setPass(e.target.value)

  useEffect(() => {
    const lazyApp = import('firebase/app')
    const lazyAuth = import('firebase/auth')

    Promise.all([lazyApp, lazyAuth])
      .then(([firebase]) => {
        setAuth(getFirebase(firebase).auth())
      })
      .catch(error => console.log(error.message))
  })

  const handleAuthUser = () => {
    auth
      .fetchSignInMethodsForEmail(email)
      .then(() => {
        return auth.signInWithEmailAndPassword(email, pass)
      })
      .then(() => {
        return navigate('/pagemain')
      })
      .catch(error => alert(error.message))
  }

  return (
    <Fragment>
      <div className="logo">
        <span className="icon fa-diamond"></span>
      </div>

      <form>
        <div className="field half first">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleEmail}
            value={email}
          />
        </div>
        <div className="field half">
          <label>Contraseña *</label>
          <input
            type="password"
            name="pass"
            id="pass"
            onChange={handlePass}
            value={pass}
          />
        </div>

        <ul className="actions">
          <li>
            {/* <Link to="/main" style={{ borderBottom: 'none' }}> */}
            <input
              type="button"
              value="Iniciar"
              className="special"
              onClick={handleAuthUser}
            />
            {/* </Link> */}
          </li>
          <li>
            <Link to="/pageregistro" style={{ borderBottom: 'none' }}>
              <input type="button" value="Registrar" />
            </Link>
          </li>
        </ul>
      </form>
    </Fragment>
  )
}

Login.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Login
