import { Link } from "react-router-dom";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Chip,
} from "@mui/material";

// Note to self: DO NOT REPEAT JS CODE. IF U FEEL THAT YOU'VE SPAMMED COPY PASTE AND THE CODE IS LONG:
// GO MAKE A SEPERATE FILE AS A GENERATOR THING IDK JUST D.R.Y. (DONT REPEAT YOURSELF)

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
            <Chip label={props.chip} color={props.color} sx={{ ml: 10 }} />
          </ListItemIcon>

          <ListItemText primary={props.title} sx={{ ml: 1 }} />
        </ListItemButton>
      </Link>
    </>
  );
};

export default HieGene;
