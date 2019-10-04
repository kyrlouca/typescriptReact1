import React, {useContext } from 'react'
import OrdersContext, {TOrderContext,Tfoo} from './Store';

export function useStoreObject  ():Tfoo{
    const obj = useContext<Tfoo>(OrdersContext);
    // const obj={name:'abc'}
    return obj;
}