import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, register, resetLoginStatus, logout } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const [hasAccount, setHasAccount] = useState(true);
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [forgotP, setForgotP] = useState(false);
  
    const token = useSelector(selectAuthToken);
    const error = useSelector(selectAuthError);
  
    const isLoggedIn = token !== '';
  
    const handleLogin = () => {
      dispatch(loginUser({ username, password }));
    };
  
    const handleRegister = () => {
      dispatch(registerUser({ name, lastname: lastName, username, password, role: 'USER' }));
    };
  
    useEffect(() => {
      if (token) {
        navigate('/');
      }
    }, [token, navigate]);
  
    useEffect(() => {
      if (error) {
        setForgotP(true);
      }
    }, [error]);
  
    if (isLoggedIn) return (
      <div className="container vh-100 d-flex flex-column mt-5">
        <div className="padding-nav"></div>
        <h2 className="mb-5">Mi cuenta</h2>
        <h3><span className="color-3 me-2">Nombre de usuario: </span>{username}</h3>
        <h3><span className="color-3 me-2">Nombre: </span>{name}</h3>
        <h3><span className="color-3 me-2">Apellido: </span>{lastName}</h3>
        <h3><span className="color-3 me-2">Contraseña: </span>●●●●●●●●●</h3>
        <div className="d-flex mt-5">
          <button id="acc-button-1" className="button-account background-color-2 white-1" onClick={() => navigate('/cart')}>Ver carrito</button>
          <button id="acc-button-2" className="button-account background-red-1 white-1" onClick={() => dispatch(logout())}>Cerrar sesión</button>
        </div>
      </div>
    )
  
    if (!isLoggedIn) return (
      <>
        {hasAccount ? (
          <div id="login" className="d-flex flex-column align-items-center justify-content-center">
            <div className="padding-nav"></div>
            <div id="login-form" className="background-color-1 d-flex flex-column align-items-center">
              <h3 className="fw-bold">Iniciar Sesión</h3>
              <input type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
              <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
              {forgotP && <div id="forgot-p-button" className="p-difference-button red-1">Nombre de usuario o contraseña incorrectos</div>}
              {!forgotP && <div id="margin-forgotP"></div>}
              <button className="background-color-3 white-1" onClick={handleLogin}>Iniciar Sesión</button>
            </div>
            <p className="m-2 mt-5">¿No tenés cuenta?</p>
            <button className="button-1 px-3" onClick={() => setHasAccount(false)}>Registrarse</button>
          </div>
        ) : (
          <div id="login" className="d-flex flex-column align-items-center justify-content-center">
            <div className="padding-nav"></div>
            <div id="login-form" className="background-color-1 d-flex flex-column align-items-center">
              <h3 className="fw-bold">Registrate</h3>
              <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="text" placeholder="Apellido" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              <input type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
              <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button className="background-color-3 white-1" onClick={handleRegister}>Crear cuenta</button>
            </div>
            <p className="m-2 mt-5">¿Ya tenés cuenta?</p>
            <button className="button-1 px-3" onClick={() => setHasAccount(true)}>Iniciar sesión</button>
          </div>
        )}
      </>
    );
  }
  
  export default Login;