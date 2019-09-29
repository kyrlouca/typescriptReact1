import React, { useState, useReducer, useRef } from 'react';
import axios from 'axios';
import OrderList, { TOrderRec } from './OrderList';
import fetchActions, { TFullOrder } from '../storage/fetch-actions';
import OrderEnterCustomer from './OrderEnterCustomer';

const convertItems = (allData: TFullOrder[]): TOrderRec[] => {
  const cData: TOrderRec[] = allData.map((el: TFullOrder) => ({
    custId: el.HASH_ID,
    orderId: el.SORT_ID,
    orderValue: el.orderValue,
    dateCreated: el.dateCreated,
    customerName: el.customerFirstName
  }));
  return cData;
};

export default function OrderContainer() {
  let initOrders: TOrderRec[] = [];
  const [orderList, setOrderList] = useState(initOrders);

  const handleFetch = async (custId:string) => {    
    const data = await fetchActions(custId);
    const mData = convertItems(data);
    setOrderList(mData);        
    console.log(custId)
  };


  return (
    <div>
      Hello Order Container3
      <OrderEnterCustomer  fetchData={handleFetch} />
      <OrderList items={orderList}/>  
    </div>
  );
}
