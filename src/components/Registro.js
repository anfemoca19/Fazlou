import React,{Fragment} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Registro = () =>{
return (
    
    <Fragment>
    <form>
    <div className="field half first">
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="field half">
        <label htmlFor="apellido">Apellido</label>
        <input type="text" name="apellido" id="apellido" />
      </div> 
      <div className="field ">
        <label>Correo</label>
        <input type="email" name="email" id="email"/>{/*value={email} onChange={this.capEmail}*/}
      </div>
      <div className="field">
        <label htmlFor="pass">Password</label>
        <input type="password" name="pass" id="pass" />
      </div>    
      <div className="field half first">
        <label htmlFor="depart">Departamento</label>
        <input type="text" name="depart" id="depart" />
      </div>
      <div className="field half">
        <label htmlFor="munic">Municipio</label>
        <input type="text" name="munic" id="munic" />
      </div>
      <div className="field">
        <label htmlFor="pais">Pais</label>
        <input type="text" name="pais" id="pais" />
      </div> 
      <ul className="actions">
        <li>
          <input type="button" value="ENVIAR" className="special" />
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