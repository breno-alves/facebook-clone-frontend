import React, { useEffect, useState } from 'react';
import Card from '../../components/card/Card';
import Header from '../../components/header/Header';
import PostInput from '../../components/postInput/PostInput';
import { Container, FeedContainer } from './styles';
import Api from '../../core/services/api';

interface IImages {
  id?: string;
  url: string;
}

interface ILikes {
  id: string;
  user: string;
}
export interface IPost {
  id?: string;
  comments: string[];
  images: IImages[];
  likes: ILikes[];
  text: string[];
  createdAt: Date;
  user: string;
}

const Dashboard = function Dashboard(): React.ReactElement {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const getPosts = async (): Promise<void> => {
      const response = await Api.get<IPost[]>('/posts');
      if (response.data) {
        setPosts(response.data);
      }
    };
    getPosts();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <PostInput posts={posts} setPosts={setPosts} />

        <FeedContainer>
          {posts &&
            posts.map(p => (
              <Card key={p.id} post={p} posts={posts} setPosts={setPosts} />
            ))}
        </FeedContainer>
      </Container>
    </>
  );
};

export default Dashboard;
