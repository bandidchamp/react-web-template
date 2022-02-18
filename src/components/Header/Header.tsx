import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import Breadcrumbs, { BreadcrumbsProps as MuiBreadcrumbsProps } from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import IconButton from '@mui/material/IconButton';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import MenuIcon from '@mui/icons-material/Menu';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer - 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  // ...(open && {
  //   marginLeft: theme.sidebarWidth,
  //   width: `calc(100% - ${theme.sidebarWidth}px)`,
  //   transition: theme.transitions.create(['width', 'margin'], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // }),
  ...(!open && {
    width: `calc(100% - 0px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  })
}));

interface BreadcrumbsProps extends MuiBreadcrumbsProps {
  open?: boolean;
}

const BreadcrumbsStyled = styled(Breadcrumbs, {
  shouldForwardProp: (prop) => prop !== 'open',
})<BreadcrumbsProps>(({ theme, open }) => ({
  color: "#fcfcfc",
  ...(open && {
    paddingLeft: `${theme.sidebarWidth}px`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down("sm")]: {
      paddingLeft: `0px`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }
  }),
  ...(!open && {
    paddingLeft: `0px`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

interface Props {
  layoutState: boolean,
  toggleSidebar: () => void,
}

const Header: React.FC<Props> = (props) => {

  const { layoutState, toggleSidebar } = props;

  const handleDrawerOpen = () => {
    toggleSidebar()
  };

  return (
    <AppBar position="fixed" open={layoutState}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: '10px',
            // ...(layoutState && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <BreadcrumbsStyled aria-label="breadcrumb" open={layoutState}>
          <Link underline="hover" color="inherit" href="/">
            MUI
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/"
          >
            Core
          </Link>
          <Typography color="text.primary">Breadcrumbs</Typography>
        </BreadcrumbsStyled>
      </Toolbar>
    </AppBar>
  );
}


export default Header