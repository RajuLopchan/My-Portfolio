import { Box, Typography, Paper, useTheme, Fade } from '@mui/material';
import { useState } from 'react';
import { SkillsInfo } from '../skillsData';
import React from 'react';


const SkillsSection = () => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  // Flatten all skills into a single array
  const allSkills: any[] = SkillsInfo.reduce((arr: any[], cat: any) => arr.concat(cat.skills.map((skill: any) => ({ ...skill, category: cat.title }))), []);
  const filteredSkills = allSkills;

  const skillsRowRef = React.useRef<HTMLDivElement>(null);
  const [isUserHovering, setIsUserHovering] = useState(false);
  const scrollAnimationRef = React.useRef<number | null>(null);
  const autoScrollSpeed = 0.5; // px per frame (slower)

  // Auto-scroll logic
  React.useEffect(() => {
    const autoScroll = () => {
      if (!skillsRowRef.current) return;
      if (!isUserHovering) {
        const el = skillsRowRef.current;
        // If at end, loop to start
        if (el.scrollLeft + el.offsetWidth >= el.scrollWidth - 1) {
          el.scrollLeft = 0;
        } else {
          el.scrollLeft += autoScrollSpeed;
        }
      }
      scrollAnimationRef.current = requestAnimationFrame(autoScroll);
    };
    scrollAnimationRef.current = requestAnimationFrame(autoScroll);
    return () => {
      if (scrollAnimationRef.current) cancelAnimationFrame(scrollAnimationRef.current);
    };
  }, [isUserHovering]);

  const handleMouseEnter = () => setIsUserHovering(true);
  const handleMouseLeave = () => setIsUserHovering(false);

  return (
    <Box
      id="skills"
      sx={{
        overflowX: 'hidden',
        maxWidth: '100vw',
        width: { xs: '100%', md: '73%' },
        minHeight: { xs: '100vh', md: 'unset' },
        py: { xs: 2.5, sm: 6, md: 8 },
        px: { xs: 1.6, sm: 4, md: 0 },
        mx: 'auto',
        fontFamily: 'sans-serif',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h5" fontWeight="bold" fontSize={{ xs: 28, sm: 20, md: 35 }} sx={{ color: theme.palette.mode === 'dark' ? '#72e2f9' : theme.palette.primary.main }}>
          SKILLS
        </Typography>
        <Box sx={{ width: { xs: 64, sm: 96, md: 128 }, height: 4, background: '#8245ec', mx: 'auto', mt: { xs: 1, sm: 2, md: 1.5 }, borderRadius: 2 }} />
        <Typography color={theme.palette.text.secondary} mt={3} fontSize={{ xs: 14, sm: 16, md: 16 }} fontWeight={600} >
          A collection of my technical skills and expertise honed through various projects and experiences
        </Typography>
      </Box>
      {/* Skills Grid */}
        <Box
          ref={skillsRowRef}
          sx={{ width: '100%', overflowX: 'auto', display: 'flex', gap: 2,  px: 1,  cursor: 'pointer', scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {filteredSkills.map((skill: any, idx: number) => (
            <Fade in timeout={500 + idx * 50} key={skill.name + idx}>
              <Paper elevation={0}
                sx={{
                  minWidth: { xs: 140, sm: 170, md: 200 },
                  maxWidth: { xs: 180, sm: 200, md: 240 },  
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: { xs: 120, sm: 150, md: 200 },
                  cursor: 'pointer',
                  background: 'transparent',
                  border: 'none',
                  boxShadow: 'none',
                }}
              >
                <Box sx={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: isLight ? '#fff' : '#18181b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 1.2,
                  boxShadow: isLight ? '0 2px 8px 0 #8245ec11' : '0 2px 8px 0 #8245ec33',
                }}>
                  <img src={skill.logo} alt={`${skill.name} logo`} style={{ width: 28, height: 28, filter: isLight ? 'none' : undefined }} />
                </Box>
                <Typography fontWeight={700} fontSize={{ xs: 15, sm: 16 }} color={theme.palette.text.primary} textAlign="center">
                  {skill.name}
                </Typography>
                <Typography fontSize={11} color={theme.palette.text.secondary} textAlign="center" sx={{ mt: 0.7 }}>
                  {skill.category}
                </Typography>
              </Paper>
            </Fade>
          ))}
        </Box>
    </Box>
  );
};

export default SkillsSection;
