import { Link } from "react-router-dom";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Chip,
  Avatar,
} from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";
// Note to self: DO NOT REPEAT JS CODE. IF U FEEL THAT YOU'VE SPAMMED COPY PASTE AND THE CODE IS LONG:
// GO MAKE A SEPERATE FILE AS A GENERATOR THING IDK JUST D.R.Y. (DONT REPEAT YOURSELF)

const palette = {
  benhal: "#DC143C",
  gabrio: "#FF5733",
};

const HieGene = (props) => {
  return (
    <>
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
            {props.chip == "BenHal" ? (
              <Chip
                avatar={<Avatar alt="BenHal" src="./logo.svg" />}
                label={props.chip}
                sx={{
                  ml: 10,
                  backgroundColor: palette.benhal,
                  color: "white",
                  fontWeight: "650",
                }}
              />
            ) : props.chip == "Gabrio" ? (
              <Chip
                icon={<GradeIcon color="white" />}
                label={props.chip}
                sx={{
                  ml: 10,
                  backgroundColor: palette.gabrio,
                  color: "white",
                  fontWeight: "650",
                }}
              />
            ) : (
              <Chip label={props.chip} color={props.color} sx={{ ml: 10 }} />
            )}
          </ListItemIcon>

          <ListItemText primary={props.title} sx={{ ml: 1 }} />
        </ListItemButton>
      </Link>
    </>
  );
};

export default HieGene;
