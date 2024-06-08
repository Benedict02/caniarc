import {
  Stack,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import { useState } from "react";
import "./Hierarchy.css";

const About = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Stack className="torso">
        <Stack sx={{ width: "100vw", height: "70vh" }}>
          <Stack>
            <Typography
              variant="h2"
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              About Colossal Notebook
            </Typography>
          </Stack>
          <Stack>
            <List>
              <ListItemButton>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="Test" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="lorem" />
              </ListItemButton>

              {/* DOMAIN EXPANSION */}
              <ListItemButton onClick={handleClick}>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="Expanding" />
                {/* TODO: go do some icon alchemy shit check https://mui.com/material-ui/react-list/ at the nested list part */}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                {/* I want component="li" because of the notebook background */}
                <List disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>{/* do more icon alchemy */}</ListItemIcon>
                    <ListItemText primary="Malevolent Shrine" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default About;
