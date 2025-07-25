// @ts-nocheck
import React, { useState } from "react";
import { projects } from "../constants";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  useTheme,
  IconButton
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  webapp: string;
}

const truncate = (str: string, n: number) => (str.length > n ? str.slice(0, n - 1) + '...' : str);

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const theme = useTheme();

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <Box id="projects" sx={{ width: { xs: '100%', md: '73%' }, mx: 'auto', py: { xs: 4, md: 12 }, px: { xs: 2.5, sm: 2, md: 4 }, fontFamily: 'sans-serif', position: 'relative', background: theme.palette.background.default }}>
      {/* Section Title */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ color: theme.palette.mode === 'dark' ? '#72e2f9' : theme.palette.primary.main, fontSize: { xs: 25, sm: 28, md: 32 } }}>
          PROJECTS
        </Typography>
        <Box sx={{ width: { xs: 100, sm: 128 }, height: 4, background: '#8245ec', mx: 'auto', mt: 2, borderRadius: 2 }} />
        <Typography color={theme.palette.text.secondary} mt={2} fontSize={{ xs: 15, sm: 18, md: 18 }} fontWeight={600}>
          A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
        </Typography>
      </Box>

      {/* Projects Grid */}
      <Grid container spacing={{ xs: 2, sm: 6 }} justifyContent="center">
        {projects.map((project: Project) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
            <Card
              onClick={() => handleOpenModal(project)}
              sx={{
                border: `1px solid ${theme.palette.mode === 'light' ? '#d1d5db' : '#444'}`,
                background: theme.palette.mode === 'dark' ? 'rgba(24,24,27,0.95)' : '#fff',
                borderRadius: 4,
                boxShadow: theme.palette.mode === 'dark' ? '0 4px 32px 0 #8245ec33' : '0 4px 32px 0 #8245ec11',
                cursor: 'pointer',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  boxShadow: '0 8px 32px 0 #8245ec77',
                  transform: 'translateY(-8px) scale(1.03)',
                },
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: { xs: 260, sm: 320, md: 350 },
                minHeight: { xs: 260, sm: 320, md: 350 },
                maxHeight: { xs: 260, sm: 320, md: 350 },
              }}
            >
              <CardActionArea sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    objectFit: 'cover',
                    borderRadius: 2,
                    mt: 0,
                    mb: 0,
                    height: { xs: 80, sm: 120, md: 150 },
                    width: '100%',
                  }}
                />
                <CardContent sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: { xs: 60, sm: 90, md: 120 },
                  maxHeight: { xs: 80, sm: 120, md: 150 },
                  p: { xs: 1, sm: 1.5 },
                }}>
                  <Typography variant="h6" fontWeight="bold" color={theme.palette.text.primary} gutterBottom sx={{ fontSize: { xs: 13, sm: 15, md: 16 }, mb: 0.5 }}>
                    {project.title}
                  </Typography>
                  <Typography color={theme.palette.text.secondary} sx={{
                    minHeight: { xs: 24, sm: 32 },
                    maxHeight: { xs: 24, sm: 32 },
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    fontSize: { xs: 11, sm: 13 },
                  }}>
                    {truncate(project.description, 70)}
                  </Typography>
                  <Box sx={{ mb: 0, display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: { xs: 1, sm: 1.5 } }}>
                    {project.tags.map((tag: string, idx: number) => {
                      // Color map for popular tags
                      const tagColors: any = {
                        'React JS': {
                          light: { bg: '#e3f2fd', color: '#1976d2' },
                          dark: { bg: '#21232b', color: '#90caf9' },
                        },
                        'Node.js': {
                          light: { bg: '#e8f5e9', color: '#388e3c' },
                          dark: { bg: '#1b2a1b', color: '#81c784' },
                        },
                        'MongoDB': {
                          light: { bg: '#e8f5e9', color: '#388e3c' },
                          dark: { bg: '#1b2a1b', color: '#81c784' },
                        },
                        'Express': {
                          light: { bg: '#f5f5f5', color: '#333' },
                          dark: { bg: '#222', color: '#fff' },
                        },
                        'HTML': {
                          light: { bg: '#fff3e0', color: '#e65100' },
                          dark: { bg: '#2d1a06', color: '#ffb74d' },
                        },
                        'CSS': {
                          light: { bg: '#e3f2fd', color: '#1565c0' },
                          dark: { bg: '#1a237e', color: '#90caf9' },
                        },
                        'JavaScript': {
                          light: { bg: '#fffde7', color: '#fbc02d' },
                          dark: { bg: '#2d2a06', color: '#fff176' },
                        },
                        'API': {
                          light: { bg: '#e1f5fe', color: '#0277bd' },
                          dark: { bg: '#102027', color: '#4fc3f7' },
                        },
                        'Payment Integration': {
                          light: { bg: '#f3e5f5', color: '#8e24aa' },
                          dark: { bg: '#2a1931', color: '#ce93d8' },
                        },
                        'Search Feature': {
                          light: { bg: '#fce4ec', color: '#ad1457' },
                          dark: { bg: '#2d1a23', color: '#f06292' },
                        },
                      };
                      const mode = theme.palette.mode;
                      const { bg, color } = tagColors[tag] && tagColors[tag][mode]
                        ? tagColors[tag][mode]
                        : (mode === 'light'
                          ? { bg: '#f3f6fa', color: '#333' }
                          : { bg: '#23272f', color: '#fff' });
                      return (
                        <Chip
                          key={idx}
                          label={tag}
                          size="small"
                          sx={{
                            background: bg,
                            color: color,
                            fontWeight: 600,
                            borderRadius: 1,
                            fontSize: { xs: 9, sm: 10 },
                            height: { xs: 18, sm: 22 },
                            mr: 0.5,
                            mb: 0.5,
                          }}
                        />
                      );
                    })}
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal Dialog */}
      <Dialog
        open={!!selectedProject}
        onClose={handleCloseModal}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            background: theme.palette.mode === 'dark' ? '#18181b' : '#fff',
            borderRadius: 4,
            boxShadow: '0 8px 32px 0 #8245ec77',
            p: 0,
          },
        }}
      >
        {selectedProject && (
          <>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 3 }}>
              <Typography variant="h5" fontWeight="bold" color={theme.palette.text.primary}>
                {selectedProject.title}
              </Typography>
              <IconButton onClick={handleCloseModal}>
                <CloseIcon sx={{ color: theme.palette.text.primary, fontSize: 32 }} />
              </IconButton>
            </DialogTitle>
            <DialogContent sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, p: 3 }}>
              <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: { xs: 2, md: 0 } }}>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  style={{ width: '100%', maxWidth: 400, borderRadius: 16, boxShadow: '0 4px 32px 0 #8245ec33' }}
                />
              </Box>
              <Box sx={{ flex: 2 }}>
                <Typography color={theme.palette.text.secondary} sx={{ mb: 3 }}>
                  {selectedProject.description}
                </Typography>
                <Box sx={{ mb: 3, display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                  {selectedProject.tags.map((tag: string, idx: number) => {
                    const tagColors: any = {
                      'React JS': {
                        light: { bg: '#e3f2fd', color: '#1976d2' },
                        dark: { bg: '#21232b', color: '#90caf9' },
                      },
                      'Node.js': {
                        light: { bg: '#e8f5e9', color: '#388e3c' },
                        dark: { bg: '#1b2a1b', color: '#81c784' },
                      },
                      'MongoDB': {
                        light: { bg: '#e8f5e9', color: '#388e3c' },
                        dark: { bg: '#1b2a1b', color: '#81c784' },
                      },
                      'Express': {
                        light: { bg: '#f5f5f5', color: '#333' },
                        dark: { bg: '#222', color: '#fff' },
                      },
                      'HTML': {
                        light: { bg: '#fff3e0', color: '#e65100' },
                        dark: { bg: '#2d1a06', color: '#ffb74d' },
                      },
                      'CSS': {
                        light: { bg: '#e3f2fd', color: '#1565c0' },
                        dark: { bg: '#1a237e', color: '#90caf9' },
                      },
                      'JavaScript': {
                        light: { bg: '#fffde7', color: '#fbc02d' },
                        dark: { bg: '#2d2a06', color: '#fff176' },
                      },
                      'API': {
                        light: { bg: '#e1f5fe', color: '#0277bd' },
                        dark: { bg: '#102027', color: '#4fc3f7' },
                      },
                      'Payment Integration': {
                        light: { bg: '#f3e5f5', color: '#8e24aa' },
                        dark: { bg: '#2a1931', color: '#ce93d8' },
                      },
                      'Search Feature': {
                        light: { bg: '#fce4ec', color: '#ad1457' },
                        dark: { bg: '#2d1a23', color: '#f06292' },
                      },
                    };
                    const mode = theme.palette.mode;
                    const { bg, color } = tagColors[tag] && tagColors[tag][mode]
                      ? tagColors[tag][mode]
                      : (mode === 'light'
                        ? { bg: '#f3f6fa', color: '#333' }
                        : { bg: '#23272f', color: '#fff' });
                    return (
                      <Chip
                        key={idx}
                        label={tag}
                        size="small"
                        sx={{
                          background: bg,
                          color: color,
                          fontWeight: 600,
                          borderRadius: 1,
                          mr: 0.5,
                          mb: 0.5,
                        }}
                      />
                    );
                  })}
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    sx={{
                      color: theme.palette.text.secondary,
                      borderColor: theme.palette.text.secondary,
                      fontWeight: 600,
                      borderRadius: 2,
                      px: 4,
                      py: 1.5,
                      fontSize: 16,
                      textTransform: 'none',
                      '&:hover': {
                        background: '#251f38',
                        borderColor: '#8245ec',
                        color: '#8245ec',
                      },
                    }}
                  >
                    View Code
                  </Button>
                  <Button
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    sx={{
                      background: '#8245ec',
                      color: '#fff',
                      fontWeight: 600,
                      borderRadius: 2,
                      px: 4,
                      py: 1.5,
                      fontSize: 16,
                      textTransform: 'none',
                      '&:hover': {
                        background: '#5e2bb8',
                      },
                    }}
                  >
                    View Live
                  </Button>
                </Box>
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default ProjectsSection;
