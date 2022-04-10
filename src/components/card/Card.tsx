import React from 'react';
import { FiMessageSquare, FiThumbsUp, FiArrowRight } from 'react-icons/fi';
import {
  Container,
  UpperContainer,
  Avatar,
  AvatarGroupModal,
  BottomContainer,
  GroupIcon,
  MetricsGroup,
  ButtonsGroup,
  MiddleContainer,
  PostTextContainer,
  UserInfo,
} from './styles';
import AvatarPlaceholder from '../../assets/icons/avatar_placeholder.png';
import { ReactComponent as BlueThumbsUpIcon } from '../../assets/icons/bluethumbsup.svg';
import { IPosts } from '../../pages/dashboard/Dashboard';

interface CardProps {
  post: IPosts;
}

const Card = function Card({ post }: CardProps): React.ReactElement {
  return (
    <Container>
      <UpperContainer>
        <AvatarGroupModal>
          <Avatar src={AvatarPlaceholder} alt="avatar" />
          <UserInfo>
            <span>$USER</span>
            <p>{new Date(post.createdAt).toDateString()}</p>
          </UserInfo>
        </AvatarGroupModal>
      </UpperContainer>

      <MiddleContainer>
        {post.text && (
          <PostTextContainer>
            <p>{post.text}</p>
          </PostTextContainer>
        )}
        {post.images.length > 0 && (
          <img src={post.images[0].url} alt="source file" />
        )}
      </MiddleContainer>
      <BottomContainer>
        <MetricsGroup>
          <BlueThumbsUpIcon />
          <span>{post.likes.length}</span>
        </MetricsGroup>

        <ButtonsGroup>
          <GroupIcon>
            <FiThumbsUp size={25} color="#b0b3b8" />
            <span>Like</span>
          </GroupIcon>

          <GroupIcon>
            <FiMessageSquare size={25} color="#b0b3b8" />
            <span>Comment</span>
          </GroupIcon>

          <GroupIcon>
            <FiArrowRight size={25} color="#b0b3b8" />
            <span>Share</span>
          </GroupIcon>
        </ButtonsGroup>
      </BottomContainer>
    </Container>
  );
};

export default Card;
