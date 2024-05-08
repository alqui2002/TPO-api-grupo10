import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "../assets/css/login.css";

const Login = () => {
    const navigate = useNavigate();
    const [hasAccount, setHasAccount] = useState('yes');
    const [forgotP, setForgotP] = useState('no');

    const renderForgotP = () => {
        switch (forgotP) {
            case 'no':
                return (
                    <button id="forgot-p-button" onClick={() => setForgotP('yes :(')}><h6>¿Te olvidaste tu contraseña?</h6></button>
                );
            default:
                return (
                    <div id="forgot-p-button" className="p-difference-button">Te ha llegado un mail a tu casilla de correo</div>
                );
        }
    }

    const renderLogIn = () => {
        switch (hasAccount) {
            case 'no':
                return (
                    <div className="d-flex flex-column align-items-center">
                        <div className="padding-nav"></div>
                        <form id="login-form" className="background-color-1 d-flex flex-column align-items-center">
                            <h3 className="fw-bold">Registrate</h3>
                            <input type="text" name="title" placeholder="Nombre" />
                            <input type="text" name="title" placeholder="Apellido" />
                            <input type="text" name="title" placeholder="Usuario" />
                            <input type="text" name="subtitle" placeholder="Contraseña" />
                            <button className="background-color-3 white-1" onClick={() => navigate('/')}>Crear cuenta</button>
                        </form>
                        <p className="m-2 mt-5">¿Ya tenés cuenta?</p>
                        <button className="button-1 px-3" onClick={() => setHasAccount("yes")}>Iniciar sesión</button>
                    </div>
                );
            default:
                return(
                    <div className="d-flex flex-column align-items-center">
                        <div className="padding-nav"></div>
                        <form id="login-form" className="background-color-1 d-flex flex-column align-items-center">
                            <h3 className="fw-bold">Iniciar Sesión</h3>
                            <input type="text" name="title" placeholder="Usuario" />
                            <input id="login-input-2" type="text" name="subtitle" placeholder="Contraseña" />
                            {renderForgotP()}
                            <button className="background-color-3 white-1" onClick={() => navigate('/')}>Iniciar Sesion</button>
                        </form>
                        <p className="m-2 mt-5">¿No tenés cuenta?</p>
                        <button className="button-1 px-3" onClick={() => setHasAccount("no")}>Registrarse</button>
                    </div>
                );
        }
    }

    return (
        <div id="login" className="background-color-0 d-flex align-items-center justify-content-center">
            {renderLogIn()}
        </div>
    );
}

export default Login;