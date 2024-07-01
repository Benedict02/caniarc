import { Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Stack
        sx={{
          display: "grid",
          background: "var(--third-color)",
          position: "block",
          color: "var(--dark-color)",
          padding: "2em",
        }}
      >
        <Stack>
          <Typography>
            Notebank ini dipublikasi online,{" "}
            <strong>tujuannya bukan untuk dijadikan bahan contekan</strong>.
            Link catatan modules tidak akan valid pada waktu sekolah{" "}
            <strong>07:30 - 14:00 WIB</strong>.
          </Typography>
          <Typography>
            Bagi anda yang memiliki keinginan untuk menyontek, kami himbau untuk
            mengangkat kaki dari Kolese Kanisius gausah sekolah aja sekalian,
            sebab anda adalah kegagalan yang mengecewakan. AMDG
          </Typography>
        </Stack>
        <Stack>
          <Typography>Best Regards, BenHal.</Typography>
        </Stack>
        <Stack sx={{ color: "green" }}>
          //wahai para sepuh CSS; ajarin pls, gw g mahir design web responsive.
          (klo ajarannya gacor gw traktir eledrink)
        </Stack>
      </Stack>
    </>
  );
};

export default Footer;
