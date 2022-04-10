import React, { useState, useEffect } from 'react';
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
} from './styles';
import AvatarPlaceholder from '../../assets/icons/avatar_placeholder.png';
import Modal from '../modal/Modal';

import { ReactComponent as VideoIcon } from '../../assets/icons/video.svg';
import { ReactComponent as PhotosIcon } from '../../assets/icons/photos.svg';
import { ReactComponent as FeelingIcon } from '../../assets/icons/feeling.svg';

const PostInput = function PostInput(): React.ReactElement {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModalHandler(state: boolean): void {
    setIsModalOpen(state);
  }

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
            <AvatarGroupModal>
              <Avatar src={AvatarPlaceholder} alt="avatar" />
              <span>$USER</span>
            </AvatarGroupModal>

            <InputModal placeholder="What's on your mind, $USER?" />

            <FormGroupExtra>
              <span>Add to your post</span>
              <PhotosIcon style={{ color: '#62ba60' }} />
            </FormGroupExtra>
            <SubmitButtonModal>Post</SubmitButtonModal>
          </BottomModal>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default PostInput;
