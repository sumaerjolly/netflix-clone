import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  background: var(--main-red);
  text-transform: uppercase;
  border: none;
  outline: none;
  margin: ${props => (props.primary ? '0 33%' : '0')};
  padding: ${props => (props.primary ? '1.5rem' : '0.8rem 1.3rem')};
  border-radius: ${props => (props.primary ? '0.875rem' : '0.5rem')};
  font-size: ${props => (props.primary ? '1.8rem' : '0.9rem')};
  color: #fff;
  text-align: center;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
  transition: background 0.2s ease-in;
  cursor: pointer;
  &:hover {
    background: var(--main-red-hover);
  }
`;

export { Button };
