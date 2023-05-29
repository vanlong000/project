import React, { useEffect, useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Tab } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getByCate } from '../redux/slice/getProductSlice';

function TabPanelUI({listcategory}) {
  const [value, setValue] = React.useState('tab1');
  const [listCaterolyA, setListCateroly] = useState("BÒ NHẬP KHẨU");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getByCate(listCaterolyA));
  }, [listCaterolyA]);

  const { cateProduct } = useSelector((state) => state.products);
  if(cateProduct === 0 ) return <h1>undfind</h1>
  if(listcategory === 0 ) return <h1>undfind</h1>
  console.log(cateProduct);
  console.log(listCaterolyA);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <TabList onChange={handleChange}>
      {listcategory && listcategory.map((cate,index)=>{
        return <Tab onClick={() => {
          setListCateroly(cate.name);
        }} style={{ width:'100px' }} label={cate.name} value="tab12" />
        
      })}
      </TabList>
      <TabPanel value={cateProduct}>Tab 1 Content</TabPanel>

    </TabContext>
  );
}

export default TabPanelUI