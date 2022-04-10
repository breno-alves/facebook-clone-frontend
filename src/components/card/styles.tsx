import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #242526;
  width: 510px;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
  }
`;

export const UpperContainer = styled.div`
  padding: 8px 0px 0px 0px;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 16px;
`;

export const AvatarGroupModal = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px 0px 16px 16px;
  color: #b0b3b8;
  font-weight: 600;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 12px;
    font-weight: 400;
  }
`;
export const MetricsGroup = styled.div`
  display: flex;
  padding: 8px;
  border-bottom: 1px solid ${lighten(0.05, '#3a3b3c')};
  color: #b0b3b8;

  svg {
    margin-right: 8px;
    width: 18px;
    height: 18px;
  }
`;

export const GroupIcon = styled.div`
  display: flex;
  justify-content: center;

  align-items: center;
  width: 100%;
  height: 36px;
  border-radius: 5px;

  span {
    color: #b0b3b8;
    font-weight: 600;
    margin-left: 8px;
  }

  &:hover {
    background-color: ${lighten(0.05, '#3a3b3c')};
  }
`;

export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 8px;
`;

export const PostTextContainer = styled.div`
  color: #b0b3b8;
  padding: 0px 16px 16px 16px;
`;
