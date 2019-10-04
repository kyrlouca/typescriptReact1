import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import styled from 'styled-components';
import OrderContainer from './OrderContainer';
import Screen1 from './Screen1';

function Screen1Div() {
  const S1 = styled.div`    
    height: 100%;
    width: 340px;
    margin: 0;
    padding: 0;
  `;

  return (
    <S1>
      <Screen1 />
    </S1>
  );
}

const MainDiv = styled.div`
  background: red;
`;

export default function Main() {
  return (
    <MainDiv>
      <Switch>
         <Route path="/home" exact component={Screen1Div} />
                
        <Route path="/settings" exact component={OrderContainer} />
      </Switch>
    </MainDiv>
  );
}
