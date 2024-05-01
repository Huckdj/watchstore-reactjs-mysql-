import React,{ useEffect, useState} from "react";
import { useNavigate ,Routes, Route} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const handleLogin = () => {
        axios.get(`http://localhost:4000/iduser?email=${email}&password=${password}`)
            .then(response => {
                if (response.data.success) {
                    // Hiển thị thông báo khi đăng nhập thành công
                    toast.success(response.data.message);
                    // Sau đó, thực hiện các hành động cần thiết (ví dụ: điều hướng người dùng đến trang chính)
                } else {
                    // Đăng nhập thất bại, hiển thị thông báo cho người dùng
                    console.log(response.data.message);
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <Header isLoggedIn={isLoggedIn}/>
            <div>
                <div>
                    <h2>Đăng nhập</h2>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Đăng nhập</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Login