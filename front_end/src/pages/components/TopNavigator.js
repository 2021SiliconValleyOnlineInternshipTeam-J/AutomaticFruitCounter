import React from 'react';
import './TopNavigator.css';
import { Link } from "react-router-dom";

const TopNavigator = () => {
    return (
        <div class="container">
            <div>
                <header>
                    <Link to='/' style={{textDecoration: "none", color: "inherit", display:"inherit"}}>
                        <img className="nav_logo" src="https://postfiles.pstatic.net/MjAyMTAxMjhfNyAg/MDAxNjExODE5NzU1Mjc4.JYIR_rf5LYxR3XQU-u7Qubj0G4g_cqbUPihbuzUo_fYg.A-2JVvtwsl_oSrO6JC-Xf05p_xCRoHEDCLqQnTG4A4Eg.PNG.te04056/white_logo.png?type=w773"/>
                        <nav style={{fontSize: '1.5em'}}>셀프 과일 계산대</nav>
                    </Link>
                </header>
            </div>
        </div>
    );
};

export default TopNavigator;