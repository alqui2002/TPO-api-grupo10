import React, { useState } from 'react';

const Login = () => {
    const [hasAccount, setHasAccount] = useState('yes');

    const renderLogIn = () => {
        switch (hasAccount) {
            case 'no':
                return (
                    <div className="d-flex flex-column align-items-center">
                        <form id="admin-form" className="background-color-1 d-flex flex-column align-items-center">
                            <h3 className="fw-bold">Registrate</h3>
                            <input type="text" name="title" placeholder="Nombre" />
                            <input type="text" name="title" placeholder="Apellido" />
                            <input type="text" name="title" placeholder="Usuario" />
                            <input type="text" name="subtitle" placeholder="Contraseña" />
                            <button>Crear cuenta</button>
                        </form>
                        <p className="m-2">¿Ya tenés cuenta?</p>
                        <button className="button-1" onClick={() => setHasAccount("yes")}>Iniciar sesión</button>
                    </div>
                );
            default:
                return(
                    <div className="d-flex flex-column align-items-center">
                        <form id="admin-form" className="background-color-1 d-flex flex-column align-items-center">
                            <h3 className="fw-bold">Iniciar Sesión</h3>
                            <input type="text" name="title" placeholder="Usuario" />
                            <input id="admin-input-2" type="text" name="subtitle" placeholder="Contraseña" />
                            <button>Iniciar Sesion</button>
                        </form>
                        <p className="m-2">¿No tenés cuenta?</p>
                        <button className="button-1" onClick={() => setHasAccount("no")}>Registrarse</button>
                    </div>
                );
        }
    }


    return (
        <div id="admin" className="background-color-0 d-flex align-items-center justify-content-center">
            <div className="padding-nav"></div>
            {renderLogIn()}
        </div>
    );
}

export default Login;