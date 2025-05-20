import React from "react";
import "../styles/navbar.css";

// Material UI Components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Stack from "@mui/material/Stack";

import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar position="static" className="navbar-appbar">
      <Toolbar className="navbar-toolbar">
        <Stack direction="row" alignItems="center" spacing={4}>
          {/* Logo */}
          <img
            src='pokedex_logo.svg'
            alt="Logo"
            className="navbar-logo-img"
            style={{ width: 50, height: 50 }}
          />

          {/* Navigation Links */}
          <Stack direction="row" spacing={3}>
           <Link href="/">
              <Button variant="contained" className="navbar-btn navbar-btn-contained">
                Dashboard
              </Button>
            </Link>
            <Link href="/pages/your-pokemon">
              <Button variant="text" className="navbar-btn">
                Your Pokemon
              </Button>
            </Link>
            
            <Link href="/pages/liked-pokemon">
              <Button variant="text" className="navbar-btn">
                Liked Pokemon
              </Button>
            </Link>

            <Link href="/pages/disliked-pokemon">
              <Button variant="text" className="navbar-btn">
                Disliked Pokemon
              </Button>
            </Link>

            <Link href="/pages/stats">
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