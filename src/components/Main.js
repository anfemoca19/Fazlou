import PropTypes from 'prop-types'
import React from 'react'
// import pic01 from '../images/pic01.jpg'
import pic02 from '../images/2.jpg'
import pic03 from '../images/3.jpg'
import foto from '../images/1.jpg'
class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none', textAlign: 'justify' }}
        >
          <h2 className="major">Introduccion</h2>
          <span className="image main">
            <img src={foto} style={{}} alt="" />
          </span>
          <h2>MISION</h2>
          <p>
            La misión de Fazlou es ayudar a las personas y las empresas en la
            definición y seguimientos de Metas u objetivos, por medio de una
            página web amigable al usuario y de fácil manejo.
          </p>

          <h2>VISION</h2>
          <p>
            La visión de Fazlou es ser la mejor página web en la ayuda de la
            planificación de objetivos y metas de todo el mundo para el 2024.
          </p>

          {close}
        </article>

        <article
          id="sueños"
          className={`${this.props.article === 'sueños' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none', marginTop: 2 }}
        >
          <h2 className="major">ALCANZA TUS SUEÑOS</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <h2>COMO DEFINIR TUS METAS</h2>

          <form method="post" action="#">
            <div>
              {' '}
              {/*className="field half first" */}
              <label htmlFor="name">Cual es tu meta </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Ejemplo: Escribe aquí tus sueños o metas que quieras alcanzar en tu vida."
              />
            </div>

            <div>
              {' '}
              {/*className="field half"*/}
              <label htmlFor="email">Categoria de la meta</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Ejemplo: Laboral, Familiar, Educativo, Espiritual, Financiero, Deportivo."
              />
            </div>

            <div className="field">
              <label htmlFor="message1">Por que</label>
              <textarea name="message1" id="message1" rows="4"></textarea>
            </div>

            <div class="form-group col-md-4">
              <label for="inputState">Plazo</label>
              <select id="inputState" class="form-control">
                <option selected> </option>
                <option>Corto</option>
                <option>Mediano </option>
                <option>Largo</option>
              </select>
            </div>

            <div class="form-group col-md-4">
              <label for="inputState1">Prioridad</label>
              <select id="inputState1" class="form-control">
                <option selected> </option>
                <option>Alta</option>
                <option>Media </option>
                <option>Baja</option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <label for="inputState3">Complejidad</label>
              <select id="inputState3" class="form-control">
                <option selected> </option>
                <option>Alta</option>
                <option>Media alta </option>
                <option>Media </option>
                <option>Media baja</option>
                <option>Baja</option>
              </select>
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

          {close}
        </article>

        <article
          id="propuesta"
          className={`${this.props.article === 'propuesta' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">PROPUESTA DINAMICA FAZLOU</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p></p>
          {close}
        </article>
        <article
          id="cronograma"
          className={`${this.props.article === 'cronograma' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">CRONOGRAMA</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p></p>
          {close}
        </article>
        <article
          id="contacto"
          className={`${this.props.article === 'contacto' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">CONTACTO</h2>
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
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/Jose70340939"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://m.facebook.com/home.php?_rdr"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/fazlou98/"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
