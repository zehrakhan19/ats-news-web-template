import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import "./TopHeader.css";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";

export default function TopHeader(props) {
  const tabButtons = [
    {
      name: "EPaper",
      path: "/",
      onClick: () => console.log("Redirect to new Domain"),
    },
    {
      name: "English",
      path: "/",
      onClick: () => null,
    },
    {
      name: "Education",
      path: "/",
      onClick: () => null,
    },
    {
      name: "YSR",
      path: "/",
      onClick: () => null,
    },
    {
      name: "Careers",
      path: "/",
      onClick: () => null,
    },
  ];
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link to={"/"}>
        <Typography variant="h6" sx={{ my: 2 }}>
          LOGO
        </Typography>
      </Link>
      <Divider />
      <List>
        {tabButtons.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link to={item?.path}>
                <ListItemText primary={item.name} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const drawerWidth = 240;

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      {isMobile ? (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="static" className="appBar" component="nav">
            <Toolbar className="tab-container">
              <div className="bar">
                <IconButton
                  color="#000"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { xl: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
              </div>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, textAlign: "center", color: "#000" }}
              >
                LOGO
              </Typography>
            </Toolbar>
          </AppBar>
          <nav>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </nav>
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" className="appBar">
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, color: "#000" }}
              >
                <Link to={"/"}>LOGO</Link>
              </Typography>
              {tabButtons?.map((item, id) => (
                <div key={id}>
                  <Link to={item?.path}>
                    <div className="commonBtn" onClick={() => item?.onClick()}>
                      {item?.name}
                    </div>
                  </Link>
                </div>
              ))}
            </Toolbar>
          </AppBar>
        </Box>
      )}
    </div>
  );
}
