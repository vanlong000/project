import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
export const Admin = () => {
  const { getDon } = useSelector((state) => state.products);
  if(getDon === 0) return <h1>..undfind</h1>
  if (isEmpty(getDon)) {
    console.log(getDon);
  } else {
    console.log(getDon);

  }
  let Sumtotal2 = getDon?.reduce( (total, currentValue) =>{
    return total + currentValue?.oder
    ;
    }, 0);
    let Sumtotal3 = getDon?.reduce( (total, currentValue) =>{
      return total + currentValue?.tatalOder
      ;
      }, 0);
    console.log(Sumtotal2);
  return (
    <div className='container admin'>
    
    
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">đơn bán được</th>
      <th scope="col">tổng doanh thu</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>  {Sumtotal2}</td>
      <td>  {Sumtotal3}</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}
