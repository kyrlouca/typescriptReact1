import React,{useContext} from 'react'
import {StoreContext} from '../storage/Store';

export default function Sample1() {
    const obj=useContext(StoreContext);
    return (
        <div>
            Sample 1 :{obj.name}

        </div>
    )
}
