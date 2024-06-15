import { Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Stack>
        <Stack>
          <Typography>
            This notebank is published online,{" "}
            <strong>NOT FOR THE USE OF CHEATING</strong>. In order to avoid this
            from happening, links to notes & modules will be disabled during
            school times <strong>07:30 - 14:00 WIB</strong>.
          </Typography>
          <Typography>
            If you disagree with this constitution and/or have plans to commit
            something that shows dishonesty, please consider resigning from
            Canisius College.
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Footer;
