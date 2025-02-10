'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Tooltip,
  Dialog,
  DialogContent,
} from '@mui/material';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import {
  Menu as MenuIcon,
  Home,
  WorkOutline,
  AddBox,
  Support,
  PlayCircle,
  Close,
  AccountCircle,
} from '@mui/icons-material';
import Image from 'next/image';
import logo from '../../../public/logo.png';
const DRAWER_WIDTH = 60;

export default function DashboardLayout({ children }) {
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showTutorial, setShowTutorial] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  // menu items
  const menuItems = [
    { icon: <Home />, label: 'Home', path: '/' },
    { icon: <WorkOutline />, lebel: 'Posted jobs', path: '/jobs' },
    { icon: <AddBox />, label: 'create job', path: '/create-job' },
    { icon: <Support />, label: 'Support', path: '/support' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const drawer = (
    <Box sx={{ overflow: 'auto', marginTop: '80px' }}>
      {menuItems.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          style={{ textDecoration: 'none', color: 'primanry.main' }}
        >
          <Tooltip title={item.label} placement='right'>
            <IconButton
              sx={{
                width: '80%',
                height: '48px',
                justifyContent: 'center',
                color: 'primary.main',
              }}
            >
              {item.icon}
            </IconButton>
          </Tooltip>
        </Link>
      ))}
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/*--------Navbar------- */}
      <AppBar
        position='fixed'
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: 'primary.main',
        }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            edge='stat'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '12px 0 12px 0 ',
              justifyContent: 'flex-start',
              flexGrow: 1,
            }}
          >
            <Image src={logo} width={40} height={40} alt='logo' />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: '15px' }}>
              <Typography variant='h6' component='div' sx={{ mr: 1 }}>
                TechForing
              </Typography>
              <Typography
                variant='subtitle2'
                sx={{
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                Shaping Tomorrow&apos;s Cybercurity
              </Typography>
            </Box>
          </Box>
          <IconButton color='inherit'>
            <AccountCircle sx={{ fontSize: 40 }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* --------drawer----- */}
      <Box
        component='nav'
        sx={{
          width: { sm: DRAWER_WIDTH },

          flexShrink: { sm: 0 },
        }}
      >
        {/* --------drawer for mobile----- */}

        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            marginTop: '80px',
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default',
            },
          }}
        >
          {drawer}
        </Drawer>
        {/* --------drawer for desktop----- */}

        <Drawer
          variant='permanent'
          sx={{
            marginTop: '80px',

            display: { xs: 'none', sm: 'block' },

            '& .MuiDrawer-paper': {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {/* -------- main content----- */}

      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 0,
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          mt: 8,
        }}
      >
        {/* -------- tutorial modal----- */}
        {showTutorial && (
          <Box
            sx={{
              bgcolor: '#5BBC2E',
              p: 2,
              mb: 3,
              borderRadius: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography color='white'>
              {' '}
              Step-by-Step Tutorial for a Smooth Journey Ahead{' '}
            </Typography>
            <Box>
              <IconButton
                onClick={() => setShowVideo(true)}
                sx={{ color: 'black' }}
              >
                <PlayCircle />
              </IconButton>
              <IconButton
                onClick={() => setShowTutorial(false)}
                sx={{
                  color: 'white',
                }}
              >
                <Close />
              </IconButton>
            </Box>
          </Box>
        )}
        {children}
      </Box>

      <Dialog
        fullWidth
        maxWidth='md'
        open={showVideo}
        onClose={() => setShowVideo(false)}
      >
        <DialogContent>
          <Box sx={{ position: 'relative', pb: '56.25%', height: 0 }}>
            <video
              controls
              autoPlay
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            >
              <source src='/videos/TechForing-tutorial.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
