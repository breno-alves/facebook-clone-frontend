import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 2;
`;

export const Container = styled.div`
  position: absolute;
  /* width: 632px;
  height: 632px; */
  border-radius: 16px;
  background-color: '#fff';
  padding: 48px;
`;
