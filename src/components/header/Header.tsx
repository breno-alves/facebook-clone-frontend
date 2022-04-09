import React from 'react';
import {
  LeftIcons,
  MidIcons,
  RightIcons,
  Container,
  IconBackground,
  MidIconsBackground,
  SelectedIcon,
} from './styles';

import { ReactComponent as LogoIcon } from '../../assets/icons/facebook.svg';
import { ReactComponent as GamesIcon } from '../../assets/icons/games.svg';
import { ReactComponent as GroupsIcon } from '../../assets/icons/groups.svg';
import { ReactComponent as MarketPlaceIcon } from '../../assets/icons/marketplace.svg';
import { ReactComponent as PlayIcon } from '../../assets/icons/play.svg';
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { ReactComponent as MessengerIcon } from '../../assets/icons/messenger.svg';
import { ReactComponent as NotificationsIcon } from '../../assets/icons/notifications.svg';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';

const Header = function Header(): React.ReactElement {
  return (
    <Container>
      <LeftIcons>
        <LogoIcon />
      </LeftIcons>

      <MidIcons>
        <SelectedIcon>
          <HomeIcon />
        </SelectedIcon>

        <MidIconsBackground>
          <GamesIcon />
        </MidIconsBackground>
        <MidIconsBackground>
          <GroupsIcon />
        </MidIconsBackground>
        <MidIconsBackground>
          <MarketPlaceIcon />
        </MidIconsBackground>
        <MidIconsBackground>
          <PlayIcon />
        </MidIconsBackground>
      </MidIcons>

      <LeftIcons>
        <IconBackground>
          <MenuIcon />
        </IconBackground>

        <IconBackground>
          <MessengerIcon />
        </IconBackground>

        <IconBackground>
          <NotificationsIcon />
        </IconBackground>

        <IconBackground>
          <ArrowIcon />
        </IconBackground>
      </LeftIcons>
    </Container>
  );
};

export default Header;
