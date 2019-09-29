import React, { useState, useRef } from 'react';
import axios from 'axios';
import OrderList from './OrderList';
import StorageActions from '../storage/storage-actions';
export default function OrderContainer() {
    let initOrders = [];
    const inpRef = useRef(null);
    const [customerId, setCustomer] = useState('');
    const [orderList, setOrderList] = useState(initOrders);
    const handleFetch = () => {
        if (inpRef && inpRef.current) {
            inpRef.current.focus();
            setCustomer(inpRef.current.value);
            inpRef.current.value = '';
        }
        fetchData();
    };
    const fetchData = () => {
        axios({
            method: 'get',
            url: `https://mmr2lzukua.execute-api.eu-west-2.amazonaws.com/Prod/orders`,
            params: { custX: 'CUST#101#' }
        }).then(response => {
            const ri = response.data.Items;
            const newItems = ri.map((el) => ({
                userId: el.HASH_ID,
                id: el.orderValue,
                title: el.customerFirstName,
                body: el.customerLastName
            }));
            setOrderList(newItems);
            //   const newItems = ri;
            console.log(newItems);
        });
    };
    return (<div>
      Hello Order Container
      <input ref={inpRef} placeholder={'enter val'}/>
      <button onClick={handleFetch}>Fetch</button>
      <OrderList items={orderList}/>
      <p>{customerId}</p>
      <StorageActions />
    </div>);
}
//# sourceMappingURL=OrderContainer.js.map