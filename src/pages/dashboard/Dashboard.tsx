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
export interface IPosts {
  id?: string;
  comments: string[];
  images: IImages[];
  likes: string[];
  text: string[];
  createdAt: Date;
  user: string;
}

const Dashboard = function Dashboard(): React.ReactElement {
  const [posts, setPosts] = useState<IPosts[]>([]);

  useEffect(() => {
    const getPosts = async (): Promise<void> => {
      const response = await Api.get<IPosts[]>('/posts');
      if (response.data) {
        console.log(response.data);
        setPosts(response.data);
      }
    };

    getPosts();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <PostInput />

        <FeedContainer>
          {posts && posts.map(p => <Card key={p.id} post={p} />)}
        </FeedContainer>
      </Container>
    </>
  );
};

export default Dashboard;
