import React from "react";
import { useEffect, useState } from "react";
import { database } from "../../db";
import UserContext from "../context/UserContext";
import styled from "@emotion/styled";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import 'react-datepicker/dist/react-datepicker.css';
export default function FormCart({cart}) {
    const [pay, setPay] = useState([{}]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState({});
    const {state, dispatch } = React.useContext(UserContext);

    const handleInput = (e) => {
        pay[e.target.name] = e.target.value;
        setPay(pay);
        console.log(pay);
    }
    // const l = database.cartlist.length;
    // console.log(l);
 
    if(cart.length === 0) return <h1>..undfind</h1>
    let Sumtotal = cart.reduce( (total, currentValue) =>{
        return total + currentValue.price;
        }, 0);

            const handleSubmit = (values) => {
              // Xử lý logic khi submit form
              console.log(values);
              setValue(values)
            };
            
const initialValues = {
    hoten: '',
    sodienthoai: '',
    email: '',
    coso: '',
    diachi: '',
    gio: '',
    ngay: null,
  }


    return (
        <div className="form ">
            
            <h6 className="text-bg-danger" style={{textAlign :"center"}}>Thông tin đặt hàng</h6>
      
            

            <Formik
        initialValues={initialValues}
        validationSchema=''
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="col-12">
            <label htmlFor="hoten">Họ tên:</label>
            <Field type="text" id="hoten" name="hoten" />
            <ErrorMessage name="hoten" component="div" />
          </div >

          <div className="col-12">
            
            <label htmlFor="sodienthoai">Số điện thoại:</label>
            <Field type="text" id="sodienthoai" name="sodienthoai" />
            <ErrorMessage name="sodienthoai" component="div" />
          </div>

          <div className="col-12">
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div className="col-12">
            <label htmlFor="diachi">dia chi:</label>
            <Field type="text" id="text" name="text" />
            <ErrorMessage name="text" component="div" />
          </div>
          <div>

                            

            <label htmlFor="coso">Cơ sở:</label>
            <Field as="select" id="coso" name="coso">
            <option defaultValue={"default"}>Vui lòng chọn địa chỉ nhà hàng</option>
                        <option value='BÒ TƠ QUÁN MỘC CS1 HÀ NỘI'>BÒ TƠ QUÁN MỘC CS1 HÀ NỘI</option>
                        <option value='BÒ TƠ QUÁN MỘC CS2 HÀ NỘI'>BÒ TƠ QUÁN MỘC CS2 HÀ NỘI</option>
                        <option value='BÒ TƠ QUÁN MỘC CS1 SÀI GÒN'>BÒ TƠ QUÁN MỘC CS1 SÀI GÒN</option>
                        <option value='BÒ TƠ QUÁN MỘC CS2 SÀI GÒN'>BÒ TƠ QUÁN MỘC CS2 SÀI GÒN</option>
            </Field>
            <ErrorMessage name="coso" component="div" />
          </div>

          <div>

          <div>
            <label htmlFor="ngay">Ngày:</label>
            <Field type="date" id="ngay" name="ngay" />
            <ErrorMessage name="ngay" component="div" />
          </div>


            <label htmlFor="gio">gio:</label>
            <Field as="select" id="gio" name="gio">
            <option defaultValue={"default"}>gio</option>
            {
                                [...Array(24).keys()].map((i) => {
                                    if (7 <= i && i <= 21) {
                                        return (
                                            <option value={i} key={i}>{i} giờ</option>
                                        )
                                    }
                                })

                            }
            </Field>
            <ErrorMessage name="gio" component="div" />
            </div>

          <button  onClick={()=>{ setOpen(!open) }} type="submit">Đăng ký</button>
        </Form>
      </Formik>
                   
                            {open &&  <div className="shadow"></div>}
            {open && (

                <div className="cart-pay">

                    <div className="title">
                        <h4> don hang</h4>
                        <div onClick={()=>{ setOpen(!open) }}> X </div>
                    </div>
            <table class="table tabble2">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">ten mon</th>
                            <th scope="col">thong tin mon</th>
                            <th scope="col">tien</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart?.map((item,index)=>{
                                                return  <tr>
                                                <th scope="row">{index}</th>
                                                <td>{item?.nameFood}</td>
                                                <td>
                                                    <img style={{ width:"100px",height: '100px' }} src={item.img} />
                                                </td>
                                                <td>{item?.price}</td>
                                            </tr>
                                            })}
                        </tbody>
                        </table>

                        <div className="infoUser">
                    <div>
                    ho ten:  {value.hoten}
                    </div>
                    <div>
                    so dien thoai:  {value.sodienthoai}
                    </div>
                    <div>
                    emai:  {value.email}
                    </div>
                    <div>
                    co so:  {value.coso}
                    </div>
                    <div>
                   ngay:  {value.ngay}
                    </div>
                    <div>
                   gio:  {value.gio}
                    </div>
                        </div>
                        <div>
                            tong tien : {Sumtotal}
                        </div>
                </div>

            )}
        </div>
    )
}

