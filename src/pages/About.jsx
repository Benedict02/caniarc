import {
  Stack,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import HelpIcon from "@mui/icons-material/Help";
import { useState } from "react";
import HieGene from "../components/HieGene";

//I want to add chip filter thingy for the authors of the notes. So when people want to get gabrio's catatan they can just go to about and select the gabrio

const About = () => {
  const [openChips, setOpenChips] = useState(false);
  const [openPhysics, setOpenPhysics] = useState(false);
  const [openBiology, setOpenBiology] = useState(false);

  const handleClickChips = () => {
    if (openPhysics == true && openChips == false) {
      setOpenChips(!openChips);
      setOpenPhysics(!openPhysics);
    } else {
      setOpenChips(!openChips);
    }
  };

  const handleClickPhysics = () => {
    if (openPhysics == false && openChips == true) {
      setOpenPhysics(!openPhysics);
      setOpenChips(!openChips);
    } else {
      setOpenPhysics(!openPhysics);
    }
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
                  <DeveloperBoardIcon />
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
                    title="Catatan collab, lbh dri 1 org (Biasanya dikasih credit siapa yg buat)"
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
                  <HieGene
                    link=""
                    color="info"
                    chip="Latihan Soal"
                    title="Latsol biasa. Jawaban ada di bawah biasanya(semoga gw inget utk masukin)."
                  />
                </List>
              </Collapse>

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
                  <HelpIcon />
                </ListItemIcon>
                <ListItemText primary="Frequently Asked Questions" />
              </ListItemButton>
              <Collapse in={openPhysics} timeout="auto" unmountOnExit>
                {/* I want component="li" because of the notebook background */}
                <List disablePadding>
                  <HieGene
                    link=""
                    chip="Q"
                    title="Buat apa ini notebank dibuat?"
                  />
                  <HieGene
                    link=""
                    chip="A"
                    title="Gw gabut dripada main game & baca manga mending buat catatan & bljr. Oiy sama mau bantu2 temen sekaligus portfolio"
                  />
                  <HieGene
                    link=""
                    chip="Q"
                    title="Gw g nangkep materi! gmn nih?"
                  />
                  <HieGene
                    link=""
                    chip="A"
                    title="Bljr, doa, banyak2 ikut canitutor, tanya guru."
                  />
                  <HieGene
                    link=""
                    chip="Q"
                    title="Bedanya ini sama google classroom apa?"
                  />
                  <HieGene
                    link=""
                    chip="A"
                    title="Google Classroom terlalu berpusat pada guru. Ini lbh ke arah siswa jdi lbh flexible & lengkap(teorinya gt sih. gatau praktek kedepannya gmn)"
                  />
                  <HieGene
                    link=""
                    chip="Q"
                    title="Ngapain sih gw pake notebank ini?"
                  />
                  <HieGene
                    link=""
                    chip="A"
                    title="Bagi makhluk ambis berat g ketolong, anda bisa mendapatkan ilmu lbh duluan dari sekolah melalui ini web kek bocoran modul gt saat yg lain berlibur & istirahat"
                  />
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

/*
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
                  color="primary"
                  title="Lorem Ipsum Dolor sit amet"
                  link="/"
                  chip="pending"
                />
              </Collapse> */
