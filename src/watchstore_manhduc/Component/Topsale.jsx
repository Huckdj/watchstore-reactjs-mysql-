import React, {useEffect, useState} from "react";
import '../Css/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from 'jquery';
import 'jquery';
import 'slick-carousel';




function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN').format(price);
}
const imagesdata = [
    {images:"https://i.imgur.com/98IyUSG.png"},
    {images:"https://i.imgur.com/A8V1DjD.png"},
    {images:"https://i.imgur.com/ciY8ENw.png"},
    {images:"https://i.imgur.com/jbZt8Yn.png"}
  ];
  $(document).ready(function(){
    $('.luxury-content').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
    });
    })
function Topsale(){
    const [topsale, setTopsale] =useState([]);
    useEffect(() => {
        const fectchAllWatch =  async () =>{
            try{
                const res = await axios.get("http://localhost:4000/topsale")
                setTopsale(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fectchAllWatch()
      },[]);

    return(
        <div className="topsale-body">
            <div className="slider-container">
                <div className="luxury-content">
                    {imagesdata.map((item, index) => (
                                <img src={item.images} width="500px" />
                    ))}
                </div>
            </div>
            <div>
                
            </div>
            <div className="text-topsale-content">
                <FontAwesomeIcon icon={faMedal} className="icon-topsale"/><h4 className="top-sale-text">BÁN CHẠY NHẤT HIỆN TẠI</h4>
            </div>
            <div class="container">
                <div class="row row-cols-5">
                        {topsale.map(topsale => (
                            <div key={topsale.id} className="container-topsale">
                                <div class="col product-topsale">
                                    <Link to = {`/watch_detail/${topsale.id}`} className="intro-product-link">
                                            <img src={topsale.images} />
                                            <h4 className="name-product">{topsale.namewatch}</h4>
                                            <p className="price">{formatPrice(topsale.pricewatch)}₫</p>
                                            <p className="discount">{formatPrice(topsale.discount)}₫</p>
                                            <p className="amount_sell">Số lượng đã bán : {topsale.numbersell}</p> 
                                    </Link>
                                </div>
                            </div>
                        ))}
                    
                </div>
            </div>
        </div>
    )
}
export default Topsale