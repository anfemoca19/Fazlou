import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Fazlou</h1>
                <p>CONQUISTANDO CIMAS</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>INICIO</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('sueños')}}>ALCANZA TUS SUEÑOS</a></li>
               {/*<li><a href="javascript:;" onClick={() => {props.onOpenArticle('propuesta')}}>PROPUESTA DINAMICA FAZLOU</a></li>*/}
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('cronograma')}}>CRONOGRAMA DE EXITO</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contacto')}}>CONTACTO</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
