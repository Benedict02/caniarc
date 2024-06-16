import {
  Stack,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import CalculateIcon from "@mui/icons-material/Calculate";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { useState } from "react";
import HieGene from "../components/HieGene";

//I want to add chip filter thingy for the authors of the notes. So when people want to get gabrio's catatan they can just go to about and select the gabrio

const About = () => {
  const [openChips, setOpenChips] = useState(false);
  const [openPhysics, setOpenPhysics] = useState(false);
  const [openBiology, setOpenBiology] = useState(false);

  const handleClickChips = () => {
    setOpenChips(!openChips);
  };

  const handleClickPhysics = () => {
    setOpenPhysics(!openPhysics);
  };
  const handleClickBiology = () => {
    setOpenBiology(!openBiology);
  };

  return (
    <>
      <Stack className="torso">
        <Stack sx={{ width: "90vw", height: "60vh" }}>
          <Stack>
            <Typography
              variant="h2"
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              About
            </Typography>
          </Stack>
          <Stack>
            <List
              sx={{
                color: "var(--dark-color)",
                fontSize: "21px",
                padding: "0",
                width: "100%",
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
                onClick={handleClickChips}
              >
                <ListItemIcon>
                  <CalculateIcon />
                </ListItemIcon>
                <ListItemText sx={{ fontWeight: "800" }} primary="Chips" />
              </ListItemButton>
              <Collapse in={openChips} timeout="auto" unmountOnExit>
                {/* I want component="li" because of the notebook background */}

                <List disablePadding>
                  <HieGene
                    link=""
                    color="warning"
                    chip="Notebank"
                    title="Catatan collab, lbh dri 1 org (info di dalam. Biasanya dikasih credit)"
                  />
                  <HieGene
                    link=""
                    chip="BenHal"
                    title="Catatan Benedict Halim"
                  />
                  <HieGene
                    link=""
                    chip="Gabrio"
                    title="Catatan Gabrio Manuel Kapuangan"
                  />
                  <HieGene
                    link=""
                    color="warning"
                    chip="Module Kelas X"
                    title="Module kelas X sourced from seniors(usually aquired during liburan akhir semester)"
                  />
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
                  <HieGene
                    link="https://drive.google.com/file/d/1a3hnt0Sdho0o9CLmpRzn1zJeZwoyZn3v/view?usp=sharing"
                    color="warning"
                    chip="Module X"
                    title="MODUL PEMBELAJARAN FISIKA KELAS X SMA KANISIUS.pdf"
                  />
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
                <HieGene
                  color="primary"
                  title="Lorem Ipsum Dolor sit amet"
                  link="/"
                  chip="pending"
                />
              </Collapse>
            </List>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default About;
