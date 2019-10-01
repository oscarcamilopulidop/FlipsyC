import React, { useState, useEffect, useContext } from 'react'
import { Input, Button } from 'antd'
import '../Styles/MainLogin.css'
import { withRouter } from 'react-router-dom'

const MainLogin = props => {

    const [loginCredentials, setLoginCredentials] = useState({ email: "", password: "" })

    const Login = () => {
        alert("Loging in")
    }

    return (
        <div className='login-main-container'>
            <div className="img-logo-container">
                <img className="img-logo" src={require('../Assets/LogoLogin.PNG')} alt="" />
            </div>

            <section className="form-container">
                <Input className="input" placeholder="Correo Electrónico" onChange={(e) => setLoginCredentials({ ...loginCredentials, email: e.target.value })} />

                <Input className="input" placeholder="Contraseña" onChange={(e) => setLoginCredentials({ ...loginCredentials, password: e.target.value })} type="password" />

            </section>

            <section className="login-btn-container">
                <Button type="primary" onClick={Login}> Iniciar Sesiónss </Button>
            </section>

            <section className="final-options">
                <p>¿Olvidaste la contraseña? <a href="#"> Click aquí </a> </p>
                <p>¿No tiene cuenta? <a onClick={() => props.history.push('signup')}> Regístrate aquí </a> </p>
            </section>
        </div>
    )
}

export default withRouter(MainLogin)
