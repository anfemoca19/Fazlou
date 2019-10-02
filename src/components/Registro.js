import React, { Fragment, useState, useEffect } from 'react'
import { navigate } from 'gatsby'
import { getFirebase } from './firebase'

const Registro = () => {
  const [name, setName] = useState('')
  const [apellido, setApellido] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [departamento, setDepartamento] = useState('')
  const [municipio, setMunicipio] = useState('')
  const [pais, setPais] = useState('')

  const [auth, setAuth] = useState()
  const [db, setDb] = useState()

  const handleName = e => setName(e.target.value)
  const handleApellido = e => setApellido(e.target.value)
  const handleEmail = e => setEmail(e.target.value)
  const handlePass = e => setPass(e.target.value)
  const handleDepartamento = e => setDepartamento(e.target.value)
  const handleMunicipio = e => setMunicipio(e.target.value)
  const handlePais = e => setPais(e.target.value)

  useEffect(() => {
    const lazyApp = import('firebase/app')
    const lazyAuth = import('firebase/auth')
    const lazyDatabase = import('firebase/database')

    Promise.all([lazyApp, lazyDatabase, lazyAuth])
      .then(([firebase]) => {
        setAuth(getFirebase(firebase).auth())
        setDb(getFirebase(firebase).database())
      })
      .catch(error => console.log(error.message))
  })

  const handleCreateUser = e => {
    e.preventDefault()
    if (
      name !== '' &&
      apellido !== '' &&
      email !== '' &&
      pass !== '' &&
      departamento !== '' &&
      municipio !== '' &&
      pais !== ''
    ) {
      const user = {
        name,
        apellido,
        email,
        pass,
        departamento,
        municipio,
        pais,
      }
      // Insertar en base de datos
      db.ref('users').push({ user })

      //insertar pass and email en auth
      auth
        .createUserWithEmailAndPassword(email, pass)
        .then(() => {
          alert('Usuario insertado con exito 😎 ')
          navigate('/')
        })
        .catch(error => {
          alert(error.message)
        })
    } else {
      alert('Campos obligatorios')
    }
  }

  return (
    <Fragment>
      <form>
        <div className="field half first">
          <label>Nombre *</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleName}
            value={name}
          />
        </div>
        <div className="field half first">
          <label>Apellido *</label>
          <input
            type="text"
            name="apellido"
            id="apellido"
            onChange={handleApellido}
            value={apellido}
          />
        </div>
        <div className="field">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleEmail}
            value={email}
          />
        </div>
        <div className="field">
          <label>Contraseña * min = 6</label>
          <input
            type="password"
            name="pass"
            id="pass"
            onChange={handlePass}
            value={pass}
          />
        </div>
        <div className="field">
          <label>Departamento *</label>
          <input
            type="text"
            name="departamento"
            id="departamento"
            onChange={handleDepartamento}
            value={departamento}
          />
        </div>
        <div className="field">
          <label>Municipio *</label>
          <input
            type="text"
            name="municipio"
            id="municipio"
            onChange={handleMunicipio}
            value={municipio}
          />
        </div>
        <div className="field">
          <label>País *</label>
          <input
            type="text"
            name="pais"
            id="pais"
            onChange={handlePais}
            value={pais}
          />
        </div>

        <ul className="actions">
          <li>
            <input
              type="button"
              value="REGISTRARSE"
              className="special"
              onClick={handleCreateUser}
            />
          </li>
          {/* <li>
            <input type="reset" value="LIMPIAR" />
          </li> */}
        </ul>
      </form>
    </Fragment>
  )
}
export default Registro
