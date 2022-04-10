import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 64px;
  background-color: #242526;
  max-width: 640px;
  min-width: 500px;
  margin-top: 96px;
  border-radius: 8px;
  padding: 16px;
`;

export const UpperGroup = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${lighten(0.2, '#161718')};
  padding-bottom: 12px;
`;

export const BottomGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px;
  padding-bottom: 0px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 16px;
`;

export const Input = styled.input`
  border-radius: 24px;
  border: none;
  background-color: #3a3b3c;
  padding: 14px;
  width: 100%;

  &::placeholder {
    color: #b0b3b8;
    font-size: 16px;
  }

  &:focus {
    border: none;
    outline: none;
  }

  &:hover {
    background-color: ${lighten(0.05, '#3a3b3c')};
    cursor: pointer;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 50px;
  border-radius: 8px;
  padding: 8px;

  svg {
    height: 27px;
    width: 27px;
  }

  span {
    margin-left: 8px;
    color: #b0b3b8;
    font-weight: bold;
    margin-right: 8px;
  }

  &:hover {
    background-color: ${lighten(0.05, '#3a3b3c')};
  }
`;

export const ModalContainer = styled.div`
  background-color: #242526;
  width: 540px;
  height: 380px;
  border: 1px solid #505151;
  border-radius: 8px;
`;

export const UpperModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px;
  border-bottom: 1px solid #505151;

  span {
    color: #e4e6eb;
    font-weight: 600;
    font-size: 20px;
  }
`;

export const AvatarGroupModal = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 16px;
  color: #e4e6eb;
  font-weight: 600;
`;

export const BottomModal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;

export const InputModal = styled.input`
  border: none;
  background-color: transparent;
  padding: 8px;
  font-size: 24px;
  color: #e4e6eb;
  margin-bottom: 64px;
  width: 100%;

  &:focus {
    border: none;
    outline: none;
  }
`;

export const FormModal = styled.form`
  width: 100%;
`;

export const FormGroupExtra = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  border: 1px solid ${lighten(0.05, '#3a3b3c')};
  color: #e4e6eb;
  font-weight: 600;

  svg {
    width: 27px;
    height: 27px;
  }
`;

export const SubmitButtonModal = styled.button`
  background-color: #3e71e1;
  border: none;
  padding: 12px;
  border-radius: 5px;
  width: 100%;
  color: #e4e6eb;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    background-color: ${lighten(0.05, '#3e71e1')};
  }
`;
