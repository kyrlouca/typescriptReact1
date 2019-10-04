import React,{useContext} from 'react'
import {StoreContext} from '../storage/Store';
import useStoreState from '../storage/use-store-state'

export default function Sample1() {
    let obj= useStoreState();
    return (
        <div>
            Sample 1 :{obj.name}

        </div>
    )
}
