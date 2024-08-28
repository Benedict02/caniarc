import { Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Stack
        sx={{
          background: "var(--third-color)",
          position: "relative",
          color: "var(--dark-color)",
          padding: "2em",
          bottom: 0,
        }}
      >
        <Stack>
          <Typography>
            Notebook ini dipublikasi online,{" "}
            <strong>tujuannya bukan untuk dijadikan bahan contekan</strong>.
            Link catatan modules tidak akan valid pada waktu sekolah{" "}
            <strong>07:30 - 14:00 WIB</strong>.
          </Typography>
          <Typography>
            Bagi anda yang memiliki keinginan untuk menyontek, kami himbau untuk
            mengangkat kaki dari Kolese Kanisius.
          </Typography>
        </Stack>
        <Stack sx={{ color: "maroon" }}>
          //This is a "live" notebook. It will be constantly updated from time
          to time.
        </Stack>
      </Stack>
    </>
  );
};

export default Footer;
