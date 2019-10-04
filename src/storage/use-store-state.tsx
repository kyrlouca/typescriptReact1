import React, { useContext } from 'react';
import { StoreContext } from './Store';
import { TStateShape } from './order-reducer';
export default function useStoreState() {
  const obj = useContext(StoreContext);

  //TODO return emtpty array
//   const items :TStateShape=[];
   
  return  obj.state;
}
