import React, { useState, useReducer, useRef } from 'react';
import orderReducer, { TStateShape, TStateOrder } from '../storage/order-reducer';
import OrderList from './OrderList';
import fetchActions, { TFullOrder } from '../storage/fetch-actions';
import InputCustomer from './InputCustomer';

const shapeReducerItems = (allData: TFullOrder[]): TStateOrder[] => {
  const cData: TStateOrder[] = allData.map((el: TFullOrder) => ({
    custId: el.HASH_ID,
    orderId: el.SORT_ID,
    orderValue: el.orderValue,
    dateCreated: el.dateCreated,
    customerName: el.customerFirstName
  }));
  return cData;
};

const initialState: TStateShape = { customerId: '', items: [] };

export default function OrderContainer() {
  let initOrders: TStateOrder[] = [];
  // const [orderList, setOrderList] = useState(initOrders);
  const [state, dispatch] = useReducer(orderReducer, initialState);

  const handleFetch = async (custId: string) => {
    const data = await fetchActions(custId);
    const mData = shapeReducerItems(data);
    // setOrderList(mData);
    dispatch({ type: 'FETCH', payload: mData });
    console.log(custId);
  };

  return (
    <div>
      Hello Order Container322
      <InputCustomer fetchData={handleFetch} />
      <OrderList items={state.items} />
    </div>
  );
}
