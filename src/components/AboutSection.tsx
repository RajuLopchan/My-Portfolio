import { Box, Typography, Grid } from "@mui/material";
import { Code, PhoneIphone, Cloud } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const AboutMe = () => {
  const theme = useTheme();
  const textPrimary = theme.palette.text.primary;
  const textSecondary = theme.palette.text.secondary;
  const accent = theme.palette.primary.main;
  const iconColor = theme.palette.mode === 'dark' ? '#fff' : accent;
  return (

      <Box sx={{ overflowX: 'hidden', maxWidth: '100vw', width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Grid container spacing={6}  width="72%" margin="auto" mb={6} mt={5}>
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
            <Typography variant="h4" fontWeight="bold" gutterBottom color={textPrimary}>
              About me
            </Typography>
            <Typography variant="body1" color={textSecondary} mb={4}>
              My journey into web development began with curiosity, which soon became a passion for creating beautiful and responsive websites. As a frontend developer, I love building user-friendly interfaces that bring ideas to life
            </Typography>

            <Grid container spacing={6}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Typography variant="h4" sx={{ color: accent, fontWeight: 'bold' }}>
                  12 +
                </Typography>
                <Typography variant="body2" color={textSecondary}>
                  Completed Projects
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h4" color={accent} fontWeight="bold">
                  1 +
                </Typography>
                <Typography variant="body2" color="gray">
                  Years of experience
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

  );
};

export default AboutMe;
