import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { Link as MuiLink } from "@mui/material";
import Image from "next/image";

import logo from "../assets/images/logos/generic-logo.svg";

const pages = [
  { name: "Flights", path: "/flights" },
  {
    name: "Gifts",
    path: "/gifts",
  },
  {
    name: "Blog",
    path: "/blog",
  },

  {
    name: "Sign in",
    path: "/signin",
  },
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        color: "black",
        boxShadow: "none",
      }}
    >
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box sx={{ paddingRight: 5, display: { xs: "none", md: "flex" } }}>
            <Link href="/" passHref>
              <MuiLink>
                <Image src={logo} width="160px" height="60px" />
              </MuiLink>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              disableScrollLock
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Link href={page.path}>
                    <Typography
                      component="a"
                      color="inherit"
                      textAlign="center"
                    >
                      {page.name}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <Link href="/" passHref>
              <MuiLink underline="none">
                <Typography variant="h6" noWrap color="black">
                  HOTELS
                </Typography>
              </MuiLink>
            </Link>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page, index) => (
              <Link
                key={index}
                href={page.path}
                passHref
                onClick={handleCloseNavMenu}
              >
                <MuiLink
                  sx={{ color: "inherit", padding: 1 }}
                  underline="hover"
                >
                  <Typography> {page.name}</Typography>
                </MuiLink>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
