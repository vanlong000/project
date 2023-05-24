import React from "react";
import { NavLink, Link } from 'react-router-dom';
import Header from "../Components/ShareComponents/Header";
import './body.css';

function Menu (props){
   
        return(
            <div className="menu">
            
                <div className ="header">
                    <div className="header-items" >
                        <h1>Menu</h1>
                  
                    </div>
                    <div className="link-user">
                            <NavLink className="nav-link" to="/">TRANG CHỦ</NavLink>
                            <span className="span">/</span>
                            <NavLink className="nav-link" to="/Menu">Menu</NavLink>
                            <span className=""></span>
                        </div>
                </div>
                <div className="container">
                    <div className="category-layout">
                        <div className=" menu-left-1">
                                <h3 className="combo">Combo</h3>
                                <div className="cate-item">
                                    <ul>
                                        <li> <span className="span" > Combo 2 Người</span></li>
                                        <li> <span className="span" >Combo 4 Người</span></li>
                                        <li> <span className="span" >Combo 6 Người</span></li>
                                        <li> <span className="span" >Combo Trẻ em</span></li>
                                        <li> <span className="span" >Combo Hot</span></li>
                                    </ul>
                                </div>
                        </div>
                        <div className="menu-left-2">
                            <h3 className="drink">Đồ Uống</h3>
                            <div className="cate-item">
                            <ul>
                                <li> <span className="span" > Bia Tiger</span></li>
                                <li> <span className="span" > Bia Trúc Bạch</span></li>
                                <li> <span className="span" > Bia 333</span></li>
                                <li> <span className="span" > Bia Sài Gòn</span></li>
                                <li> <span className="span" > Bia Hà Nội</span></li>
                                <li> <span className="span" > Bia Ruby</span></li>
                                </ul>
                            </div>  
                        </div>
                    </div>
                    <div className="products">
                            <div class="row">
                                <div class="col-lg-4 col-md-6 col-12">
                                 <NavLink className="nav-link" to="/product_details1" class="menu-thumb">
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
                                  </NavLink>
                                </div>

                            <div class="col-lg-4 col-md-6 col-12">
                                <NavLink className="nav-link" to="/product_details2">
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
                                </NavLink>
                            </div>
                             <div class="col-lg-4 col-md-6 col-12">
                             <NavLink className="nav-link" to="/product_details3">
                                 <div class="menu-thumb">
                                    <img src="images/breakfast/louis-hansel-dphM2U1xq0U-unsplash.jpg" class="img-fluid menu-image" alt=""/>

                                     <div class="menu-info d-flex flex-wrap align-items-center">
                                        <h4 class="mb-0">Burger Set</h4>

                                        <span class="price-tag bg-white shadow-lg ms-4"><small>$</small>24.50</span>

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
                            </NavLink>
                            </div>

                              </div>

                            </div>

                </div>
            </div>
          
)}
        export default Menu;
        
        