import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props => 
    <aside className="menu-area">
        <nav className="menu">
            {/*Refatorar em casa, criar outro componente, 
            ex: NavItems.jsx, igual foi feito do Header.jsx*/}
            <Link to="/">
                <i className="fa fa-home"></i> Inicio
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i> Usuários
            </Link>
        </nav>
    </aside>