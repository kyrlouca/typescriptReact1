import React, { useContext } from 'react';
import styled from 'styled-components';
import OrdersContext, {TOrderContext,Tfoo} from '../storage/Store';

const S1 = styled.div`
  background: gray;
  color:black;
  margin: 0;
  padding: 0;
`;

export default function Screen1() {
  // const obj = useContext<Tfoo>(OrdersContext)

  return <S1>From red</S1>;
}
