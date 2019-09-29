import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const KMenu = styled.div `
  height: 100%;
  background: lightcyan;
  display: flex;
  flex-direction: column;
  justify-content: start;

  @media (max-width: 800px) {
    flex-direction: row;
  }
`;
const KMenuItem = styled(NavLink) `
  display: flex;
  justify-content: left;
  padding: 0rem 0rem 2rem 1rem;
  &.green {
    filter: drop-shadow(8px 8px 2px rgba(0, 0, 0, 0.3)) invert(10%);
    background: lightblue;
    color: white;
  }
`;
export default function SideMenu() {
    const adder = (a, b) => {
        return a + b;
    };
    const handleClick = () => {
        let x;
        x = adder(3, 5);
        alert('click');
    };
    return (<KMenu>
        
      <KMenuItem activeClassName="green" to="/home">
        Home
      </KMenuItem>
        
      <KMenuItem activeClassName="green" to="/settings">
        Settings
      </KMenuItem>
       
    </KMenu>);
}
//# sourceMappingURL=SideMenu.js.map