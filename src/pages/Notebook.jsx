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

const Notebook = () => {
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
              Notebook
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
                  primary="Compulsory Mathemathics (WAJIB)"
                />
              </ListItemButton>
              <Collapse in={openCompulsoryMath} timeout="auto" unmountOnExit>
                <List disablePadding>
                  <HieGene
                    link="https://drive.google.com/file/d/1b_61jcUHMAwQQqkZRIHoLyIO07PeDHPT/view?usp=sharing"
                    chip="Syllabus"
                    title="Learning Program Matematika"
                  />
                  <HieGene
                    link="https://drive.google.com/file/d/1o47EA13IxT-I4h47qbU8B4dNm1UaB5gp/view?usp=sharing"
                    color="warning"
                    chip="Module Kelas X"
                    title="Matematika WAJIB Kelas X IPA dan IPS (2021-2022)"
                  />
                  <HieGene
                    link="https://drive.google.com/file/d/1GnZGpWiz8JwS9Mh_DFUmEqt95Q9o3di6/view?usp=sharing"
                    color="warning"
                    chip="Module Kelas X"
                    title="[Trigonometry] Modul Trigono CC"
                  />
                  <HieGene
                    link="https://drive.google.com/file/d/1GnZGpWiz8JwS9Mh_DFUmEqt95Q9o3di6/view?usp=sharing"
                    chip="Pembahasan"
                    title="[Trigonometry] Playlist (work in progress)"
                  />
                  <HieGene
                    link="https://drive.google.com/file/d/1gTE1jGRdi5wj7cFzngB4qqMDD-yf2Ipk/view?usp=sharing"
                    chip="BenHal"
                    title="[Trigonometry] #1 Introduction"
                  />
                  <HieGene
                    link="https://drive.google.com/file/d/1j4tcYnXXI2OeuqyG7gMUvRS7tE45Jzo7/view?usp=sharing"
                    chip="BenHal"
                    title="[Trigonometry] #2 Sudut Berelasi & Asal usul radian"
                  />
                  <HieGene
                    link="https://drive.google.com/file/d/1kL5YXxboEoQFtqcDgOPexaZD5BGffmMA/view?usp=sharing"
                    color="info"
                    chip="Latihan Soal"
                    title="[Trigonometry] Perbandingan & Fungsi"
                  />
                  <HieGene
                    link="https://drive.google.com/file/d/1ng76-zmVoIBI6uxG0beKLSc-8RYuD9sD/view?usp=sharing"
                    color="info"
                    chip="Latihan Soal"
                    title="[Trigonometry] Aturan Sinus, Cosinus, Luas"
                  />

                  <HieGene
                    link="https://drive.google.com/file/d/17UlP1CUeVfFwyL_43qSyXTl8g13xSQjP/view?usp=sharing"
                    color="info"
                    chip="Latihan Soal"
                    title="[PLSV/PTLSV] Soal Latihan 2 (MAT 7, 8) + Kunci"
                  />

                  {/* Go continue trigono this is a little divider for matrix(kls 11) */}
                  <HieGene
                    link="https://docs.google.com/document/d/1J7SXECsV4tbBkGXYjuUDXf5yaLIeWp4n3A34srADdZk/edit?usp=sharing"
                    chip="Notebank"
                    title="[Matrix] #1 Introduction & Operations"
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
                  primary="Elective Mathemathics (MINAT)"
                />
              </ListItemButton>
              <Collapse in={openElectiveMath} timeout="auto" unmountOnExit>
                <List disablePadding>
                  <HieGene
                    link="https://drive.google.com/file/d/1b_61jcUHMAwQQqkZRIHoLyIO07PeDHPT/view?usp=sharing"
                    chip="Syllabus"
                    title="Learning Program Matematika"
                  />
                  <HieGene
                    link="https://drive.google.com/file/d/1lQUQWQs52Mx8b686OWqs1YmEZg1VCEdY/view?usp=sharing"
                    color="warning"
                    chip="Module Kelas X"
                    title="Matematika Peminatan Kelas X  (T.A. 2021-2022)"
                  />
                  <HieGene link="" chip="WIP" title="Persamaan exponen" />
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
                    link=""
                    chip="Pending"
                    title="Learning program Fisika"
                  />
                  <HieGene
                    link="https://drive.google.com/file/d/1a3hnt0Sdho0o9CLmpRzn1zJeZwoyZn3v/view?usp=sharing"
                    color="warning"
                    chip="Module Kelas X"
                    title="MODUL PEMBELAJARAN FISIKA KELAS X SMA KANISIUS"
                  />
                  <HieGene
                    link="https://drive.google.com/file/d/1N47utKgbBNqAEuwDxYeaYUJ4JrXZtt_o/view?usp=sharing"
                    color="warning"
                    chip="Module Kelas X"
                    title="[Uji dimensi] Fisika X Besaran dan Pengukuran"
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
                <HieGene
                  title="Learning program biologi"
                  link=""
                  chip="pending"
                />
                <HieGene
                  title="Sebenarnya, Virus itu sederhana."
                  link="https://docs.google.com/document/d/16IveZImGC09vvBYiS1lRA0JC5FGco5OiruNpJpUrhMs/edit?usp=sharing"
                  chip="Notebank"
                />
                <HieGene
                  title="Rangkuman Virus (detailed)"
                  link="https://drive.google.com/file/d/1DWKvCn7m-PO9BBDdtHMsGpyyFIeTp1Lw/view?usp=sharing"
                  chip="Asita"
                />
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
                <ListItemText primary="History" />
              </ListItemButton>
              <Collapse in={openHistory} timeout="auto" unmountOnExit>
                <HieGene
                  title="Learning program sejarah"
                  link=""
                  chip="pending"
                />
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
                <ListItemText primary="Chemistry" />
              </ListItemButton>
              <Collapse in={openChemistry} timeout="auto" unmountOnExit>
                <HieGene
                  title="Learning program kimia"
                  link=""
                  chip="pending"
                />
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
                <ListItemText primary="Geography" />
              </ListItemButton>
              <Collapse in={openGeography} timeout="auto" unmountOnExit>
                <HieGene
                  title="Learning program geografi"
                  link=""
                  chip="pending"
                />
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
                <ListItemText primary="English" />
              </ListItemButton>
              <Collapse in={openEnglish} timeout="auto" unmountOnExit>
                <HieGene
                  title="Learning program english"
                  link=""
                  chip="pending"
                />
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
                <ListItemText primary="Bahasa Indonesia" />
              </ListItemButton>
              <Collapse in={openIndonesian} timeout="auto" unmountOnExit>
                <HieGene
                  title="Learning program indonesia"
                  link=""
                  chip="pending"
                />
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
                <ListItemText primary="Sociology" />
              </ListItemButton>
              <Collapse in={openSociology} timeout="auto" unmountOnExit>
                <HieGene
                  title="Learning program sosiologi"
                  link=""
                  chip="pending"
                />
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
                <ListItemText primary="Informatics" />
              </ListItemButton>
              <Collapse in={openInformatics} timeout="auto" unmountOnExit>
                <HieGene
                  title="Learning program informatika"
                  link=""
                  chip="pending"
                />
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
                <ListItemText primary="PPKn" />
              </ListItemButton>
              <Collapse in={openPPKn} timeout="auto" unmountOnExit>
                <HieGene title="Learning program PPKn" link="" chip="pending" />
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

export default Notebook;
