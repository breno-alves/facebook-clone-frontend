import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #242526;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  border-bottom: 1px solid ${lighten(0.2, '#161718')};
`;

export const SelectedIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 54px;
  color: #3e71e1;
  border-bottom: 3px solid #3e71e1;
`;

export const LeftIcons = styled.div`
  display: flex;
  padding: 8px;
`;

export const MidIcons = styled.div`
  display: flex;
`;

export const MidIconsBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 54px;
  border-radius: 8px;
  color: #e4e6eb;

  transition: all 0.05s ease-in-out;

  &:hover {
    background-color: ${lighten(0.1, '#3a3b3c')};
  }
`;

export const RightIcons = styled.div`
  display: flex;
`;

export const IconBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3a3b3c;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #e4e6eb;
  margin-right: 8px;

  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: ${lighten(0.1, '#3a3b3c')};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
