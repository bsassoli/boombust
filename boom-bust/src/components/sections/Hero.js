import React from "react";
import { alpha, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import Container from "../UI/Container";

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item container xs={12} md={6} alignItems={"center"}>
          <Box>
            <Box marginBottom={2}>
              <Typography
                variant="h3"
                color="text.primary"
                sx={{ fontWeight: 700 }}
              >
                Asymmetrical risk / reward through{" "}
                <Typography
                  color={"primary"}
                  component={"span"}
                  variant={"inherit"}
                  sx={{
                    background: `linear-gradient(180deg, transparent 82%, ${alpha(
                      theme.palette.secondary.main,
                      0.3
                    )} 0%)`,
                  }}
                >
                  cutting edge research.
                </Typography>
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography variant="h6" component="p" color="text.secondary">
                Our signals bring you the sophisticated analyses used by banks
                and hedge funds in a simple format and at a reasonable price.
                <br />
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "stretched", sm: "flex-start" }}
            >
              
                <Button
                  variant="contained"
                  component={RouterLink}
                  to="/signup"
                  underline={"none"}
                  color="primary"
                  size="large"
                  fullWidth={isMd ? false : true}
                >
                  START NOW
                </Button>
              
              <Box
                component={Button}
                variant="outlined"
                color="primary"
                size="large"
                marginTop={{ xs: 2, sm: 0 }}
                marginLeft={{ sm: 2 }}
                fullWidth={isMd ? false : true}
              >
                LEARN MORE
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          container
          alignItems={"center"}
          justifyContent={"center"}
          xs={12}
          md={6}
        >
          <Box
            component={"img"}
            height={1}
            width={1}
            src={"https://assets.maccarianagency.com/screenshots/dashboard.png"}
            alt="..."
            boxShadow={3}
            borderRadius={2}
            maxWidth={600}
            sx={{
              filter:
                theme.palette.mode === "dark" ? "brightness(0.7)" : "none",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
