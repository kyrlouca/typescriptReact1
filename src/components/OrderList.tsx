import React, {
  ReactElement,
  FunctionComponent,
  FunctionComponentElement
} from 'react';
import { isTemplateElement } from '@babel/types';

export type TOrderRec = {
  custId: string;
  orderId: string;
  orderValue: number;
  customerName:string;
  dateCreated: string;
};


const ListItem = ( props: {item : TOrderRec} )  => {
  const { custId, orderId, orderValue,dateCreated,customerName } = props.item;
  return (
    <div>
      custId:{custId} orderId :{orderId} orderValue:{orderValue} dataCreated:{dateCreated} cust:{customerName}      
    </div>
  );
};

export default function OrderList(props: { items: TOrderRec[] }) {
  return (
    <div>
      {props.items.map(x => (
        <ListItem key={x.orderId} item={x} />
      ))}
    </div>
  );
}
