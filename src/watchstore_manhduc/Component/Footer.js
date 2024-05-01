import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
function Footer(){
    return(
        <div className="footer-content">
            <div className="footer-content-s">
                <div className="policy-footer">
                    <p className="first-footer-content">Chính Sách</p>
                    <p className="policy-info">Điều Khoản Thanh Toán</p>
                    <p className="policy-info">Chính Sách Bảo Hành</p>
                    <p className="policy-info">Chính sách bảo mật</p>
                    <p className="policy-info">Chính sách vận chuyển</p>
                    <p className="policy-info">Chính sách đổi trả</p>
                </div>
                <div className="policy-footer">
                    <p className="position-content">HÀ NỘI</p>
                    <p className="position-info"><FontAwesomeIcon icon={faLocationDot} className="icon-position"/> 97 Trần Đại Nghĩa, HBT, Hà Nội
                    <span className="time-open-close">Mở cửa: 8h30 - 22h45</span>
                    </p>
                    <p className="position-info"><FontAwesomeIcon icon={faLocationDot} className="icon-position"/> 58 Trần Đăng Ninh, Cầu Giấy, Hà Nội 
                    <span className="time-open-close">Mở cửa: 8h30 - 22h00</span>
                    </p>
                    <p className="position-content">TP.Hồ Chí Minh</p>
                    <p className="position-info"><FontAwesomeIcon icon={faLocationDot} className="icon-position"/> 90 Lê Văn Sỹ, P11, Phú Nhuận, HCM
                    <span className="time-open-close">Mở cửa: 8h30 - 22h00</span>
                    </p>
                    <p className="position-info"><FontAwesomeIcon icon={faLocationDot} className="icon-position"/> 61 Quang Trung, P10, Gò Vấp, HCM 
                    <span className="time-open-close">Mở cửa: 8h30 - 22h00</span>
                    </p>
                    <p className="position-info"><FontAwesomeIcon icon={faLocationDot} className="icon-position"/> 193 Lê Quang Định, Bình Thạnh, HCM 
                    <span className="time-open-close">Mở cửa: 8h30 - 22h00</span>
                    </p>
                </div>
                <div className="policy-footer">
                    <p className="first-footer-content">LIÊN HỆ HỖ TRỢ</p>
                    <p className="policy-info">Hotline 1: 0987712456</p>
                    <p className="policy-info">Hotline 2: 0983712456</p>
                    <p className="policy-info">Hotline 3: 0965712456</p>
                    <p className="policy-info">Email: info@watchstoretanbang.vn</p>
                    <p className="first-footer-content">Theo Dõi Hoặc Liên Hệ Chúng Tôi Tại</p>
                    <div className="icon-contact">
                        <a href="#"><img src="https://i.imgur.com/KN43BdV.png" className="icon-contact-img"/></a>
                        <a href="#" className="icon-contact-img-s"><img src="https://i.imgur.com/VrBQCE5.png" className="icon-contact-img"/></a>
                    </div>
                </div>
            </div>
            <div className="info-contact">
                <p>©2020-2024 by watchstoretanbang. Hotline: 098.771.2456 / Email: info@watchstoretanbang.vn. license by Công ty TNHH Tân Bằng WatchStore </p>
            </div>
        </div>
    )
}
export default Footer