import React,{useReducer, Dispatch} from 'react';
import orderReducer, {initialState,TStateShape,TReducerAction} from './order-reducer'

// export default function Store({children}:{children:<HTMLElement>} ) {

type Tperson ={
  name: string;
}

type TstoreContext ={
  state:TStateShape;
  temp:string;
  dispatch:Dispatch<TReducerAction> 
}
const initialContext :TstoreContext={
  state:initialState,
  temp:'abcd',
  dispatch: ()=>{}
}

export const StoreContext = React.createContext<TstoreContext>(initialContext);

export default function Store({children }: {children:JSX.Element}) {
  const [state, dispatch] = useReducer(orderReducer, initialState);
  const provObj={state,temp:'updated 3',dispatch}
  return (
    <StoreContext.Provider value={provObj}>
      {children}      
    </StoreContext.Provider>
  );
}
