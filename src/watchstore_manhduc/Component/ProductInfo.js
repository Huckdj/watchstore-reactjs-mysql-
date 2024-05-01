import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer"

function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN').format(price);
}
const ProductInfo = ({watchInfo}) => {
 return(
    <div className="full-body-product-info">
        <Header/>
        <div className="body-product-info">
            {watchInfo.map(watchs => (
                <div key={watchs.id} className="container-img-product">
                    <div className="name-and-img">
                        <div>
                            <div className="name-product-detail">
                                <h4 className="name-product-detail-1">{watchs.namewatch}</h4>
                                <p className="id-product-detail">Mã sản phẩm: {watchs.id}</p>
                            </div>
                            <img src={watchs.images} />
                        </div>
                    
                        <div className="product-and-price">
                            <div className="price-product">
                                <p className="price-product-main">{formatPrice(watchs.pricewatch)}₫</p>
                                <p className="price-discount">{formatPrice(watchs.discount)}₫</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <Footer/>
    </div>
 )
}
export default ProductInfo
