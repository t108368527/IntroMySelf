import Image from 'next/image';
import styles from '@/styles/Header.module.css';
import React from 'react';
// MUI
import { AppBar, Box, Button, CssBaseline, Divider, Drawer, IconButton, Link, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// LOGO
import logo from '../public/images/logo.png';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const drawerWidth = 240;

const navItems = ['degree', 'career', 'works'];

export default function Header(props: Props) {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () =>{
        setMobileOpen((prevState) => !prevState);
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            Pony_Chiang
          </Typography>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
  
    return (
        <>
            <Box sx={{display: 'flex'}} >
                <CssBaseline />
                <AppBar component="nav" className={styles.body}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Link href='/'sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <Image
                            src={logo}
                            alt="Pony"
                            width={70}
                            priority
                            />
                        </Link>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#fff' }}>
                                <Link href={item} color="#FFF" >
                                    {item}
                                </Link>
                            </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        >
                        {drawer}
                    </Drawer>
                </Box>
            </Box>
            {/* <Box sx={{flexGrow:1}}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <div className={styles.body}>
                            <Link href='/'>
                                <Image
                                src={logo}
                                alt="Pony"
                                width={70}
                                priority
                                />
                            </Link>
                        </div>
                    </Grid>
                    <Grid item xs={8}>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#fff' }}>
                                {item}
                            </Button>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Box> */}
        </>
    )
}