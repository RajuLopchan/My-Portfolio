import { Box, Typography, Button, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Grid } from '@mui/material';


const HeroSection = () => {
  const theme = useTheme();
  const githubIconColor = theme.palette.mode === 'dark' ? '#fff' : '#181717';

  return (
    <Box
      id="home"
      sx={{
        height: "100vh",
        backgroundColor: theme.palette.background.default,
        py: { xs: 5, md: 8 },
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid container direction="row" spacing={8} width="73%" margin="auto" >
        <Grid size={{xs: 12, sm: 6, md: 8}}>
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 400,
                fontSize: {
                  xs: "1.6rem",
                  sm: "2.5rem",
                  md: "2.5rem",
                },
                mb: 1,
              }}
            >
              Hi, I am Raju,
            </Typography>

            <Typography
              variant="h3"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: "bold",
                fontSize: {
                  xs: "1.7rem",
                  sm: "2rem",
                  md: "2.5rem",
                },
              }}
            >
              Frontend Developer
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 400,
                mt: 3.5,
                maxWidth: { xs: "100%", md: "80%" },
                fontSize: { xs: "1rem", md: "1.05rem" },
              }}
            >
              A Frontend Developer focused on creating clean, responsive, and user-friendly websites. I enjoy turning ideas into interactive designs that deliver seamless digital experiences.
            </Typography>

            {/* Social Media Icons Row */}
            <Box
              sx={{
                display: "flex",
                mt: 3,
                gap: 2.4,
                ml: 0.2,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <IconButton component="a" href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn" sx={{ p: 0 }}>
                <svg width="24" height="24" fill="#0A66C2" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2 3.6 4.59v5.606z"/></svg>
              </IconButton>
              <IconButton component="a" href="https://github.com/RajuLopchan" target="_blank" rel="noopener" aria-label="GitHub" sx={{ p: 0 }}>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path fill={githubIconColor} d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.587 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </IconButton>
              <IconButton component="a" href="mailto:rajulopchan77@email.com" aria-label="Email" sx={{ p: 0 }}>
                <svg width="24" height="24" fill="#EA4335" viewBox="0 0 24 24"><path d="M12 13.065l-11.985-7.065v14h23.97v-14l-11.985 7.065zm11.985-9.065h-23.97l11.985 7.065 11.985-7.065z"/></svg>
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                mt: 7,
                justifyContent: { xs: "center", md: "flex-start" },
                flexWrap: { xs: "nowrap", sm: "wrap" },
                overflowX: { xs: "auto", sm: "visible" },
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  textTransform: "none",
                  borderRadius: 2,
                  px: { xs: 4, sm: 3, md: 2 },
                  fontSize: {
                    xs: "0.75rem",
                    sm: "1rem",
                    md: "1rem",
                  },
                  whiteSpace: "nowrap",
                  "&:hover": { backgroundColor: "#e63d17" },
                }}
              >
                Got a project?
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: theme.palette.text.primary,
                  borderColor: theme.palette.text.primary,
                  borderRadius: 2,
                  textTransform: "none",
                  px: { xs: 3, sm: 3, md: 2 },
                  fontSize: {
                    xs: "0.75rem",
                    sm: "1rem",
                    md: "1rem",
                  },
                  whiteSpace: "nowrap",
                  "&:hover": {
                    backgroundColor: theme.palette.text.primary,
                    color: theme.palette.background.default,
                    borderColor: theme.palette.text.primary,
                  },
                }}
              >
                My resume
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* Right side image */}
        <Grid
       size={{xs: 12, sm: 6, md: 4}}
          sx={{
            display: "flex",
            mt: { xs: 5, md: 7.5 },
          }}
        >
          <Box sx={{ position: 'relative', display: 'inline-block', width: '100%', height: '100%' }}>
            {theme.palette.mode === 'dark' && (
              <Box
                sx={{
                  position: 'absolute',
                  // transform: 'translate(-50%, -50%)',
                  width: { xs: '120vw', sm: '110vw', md: '90vw' },
                  height: { xs: '90vw', sm: '80vw', md: '60vw' },
                  minWidth: 600,
                  minHeight: 400,
                  borderRadius: '48% / 60%',
                  zIndex: 0,
                  pointerEvents: 'none',
                  background: `radial-gradient(ellipse at center, ${theme.palette.primary.main}25 0%, ${theme.palette.primary.main}09 50%, transparent 85%)`,
                  filter: 'blur(48px)',
                }}
              />
            )}
            <Box
              component="img"
              src="/assets/images/raju.jpg"
              alt="Profile"
              sx={{
                width: { xs: 140, sm: 180, md: 240 },
                height: { xs: 140, sm: 180, md: 240 },
                objectFit: "cover",
                borderRadius: "50%",
                position: 'relative',
                zIndex: 1,
                ml: { xs: 0, md: 6.5 },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
