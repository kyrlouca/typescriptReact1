import React, { useState, useReducer, useRef } from 'react';
import orderReducer, {
  TStateShape,
  TStateOrder
} from '../storage/order-reducer';
import OrderList from './OrderList';
import { TFullOrder } from '../storage/fetch-actions';
import InputCustomer from './InputCustomer';
import getActions from '../storage/use-store-actions';
import getData from '../storage/use-store-state';

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
  const allActions=getActions();
  const allData=getData();


  const handleFetch = async (custId: string) => {
    allActions.fetchOrders(custId);
  };

  return (
    <div>
      Hello Order Container322234abc
      <InputCustomer fetchData={handleFetch} />
      <OrderList items={allData.items} />
    </div>
  );
}
