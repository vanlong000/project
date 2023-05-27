import React, { useEffect } from "react";
import { NavLink} from 'react-router-dom';
import Header from "../Components/ShareComponents/Header";
import './body.css';
import { useDispatch, useSelector } from "react-redux";
import { getFectProdust } from "../redux/slice/getProductSlice";
function Menu (props){
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFectProdust());
      }, []);
  const { products } = useSelector((state) => state.products);
        if(products === 0 ) return <h1>undfind</h1>
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
                            <h4 class="mb-0"> mon an noi bat</h4>

                                    {products?.map((product,index)=>{
                                     return   <>
                                           <div key={index} class="col-lg-4 col-md-6 col-12">
                                 <NavLink className="nav-link" to={`/product_details/${product.id}`} class="menu-thumb">
                                  <img src={product.img} class="img-fluid menu-image" alt=""/>
                                    <div class="menu-info d-flex flex-wrap align-items-center">
                                        <h4 class="mb-0">{product.nameFood} </h4>
                                         <span class="price-tag bg-white shadow-lg ms-4"><small>$</small>{product.price}</span>
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
                                    </div>
                                  </NavLink>
                                </div>
                                        </>
                                    })}
                              </div>

                            </div>

                </div>
            </div>
          
)}
        export default Menu;
        
        