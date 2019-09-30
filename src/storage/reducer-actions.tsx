import orderReducer, {
  TStateOrder,
  TReducerAction,
  TStateShape
} from './order-reducer';
import fetchActions, { TFullOrder } from './fetch-actions';

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


// export const orderReducer = (
//     {state,
//     action}:{state:TStateShape,action:TReducerAction}
//   ) : TStateShape=>  {

const allActions = (dispatch: (action:TReducerAction)=>any) => {
// const allActions = (dispatch: (action: TReducerAction) => TStateShape) => {
  const fetchOrders = async (custId: string) => {
    const data = await fetchActions(custId);
    const mData = shapeReducerItems(data);
    // setOrderList(mData);
    dispatch({ type: 'FETCH', payload: mData });
    console.log(custId);
  };

  return {
    fetchOrders
  };
};
export default allActions;
