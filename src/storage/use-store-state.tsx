import React, {useContext} from 'react'
import {StoreContext} from './Store';
export default function StoreState() {
    const obj=useContext(StoreContext);
    return (
        <div>
            {obj.name}
        </div>
    )
}
