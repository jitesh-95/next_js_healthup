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

const pages = ["Custom Recipe", "Weekly Plan", "About"];

export default function TopMenu() {
  const { darkMode, toggleTheme } = useThemeMode();
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (state) => () => setOpenDrawer(state);

  return (<>
    <AppBar
      position="sticky"
      sx={{
        borderBottom: `1px solid ${darkMode ? 'rgb(57, 57, 57)' : 'rgb(212, 210, 210)'}`,
        boxShadow: 'none',
        backdropFilter: 'blur(3px)', // blur effect
        backgroundColor: `${darkMode ? 'rgba(0, 0, 0, 0.72)' : 'rgba(255, 255, 255, 0.72)'}`, // translucent white
        WebkitBackdropFilter: 'blur(3px)', // Safari support
        mb: 2
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
                pt: 1,
                pb: 1,
                ml: 1
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
          {pages.map((page) => (
            <Link
              key={page}
              href={page === "Custom Recipe" ? "/" : `/${page.toLowerCase().replace(" ", "-")}`}
              passHref
              className={`${styles.linkDecoration}`}
            >
              <Typography variant="body1"
                sx={{
                  color: `${darkMode ? '#fff' : '#121212'}`,
                  mr: 2,
                  ml: 2
                }}>
                {page}
              </Typography>
            </Link>
          ))}
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
        {pages.map((page) => (
          <ListItem key={page} disablePadding>
            <Link
              href={page === "Custom Recipe" ? "/" : `/${page.toLowerCase().replace(" ", "-")}`}
              passHref
              className={`${styles.linkDecoration}`}
            >
              <ListItemButton onClick={toggleDrawer(false)} sx={{ width: 250 }}>
                <ListItemText primary={page} sx={{ color: `${darkMode ? '#fff' : '#121212'}` }} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  </>
  );
}
