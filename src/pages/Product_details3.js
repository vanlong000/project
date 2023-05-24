import React from "react";
import Menu from "./Menu";
import './body.css';
  


function Product_details3(){
    return(
    <div className="container">
            <div className="main-detail">
                <div class="menu-thumb col-4">
                    <img src="images/breakfast/louis-hansel-dphM2U1xq0U-unsplash.jpg" class="img-fluid menu-image" alt=""/>
        </div>
        <div class="menu-info d-flex flex-wrap align-items-center c0l-8">
                        <h4 class="mb-0">Burger Set</h4><span class="price-tag bg-white shadow-lg ms-4"><small>$</small>24.50</span>
                        <del class="ms-4"><small>$</small>36.50</del>
                        <div class="d-flex flex-wrap align-items-center w-100 mt-2">
                            <h6 class="reviews-text mb-0 me-3">3/5</h6>
                            <div class="reviews-stars">
                                <i class="bi-star-fill reviews-icon"></i>
                                <i class="bi-star-fill reviews-icon"></i>
                                <i class="bi-star-fill reviews-icon"></i>
                                <i class="bi-star reviews-icon"></i>
                                <i class="bi-star reviews-icon"></i>
                            </div>
                            <p class="reviews-text mb-0 ms-4">32 Reviews</p>
                        </div>
                    </div>
        </div>
    </div>
        
    )
}
export default Product_details3;