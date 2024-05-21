/* eslint-disable jsx-a11y/alt-text */
import React,{useEffect, useState} from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import { Link } from "react-router-dom";

function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN').format(price);
}
function calculateDiscountPercentage(originalPrice, discountedPrice) {
    const discountPercentage = ((originalPrice - discountedPrice) / originalPrice) * 100;
    return Math.abs(discountPercentage.toFixed(0));
}


function EntireProduct(){
    const [watchEntire, setWatchs] = useState([]);
    useEffect(() => {
        const fectchAllWatch =  async () =>{
            try{
                const res = await axios.get("http://localhost:4000/watchEntire/")
                setWatchs(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fectchAllWatch()
      },[]);

    return(
        <>
        <Header />
        <div className="bodyfullproduct">
            <Container>
                <Row xs={2} md={4} lg={4}>
                    
                        {Array.isArray(watchEntire) && watchEntire.map(watchs => (
                            <div key={watchs.id} className="container-img2">
                                <Col>
                                    <Link to = {`/watch_detail/${watchs.id}`} className="intro-product-link">
                                        <img src={watchs.images} className="imgsize"/>
                                        <h4 className="name-product">{watchs.namewatch}</h4>
                                        <p className="price">{formatPrice(watchs.pricewatch)}₫</p>
                                        <div className="pricefull">
                                            <p className="discount">{formatPrice(watchs.discount)}₫</p>
                                            <p className="percent-discount2">-{calculateDiscountPercentage(watchs.discount, watchs.pricewatch)}%</p>
                                        </div>
                                    </Link>
                                </Col>
                            </div>
                        ))}
                </Row>
            </Container>
        </div>
        <Footer />
        </>
        
    );
}
export default EntireProduct;