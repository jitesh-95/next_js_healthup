"use client";

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

import styles from '../styles/topmenu.module.css'
import { useThemeMode } from "@/app/ThemeContext";
import { usePathname } from "next/navigation";

const pages = ["Custom Recipe", "Weekly Plan", "About"];

export default function TopMenu() {
  const { darkMode, toggleTheme } = useThemeMode();
  const [openDrawer, setOpenDrawer] = useState(false);
  const pathname = usePathname();

  const toggleDrawer = (state) => () => setOpenDrawer(state);

  return (<>
    <AppBar
      position="sticky"
      sx={{
        boxShadow: 'none',
        backdropFilter: 'blur(3px)', // blur effect
        backgroundColor: `${darkMode ? 'rgba(0, 0, 0, 0.72)' : 'rgba(234, 209, 238, 0.72)'}`, // translucent white
        WebkitBackdropFilter: 'blur(3px)', // Safari support,
      }}
    >
      <Container className={styles.menuContainer} disableGutters maxWidth={false}>
        {/* Logo Desktop */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Link href="/" passHref className={`${styles.linkDecoration}`}>
            <Typography
              variant="h5"
              noWrap
              sx={{
                fontWeight: 700,
                color: `${darkMode ? '#fff' : '#121212'}`,
                mx: 2,
                my: 1
              }}
            >
              HealthUP
            </Typography>
          </Link>
        </Box>

        {/* Desktop links */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
          }}
        >
          {pages.map((page) => {
            const path = `/${page.toLowerCase().replace(" ", "-")}`;
            const isActive = pathname === path;
            return (
              <Link
                key={page}
                href={path}
                passHref
                className={`${styles.linkDecoration}`}
              >
                <Typography variant="body1" className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                  sx={{ mx: 2, }}>
                  {page}
                </Typography>
              </Link>
            )
          })}
        </Box>

        {/* Mobile menu button */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton size="large" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Mobile Logo */}
        <Box sx={{ display: { xs: "block", md: "none" }, }}>
          <Link href="/" passHref className={`${styles.linkDecoration}`}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontWeight: 700,
                color: `${darkMode ? '#fff' : '#121212'}`
              }}
            >
              HealthUP
            </Typography>
          </Link>
        </Box>

        {/* Right icons */}
        <Box>
          <Tooltip title={darkMode ? 'Light Mode' : 'Dark Mode'}>
            <IconButton sx={{ ml: 1 }} onClick={toggleTheme}>
              {darkMode ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
            </IconButton>
          </Tooltip>
          {/* <Tooltip title="Profile">
            <IconButton sx={{ ml: 1 }} >
              <AccountCircleIcon />
            </IconButton>
          </Tooltip> */}
        </Box>
      </Container>
    </AppBar>

    {/* Mobile Drawer */}
    <Drawer
      anchor="left"
      open={openDrawer}
      onClose={toggleDrawer(false)}
    >
      <List sx={{ mt: 2, width: 250 }}>
        {pages.map((page) => {
          const path = `/${page.toLowerCase().replace(" ", "-")}`;
          const isActive = pathname === path;

          return (
            <ListItem key={page} disablePadding className={isActive ? styles.drawerItem : ''}>
              <Link
                href={path}
                passHref
                className={`${styles.linkDecoration}`}
              >
                <ListItemButton onClick={toggleDrawer(false)} sx={{ width: 250 }}>
                  <ListItemText primary={page} className={isActive ? styles.drawerItemActive : ''} />
                </ListItemButton>
              </Link>
            </ListItem>
          )
        })}
      </List>
    </Drawer>
  </>
  );
}
