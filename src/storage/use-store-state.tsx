import React, {useContext} from 'react'
import {StoreContext} from './Store';
export default function useStoreState() {
    const obj=useContext(StoreContext);
    return obj;    
}
