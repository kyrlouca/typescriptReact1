const initialState = {
  color: 'blue'
};
export const orderReducer = (
  state = initialState,
  action: { type: string; payload: string }
) => {
  switch (
    action.type //action may not have type like redux
  ) {
    case 'RESET':
      return initialState;
    case 'FETCH':
      return { ...state, color: 'red' };
    default:
      return state;
  }
};
export default orderReducer;
