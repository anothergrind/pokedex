import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import SvgIcon from "@mui/material/SvgIcon";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Stack from "@mui/material/Stack";

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ bgcolor: "#1a2236", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "space-between", px: 4 }}>
        <Stack direction="row" alignItems="center" spacing={4}>
          {/* Logo */}
          <SvgIcon sx={{ color: "#6366F1", fontSize: 32 }}>
            <svg viewBox="0 0 32 32" fill="none">
              <path
                fill="#6366F1"
                d="M16 0C7.163 0 0 7.163 0 16c0 8.837 7.163 16 16 16s16-7.163 16-16C32 7.163 24.837 0 16 0zm0 29.333C8.636 29.333 2.667 23.364 2.667 16S8.636 2.667 16 2.667 29.333 8.636 29.333 16 23.364 29.333 16 29.333z"
              />
            </svg>
          </SvgIcon>
          {/* Navigation Links */}
          <Stack direction="row" spacing={3}>
            <Button
              variant="contained"
              disableElevation
              sx={{
                bgcolor: "#232c43",
                color: "#fff",
                fontWeight: 500,
                px: 2,
                py: 1,
                borderRadius: 2,
                "&:hover": { bgcolor: "#232c43", opacity: 0.85 },
              }}
            >
              Dashboard
            </Button>
            <Button
              variant="text"
              sx={{
                color: "#fff",
                fontWeight: 500,
                px: 2,
                py: 1,
                borderRadius: 2,
                "&:hover": { bgcolor: "#232c43" },
              }}
            >
              Team
            </Button>
            <Button
              variant="text"
              sx={{
                color: "#fff",
                fontWeight: 500,
                px: 2,
                py: 1,
                borderRadius: 2,
                "&:hover": { bgcolor: "#232c43" },
              }}
            >
              Projects
            </Button>
            <Button
              variant="text"
              sx={{
                color: "#fff",
                fontWeight: 500,
                px: 2,
                py: 1,
                borderRadius: 2,
                "&:hover": { bgcolor: "#232c43" },
              }}
            >
              Calendar
            </Button>
            <Button
              variant="text"
              sx={{
                color: "#fff",
                fontWeight: 500,
                px: 2,
                py: 1,
                borderRadius: 2,
                "&:hover": { bgcolor: "#232c43" },
              }}
            >
              Reports
            </Button>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={3}>
          {/* Notification Icon */}
          <IconButton sx={{ color: "#bdbdbd", "&:hover": { color: "#fff" } }}>
            <NotificationsNoneIcon />
          </IconButton>
          {/* Profile Avatar */}
          <Avatar
            src="/api/placeholder/32/32"
            sx={{ width: 32, height: 32, bgcolor: "#e0e0e0" }}
            alt="Avatar"
          />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}