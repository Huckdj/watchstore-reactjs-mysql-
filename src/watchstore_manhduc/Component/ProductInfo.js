/* eslint-disable jsx-a11y/alt-text */
import React , {useState, useEffect} from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer"
import Button from 'react-bootstrap/Button'
import { faBox, faCheck, faThumbsUp, faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import axios from "axios";
import { useCart } from './CartContext.js';


function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN').format(price);
}
function calculateDiscountPercentage(originalPrice, discountedPrice) {
    const discountPercentage = ((originalPrice - discountedPrice) / originalPrice) * 100;
    return Math.abs(discountPercentage.toFixed(0));
}
const ProductInfo = ({watchInfo, product }) => {
    const [watch_detail, setWatchs] =useState([]);
    useEffect(() => {
        const fectchAllWatch =  async () =>{
            try{
                const res = await axios.get("http://localhost:4000/watch_detail/")
                setWatchs(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fectchAllWatch()
      },[]);
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1
      };

      const { addToCart } = useCart();
 return(
    <div className="full-body-product-info">
        <Header/>
        <div className="body-product-info">
            {watchInfo.map(watchs => (
                <div>
                <div key={watchs.id} className="container-img-product">
                        <div className="img-andname">
                            <div className="name-product-detail">
                                <h4 className="name-product-detail-1">{watchs.namewatch}</h4>
                                <p className="id-product-detail">Mã sản phẩm: {watchs.id}</p>
                            </div>
                            <div className="img-product-info">
                            <img src={watchs.images} width="100%"/>
                            </div>
                        </div>
                        <div className="product-and-price">
                            <div className="price-product right-align">
                                <p className="price-product-main">{formatPrice(watchs.pricewatch)}₫</p>
                                <p className="price-discount">{formatPrice(watchs.discount)}₫</p>
                                <p className="percent-discount">-{calculateDiscountPercentage(watchs.pricewatch, watchs.discount)}%</p>
                            </div>
                            <div className="right-align d-flex gap-2">
                                <Button variant="primary" className="text-buttonbuy" size="lg" onClick={() => addToCart(product)}>
                                    <p className="text-buttonbuy">
                                        Mua Ngay - FreeShip
                                    </p>
                                    <p className="text-buttonbuy-2">Kiểm tra hàng trước khi thanh toán</p>
                                </Button>
                                <Button variant="outline-primary" size="lg">
                                    <p className="text-buttonbuy">
                                        Trả góp Fundiin
                                    </p>
                                    <p className="text-buttonbuy-2">Mua trước trả sau 0% lãi</p>
                                </Button>
                            </div>
                            <div className="call-info">
                                <p className="call-buy">Gọi Mua Hàng: </p>
                                <a href="tel:+8493182222" className="phone-link">093 189 2222</a><span> - </span><a href="tel:+84971893333" className="phone-link">097 189 3333</a>
                            </div>
                            <div>
                                <div className="textcamket"> Cam Kết Của Tân Bằng Store </div>
                                <div className="contentcamket"> 
                                    <div className="check1">
                                        <div className="contentcheck">
                                            <FontAwesomeIcon icon={faBox} className="boxicon"/> 
                                            <span>Cam kết Chính Hãng</span>
                                        </div>
                                        <div className="contentcheck">
                                            <FontAwesomeIcon icon={faCheck} className="boxicon"/> 
                                            <span>Bảo hành 5 năm</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="contentcheck">
                                            <FontAwesomeIcon icon={faThumbsUp} className="boxicon"/> 
                                            <span>Freeship toàn quốc</span>
                                        </div>
                                        <div className="contentcheck">
                                            <FontAwesomeIcon icon={faRotate} className="boxicon"/> 
                                            <span>Hoàn tiền 100% nếu hàng giả</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <p className="title-chinhanh">Chi Nhánh (Mở Cửa Từ 8h - 22h)</p>
                                <div className="list-branch">
                                    <div className="info-branch">
                                        <p className="info21">97 Trần Đại Nghĩa, HBT, Hà Nội <span>Còn hàng</span></p>
                                        <a href="tel:+8493182222" className="phone-link">093 189 2222</a>
                                        <hr></hr>
                                    </div>
                                    <div className="info-branch">
                                        <p className="info21">58 Trần Đăng Ninh, Cầu Giấy, Hà Nội <span>Còn hàng</span></p>
                                        <a href="tel:+8493182222" className="phone-link">093 189 2222</a>
                                        <hr></hr>
                                    </div>
                                    <div className="info-branch">
                                        <p className="info21">90 Lê Văn Sỹ, P11, Phú Nhuận, HCM <span>Còn hàng</span></p>
                                        <a href="tel:+8493182222" className="phone-link">093 189 2222</a>
                                        <hr></hr>
                                    </div>
                                    <div className="info-branch">
                                        <p className="info21">61 Quang Trung, P10, Gò Vấp, HCM <span>Còn hàng</span></p>
                                        <a href="tel:+8493182222" className="phone-link">093 189 2222</a>
                                        <hr></hr>
                                    </div>
                                    <div className="info-branch">
                                        <p className="info21">193 Lê Quang Định, Bình Thạnh, HCM <span>Còn hàng</span></p>
                                        <a href="tel:+8493182222" className="phone-link">093 189 2222</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                
            </div>
                    ))}
        </div>
        <div className="bodygoidy">
            <h6>Có thể bạn sẽ thích</h6>
            <Slider {...settings}>
                {Array.isArray(watch_detail) && watch_detail.map(watchs => (
                    <div key={watchs.id} className="abx">
                        <Link to = {`/watch_detail/${watchs.id}`} className="intro-product-link">
                            <img src={watchs.images} className="imgcontrol"/>
                            <div className="infotext">
                                <h4 className="name-product2">{watchs.namewatch}</h4>
                                <p className="price">{formatPrice(watchs.pricewatch)}₫</p>
                                <p className="discount">{formatPrice(watchs.discount)}₫</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
        <Footer/>
    </div>
 )
}
export default ProductInfo
