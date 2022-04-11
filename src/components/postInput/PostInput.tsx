import React, { useState } from 'react';
import {
  Container,
  UpperGroup,
  Input,
  Avatar,
  BottomGroup,
  ButtonGroup,
  ModalContainer,
  UpperModal,
  BottomModal,
  AvatarGroupModal,
  InputModal,
  SubmitButtonModal,
  FormGroupExtra,
  FormModal,
} from './styles';
import AvatarPlaceholder from '../../assets/icons/avatar_placeholder.png';
import Modal from '../modal/Modal';

import { ReactComponent as VideoIcon } from '../../assets/icons/video.svg';
import { ReactComponent as PhotosIcon } from '../../assets/icons/photos.svg';
import { ReactComponent as FeelingIcon } from '../../assets/icons/feeling.svg';
import api from '../../core/services/api';
import { IPost } from '../../pages/dashboard/Dashboard';

interface PostInputProps {
  posts: IPost[];
  setPosts: any;
}

const PostInput = function PostInput({
  posts,
  setPosts,
}: PostInputProps): React.ReactElement {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postText, setPostText] = useState('');
  const [image, setImage] = useState<any>(null);

  function onFileChange(event: any): void {
    // Update the state
    setImage({ selectedFile: event.target.files[0] });
  }

  function openModalHandler(state: boolean): void {
    setPostText('');
    setImage(null);
    setIsModalOpen(state);
  }

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    try {
      if (!postText) {
        return;
      }
      const post = await api.post<any, IPost>('/posts', {
        user: '$USER',
        text: postText,
      });

      if (image) {
        const formData = new FormData();

        formData.append('file', image.selectedFile);
        const img = await api.post<any, any>(
          `/posts/${post.data.id}/images`,
          formData,
        );
        post.data.images = [img.data];
      }

      setIsModalOpen(false);
      setPosts([post.data, ...posts]);
    } catch (err) {
      console.log('err:', err);
    }
  };

  return (
    <>
      <Container>
        <UpperGroup>
          <Avatar src={AvatarPlaceholder} alt="avatar" />
          <Input
            placeholder="What's on your mind, $USER?"
            readOnly
            onClick={() => openModalHandler(true)}
          />
        </UpperGroup>

        <BottomGroup>
          <ButtonGroup>
            <VideoIcon style={{ color: '#e35462' }} />
            <span>Live video</span>
          </ButtonGroup>

          <ButtonGroup>
            <PhotosIcon style={{ color: '#62ba60' }} />
            <span>Photo/video</span>
          </ButtonGroup>

          <ButtonGroup>
            <FeelingIcon style={{ color: '#eebd2c' }} />
            <span>Feeling/activity</span>
          </ButtonGroup>
        </BottomGroup>
      </Container>

      <Modal
        handler={(state: any) => openModalHandler(state)}
        isOpen={isModalOpen}
      >
        <ModalContainer>
          <UpperModal>
            <span>Create Post</span>
          </UpperModal>
          <BottomModal>
            <FormModal onSubmit={handleSubmit}>
              <AvatarGroupModal>
                <Avatar src={AvatarPlaceholder} alt="avatar" />
                <span>$USER</span>
              </AvatarGroupModal>

              <InputModal
                placeholder="What's on your mind, $USER?"
                name="text"
                type="text"
                value={postText}
                onChange={e => setPostText(e.target.value)}
              />
              <FormGroupExtra>
                <span>Add to your post</span>
                <input type="file" onChange={onFileChange} />
              </FormGroupExtra>
              <SubmitButtonModal>Post</SubmitButtonModal>
            </FormModal>
          </BottomModal>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default PostInput;
