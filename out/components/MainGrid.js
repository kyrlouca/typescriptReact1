import React from 'react';
import styled from 'styled-components';
import SideMenu from './SideMenu';
import Main from '../components/Main';
import TopLogo from '../components/TopLogo';
const ContainerDiv = styled.div `
  display: grid;
  grid-template-columns: 10rem 2fr;
  grid-template-rows: 2rem 16fr 60px;
  grid-template-areas:
    'a a a'
    'b c c'
    'b d d';
  grid-gap: 0.2rem;
  margin: 0;
  background: #ff6666;
  height: 100vh;


  
@media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2rem 2rem 16fr 1fr;
    grid-template-areas:
'a a a' 
'b b b'
'c c c'
'd d d';
    grid-gap: 0.2rem;
    margin: 0;
    background: #ff6666;
    height: 100vh;
}
`;
const TopDiv = styled.div `
  grid-area: a;
  background: red;
`;
const SideDiv = styled.div `
  grid-area: b;
  background: blue;
`;
const MainAreaDiv = styled.div `
  grid-area: c;
  background: white;
`;
const BottomDiv = styled.div `
  grid-area: d;
  background: yellow;
`;
const MainDiv = styled.div `
  background: yellow;
  display: flex;
  flex-direction: row;
`;
export default function MainGrid() {
    return (<ContainerDiv>
      <TopDiv>
        <TopLogo />
      </TopDiv>
      <SideDiv>
        <SideMenu />
      </SideDiv>
      <MainAreaDiv>
        <Main />
      </MainAreaDiv>
      <BottomDiv>BOTT</BottomDiv>
    </ContainerDiv>);
}
//# sourceMappingURL=MainGrid.js.map