import { Link } from "react-router-dom";
import { Stack, Typography, Button, Divider } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Stack className="torso">
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "cyan",
            minHeight: "50vh",
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h1" className="title__header">
              Colossal Notebook
            </Typography>
            <Typography variant="h3">
              (Stu)dying <mark className="title__marquee">simplified.</mark>
            </Typography>
            <Stack
              sx={{
                display: "flex",
                width: "70vw",
                justifyContent: "end",
              }}
              direction={"row"}
              spacing={5}
            >
              <Button variant="outlined" sx={{ borderRadius: "32px" }}>
                <Link
                  to="/about"
                  style={{
                    height: "4vh",
                    textDecoration: "none",
                    display: "flex",
                    width: "10vw",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Learn More
                </Link>
              </Button>
              <Button
                variant="contained"
                sx={{
                  display: "flex",
                  borderRadius: "32px",
                  backgroundColor: "var(--third-color)",
                  ":hover": {
                    backgroundColor: "var(--second-color)",
                  },
                }}
              >
                {/* TODO: to="/" might cause some issues later on in github hosting */}
                {/* FIXME: Buttons look like shit */}
                <Link
                  to="/hierarchy"
                  style={{
                    textDecoration: "none",
                    color: "var(--dark-color)",
                    display: "flex",
                    width: "10vw",
                    justifyContent: "space-evenly",
                  }}
                >
                  Enter <SentimentDissatisfiedIcon /> <NavigateNextIcon />
                </Link>
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Home;
