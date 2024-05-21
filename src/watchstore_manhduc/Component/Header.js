/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from "react";
import '../Css/style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import axios from "axios";
import { faSearch, faCartPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import { useCart } from './CartContext.js';


function Header() {
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
          href=""
          ref={ref}
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
        >
          {children}
        </a>
      ));

      
    const [auth, setAuth] = useState(false);
    const [name, setName] = useState('')
    const [iduser, setIduser] = useState('')
    axios.defaults.withCredentials = true;
    useEffect(()=> {
        axios.get('http://localhost:4000')
        .then(res => {
            if(res.data.Status === "Success"){
                setAuth(true)
                setName(res.data.name)
                setIduser(res.data.iduser)
            }else {
                setAuth(false)
            }
        })
    }, [])
    const handleDelete = () =>{
        axios.get('http://localhost:4000/logout')
        .then(res =>{
            window.location.reload(true);
        }).catch(err => console.log(err))
    }


    const { cart } = useCart();
    const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div>
            <div className="header-top">
                <div className="logo-company">
                    
                    <Link to ="/homepage"><img src={logo} width="150px" height="75px" alt="logo" /></Link>
                </div> 
                    <Link to ="/homepage" className="link-decorate">Trang Chủ</Link>
                    <Link to="/entireproduct" className="link-decorate"> Xu Hướng 2024 </Link>
                    <Link to="/secondhand" className="link-decorate"> Hàng Cũ </Link>
                    <Link to="/contact" className="link-decorate"> Liên hệ </Link>  
                <div className="search">
                    <input type="text" placeholder="Tìm kiếm đồng hồ..." className="input-search"/>
                    <button className="btn-search">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <div>
                <Link to="/cart" className="btn-cart">
                    <FontAwesomeIcon icon={faCartPlus} />
                    {cartItemCount > 0 && <span>({cartItemCount})</span>}
                </Link>
                {
                    auth ? (
                        <Dropdown>
                            <Dropdown.Toggle as={CustomToggle} >
                                <div  className="btn-login"><FontAwesomeIcon icon={faUser}/></div>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='dropdownmenutext'>
                                <Dropdown.Item disabled className='drditem'>Hi,{name}</Dropdown.Item>
                                <Dropdown.Item className='drditem'><Link to={`/infouser/${iduser}`} className='textusser'>Thông tin người dùng</Link></Dropdown.Item>
                                <Dropdown.Item onClick={handleDelete} className='drditemlogout'>Đăng xuất</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    ) : (
                        <Link to="/login" className="btn-login">
                            <FontAwesomeIcon icon={faUser} />
                        </Link> 
                    )
                }
                </div>
            </div>
        </div>
    );
}

export default Header;
