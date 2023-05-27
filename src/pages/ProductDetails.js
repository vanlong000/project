import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getById } from "../redux/slice/getProductSlice";
function ProductDetails(){
  let params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getById(params.id));
  }, [params]);
  const { productId } = useSelector((state) => state.products);
    if(productId === 0 ) return <h1>undfind</h1>
    return(
      <>
     {
      productId?.map((productId,index)=>{
        console.log(productId);
        return <>
              <div key={index}  className="nav-link"  class="menu-thumb">
                    <div className="main-item-detail">
         <img src={productId?.img} class="img-fluid menu-image" alt=""/>
           <div class="menu-info  align-items-center">
               <h4 class="mb-0">{productId?.nameFood}</h4>
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
                    <p class="reviews-text mb-0 ms-4">{productId?.reviewDemo} Reviews</p>
                   </div>
                   <div>
                    <button onClick={
                         ()=>{dispatch(addToCart(productId),toast("thêm sản phẩm thành !"))}
                    }>
                        add cart
                    </button>
                   </div>
           </div>
           </div>
         </div>
        </>
      })
     }
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