import { Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Stack sx={{}}>
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
            sebab anda merupakan sebuah kegagalan. AMDG
          </Typography>
        </Stack>
        <Stack>
          <Typography>Best Regards, BenHal.</Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Footer;
