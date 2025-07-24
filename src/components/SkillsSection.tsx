import { Box, Typography, Grid, Paper, useTheme } from '@mui/material';
import { SkillsInfo } from '../skillsData';

const SkillsSection = () => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  return (
    <Box id="skills" sx={{ width: "73%", margin: "auto", fontFamily: 'sans-serif', backgroundColor: theme.palette.background.default, color: theme.palette.text.primary }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h5" fontWeight="bold" fontSize={{ xs: 16, sm: 20, md: 35 }} color={theme.palette.text.primary}>SKILLS</Typography>
        <Box sx={{ width: 96, height: 4, background: '#8245ec', mx: 'auto', mt: 2, borderRadius: 2 }} />
        <Typography color={theme.palette.text.secondary} mt={2} fontSize={{ xs: 12, sm: 16, md: 16 }} fontWeight={600}>
          A collection of my technical skills and expertise honed through various projects and experiences
        </Typography>
      </Box>
      {/* Skill Categories */}
      <Grid container spacing={6}  justifyContent="space-between" width={"100%"} margin={"auto"} mt={6} >
        {SkillsInfo.map((category) => (
          <Grid size={{ xs: 12, sm: 6 }} key={category.title}>
            <Paper elevation={isLight ? 1 : 2} sx={{
              background: 'transparent',
              border: `1px solid ${isLight ? '#d1d5db' : '#444'}`,
              color: theme.palette.text.primary,
              px: { xs: 3, sm: 5 },
              py: { xs: 4, sm: 3 },
              borderRadius: 4,
              width: '100%',
              minHeight: (category.title === 'Tools' || category.title === 'Languages') ? 180 : 240,
              display: 'flex',
              flexDirection: 'column',
            }}>
              <Typography variant="h5" fontWeight={600} color={theme.palette.text.secondary} textAlign="center" sx={{ mb: 1.5 }}>
                {category.title}
              </Typography>
              <Grid container spacing={2}>
                {category.skills.map((skill) => (
                  <Grid size={{ xs: 6, sm: 4 }} key={skill.name}>
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 0.5,
                      background: 'transparent',
                      border: `2px solid ${isLight ? theme.palette.divider : '#444'}`,
                      borderRadius: 6,
                      py: 1,
                      px: 1,
                      mt: 1,
                      minHeight: 48,
                      minWidth: 100,
                      width: '100%',
                      boxSizing: 'border-box',
                    }}>
                      <img src={skill.logo} alt={`${skill.name} logo`} style={{ width: 32, height: 32, filter: isLight ? 'none' : undefined }} />
                      <Typography fontSize={14} color={theme.palette.text.primary}>{skill.name}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SkillsSection;
