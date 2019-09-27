import React,{Fragment} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Login = (props) => {
    return (
        <Fragment>
        <div className="logo" >
            <span className="icon fa-diamond"></span>
        </div>

        <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Correo</label>
              <input type="text" name="name" id="name" />
            </div>

            <div className="field half">
              <label htmlFor="email">Contreseña</label>
              <input type="text" name="email" id="email" />
            </div>
            
            <ul className="actions">
              <li>
              <Link to="/main" style={{borderBottom:'none'}}>
                <input type="button" value="Iniciar" className="special" />
                </Link>
              </li>
              <li>
              <Link to="/RegistroPage" style={{borderBottom:'none'}}>
                <input type="button" value="Registrar" />
              </Link>
              </li>
            </ul>

        
          </form>
         
          </Fragment>
          
    )
}
    {/*<header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Fazlou</h1>
                <p>CONQUISTANDO CIMAS</p>
            </div>
        </div>
        
        
                    
</header>*/}
   


Login.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Login