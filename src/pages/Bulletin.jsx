import { Typography, Stack } from "@mui/material";

const Bulletin = () => {
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
                fontFamily: "Outfit",
                textTransform: "uppercase",
                fontWeight: "600",
              }}
            >
              Bulletin
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Bulletin;
