import React from "react";
import Menu from "./Menu";


function Product_details2(){
    return(
        <div class="menu-thumb">
        <img src="images/breakfast/lucas-swennen-1W_MyJSRLuQ-unsplash.jpg" class="img-fluid menu-image" alt=""/>

        <div class="menu-info d-flex flex-wrap align-items-center">
         <h4 class="mb-0">Baked Creamy</h4>

             <span class="price-tag bg-white shadow-lg ms-4"><small>$</small>16.50</span>

             <div class="d-flex flex-wrap align-items-center w-100 mt-2">
                <h6 class="reviews-text mb-0 me-3">3/5</h6>

             <div class="reviews-stars">
                    <i class="bi-star-fill reviews-icon"></i>
                     <i class="bi-star-fill reviews-icon"></i>
                    <i class="bi-star-fill reviews-icon"></i>
                    <i class="bi-star reviews-icon"></i>
                    <i class="bi-star reviews-icon"></i>
                </div>

                <p class="reviews-text mb-0 ms-4">64 Reviews</p>
             </div>
        </div>
    </div>
    )
}
export default Product_details2;