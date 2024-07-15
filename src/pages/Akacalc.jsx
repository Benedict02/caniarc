import { Stack, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Akacalc = () => {
  return (
    <>
      <Stack className="torso">
        <Stack sx={{ width: "90vw", height: "100%" }}>
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
              Academic Calculator
            </Typography>
          </Stack>
          <Stack>
            <Box
              sx={{
                backgroundColor: "var(--second-color)",
                padding: "5em 3em",
                height: "50vh",
                margin: "10vh 2vw",
              }}
            >
              <Typography>Preview</Typography>
              <iframe
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR61Il1_Q_z_lgRVpOAdFMcnxWNLV3LqQm9KO4aBJuDYh8UxJm2dc4lqaB24WS98of177H8zxedllGB/pubhtml?widget=true&amp;headers=false"
                style={{ height: "100%", width: "100%" }}
              ></iframe>
              <Link
                target="_blank"
                to="https://docs.google.com/spreadsheets/d/1Bi2r_COSb92v652ntZK16JPeTfVYHf5ef2vao43efpE/edit?usp=sharing"
              >
                Get google sheets
              </Link>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Akacalc;
