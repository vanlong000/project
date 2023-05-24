import React, { useEffect } from "react";
import { products } from "../product";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ProductDetails(){
  let { id } = useParams();
  const dispatch = useDispatch();

  let product = products.find((product) => product.id === parseInt(id));
    return(
      <>
                <div  className="nav-link"  class="menu-thumb">
                    <div className="main-item-detail">

                   
         <img src={product.img} class="img-fluid menu-image" alt=""/>
           <div class="menu-info  align-items-center">
               <h4 class="mb-0">{product.nameFood}</h4>
                <span class="price-tag bg-white shadow-lg ms-4"><small>$</small>24.50</span>
                   <div class="d-flex flex-wrap align-items-center w-100 mt-2">
                    <h6 class="reviews-text mb-0 me-3">4.4/5</h6>
                    <div class="reviews-stars">
                       <i class="bi-star-fill reviews-icon"></i>
                       <i class="bi-star-fill reviews-icon"></i>
                       <i class="bi-star-fill reviews-icon"></i>
                       <i class="bi-star-fill reviews-icon"></i>
                       <i class="bi-star reviews-icon"></i>
                    </div>
                    <p class="reviews-text mb-0 ms-4">{product.reviewDemo} Reviews</p>
                   </div>
                   <div>
                    <button onClick={
                         ()=>{dispatch(addToCart(product),toast("thêm sản phẩm thành !"))}
                    }>
                        add cart
                    </button>
                   </div>
           </div>
           </div>
         </div>
         <ToastContainer position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />

      </>
  
       
    )
}
export default ProductDetails;