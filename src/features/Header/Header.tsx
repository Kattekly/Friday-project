import React from 'react';
import {Link} from "react-router-dom";
import s from "./Header.module.css"

const Header = () => {
    return (
        <nav className={s.nav}>
            <div>
                <div>
                    <Link to="/profile">Profile</Link>
                </div>
                <div>
                    <Link to="/login">Login</Link>
                </div>
                <div>
                    <Link to="/signUp">SignUp</Link>
                </div>
                <div>
                    <Link to="/recoveryPassword">RecoveryPassword</Link>
                </div>
                <div>
                    <Link to="/newPassword">NewPassword</Link>
                </div>
                <div>
                    <Link to="/404">NotFound</Link>
                </div>
                <div>
                    <Link to="/testComponents">SuperComponents</Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;