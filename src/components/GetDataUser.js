import React, { Fragment, useState, useEffect } from 'react'
import { getFirebase } from './firebase'

export default function DataUser() {
  const [auth, setAuth] = useState()
  const [db, setDb] = useState()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    const lazyApp = import('firebase/app')
    const lazyDatabase = import('firebase/database')
    const lazyAuth = import('firebase/auth')
    Promise.all([lazyApp, lazyDatabase, lazyAuth])
      .then(([firebase]) => {
        setAuth(getFirebase(firebase).auth())
        setDb(getFirebase(firebase).database())
        getEmail()
        getName()
      })
      .catch(error => console.log(error.message))
  })

  const getEmail = () => {
    auth.onAuthStateChanged(function(user) {
      if (user) {
        setEmail(user.email)
      } else {
        console.error('Not user')
      }
    })
  }

  const getName = () => {
    db.ref('users').on('value', snap => {
      const objectsData = snap.val()
      const data = Object.values(objectsData)

      for (let i in data) {
        const emailUser = data[i].user.email
        if (email === emailUser) {
          const nameUser = data[i].user.name
          setName(nameUser)
        }
      }
    })
  }

  return (
    <Fragment>
      <h1>Hola, {name}</h1>
    </Fragment>
  )
}
