import React from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css";
import 'boxicons';

function SignIn(){
    return(
        <div className="form-screen">
            <div className="form-container">
                <div className="back-button">
                    <Link to={"/"}>
                    <box-icon  type="solid" name="left-arrow-circle" color= "#694b22" size="50px"></box-icon>
                    </Link>
                </div>
                
                <h1>Registrarse</h1>
                <form action="">
                    <label htmlFor="">Correo electrónico</label>
                    <input type="email" name="" id="" />
                    <label htmlFor="">Contraseña</label>
                    <input type="password" name="" id="" />
                    <label htmlFor="">Confirmar Contraseña</label>
                    <input type="password" name="" id="" />
                </form>
                <div className="signin-section">
                    <button>Regístrate</button>
                    
                </div> 
            </div>
        </div>
    );
}

export default SignIn;