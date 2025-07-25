// @ts-nocheck
import React, { useState } from "react";
import { projects } from "../constants";
import {
  Box,
  Typography,
  Grid,
  Chip,
  Button,
  useTheme,
  IconButton
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ProjectsSection = () => {
  const theme = useTheme();
  const [current, setCurrent] = useState(0);
  const total = projects.length;

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  const project = projects[current];

  return (
    <Box id="projects" sx={{ width: { xs: '100%', md: '73%' }, mx: 'auto', py: { xs: 4, md: 4 }, px: { xs: 2.5, sm: 2, md: 0 }, fontFamily: 'sans-serif', position: 'relative', background: theme.palette.background.default }}>
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ color: theme.palette.mode === 'dark' ? '#72e2f9' : theme.palette.primary.main, fontSize: { xs: 25, sm: 28, md: 32 } }}>
          PROJECTS
        </Typography>
        <Box sx={{ width: { xs: 100, sm: 128 }, height: 4, background: '#8245ec', mx: 'auto', mt: 2, borderRadius: 2 }} />
        <Typography color={theme.palette.text.secondary} mt={2} fontSize={{ xs: 15, sm: 18, md: 18 }} fontWeight={600}>
          A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
        </Typography>
      </Box>
      <Box sx={{ width: '100%', mx: 'auto', borderRadius: 4, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)', border: `2.5px solid ${theme.palette.background.default}`, background: theme.palette.mode === 'dark' ? '#23272f' : '#fff', p: { xs: 1.5, sm: 3, md: 4 }, transition: 'box-shadow 0.3s, border 0.3s', mb: 6 }}>
        <Grid container spacing={0} alignItems="center" justifyContent="center">
          <Grid size={{ xs: 12, md: 6 }} sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', mb: { xs: 3, md: 0 }, minHeight: { xs: 220, sm: 300, md: 360 }, maxHeight: { xs: 220, sm: 300, md: 360 }, zIndex: 10 }}>
            <Box sx={{ width: '100%', maxWidth: { xs: 480, md: '100%' }, height: { xs: 220, sm: 300, md: 360 }, minHeight: { xs: 220, sm: 300, md: 360 }, maxHeight: { xs: 220, sm: 300, md: 360 }, overflow: 'visible', borderRadius: 3, background: 'none', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
              <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12 }} />
              <Box sx={{ position: 'absolute', top: '50%', right: -60, width: 120, transform: 'translateY(-50%)', backgroundColor: 'rgb(23, 124, 255)', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 0.4, zIndex: 20, minHeight: 48, boxShadow: '0 6px 24px 0 rgba(0,0,0,0.18)' }}>
                <IconButton onClick={handlePrev} sx={{ color: '#fff', mx: 1, fontSize: 22 }} size="large" aria-label="Previous project">
                  <ArrowBackIcon fontSize="inherit" />
                </IconButton>
                <IconButton onClick={handleNext} sx={{ color: '#fff', mx: 1, fontSize: 22}} size="large" aria-label="Next project">
                  <ArrowForwardIcon fontSize="inherit" />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, minHeight: { xs: 220, sm: 300, md: 340 }, maxHeight: { xs: 220, sm: 300, md: 340 }, pl: { xs: 0, md: 10 }, pr: 0 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, textAlign: { xs: 'center', md: 'left' }, gap: 2, width: '100%', maxWidth: 500, mx: { xs: 'auto', md: 0 }, minHeight: { xs: 220, sm: 300, md: 340 }, maxHeight: { xs: 220, sm: 300, md: 340 }, justifyContent: 'center', background: 'none', borderRadius: 0, boxShadow: 'none', border: 'none' }}>
              <Typography variant="h4" fontWeight="bold" sx={{ color: theme.palette.primary.main, fontSize: { xs: 22, sm: 28, md: 30 } }}>
                {project.title}
              </Typography>
              <Typography color={theme.palette.text.secondary} sx={{ fontSize: { xs: 16, sm: 18 }, fontWeight: 500, maxWidth: { xs: '100%', md: '95%' } }}>
                {project.lead || ''}
              </Typography>
              <Typography color={theme.palette.text.secondary} sx={{ fontSize: { xs: 15, sm: 18, md: 16 }, mb: 1, maxWidth: { xs: '100%', md: '95%' } }}>
                {project.description}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1, mb: 2 }}>
                {project.tags.map((tag, idx) => (
                  <Chip
                    key={idx}
                    label={tag}
                    size="medium"
                    sx={{
                      background: theme.palette.mode === 'light' ? '#f3f6fa' : '#263159',
                      color: theme.palette.mode === 'light' ? '#333' : '#fff',
                      fontWeight: 600,
                      borderRadius: 1,
                      fontSize: { xs: 10, sm: 11, md: 12 },
                      height: { xs: 20, sm: 24 },
                      mr: 0.2,
                      mb: 0.5,
                    }}
                  />
                ))}
              </Box>
              <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                <Button variant="contained" color="primary" href={project.github} target="_blank" rel="noopener noreferrer" sx={{ borderRadius: 8, px: 3, py: 1.2, fontWeight: 600, fontSize: 16 }}>
                  View Code
                </Button>
                <Button variant="outlined" color="primary" href={project.webapp} target="_blank" rel="noopener noreferrer" sx={{ borderRadius: 8, px: 3, py: 1.2, fontWeight: 600, fontSize: 16 }}>
                  Live View
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Grid size={{ xs: 12, md: 2 }} sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {projects.map((_, idx) => (
            <Box key={idx} sx={{ width: 10, height: 10, borderRadius: '50%', background: idx === current ? theme.palette.primary.main : theme.palette.grey[400], transition: 'background 0.2s' }} />
          ))}
        </Box>
      </Grid>
    </Box>
  );
};

export default ProjectsSection;
