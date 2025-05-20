import React from "react";
import "../styles/navbar.css";

// Material UI Components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import SvgIcon from "@mui/material/SvgIcon";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Stack from "@mui/material/Stack";

import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar position="static" className="navbar-appbar">
      <Toolbar className="navbar-toolbar">
        <Stack direction="row" alignItems="center" spacing={4}>
          {/* Logo */}
          <SvgIcon className="navbar-logo">
            <svg viewBox="0 0 32 32" fill="none">
              <path
                fill="#6366F1"
                d="M16 0C7.163 0 0 7.163 0 16c0 8.837 7.163 16 16 16s16-7.163 16-16C32 7.163 24.837 0 16 0zm0 29.333C8.636 29.333 2.667 23.364 2.667 16S8.636 2.667 16 2.667 29.333 8.636 29.333 16 23.364 29.333 16 29.333z"
              />
            </svg>
          </SvgIcon>

          {/* Navigation Links */}
          <Stack direction="row" spacing={3}>
            <Button variant="contained" disableElevation className="navbar-btn navbar-btn-contained">
              Dashboard
            </Button>
            <Link href="/pages/YourPokemon">
              <Button variant="text" className="navbar-btn">
                Your Pokemon
              </Button>
            </Link>
            
            <Link href="/pages/LikedPokemon">
              <Button variant="text" className="navbar-btn">
                Liked Pokemon
              </Button>
            </Link>

            <Link href="pages/DislikedPokemon">
              <Button variant="text" className="navbar-btn">
                Disliked Pokemon
              </Button>
            </Link>

            <Link href="/pages/Stats">
              <Button variant="text" className="navbar-btn">
                Stats
              </Button>
            </Link>
          
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={3}>
          {/* Notification Icon */}
          <IconButton className="navbar-notification">
            <NotificationsNoneIcon />
          </IconButton>
          {/* Profile Avatar */}
          <Avatar
            src="/api/placeholder/32/32"
            className="navbar-avatar"
            alt="Avatar"
          />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}