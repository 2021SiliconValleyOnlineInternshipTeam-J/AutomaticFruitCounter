import React from 'react';
import './TopNavigator.css';
import { Link } from "react-router-dom";
import imgfile from '../logo/white_logo.png';

const TopNavigator = () => {
    return (
        <div class="container">
            <div>
                <header>
                    <Link to='/' style={{textDecoration: "none", color: "inherit", display:"inherit"}}>
                        <img className="nav_logo" src={imgfile}/>
                        <nav style={{fontSize: '1.5em'}}>셀프 과일 계산대</nav>
                    </Link>
                </header>
            </div>
        </div>
    );
};

export default TopNavigator;
