import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { auth } from '../firebase'

const Login = props => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleEmail = e => setEmail(e.target.value)

  const handlePass = e => setPass(e.target.value)

  const handleAuthUser = e => {
    auth
      .fetchSignInMethodsForEmail(email)
      .then(() => {
        return auth.signInWithEmailAndPassword(email, pass)
      })
      .then(() => {
        return (window.location = '/main')
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
            <Link to="/RegistroPage" style={{ borderBottom: 'none' }}>
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
