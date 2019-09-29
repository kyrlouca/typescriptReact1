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
const initialState : TStateShape={customerId:'',items:[]};

export const orderReducer = (
  state = initialState,
  action: { type: string; payload: TStateOrder[] }
) :TStateShape => {
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
