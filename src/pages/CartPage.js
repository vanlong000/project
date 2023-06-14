import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import FormCart from "../Components/cart/FormCart";
import { decreaseQuantity, deleteCart, increaseQuantity } from "../redux/slice/cartSlice";




export default function CartPage() {
 const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.carts);
    const { getDon } = useSelector((state) => state.products);

  if(cart === 0) return <h1>undfine...</h1>

        const handleDecreaseQuantity = (product) => {
       if (product.quantity === 1) {  
      // Nếu số lượng là 1, xóa sản phẩm khỏi giỏ hàng
       dispatch(deleteCart(product.id));
       } else {
      // Giảm số lượng đi 1
       dispatch(decreaseQuantity(product.id));
       }
       };

      const handleIncreaseQuantity = (product) => {
    // Tăng số lượng đi 1
    dispatch(increaseQuantity(product.id));
  };
    return (
     <section className="product spad">
                <div className="container">
                <div className="bodyCart">
                <div className="bodyCart-child">
              
                    <h2 className="bg-light-subtle mb-2" >Products List</h2>
                        { cart?.length > 0 ? cart.map((itemCart,index)=>{
                           const newIndex = index + 1;
                return <>
                <div key={index} className="main-cart  ">
              <table className="table">
                <thead>
                  <th>STT</th>
                  <th>Tên</th>
                  <th style={{width:402}}>Ảnh</th>
                  <th>Số Lượng</th>
                  <th>Giá</th>
                  </thead>       
                <tbody>
                  <tr >
                    <td><div className="name-product-list">{index}</div></td>
                    <td ><h4 className="name-main-list"  > {itemCart.nameFood}</h4></td>
                    <td><div className="image-product-list"><img src={itemCart.img}/></div></td>
                    <td><div className="main-btn row" >
                          <button className="add-button-main col-4"  onClick={() => handleDecreaseQuantity(itemCart)}><div style={{margin:-10}}>-</div></button>
                           <div className="add-button-main col-4">{itemCart?.quantity !== '' ? itemCart?.quantity : ''}</div>
                           <button className="add-button-main col-4" onClick={() => handleIncreaseQuantity(itemCart)}><div style={{margin:-10}}>+</div></button>
                         </div>  
                    </td> 
                    <td ><h5 className="price-main-list" style = {{ background :"white",height: 200}} >{itemCart.price * itemCart?.quantity}</h5></td>
                    <td> <button className="subtract-button" onClick={()=>{dispatch(deleteCart(itemCart))}}>
                                          delete
                          </button></td>
                  </tr>
                
                </tbody>
            </table>
            </div>
                    
                </>
            }) : <div> khong co san pham,<NavLink to='/menu'>   mua ngay</NavLink> </div>
            }
            </div>

 <FormCart cart={cart} />
            </div>
                </div>
            </section>
               
        
    )
}