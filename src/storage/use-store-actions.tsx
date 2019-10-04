import React, { useContext } from 'react';
import { StoreContext } from './Store';
import { fetchActions, TFullOrder } from './fetch-actions';
import { TStateOrder } from './order-reducer';

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

export default function useStoreActions() {
  const obj = useContext(StoreContext);

  const fetchOrders = async (custId: string) => {
    const data = await fetchActions.fetchAsyncOrders(custId);
    const mData = shapeReducerItems(data);
    obj.dispatch({ type: 'FETCH', payload: mData });
    console.log(custId);
  };


  return {
      fetchOrders
    }
  };

