import {
  Stack,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Chip,
} from "@mui/material";
import CalculateIcon from "@mui/icons-material/Calculate";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Hierarchy.css";

const Hierarchy = () => {
  const [openMath, setOpenMath] = useState(false);
  const [openPhysics, setOpenPhysics] = useState(false);
  const [openBiology, setOpenBiology] = useState(false);

  const handleClickMath = () => {
    setOpenMath(!openMath);
  };

  const handleClickPhysics = () => {
    setOpenPhysics(!openPhysics);
  };
  const handleClickBiology = () => {
    setOpenBiology(!openBiology);
  };
  // const handleClickBiology = () => {
  //   setOpenPhysics(!openPhysics);
  // };

  return (
    <>
      <Stack className="torso">
        <Stack sx={{ width: "100vw", height: "60vh" }}>
          <Stack>
            <Typography
              variant="h2"
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              Hierarchy of Colossal Notebook
            </Typography>
          </Stack>
          <Stack>
            <div
              style={{
                position: "absolute",
                borderLeft: "1px solid #ffaa9f",
                borderRight: "1px solid #ffaa9f",
                width: "2px",
                float: "left",
                height: "495px",
                marginLeft: "60px",
              }}
            ></div>
            <List
              sx={{
                color: "var(--dark-color)",
                fontSize: "21px",
                padding: "0",
                // width: "100%",
                width: "100vw",
                border: "2px solid #cecece",
              }}
            >
              {/* Math */}
              <ListItemButton
                sx={{
                  listStyle: "none",
                  borderBottom: "1px dotted #ccc",
                  textIndent: "25px",
                  height: "auto",
                  textTransform: "capitalize",
                }}
                onClick={handleClickMath}
              >
                <ListItemIcon>
                  <CalculateIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{ fontWeight: "800" }}
                  primary="Mathemathics"
                />
                {/* TODO: go do some icon alchemy shit check https://mui.com/material-ui/react-list/ at the nested list part */}
              </ListItemButton>
              <Collapse in={openMath} timeout="auto" unmountOnExit>
                {/* I want component="li" because of the notebook background */}

                <List disablePadding>
                  <Link
                    to="https://drive.google.com/file/d/1b_61jcUHMAwQQqkZRIHoLyIO07PeDHPT/view?usp=sharing"
                    target="_blank"
                    style={{ color: "var(--dark-color)" }}
                  >
                    <ListItemButton
                      sx={{
                        pl: 4,
                        listStyle: "none",
                        borderBottom: "1px dotted #ccc",
                        // textIndent: "25px",
                        height: "auto",
                        textTransform: "capitalize",
                      }}
                    >
                      <ListItemIcon>
                        <Chip
                          label="syllabus"
                          color="secondary"
                          sx={{ ml: 10 }}
                        />
                      </ListItemIcon>

                      <ListItemText
                        primary="LEARNING PROGRAM MATEMATIKA"
                        sx={{ ml: 1 }}
                      />
                    </ListItemButton>
                  </Link>

                  <Link
                    to="https://drive.google.com/file/d/1lQUQWQs52Mx8b686OWqs1YmEZg1VCEdY/view?usp=sharing"
                    target="_blank"
                    style={{ color: "var(--dark-color)" }}
                  >
                    <ListItemButton
                      sx={{
                        pl: 4,
                        listStyle: "none",
                        borderBottom: "1px dotted #ccc",
                        // textIndent: "25px",
                        height: "auto",
                        textTransform: "capitalize",
                      }}
                    >
                      <ListItemIcon>
                        <Chip label="minat" color="success" sx={{ ml: 10 }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Modul Matematika Peminatan Kelas X  (T.A. 2021-2022) (1) (1) (3) (1).pdf"
                        sx={{ ml: 1 }}
                      />
                    </ListItemButton>
                  </Link>

                  <Link
                    to="https://drive.google.com/file/d/1o47EA13IxT-I4h47qbU8B4dNm1UaB5gp/view?usp=sharing"
                    target="_blank"
                    style={{ color: "var(--dark-color)" }}
                  >
                    <ListItemButton
                      sx={{
                        pl: 4,
                        listStyle: "none",
                        borderBottom: "1px dotted #ccc",
                        // textIndent: "25px",
                        height: "auto",
                        textTransform: "capitalize",
                      }}
                    >
                      <ListItemIcon>
                        <Chip label="wajib" color="warning" sx={{ ml: 10 }} />
                      </ListItemIcon>
                      {/* TODO: kata "WAJIB" hrs di delete biar shorten the length of title */}
                      <ListItemText
                        primary="Modul Matematika WAJIB Kelas X IPA dan IPS (2021-2022) (1) (1).pdf"
                        sx={{ ml: 1 }}
                      />
                    </ListItemButton>
                  </Link>
                </List>
              </Collapse>

              {/* Physics */}
              <ListItemButton
                sx={{
                  listStyle: "none",
                  borderBottom: "1px dotted #ccc",
                  textIndent: "25px",
                  height: "auto",
                  textTransform: "capitalize",
                }}
                onClick={handleClickPhysics}
              >
                <ListItemIcon>
                  <FlightTakeoffIcon />
                </ListItemIcon>
                <ListItemText primary="Physics" />
                {/* TODO: go do some icon alchemy shit check https://mui.com/material-ui/react-list/ at the nested list part */}
              </ListItemButton>
              <Collapse in={openPhysics} timeout="auto" unmountOnExit>
                {/* I want component="li" because of the notebook background */}
                <List disablePadding>
                  <Link
                    to=""
                    target="_blank"
                    style={{ color: "var(--dark-color)" }}
                  >
                    <ListItemButton
                      sx={{
                        pl: 4,
                        listStyle: "none",
                        borderBottom: "1px dotted #ccc",
                        // textIndent: "25px",
                        height: "auto",
                        textTransform: "capitalize",
                      }}
                    >
                      <ListItemIcon>
                        <Chip label="minat" color="success" sx={{ ml: 10 }} />
                      </ListItemIcon>

                      <ListItemText primary="Module 1" sx={{ ml: 1 }} />
                    </ListItemButton>
                  </Link>
                </List>
              </Collapse>

              {/* Biology */}
              <ListItemButton
                sx={{
                  listStyle: "none",
                  borderBottom: "1px dotted #ccc",
                  textIndent: "25px",
                  height: "auto",
                  textTransform: "capitalize",
                }}
                onClick={handleClickBiology}
              >
                <ListItemIcon>
                  <CoronavirusIcon />
                </ListItemIcon>
                <ListItemText primary="Biology" />
              </ListItemButton>
              <Collapse in={openBiology} timeout="auto" unmountOnExit>
                {/* I want component="li" because of the notebook background */}
                <List disablePadding>
                  <ListItemButton
                    sx={{
                      pl: 4,
                      listStyle: "none",
                      borderBottom: "1px dotted #ccc",
                      // textIndent: "25px",
                      height: "auto",
                      textTransform: "capitalize",
                    }}
                  >
                    <ListItemIcon>
                      <Chip label="minat" color="success" sx={{ ml: 10 }} />
                    </ListItemIcon>
                    <ListItemText primary="Module 1" sx={{ ml: 1 }} />
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

export default Hierarchy;
