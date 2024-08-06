import { Link } from "react-router-dom";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Chip,
  Avatar,
} from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import YouTubeIcon from "@mui/icons-material/YouTube";
// Note to future self: DO NOT REPEAT JS CODE. IF U FEEL THAT YOU'VE SPAMMED COPY PASTE AND THE CODE IS LONG:
// GO MAKE A SEPERATE FILE AS A GENERATOR THING BCS ITS D.R.Y. (DONT REPEAT YOURSELF)

const palette = {
  syllabus: "#DC143C",
  benhal: "wheat",
  gabrio: "#FF5733",
  notebank: "#3246a8",
  youtube: "#CD201F",
};

const HieGene = (props) => {
  return (
    <>
      {props.link != "" ? (
        <Link
          to={props.link}
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
              {props.chip == "Syllabus" ? (
                <Chip
                  icon={<NewReleasesIcon color="white" />}
                  label={props.chip}
                  sx={{
                    ml: 4,
                    backgroundColor: palette.syllabus,
                    color: "white",
                    fontWeight: "800",
                  }}
                />
              ) : props.chip == "Q" ? (
                <Chip
                  label={props.chip}
                  sx={{
                    ml: 4,
                    fontWeight: "800",
                  }}
                />
              ) : props.chip == "BenHal" ? (
                <Chip
                  avatar={<Avatar alt="BenHal" src="./logo.svg" />}
                  label={props.chip}
                  sx={{
                    ml: 4,
                    backgroundColor: palette.benhal,
                    color: "maroon",
                    fontWeight: "650",
                  }}
                />
              ) : props.chip == "Gabrio" ? (
                <Chip
                  icon={<GradeIcon color="white" />}
                  label={props.chip}
                  sx={{
                    ml: 4,
                    backgroundColor: palette.gabrio,
                    color: "white",
                    fontWeight: "650",
                  }}
                />
              ) : props.chip == "Notebank" ? (
                <Chip
                  icon={<CheckCircleIcon color="white" />}
                  label={props.chip}
                  sx={{
                    ml: 4,
                    backgroundColor: palette.notebank,
                    color: "white",
                    fontWeight: "650",
                  }}
                />
              ) : props.chip == "Pembahasan" ? (
                <Chip
                  icon={<YouTubeIcon color="white" />}
                  label={props.chip}
                  sx={{
                    ml: 4,
                    backgroundColor: palette.youtube,
                    color: "white",
                    fontWeight: "650",
                  }}
                />
              ) : (
                <Chip label={props.chip} color={props.color} sx={{ ml: 4 }} />
              )}
            </ListItemIcon>

            <ListItemText primary={props.title} sx={{ ml: 1 }} />
          </ListItemButton>
        </Link>
      ) : (
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
            {props.chip == "Syllabus" ? (
              <Chip
                icon={<NewReleasesIcon color="white" />}
                label={props.chip}
                sx={{
                  ml: 4,
                  backgroundColor: palette.syllabus,
                  color: "white",
                  fontWeight: "800",
                }}
              />
            ) : props.chip == "Q" ? (
              <Chip
                label={props.chip}
                sx={{
                  ml: 4,
                  fontWeight: "800",
                }}
              />
            ) : props.chip == "BenHal" ? (
              <Chip
                avatar={<Avatar alt="BenHal" src="./logo.svg" />}
                label={props.chip}
                sx={{
                  ml: 4,
                  backgroundColor: palette.benhal,
                  color: "maroon",
                  fontWeight: "650",
                }}
              />
            ) : props.chip == "Gabrio" ? (
              <Chip
                icon={<GradeIcon color="white" />}
                label={props.chip}
                sx={{
                  ml: 4,
                  backgroundColor: palette.gabrio,
                  color: "white",
                  fontWeight: "650",
                }}
              />
            ) : props.chip == "Pembahasan" ? (
              <Chip
                icon={<YouTubeIcon color="white" />}
                label={props.chip}
                sx={{
                  ml: 4,
                  backgroundColor: palette.youtube,
                  color: "white",
                  fontWeight: "650",
                }}
              />
            ) : (
              <Chip label={props.chip} color={props.color} sx={{ ml: 4 }} />
            )}
          </ListItemIcon>

          <ListItemText primary={props.title} sx={{ ml: 1 }} />
        </ListItemButton>
      )}
    </>
  );
};

export default HieGene;
