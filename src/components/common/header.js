import React from 'react';
import  logo from "../../assets/images/logo.png";
export const Header = () => {
    return(
        <nav class="navbar navbar-light" style={{ backgroundColor: '#1F2640' }}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} width="150" height="50" class="d-inline-block align-top" alt="logo" />
                </a>
            </div>
        </nav>
    );
};