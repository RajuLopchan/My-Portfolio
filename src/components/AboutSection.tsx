import { Box, Typography, Grid } from "@mui/material";
import { Code, PhoneIphone, Cloud } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const AboutMe = () => {
  const theme = useTheme();
  const textSecondary = theme.palette.text.secondary;
  const accent = theme.palette.primary.main;
  const iconColor = theme.palette.mode === 'dark' ? '#fff' : accent;
  return (

      <Box
        sx={{
          overflowX: 'hidden',
          maxWidth: '100vw',
          width: { xs: '100%', md: '73%' },
          minHeight: { xs: '100vh', md: 'unset' },
          py: { xs: 2, sm: 6, md: 8 },
          px: { xs: 2.5, sm: 2, md: 0 },
          mt: { xs: 4, sm: 0, md: 0 },
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid container spacing={6} width="100%" marginX={0} mt={{ xs: 2, md: 5 }} mb={{ xs: 2, md: 6 }} px={{ xs: 2.5, sm: 2, md: 0 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box id="about" sx={{ position: 'relative', minHeight: 220 }}>

              <Box sx={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: 2,
                height: 'calc(33% - 10px)',
                bgcolor: accent,
                zIndex: 1,
                borderRadius: 2,
              }} />

              <Box sx={{
                position: 'absolute',
                left: 0,
                top: 'calc(33% + 10px)',
                width: 2,
                height: 'calc(34% - 10px)',
                bgcolor: accent,
                zIndex: 1,
                borderRadius: 2,
              }} />

              <Box sx={{
                position: 'absolute',
                left: 0,
                top: 'calc(67% + 10px)',
                width: 2,
                height: 'calc(33% - 10px)',
                bgcolor: accent,
                zIndex: 1,
                borderRadius: 2,
              }} />

              <Box sx={{ position: 'absolute', left: -1.5, top: '33%', width: 6, height: 6, bgcolor: accent, borderRadius: '50%', zIndex: 2, transform: 'translateY(-50%)' }} />

              <Box sx={{ position: 'absolute', left: -1.5, top: '67%', width: 6, height: 6, bgcolor: accent, borderRadius: '50%', zIndex: 2, transform: 'translateY(-50%)' }} />

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, position: 'absolute', top: '18%', left: 20, transform: 'translateY(-50%)' }}>
                <Code sx={{ fontSize: 30, color: iconColor }} />
                <Typography variant="h6">Website Development</Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, position: 'absolute', top: '48%', left: 20, transform: 'translateY(-50%)' }}>
                <PhoneIphone sx={{ fontSize: 30, color: iconColor }} />
                <Typography variant="h6">App Development</Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, position: 'absolute', bottom: '14%', left: 20 }}>
                <Cloud sx={{ fontSize: 30, color: iconColor }} />
                <Typography variant="h6">Website Hosting</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right Side - About Me */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: theme.palette.mode === 'dark' ? '#72e2f9' : theme.palette.primary.main, fontSize: { xs: 24, sm: 28, md: 32 }, textAlign: { xs: 'center', md: 'left' } }}>
              About me
            </Typography>
            <Typography variant="body1" color={textSecondary} mb={4} sx={{ textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem' } }}>
              My journey into web development began with curiosity, which soon became a passion for creating beautiful and responsive websites. As a frontend developer, I thrive on bringing designs to life with clean code, modern frameworks, and a focus on performance and accessibility.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 4,
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'flex-start' },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Box sx={{ minWidth: 120 }}>
                <Typography variant="h4" sx={{ color: accent, fontWeight: 'bold', fontSize: { xs: 26, sm: 28, md: 32 } }}>
                  12 +
                </Typography>
                <Typography variant="body2" color="gray">
                  Completed Projects
                </Typography>
              </Box>
              <Box sx={{ minWidth: 120 }}>
                <Typography variant="h4" color={accent} fontWeight="bold" sx={{ fontSize: { xs: 26, sm: 28, md: 32 } }}>
                  1 +
                </Typography>
                <Typography variant="body2" color="gray">
                  Years of experience
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

  );
};

export default AboutMe;
