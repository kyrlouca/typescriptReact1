/**
* Helper styles and themes for global usage
import styled from 'styled-components';
import { colors } from '../../utils/styles/helpers'
const { turquoise, shadows: { light } } = colors;
const MyComponentContainer = styled.div`
  width: 100%;
  background-color: ${turquoise};
  box-shadow: ${light};
`;
export { MyComponentContainer };