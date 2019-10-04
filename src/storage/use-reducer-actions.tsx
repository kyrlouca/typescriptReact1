import React, { Dispatch, useReducer, useContext } from 'react';
import OrdersContext,{TOrderContext} from './Store';
import orderReducer, {
  TStateOrder,
  TReducerAction,
  TStateShape
} from './order-reducer';
import  { fetchActions, TFullOrder } from './fetch-actions';


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


// const allActions = (dispatch: Dispatch<TReducerAction> ) => {
const useActions = ( ) => {
  // const {dispatch} =useContext<TOrderContext>(OrdersContext);
  const fetchOrders = async (custId: string) => {
    
    // const {state,dispatch} = useReducer(OrdersContext)
    
    const data = await fetchActions.fetchAsyncOrders(custId);
    const mData = shapeReducerItems(data);
    // setOrderList(mData);
    // dispatch({ type: 'FETCH', payload: mData });
    console.log(custId);
  };

  return {
    fetchOrders
  };
};

// export default allActions;
