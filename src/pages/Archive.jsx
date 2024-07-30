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
import FunctionsIcon from "@mui/icons-material/Functions";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import HistoryIcon from "@mui/icons-material/History";
import ScienceIcon from "@mui/icons-material/Science";
import TerrainIcon from "@mui/icons-material/Terrain";
import LanguageIcon from "@mui/icons-material/Language";
import TranslateIcon from "@mui/icons-material/Translate";
import PeopleIcon from "@mui/icons-material/People";
import TerminalIcon from "@mui/icons-material/Terminal";
import FlagIcon from "@mui/icons-material/Flag";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { useState } from "react";
import HieGene from "../components/HieGene";

const Archive = () => {
  const [openCompulsoryMath, setOpenCompulsoryMath] = useState(false);
  const [openElectiveMath, setOpenElectiveMath] = useState(false);
  const [openPhysics, setOpenPhysics] = useState(false);
  const [openBiology, setOpenBiology] = useState(false);
  const [openHistory, setOpenHistory] = useState(false);
  const [openChemistry, setOpenChemistry] = useState(false);
  const [openGeography, setOpenGeography] = useState(false);
  const [openEnglish, setOpenEnglish] = useState(false);
  const [openIndonesian, setOpenIndonesian] = useState(false);
  const [openSociology, setOpenSociology] = useState(false);
  const [openInformatics, setOpenInformatics] = useState(false);
  const [openPPKn, setOpenPPKn] = useState(false);

  const BenHalWA = "+62818588589";

  const handleToggle = (main, setMain, ...setOther) => {
    setMain((main) => !main);
    setOther.forEach((harun) => harun(false));
  };

  const handleClickCompulsoryMath = () => {
    handleToggle(
      openCompulsoryMath,
      setOpenCompulsoryMath,
      setOpenBiology,
      setOpenElectiveMath,
      setOpenPhysics,
      setOpenHistory,
      setOpenChemistry,
      setOpenGeography,
      setOpenEnglish,
      setOpenIndonesian,
      setOpenSociology,
      setOpenInformatics
    );
  };

  const handleClickElectiveMath = () => {
    handleToggle(
      openElectiveMath,
      setOpenElectiveMath,
      setOpenBiology,
      setOpenCompulsoryMath,
      setOpenPhysics,
      setOpenHistory,
      setOpenChemistry,
      setOpenGeography,
      setOpenEnglish,
      setOpenIndonesian,
      setOpenSociology,
      setOpenInformatics,
      setOpenPPKn
    );
  };

  const handleClickPhysics = () => {
    handleToggle(
      openPhysics,
      setOpenPhysics,
      setOpenBiology,
      setOpenElectiveMath,
      setOpenCompulsoryMath,
      setOpenHistory,
      setOpenChemistry,
      setOpenGeography,
      setOpenEnglish,
      setOpenIndonesian,
      setOpenSociology,
      setOpenInformatics,
      setOpenPPKn
    );
  };

  const handleClickBiology = () => {
    handleToggle(
      openBiology,
      setOpenBiology,
      setOpenPhysics,
      setOpenElectiveMath,
      setOpenCompulsoryMath,
      setOpenHistory,
      setOpenChemistry,
      setOpenGeography,
      setOpenEnglish,
      setOpenIndonesian,
      setOpenSociology,
      setOpenInformatics,
      setOpenPPKn
    );
  };

  const handleClickHistory = () => {
    handleToggle(
      openHistory,
      setOpenHistory,
      setOpenBiology,
      setOpenPhysics,
      setOpenElectiveMath,
      setOpenCompulsoryMath,
      setOpenChemistry,
      setOpenGeography,
      setOpenEnglish,
      setOpenIndonesian,
      setOpenSociology,
      setOpenInformatics,
      setOpenPPKn
    );
  };

  const handleClickChemistry = () => {
    handleToggle(
      openChemistry,
      setOpenChemistry,
      setOpenHistory,
      setOpenBiology,
      setOpenPhysics,
      setOpenElectiveMath,
      setOpenCompulsoryMath,
      setOpenGeography,
      setOpenEnglish,
      setOpenIndonesian,
      setOpenSociology,
      setOpenInformatics,
      setOpenPPKn
    );
  };

  const handleClickGeography = () => {
    handleToggle(
      openGeography,
      setOpenGeography,
      setOpenChemistry,
      setOpenHistory,
      setOpenBiology,
      setOpenPhysics,
      setOpenElectiveMath,
      setOpenCompulsoryMath,
      setOpenEnglish,
      setOpenIndonesian,
      setOpenSociology,
      setOpenInformatics,
      setOpenPPKn
    );
  };

  const handleClickEnglish = () => {
    handleToggle(
      openEnglish,
      setOpenEnglish,
      setOpenChemistry,
      setOpenHistory,
      setOpenBiology,
      setOpenPhysics,
      setOpenElectiveMath,
      setOpenCompulsoryMath,
      setOpenGeography,
      setOpenIndonesian,
      setOpenSociology,
      setOpenInformatics,
      setOpenPPKn
    );
  };

  const handleClickIndonesian = () => {
    handleToggle(
      openIndonesian,
      setOpenIndonesian,
      setOpenChemistry,
      setOpenHistory,
      setOpenBiology,
      setOpenPhysics,
      setOpenElectiveMath,
      setOpenCompulsoryMath,
      setOpenGeography,
      setOpenEnglish,
      setOpenSociology,
      setOpenInformatics,
      setOpenPPKn
    );
  };
  const handleClickSociology = () => {
    handleToggle(
      openSociology,
      setOpenSociology,
      setOpenIndonesian,
      setOpenChemistry,
      setOpenHistory,
      setOpenBiology,
      setOpenPhysics,
      setOpenElectiveMath,
      setOpenCompulsoryMath,
      setOpenGeography,
      setOpenEnglish,
      setOpenInformatics,
      setOpenPPKn
    );
  };
  const handleClickInformatics = () => {
    handleToggle(
      openInformatics,
      setOpenInformatics,
      setOpenIndonesian,
      setOpenChemistry,
      setOpenHistory,
      setOpenBiology,
      setOpenPhysics,
      setOpenElectiveMath,
      setOpenCompulsoryMath,
      setOpenGeography,
      setOpenEnglish,
      setOpenSociology,
      setOpenPPKn
    );
  };
  const handleClickPPKn = () => {
    handleToggle(
      openPPKn,
      setOpenPPKn,
      setOpenIndonesian,
      setOpenChemistry,
      setOpenHistory,
      setOpenBiology,
      setOpenPhysics,
      setOpenElectiveMath,
      setOpenCompulsoryMath,
      setOpenGeography,
      setOpenEnglish,
      setOpenSociology,
      setOpenInformatics
    );
  };

  return (
    <>
      <Stack className="torso">
        <Stack sx={{ width: "90vw", height: "100%" }} gap={2}>
          <Stack>
            <Typography
              variant="h2"
              sx={{
                display: "flex",
                justifyContent: "center",
                fontFamily: "Outfit",
                textTransform: "uppercase",
                fontWeight: "600",
              }}
            >
              Archive
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
              {/* Compulsory */}
              <ListItemButton
                sx={{
                  listStyle: "none",
                  borderBottom: "1px dotted #ccc",
                  textIndent: "25px",
                  height: "auto",
                }}
                onClick={handleClickCompulsoryMath}
              >
                <ListItemIcon>
                  <CalculateIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{ fontWeight: "800" }}
                  primary="Matematika Bu Ari"
                />
              </ListItemButton>
              <Collapse in={openCompulsoryMath} timeout="auto" unmountOnExit>
                <List disablePadding>
                  <HieGene
                    link="https://drive.google.com/file/d/1z6CHBCPZ6tM1Cxoex9BhB0kettPekVRY/view?usp=sharing"
                    chip="Pertemuan 1"
                    title="Introduction, Sebaran Materi, Jadwal(akademik)"
                  />
                </List>
              </Collapse>

              {/* Elective */}
              {/* Contains logarithm btw */}
              <ListItemButton
                sx={{
                  listStyle: "none",
                  borderBottom: "1px dotted #ccc",
                  textIndent: "25px",
                  height: "auto",
                }}
                onClick={handleClickElectiveMath}
              >
                <ListItemIcon>
                  <FunctionsIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{ fontWeight: "800" }}
                  primary="Fisika Pak Mayo"
                />
              </ListItemButton>
              <Collapse in={openElectiveMath} timeout="auto" unmountOnExit>
                <List disablePadding>
                  <HieGene
                    link="https://drive.google.com/file/d/1yBEnDnlgJto4dzOhvX5VoNg5E4pwxS6-/view?usp=sharing"
                    chip="Pertemuan 1"
                    title="Introduction besaran suhu dimensi, hal yang akan dipelajari"
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
                <ListItemText primary="Sejarah Pak Jalu" />
                {/* TODO: go do some icon alchemy shit check https://mui.com/material-ui/react-list/ at the nested list part */}
              </ListItemButton>
              <Collapse in={openPhysics} timeout="auto" unmountOnExit>
                {/* I want component="li" because of the Archive background */}
                <List disablePadding>
                  <HieGene
                    link="https://drive.google.com/file/d/1Ou6jzfSDThmYOW_lfgf51_j2Z6TdqmI3/view?usp=sharing"
                    chip="Pertemuan 1"
                    title="Introduction, Learning program, Kalender akademik sejarah"
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
                <ListItemText primary="..." />
              </ListItemButton>
              <Collapse in={openBiology} timeout="auto" unmountOnExit>
                <HieGene title="..." link="" chip="pending" />
              </Collapse>

              <ListItemButton
                sx={{
                  listStyle: "none",
                  borderBottom: "1px dotted #ccc",
                  textIndent: "25px",
                  height: "auto",
                  textTransform: "capitalize",
                }}
                onClick={handleClickHistory}
              >
                <ListItemIcon>
                  <HistoryIcon />
                </ListItemIcon>
                <ListItemText primary="..." />
              </ListItemButton>
              <Collapse in={openHistory} timeout="auto" unmountOnExit>
                <HieGene title="..." link="" chip="pending" />
              </Collapse>

              <ListItemButton
                sx={{
                  listStyle: "none",
                  borderBottom: "1px dotted #ccc",
                  textIndent: "25px",
                  height: "auto",
                  textTransform: "capitalize",
                }}
                onClick={handleClickChemistry}
              >
                <ListItemIcon>
                  <ScienceIcon />
                </ListItemIcon>
                <ListItemText primary="..." />
              </ListItemButton>
              <Collapse in={openChemistry} timeout="auto" unmountOnExit>
                <HieGene title="..." link="" chip="pending" />
              </Collapse>

              <ListItemButton
                sx={{
                  listStyle: "none",
                  borderBottom: "1px dotted #ccc",
                  textIndent: "25px",
                  height: "auto",
                  textTransform: "capitalize",
                }}
                onClick={handleClickGeography}
              >
                <ListItemIcon>
                  <TerrainIcon />
                </ListItemIcon>
                <ListItemText primary="..." />
              </ListItemButton>
              <Collapse in={openGeography} timeout="auto" unmountOnExit>
                <HieGene title="..." link="" chip="pending" />
              </Collapse>

              <ListItemButton
                sx={{
                  listStyle: "none",
                  borderBottom: "1px dotted #ccc",
                  textIndent: "25px",
                  height: "auto",
                  textTransform: "capitalize",
                }}
                onClick={handleClickEnglish}
              >
                <ListItemIcon>
                  <LanguageIcon />
                </ListItemIcon>
                <ListItemText primary="..." />
              </ListItemButton>
              <Collapse in={openEnglish} timeout="auto" unmountOnExit>
                <HieGene title="..." link="" chip="pending" />
              </Collapse>

              <ListItemButton
                sx={{
                  listStyle: "none",
                  borderBottom: "1px dotted #ccc",
                  textIndent: "25px",
                  height: "auto",
                  textTransform: "capitalize",
                }}
                onClick={handleClickIndonesian}
              >
                <ListItemIcon>
                  <TranslateIcon />
                </ListItemIcon>
                <ListItemText primary="..." />
              </ListItemButton>
              <Collapse in={openIndonesian} timeout="auto" unmountOnExit>
                <HieGene title="..." link="" chip="pending" />
              </Collapse>

              <ListItemButton
                sx={{
                  listStyle: "none",
                  borderBottom: "1px dotted #ccc",
                  textIndent: "25px",
                  height: "auto",
                  textTransform: "capitalize",
                }}
                onClick={handleClickSociology}
              >
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="..." />
              </ListItemButton>
              <Collapse in={openSociology} timeout="auto" unmountOnExit>
                <HieGene title="..." link="" chip="pending" />
              </Collapse>

              <ListItemButton
                sx={{
                  listStyle: "none",
                  borderBottom: "1px dotted #ccc",
                  textIndent: "25px",
                  height: "auto",
                  textTransform: "capitalize",
                }}
                onClick={handleClickInformatics}
              >
                <ListItemIcon>
                  <TerminalIcon />
                </ListItemIcon>
                <ListItemText primary="..." />
              </ListItemButton>
              <Collapse in={openInformatics} timeout="auto" unmountOnExit>
                <HieGene title="..." link="" chip="pending" />
              </Collapse>

              <ListItemButton
                sx={{
                  listStyle: "none",
                  borderBottom: "1px dotted #ccc",
                  textIndent: "25px",
                  height: "auto",
                  textTransform: "capitalize",
                }}
                onClick={handleClickPPKn}
              >
                <ListItemIcon>
                  <FlagIcon />
                </ListItemIcon>
                <ListItemText primary="..." />
              </ListItemButton>
              <Collapse in={openPPKn} timeout="auto" unmountOnExit>
                <HieGene title="..." link="" chip="pending" />
              </Collapse>
            </List>
          </Stack>
          <Stack>
            <Typography>
              <mark
                style={{
                  color: "crimson",
                  fontWeight: "800",
                }}
              >
                INGATLAH NAK! Klo ada kesalahan, contact yg buat catatan itu
                sehingga bisa di revisi.
              </mark>
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Archive;
