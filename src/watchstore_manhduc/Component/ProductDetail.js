import React,{useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProuctInfo from "./ProductInfo.js"
import ProductInfo from "./ProductInfo.js";

function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN').format(price);
}

const ProductDetail = () =>{
    const { id } = useParams()
    console.log(useParams())
    const [watchInfo, setWatchInfo] = useState();
    useEffect(() => {
            axios.get(`http://localhost:4000/watch_detail/${id}`)
            .then (res => setWatchInfo(res.data)
            )
      },[id]);
    return (
        <div>
            {watchInfo && <ProductInfo watchInfo ={watchInfo} /> }
        </div>
    )
    
}
export default ProductDetail