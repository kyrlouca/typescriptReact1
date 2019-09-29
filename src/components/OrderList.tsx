import React, {
  ReactElement,
  FunctionComponent,
  FunctionComponentElement
} from 'react';

import {TStateOrder} from '../storage/order-reducer';


const ListItem = ( props: {item : TStateOrder} )  => {
  const { custId, orderId, orderValue,dateCreated,customerName } = props.item;
  return (
    <div>
      custId:{custId} orderId :{orderId} orderValue:{orderValue} dataCreated:{dateCreated} cust:{customerName}      
    </div>
  );
};

export default function OrderList(props: { items: TStateOrder[] }) {
  return (
    <div>
      {props.items.map(x => (
        <ListItem key={x.orderId} item={x} />
      ))}
    </div>
  );
}
