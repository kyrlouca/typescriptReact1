import React, { useContext, useReducer, Dispatch } from 'react';
import orderReducer, {
  TStateShape,
  TpayLoad,
  TReducerAction,
  initialState
} from './order-reducer';

// export default function Store({children}:{children:<HTMLElement>} ) {
type FType = {
  children: JSX.Element;
  name?: string;
};

export type TStateOrder = {
  custId: string;
  orderId: string;
  orderValue: number;
  customerName: string;
  dateCreated: string;
};

export type TOrderContext = {
  state: TStateShape;
  dispatch: Dispatch<TReducerAction>;
};

export type Tfoo = {name:string}
const foo :Tfoo = {name:'bar'};
const action: TReducerAction = { type: '', payload: [] };

// export const OrdersContext = React.createContext<TOrderContext|null>(null);
export const OrdersContext = React.createContext<Tfoo>(foo);



  ////////////////////////////////////////
export default function Store({ children }: {children: JSX.Element}) {
  const [state, dispatch] = useReducer(orderReducer, initialState);
  // const obj : TOrderContext  = { state, dispatch };
  const obj={name:'aaa'}
  
  return (
    <OrdersContext.Provider value={obj}> {children}</OrdersContext.Provider>
  );
}
