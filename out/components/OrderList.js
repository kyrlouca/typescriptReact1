import React from 'react';
const ListItem = (props) => {
    const { userId, id, title, body } = props.item;
    return (<div>
      userId:{userId} id :{id} title:{title} body:{body}       
    </div>);
};
export default function OrderList(props) {
    return (<div>
      {props.items.map(x => (<ListItem key={x.title} item={x}/>))}
    </div>);
}
//# sourceMappingURL=OrderList.js.map