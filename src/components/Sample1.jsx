import React from 'react'
// import {StoreContext} from '../storage/Store';
import useStoreState from '../storage/use-store-state'
import useStoreActions from '../storage/use-store-actions';

export default function Sample1() {
    const obj= useStoreState();
    const allActions =useStoreActions();
    const handleClick=()=>{
        alert('hey')
        allActions.fetchOrders('CUST#101#');
    }
    return (
        <div>
            Sample 1 :cust:{obj.state.customerId} temp:{obj.temp}
            <button onClick={handleClick}>Fetch</button>

        </div>
    )
}
