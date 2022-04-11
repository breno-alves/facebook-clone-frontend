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
import { IPost } from '../../pages/dashboard/Dashboard';
import api from '../../core/services/api';

interface CardProps {
  post: IPost;
  posts: IPost[];
  setPosts: any;
}

const Card = function Card({
  post,
  setPosts,
  posts,
}: CardProps): React.ReactElement {
  async function handleLikeAction(): Promise<void> {
    const idx = posts.findIndex(({ id }) => id === post.id);

    if (posts[idx].likes?.length > 0) {
      console.log('qtd likes:', posts[idx].likes);
      await api.delete(
        `/posts/${posts[idx].id}/likes/${posts[idx].likes[0].id}`,
      );
      const newPosts = posts.reduce((acc, curr) => {
        if (curr.id === post.id) {
          const nCurr = { ...curr, likes: [] };
          acc.push(nCurr);
          return acc;
        }
        acc.push(curr);
        return acc;
      }, [] as IPost[]);
      setPosts([...newPosts]);
    } else {
      const like: any = await api.post(`/posts/${posts[idx].id}/likes`, {
        user: '$USER',
      });
      const newPosts = posts.reduce((acc, curr) => {
        if (curr.id === post.id) {
          const nCurr = { ...curr, likes: [like.data] };
          acc.push(nCurr);
          return acc;
        }
        acc.push(curr);
        return acc;
      }, [] as IPost[]);
      setPosts([...newPosts]);
    }
  }

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
        {post.images?.length > 0 && (
          <img src={post.images[0].url} alt="source file" />
        )}
      </MiddleContainer>
      <BottomContainer>
        <MetricsGroup>
          <BlueThumbsUpIcon />
          <span>{post.likes?.length || 0}</span>
        </MetricsGroup>

        <ButtonsGroup>
          <GroupIcon onClick={e => handleLikeAction()}>
            <FiThumbsUp
              size={25}
              color={post.likes?.length > 0 ? '#4a82ff' : '#b0b3b8'}
            />
            <span
              style={{
                color: post.likes?.length > 0 ? '#4a82ff' : '#b0b3b8',
              }}
            >
              Like
            </span>
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
