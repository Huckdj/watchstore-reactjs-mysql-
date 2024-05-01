import Login from "./Login";
import React,{ useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";


function InfoUser(setIsLoggedIn) {
    const navigate = useNavigate();
    const handleLogout = () => {
    // Thực hiện các xử lý đăng xuất (ví dụ: xóa token, đặt isLoggedIn thành false)
    setIsLoggedIn(false);
    // Sau đó, thực hiện điều hướng người dùng về trang đăng nhập
    navigate("/Login");
};
    return (
        <div>
            <h1>Thông Tin Người Dùng</h1>
            <p>Thông tin chi tiết của người dùng sẽ được hiển thị ở đây.</p>
            <button onClick={handleLogout}>Đăng nhập</button>
        </div>
    );
}

export default InfoUser;
