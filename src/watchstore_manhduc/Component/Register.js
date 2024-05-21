import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { Link, useNavigate} from 'react-router-dom'



function Register() {
    const [values, setValues] = useState({
        name:'',
        email:'',
        password:'',
        samepassword:''
    })


    const navigate = useNavigate();


    
    const handleRegister = (event) =>{
        console.log(values)
        if (values.name === '' || values.email === '' || values.password === '' || values.samepassword === ''){
            alert("Không được bỏ trống")
        }else if(values.password !== values.samepassword ){
            alert("Mật Khẩu Không Khớp")
        }else {
            event.preventDefault();
            axios.post('http://localhost:4000/register', values)
            .then(res=> {
                if(res.data.Status === "duplicate"){
                    alert("Email đã tồn tại")
                }
                if(res.data.Status === "Success"){
                    alert("Đăng Kí Thành Công")
                    navigate('/login')
                }
            })
            .then(err => console.log(err));
        }
    }
    return (
        <div className="bodylogin">
            <Header/>
            <div className="login-form">
                <form onSubmit={handleRegister}>
                    <h1>Đăng Kí</h1>
                    <div className="content">
                        <div className="input-field">
                            <input 
                                type="text" 
                                placeholder="Họ và tên" 
                                onChange={(e)=> setValues({...values, name: e.target.value})}
                            />
                        </div>
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
                        <div className="input-field">
                            <input 
                                type="password" 
                                placeholder="Nhập lại password" 
                                onChange={(e)=> setValues({...values, samepassword: e.target.value})}
                            />
                        </div>
                        <Link to="/contact" className="link">Bạn Quên Mật Khẩu?</Link>
                    </div>
                    <div className="action">
                        <Link to='/login'><button type="button" className='buttonswap'>Đăng Nhập</button></Link>
                        <button type="submit">Đăng Kí</button>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
    );
}

export default Register
