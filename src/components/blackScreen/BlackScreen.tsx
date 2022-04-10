import React from 'react';
import { BlackScreen as Screen } from './styles';

interface BlackScreenProps {
  closeHandler(state: boolean): void;
}

const BlackScreen = function BlackScreen({
  closeHandler,
}: BlackScreenProps): React.ReactElement {
  return <Screen onClick={() => closeHandler(false)} />;
};

export default BlackScreen;
