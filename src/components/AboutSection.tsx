import { Box, Typography, Grid, useTheme } from "@mui/material";
import {  School, Work  } from "@mui/icons-material";

const AboutSection = () => {
  const theme = useTheme();

  const experiences = [
    {
      title: "Web Developer Intern",
      company: "Fintech Nepal",
      period: "2024 - 2025",
      description: "Collaborated on various web projects and learned industry best practices."
    }
  ];

  const education = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "Tribhuvan University",
      period: "2021 - 2025",
      description: "Focused on software development and web technologies."
    }
  ];

  return (
    <Box
      id="about"
      sx={{
        width: { xs: '100%', md: '69%' },
        mx: 'auto',
        pt: { xs: 4, md: 12 },
       
        px: { xs: 2, sm: 4, md: 0 },
        backgroundColor: theme.palette.background.default,
        minHeight: 'auto',
      }}
    >
      {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography 
            variant="h5" 
            fontWeight="bold" 
            sx={{ 
              color: theme.palette.mode === 'dark' ? '#72e2f9' : theme.palette.primary.main,
              fontSize: { xs: 16, sm: 20, md: 26 },
              mb: 0.5
            }}
          >
            About Me
          </Typography>
          <Box 
            sx={{ 
              width: { xs: 80, sm: 100, md: 80 }, 
              height: 3, 
              background: 'linear-gradient( #8245ec 100%)', 
              mx: 'auto', 
              borderRadius: 2 
            }} 
          />
        </Box>
        <Box 
          sx={{ 
            borderRadius: 2, 
            background: theme.palette.mode === 'light' ? '#f5f7fa' : undefined,
            border: `1px solid ${theme.palette.mode === 'dark' ? 'gray' : '#e0e0e0'}`,
            overflow: 'hidden',
            height: '100%',
          }}
        >
   
            <Grid container spacing={4} sx={{ overflow: 'hidden', p: { xs: 1, sm: 2, md: 2 } }}>
              <Grid size={{ xs: 12, md: 4 }} >
                <Box
                  component="img"
                  src="/assets/images/raju.jpg"
                  alt="Raju Lopchan"
                  sx={{
                    width: '100%',
                    objectFit: 'contain',
                    borderRadius: 2,
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 8 }} sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Box display="flex" flexDirection="column" gap={1.5} mb={4}>
                    <Typography variant="h5" fontWeight="bold" sx={{fontSize: { xs: 16, sm: 20, md: 21 }}}>
                      My Journey
                    </Typography>
                  <Typography 
                    variant="body1" 
                    color={theme.palette.text.secondary}
                    sx={{ lineHeight: 1.8, fontSize: { xs: 14, sm: 16, md: 14 } }}
                  >
                    My journey into web development began with curiosity about how websites work. 
                    What started as a hobby quickly evolved into a passion for creating beautiful and 
                    functional digital experiences. I specialize in modern frontend technologies, 
                    particularly React and JavaScript, and I'm always eager to learn new frameworks 
                    and tools to deliver exceptional user experiences.
                  </Typography>
                 
                </Box>

                {/* Experience & Education Grid */}
                <Grid container spacing={8}>
                  {/* Experience */}
                  <Grid size={{ xs: 12, md: 6 }} >
                   
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                        <Work sx={{ color: theme.palette.primary.main, mr: 2, fontSize: 26 }} />
                        <Typography variant="h5" fontWeight="bold" sx={{fontSize: { xs: 16, sm: 20, md: 17 }}}>
                          Experience
                        </Typography>
                      </Box>
                      {experiences.map((exp, index) => (
                        <Box key={index}>
                          <Typography variant="h6" fontWeight="bold" sx={{ mb: 1, fontSize: { xs: 14, sm: 16, md: 14 } }}>
                            {exp.title}
                          </Typography>
                          <Typography variant="body2" color="primary" fontWeight="600" sx={{ mb: 1, fontSize: { xs: 14, sm: 16, md: 14 } }}>
                            {exp.company}
                          </Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block', fontSize: { xs: 14, sm: 16, md: 12 } }}>
                            {exp.period}
                          </Typography>
                          <Typography variant="body2" color={theme.palette.text.secondary} sx={{fontSize: { xs: 14, sm: 16, md: 12 }}}>
                            {exp.description}
                          </Typography>
                        </Box>
                      ))}
                   
                  </Grid>

                  {/* Education */}
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                        <School sx={{ color: theme.palette.primary.main, mr: 2, fontSize: 26 }} />
                        <Typography variant="h5" fontWeight="bold" sx={{fontSize: { xs: 16, sm: 20, md: 17 }}}>
                          Education
                        </Typography>
                      </Box>
                      {education.map((edu, index) => (
                        <Box key={index}>
                          <Typography variant="h6" fontWeight="bold" sx={{ mb: 1, fontSize: { xs: 14, sm: 16, md: 14 } }}>
                            {edu.degree}
                          </Typography>
                          <Typography variant="body2" color="primary" fontWeight="600" sx={{ mb: 1, fontSize: { xs: 14, sm: 16, md: 12 } }}>
                            {edu.institution}
                          </Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block', fontSize: { xs: 14, sm: 16, md: 12 } }}>
                            {edu.period}
                          </Typography>
                          <Typography variant="body2" color={theme.palette.text.secondary} sx={{fontSize: { xs: 14, sm: 16, md: 12 }}}>
                            {edu.description}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
        </Box>
    </Box>
  );
};

export default AboutSection;
