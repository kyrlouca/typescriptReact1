export type TStateOrder = {
  custId: string;
  orderId: string;
  orderValue: number;
  customerName:string;
  dateCreated: string;
};

export type TStateShape= {
  customerId:string;
  items: TStateOrder[];
}

export type TpayLoad =TStateOrder[];
export type TReducerAction={ type: string; payload: TStateOrder[] }

const initialState : TStateShape={customerId:'', items:[]};

export const orderReducer = (
  state:TStateShape,action:TReducerAction
) =>  {

  switch (
    action.type //action may not have type like redux
  ) {
    case 'RESET':
      return initialState;
    case 'FETCH':
      const newShape= {...state, items: [...action.payload]}
      return newShape;
    default:
      return state;
  }
};
export default orderReducer;
