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

export const initialState : TStateShape={customerId:'INIT', items:[]};


// FULL Defs
// export const orderReducer :React.Reducer<TStateShape,TReducerAction> = (
//   state, action
// ) :TStateShape=> {

function  orderReducer(
  state :TStateShape, action:TReducerAction
):TStateShape{

  switch (
    action.type //action may not have type like redux
  ) {
    case 'RESET':
      return state;
    case 'FETCH':
      const newShape= {...state, items: [...action.payload]}
      return newShape;
    default:
      return state;
  }
};
export default orderReducer;
