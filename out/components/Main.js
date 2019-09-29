import React from 'react';
import { Switch, Route } from 'react-router';
import styled from 'styled-components';
import OrderContainer from './OrderContainer';
function Screen1() {
    const S1 = styled.div `
    background: yellow;
    color: blue;
  `;
    const handleScreen1 = () => {
        alert('screen 1');
    };
    return (<S1>
      Function 1<button onClick={handleScreen1}>Press me</button>
    </S1>);
}
function Screen2() {
    return <div>Function 200</div>;
}
const MainDiv = styled.div `
  background: green;
  height: 100%;
`;
const Screen2Div = styled(Screen2) `
  width: 600px;
`;
export default function Main() {
    return (<MainDiv>
      <Switch>
         <Route path="/home" exact component={Screen2Div}/>
                
        <Route path="/settings" exact component={OrderContainer}/>
        
      </Switch>
    </MainDiv>);
}
//# sourceMappingURL=Main.js.map