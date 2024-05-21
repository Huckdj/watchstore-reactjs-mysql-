import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [values, setValues] = useState({
        email:'',
        password:''
    })
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const handleLogin = (event) =>{
        event.preventDefault();
        if (values.email === '' || values.password === ''){
            alert("Không thể bỏ trống")
        }else{
        axios.post('http://localhost:4000/login', values)
        .then(res=> {
            if(res.data.Status === "Success"){
                alert("Đăng nhập thành công")
                navigate('/')
            }
            else(
                alert(res.data.Error)
            )
            console.log(res)
        })
        .then(err => console.log(err));
        }
    }

    return (
        <div className="bodylogin">
            <Header/>
            <div className="login-form">
                <form onSubmit={handleLogin}>
                    <h1>Đăng Nhập</h1>
                    <div className="content">
                        <div className="input-field">
                            <input 
                                type="email" 
                                placeholder="Email" 
                                onChange={(e)=> setValues({...values, email: e.target.value})}
                            />
                        </div>
                        <div className="input-field">
                            <input 
                                type="password" 
                                placeholder="Password" 
                                onChange={(e)=> setValues({...values, password: e.target.value})}
                            />
                        </div>
                        <Link to="/contact" className="link">Bạn Quên Mật Khẩu?</Link>
                    </div>
                    <div className="action">
                        <Link to='/register'><button type="button">Đăng Kí</button></Link>
                        <button type="submit">Đăng Nhập</button>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
    );
}

export default Login;
