import { Stack, Typography, Button } from "@mui/material";
import "./Hierarchy.css";
// I think this is going to be main focus both backend & frontend, but
/*TODO:
1. Design it with a notebook theme with lines & cool shit
2. Make rating for each note and/or materials
*/
const Hierarchy = () => {
  return (
    <>
      <div className="torso">
        {/* FIXME: There might be some problems with the link to="/"*/}
        <Stack>
          <Stack>
            <Typography variant="h2">Hierarchy</Typography>
          </Stack>
          <Stack
            sx={{
              color: "var()",
              fontSize: "22px",
              padding: "0 !important",
              width: "500px",
              fontFamily: "courier, monospace",
              border: "1px solid #dedede",
            }}
          ></Stack>
        </Stack>
      </div>
    </>
  );
};

export default Hierarchy;
