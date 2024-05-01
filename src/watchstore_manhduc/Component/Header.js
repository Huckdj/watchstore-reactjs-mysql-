import React from "react";
import '../Css/style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import { faSearch, faCartPlus, faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <div>
            <div className="header-top">
                <div className="logo-company">
                    
                    <Link to ="/homepage"><img src={logo} width="150px" height="75px" alt="logo" /></Link>
                </div> 
                    <Link to ="/homepage" className="link-decorate">Trang Chủ</Link>
                    <Link to="/sale" className="link-decorate"> Giảm Giá Sốc </Link>
                    <Link to="/secondhand" className="link-decorate"> Hàng Cũ </Link>
                    <Link to="/contact" className="link-decorate"> Liên hệ </Link>  
                <div className="search">
                    <input type="text" placeholder="Tìm kiếm đồng hồ..." className="input-search"/>
                    <button className="btn-search"><FontAwesomeIcon icon={faSearch} /></button>
                </div>
                <div>
                <Link to="/cart" className="btn-cart">
                    <FontAwesomeIcon icon={faCartPlus} />
                </Link>
                <Link to="/login" className="btn-login">
                    <FontAwesomeIcon icon={faUser} />
                </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
