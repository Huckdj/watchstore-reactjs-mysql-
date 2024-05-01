import React,{useEffect, useState} from "react";
import '../Css/style.css'
import 'react-slideshow-image/dist/styles.css';
import  {Slide }  from 'react-slideshow-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faRocket, faRightLeft, faMedal, faCreditCard, faLeftLong,faLeftRight, faRightLong } from '@fortawesome/free-solid-svg-icons';
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Topsale from "./Topsale.jsx";
import $ from 'jquery';
import 'jquery';
import 'slick-carousel';
import Footer from "./Footer.js";


//import image
import slideshow1 from '../img/slideshow1.png'
import slideshow2 from '../img/slideshow2.png'
import slideshow3 from '../img/slideshow3.png'
import slideshow4 from '../img/slideshow4.png'


//list-product
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
  };
  //list-confirm
const introdata = [
    { icon: faClock, title: 'Mẫu mã đa dạng nhất', description: 'Hoàn tiền 10 lần nếu phát hiện hàng giả' },
    { icon: faRocket, title: 'Miễn phí vận chuyển', description: 'Giao hàng nhanh, đóng gói cẩn thận' },
    { icon: faRightLeft, title: 'Đổi hàng 7 ngày', description: '1 đổi 1 trong 7 ngày với sản phẩm lỗi' },
    { icon: faMedal, title: 'Bảo hành 5 năm', description: 'Thụ tục nhanh gọn, thay pin miễn phí' },
    { icon: faCreditCard, title: 'Trả góp 0%', description: 'Hỗ trợ trả góp với lãi xuất 0% với thẻ creadit' }
  ];
const dataimgfeedback =[
  {img: 'https://i.imgur.com/XZmN0Fs.png'},
  {img: 'https://i.imgur.com/LSrctXD.png'},
  {img: 'https://i.imgur.com/dp5qj3w.png'},
  {img: 'https://i.imgur.com/tMCji7m.png'},
  {img: 'https://i.imgur.com/jqw2JNl.png'},
  {img: 'https://i.imgur.com/IOXijF6.png'},
  {img: 'https://i.imgur.com/bXKyje8.png'},
]
  //list-images
const images = [slideshow1, slideshow2, slideshow3, slideshow4];

function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN').format(price);
}
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",color:"#211010",marginRight: "1.5%", padding:"5px",borderRadius:"30px 30px 30px 30px",zIndex:"9999",paddingRight:"2%",height:"25px", width:"25px",paddingLeft:"3px"}}
        onClick={onClick}
      />
    );
  }
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",marginLeft: "1.5%", padding:"5px",borderRadius:"30px 30px 30px 30px",zIndex:"9999",paddingRight:"2%",height:"25px", width:"25px",paddingLeft:"3px"}}
        onClick={onClick}
      />
    );
}

$(document).ready(function(){
  $('.feedback-img').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows:false,
  });
  })

function Home(){
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

      var settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        className:"center",
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
      <div>
        <div>
          <div className="slide-show">
                  <Slide>
                      {images.map((image, index) => (
                          <div key={index} className="each-slide-effect">
                              <div style={{ 'backgroundImage': `url(${image})` }}>
                              </div>
                          </div>
                      ))}
                  </Slide>
          </div>
        </div>
        <div className="body-home">
            <div className="intro-home-first">
              {introdata.map((item, index) => (
                <div className="intro-home-1" key={index}>
                  <div className="icon-intro">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                <div className="text-intro">
                  <h4 className="h4-textintro">{item.title}</h4>
                  <p>{item.description}</p>
                </div>
                </div>
              ))}
            </div>
            <div className="product-slide-show-body">
                <div className="product-slide-show">
                    <img src="https://i.imgur.com/ZRJscAe.png"/>
                    <div className="slider-container">
                        <div className="container-product-intro">
                            <Slider {...settings}>
                                    {watch_detail.map(watchs => (
                                        <div key={watchs.id} className="container-img">
                                            <Link to = {`/watch_detail/${watchs.id}`} className="intro-product-link">
                                                <img src={watchs.images} />
                                                <h4 className="name-product">{watchs.namewatch}</h4>
                                                <p className="price">{formatPrice(watchs.pricewatch)}₫</p>
                                                <p className="discount">{formatPrice(watchs.discount)}₫</p>
                                            </Link>
                                        </div>
                                    ))}
                            </Slider>
                            <Link to="/intro" className="button-more">
                                Xem thêm  
                            </Link>
                        </div>
                    </div>  
                </div>
            </div>
            <Topsale />
        </div>
        <div className="intro-content-footer">
            <img src="https://i.imgur.com/qUCjtv7.png" />
            <div>
              <img src="https://i.imgur.com/c0pNMv6.png" className="logo-intro"/>
              <h4> Cửa Hàng Đồng Hồ Tân Bằng</h4>
              <p>Được thành lập vào năm 2020, trải qua hơn 3 năm hoạt động và phát triển, WatchStore trở thành đại lý ủy quyền cho rất nhiều thương hiệu đến từ Nhật Bản và Thụy Sỹ chuyên bán đồng hồ chính hãng Chính sách bảo hành 5 năm cùng với các chương trình giảm giá tốt sẽ giúp bạn mua sắm dễ dàng. Với đội ngũ nhân viên tận tình, am hiểu về đồng hồ, WatchStore rất vui được phục vụ quý khách</p>                         
            </div>                  
        </div>
        <div className="feedback-img">
          {dataimgfeedback.map((image, index) => (
            <div key={index}>
                <img src={image.img}/>
            </div>
          ))}
        </div>
        <Footer/>
      </div>
    )
};


export default Home
