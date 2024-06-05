// MATH - Mental Abuse To Humans
// Geometry 🤢

import { Stack, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <Stack className="torso">
        <Stack
          sx={{
            color: "var(--dark-color)",
            fontSize: "21px",
            padding: "0",
            width: "100%",
            border: "2px solid #cecece",
          }}
        >
          <Stack>
            <Typography variant="h2">About Colossal Notebook</Typography>
          </Stack>
          <Stack></Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default About;
