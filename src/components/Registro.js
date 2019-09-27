import React,{Fragment} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Registro = () =>{
return (
    
    <Fragment>
    <form method="post" action="#">
    <div className="field half first">
      <label htmlFor="name">Nombre</label>
      <input type="text" name="name" id="name" />
    </div>
    <div className="field half">
      <label htmlFor="email">Correo</label>
      <input type="text" name="email" id="email" />
    </div>
    <div className="field">
      <label htmlFor="message">Mensaje</label>
      <textarea name="message" id="message" rows="4"></textarea>
    </div>
    <ul className="actions">
      <li>
        <input type="submit" value="ENVIAR" className="special" />
      </li>
      <li>
        <input type="reset" value="LIMPIAR" />
      </li>
    </ul>
  </form>
  </Fragment>
        )
}
export default Registro