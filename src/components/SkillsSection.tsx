import { Box, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { SkillsInfo } from '../skillsData';
import React from 'react';
import Skill3DIcon from './Skill3DIcon';

// Error Boundary for 3D components
class SkillErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log('Skill component error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box sx={{ 
          minWidth: { xs: 100, sm: 170, md: 200 },
          minHeight: { xs: 90, sm: 150, md: 200 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}>
          <Typography variant="body2" color="text.secondary">
            Skill unavailable
          </Typography>
        </Box>
      );
    }

    return this.props.children;
  }
}


const SkillsSection = () => {
  const theme = useTheme();
  // const isLight = theme.palette.mode === 'light';
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
    
    // Only start auto-scroll if there are enough skills to scroll
    if (filteredSkills.length > 4) {
      scrollAnimationRef.current = requestAnimationFrame(autoScroll);
    }
    
    return () => {
      if (scrollAnimationRef.current) {
        cancelAnimationFrame(scrollAnimationRef.current);
        scrollAnimationRef.current = null;
      }
    };
  }, [isUserHovering, filteredSkills.length]);

  const handleMouseEnter = () => setIsUserHovering(true);
  const handleMouseLeave = () => setIsUserHovering(false);

  return (
    <Box
      id="skills"
      sx={{
        overflowX: 'hidden',
        
        width: { xs: '100%', md: '73%' },
        minHeight: { xs: 'auto', md: 'unset' },
        pt: { xs: 5, sm: 6, md: 12 },
        px: { xs: 1.6, sm: 4, md: 0 },
        mx: 'auto',
        fontFamily: 'sans-serif',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h5" fontWeight="bold" fontSize={{ xs: 20, sm: 20, md: 25 }} sx={{ color: theme.palette.mode === 'dark' ? '#72e2f9' : theme.palette.primary.main }}>
          SKILLS
        </Typography>
        <Box sx={{ width: { xs: 55, sm: 60, md: 65 }, height: 3, background: '#8245ec', mx: 'auto', mt: { xs: 0.5, sm: 2, md: 0.5 }, borderRadius: 2 }} />
        <Typography color={theme.palette.text.secondary} mt={2} fontSize={{ xs: 12, sm: 16, md:15 }} fontWeight={600} >
        Experienced with modern technologies and practical applications.
        </Typography>
      </Box>
      {/* Skills Grid */}
        <Box
          ref={skillsRowRef}
          sx={{ 
            width: '100%', 
            overflowX: 'auto', 
            display: 'flex', 
            gap: 2,  
            px: 1,  
            cursor: 'pointer', 
            scrollbarWidth: 'none', 
            '&::-webkit-scrollbar': { display: 'none' },
            minHeight: { xs: 120, sm: 140, md: 160 }
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {filteredSkills.map((skill: any, idx: number) => (
            <Box key={`${skill.name}-${idx}`} sx={{ display: 'flex', flexShrink: 0 }}>
              <SkillErrorBoundary>
                <Skill3DIcon
                  logo={skill.logo}
                  name={skill.name}
                  category={skill.category}
                  index={idx}
                />
              </SkillErrorBoundary>
            </Box>
          ))}
        </Box>
    </Box>
  );
};

export default SkillsSection;
