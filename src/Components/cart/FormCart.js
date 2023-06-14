import 'firebase/auth';
import 'firebase/firestore';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datetime/css/react-datetime.css';
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';
import { noteref } from "../../firebase";
import { getFectProdust } from "../../redux/slice/getProductSlice";
export default function FormCart({cart}) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState({});
    const [oder, setOder] = useState(1);


    const { getDon } = useSelector((state) => state.products);
    if(cart?.length === 0) return <h1>..undfind</h1>
    let Sumtotal = cart?.reduce( (total, currentValue) =>{
        return total + currentValue.price;
        }, 0);
        let Sumtotal2 = cart?.reduce( (total, currentValue) =>{
            return total + currentValue.quantity
            ;
            }, 0);
            const handleSubmit = (values) => {

              // Xử lý logic khi submit form
              setValue(values)
                const objNote = {
                    data : values,
                    oder : oder,
                    tatalOder:Sumtotal * Sumtotal2
                    
                }
              noteref.push(objNote)
            };

        
    const validationSchema = Yup.object({
        hoten: Yup.string().required('Vui lòng nhập họ tên'),
        sodienthoai: Yup.string().required('Vui lòng nhập số điện thoại'),
        email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
        coso: Yup.string().required('Vui lòng chọn cơ sở'),
        diachi: Yup.string().nullable().required('Vui lòng chọn địa chỉ'),
        gio: Yup.string().nullable().required('Vui lòng chọn giờ'),
        ngay: Yup.date().nullable().required('Vui lòng chọn ngày'),
      });
          
const initialValues = {
    hoten: '',
    sodienthoai: '',
    email: '',
    coso: '',
    diachi: '',
    gio: '',
    ngay: null,
    totalAll:null
  }


    return (
        <div className="form ">
            
            <h6 className="text-bg-danger" style={{textAlign :"center"}}>Thông tin đặt hàng</h6>
      
            

            <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="col-12 field-input">
            <label htmlFor="hoten">Họ tên:</label>
            <Field required  type="text" id="hoten" name="hoten" />
            <ErrorMessage name="hoten" component="div" />
          </div >

          <div className="col-12 field-input">
            
            <label htmlFor="sodienthoai">Số điện thoại:</label>
            <Field required type="text" id="sodienthoai" name="sodienthoai" />
            <ErrorMessage name="sodienthoai" component="div" />
          </div>

          <div className="col-12 field-input">
            <label htmlFor="email">Email:</label>
            <Field required type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div className="col-12 field-input">
            <label htmlFor="diachi">địa chi:</label>
            <Field required type="text" id="diachi" name="diachi" />
            <ErrorMessage name="diachi" component="div" />
          </div>
          <div className="field-input">

                            

            <label htmlFor="coso">Cơ sở:</label>
            <Field required as="select" id="coso" name="coso">
            <option defaultValue={"default"}>Vui lòng chọn địa chỉ nhà hàng</option>
                        <option value='BÒ TƠ QUÁN MỘC CS1 HÀ NỘI'>BÒ TƠ QUÁN MỘC CS1 HÀ NỘI</option>
                        <option value='BÒ TƠ QUÁN MỘC CS2 HÀ NỘI'>BÒ TƠ QUÁN MỘC CS2 HÀ NỘI</option>
                        <option value='BÒ TƠ QUÁN MỘC CS1 SÀI GÒN'>BÒ TƠ QUÁN MỘC CS1 SÀI GÒN</option>
                        <option value='BÒ TƠ QUÁN MỘC CS2 SÀI GÒN'>BÒ TƠ QUÁN MỘC CS2 SÀI GÒN</option>
            </Field>
            <ErrorMessage name="coso" component="div" />
          </div>

          <div className="time-don">

          <div className="field-input">
            <label htmlFor="ngay">Ngày:</label>
            <Field required type="date" id="ngay" name="ngay" />
            <ErrorMessage name="ngay" component="div" />
          </div>

            <div className="field-input">
            <label htmlFor="gio">gio:</label>
            <Field  required as="select" id="gio" name="gio">
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
            </div>
      
          <button  onClick={()=>{ setOpen(!open)  }} >đặt đơn</button>
          {open &&  <div className="shadow"></div>}
            {open && (

                <div className="cart-pay">

                    <div className="title">
                        <h4> don hang</h4>
                        <div onClick={()=>{ setOpen(!open) }}> X </div>
                    </div>
                    <div className="main-tab">
                    <div className="main-tab2">

                 
            <table class="table tabble2">
                        <thead>
                            <tr>
                            <th scope="col">stt</th>
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
                                                    <img style={{ width:"80px",height: '80px',marginBottom:'0' }} src={item.img} />
                                                </td>
                                                <td>{item?.price}</td>
                                            </tr>
                                            })}
                         
                        </tbody>
                        </table>
                        </div>
                        </div>
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
                   dsads {value.totalAll}
                        </div>
                        <div>
                            tong tien : {Sumtotal }
                        </div>
                        <button onClick={()=> {  setOpen(!open); setOder(  oder + 1 ) }} type="submit"> xác nhận</button>
                </div>

            )}
        </Form>
      </Formik>
                   
               
        </div>
    )
}

