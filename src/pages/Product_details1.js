import React from "react";
import Menu from "./Menu";


function Product_details1(){
    return(
      
        <div className="nav-link" to="/product_details" class="menu-thumb">
         <img src="images/breakfast/brett-jordan-8xt8-HIFqc8-unsplash.jpg" class="img-fluid menu-image" alt=""/>
           <div class="menu-info d-flex flex-wrap align-items-center">
               <h4 class="mb-0">Fresh Start</h4>
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
                    <p class="reviews-text mb-0 ms-4">128 Reviews</p>
                   </div>
           </div>
         </div>
       
    )
}
export default Product_details1;