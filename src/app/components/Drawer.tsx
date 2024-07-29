import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IconButton, Link, ListItemButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HomeIcon from "@mui/icons-material/Home";

type Anchor = "top" | "left" | "bottom" | "right";

export default function AnchorTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        "& .MuiListItemButton-root:hover": {
          bgcolor: "rgba(97,187,70,0.25)",
        },
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <Link
            href="/"
            underline="none"
            color="inherit"
            sx={{ width: "100%" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Principal" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link
            href="/reserve"
            underline="none"
            color="inherit"
            sx={{ width: "100%" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <AttachMoneyIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Reserve" />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton
          onClick={toggleDrawer("right", true)}
          edge="start"
          color="inherit"
          aria-label="menu"
          size="large"
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          sx={{
            "& .MuiDrawer-paper": {
              bgcolor: "black",
              backgroundImage: "none",
            },
          }}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
