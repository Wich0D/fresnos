import React from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css";
import 'boxicons';

function Login(){
    return(
        <div className="form-screen">
            <div className="form-container">
                <div className="back-button">
                    <Link to={"/"}>
                    <box-icon  type="solid" name="left-arrow-circle" color= "#694b22" size="50px"></box-icon>
                    </Link>
                </div>
                
                <h1>Inicio de Sesión</h1>
                <form action="">
                    <label htmlFor="">Correo electrónico</label>
                    <input type="email" name="" id="" />
                    <label htmlFor="">Contraseña</label>
                    <input type="password" name="" id="" />
                </form>
                <div className="signin-section">
                    <button>Iniciar sesión</button>
                    <p>¿No tienes una cuenta? Registrate ahora.</p>
                    <Link to={"/signin"}><button>Registrarse</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Login;