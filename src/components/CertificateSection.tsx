
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button, useTheme } from '@mui/material';

const certificates = [
  {
    title: 'React Developer Certificate',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/006/425/314/small_2x/modern-university-certificate-template-free-vector.jpg',
    description: 'Awarded for completing the Advanced React Developer course with distinction.',
    link: '#',
  },
  {
    title: 'Full Stack Web Certificate',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/006/425/314/small_2x/modern-university-certificate-template-free-vector.jpg',
    description: 'Certification for mastering full stack web development technologies.',
    link: '#',
  },
  {
    title: 'UI/UX Design Certificate',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/006/425/314/small_2x/modern-university-certificate-template-free-vector.jpg',
    description: 'Recognized for excellence in UI/UX design and user experience.',
    link: '#',
  },
  {
    title: 'JavaScript Mastery Certificate',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/006/425/314/small_2x/modern-university-certificate-template-free-vector.jpg',
    description: 'Advanced JavaScript programming and modern ES6+ features certification.',
    link: '#',
  },
];

const CertificateSection = () => {
  const theme = useTheme();
  return (
    <Box id="certificates" sx={{ width: { xs: '100%', md: '73%' }, mx: 'auto', pt: { xs: 4, md: 12 }, px: { xs: 2, sm: 2, md: 0 }, fontFamily: 'sans-serif', position: 'relative', background: theme.palette.background.default }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ color: theme.palette.mode === 'dark' ? '#72e2f9' : theme.palette.primary.main, fontSize: { xs: 22, sm: 24, md: 22 } }}>
          CERTIFICATES
        </Typography>
        <Box sx={{ width: { xs: 80, sm: 100 }, height: 2.5, background: '#8245ec', mx: 'auto', mt: 0.5, borderRadius: 2 }} />
      </Box>
      <Grid container spacing={{ xs: 1.5, sm: 3, md: 4 }} justifyContent="center">
        {certificates.map((cert, idx) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx} sx={{ display: 'flex' }}>
            <Card sx={{
                borderRadius: 2,
                border: theme.palette.mode === 'dark' ? '1px solid #444' : '1px solid #d1d5db',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                background: 'none',
                boxShadow: 'none',
                p: { xs: 1, sm: 1.5, md: 2 },
                transition: 'transform 0.35s cubic-bezier(.4,1.5,.6,1), box-shadow 0.35s cubic-bezier(.4,1.5,.6,1)',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.03) translateY(-4px)',
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 6px 24px 0 #8245ec55'
                    : '0 6px 24px 0 #8245ec22',
                  zIndex: 2,
                },
              }}>
              <CardMedia
                component="img"
                image={cert.image}
                alt={cert.title}
                sx={{ height: { xs: 100, sm: 120, md: 140 }, objectFit: 'cover', borderRadius: 1.5 }}
              />
              <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center', '&.MuiCardContent-root': { padding: 0 } }}>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 0.5, mt: 0.5, color: theme.palette.primary.main, fontSize: { xs: 12, sm: 14, md: 16 } }}>
                  {cert.title}
                </Typography>
                <Typography color={theme.palette.text.secondary} sx={{ mb: 1, fontSize: { xs: 10, sm: 11, md: 12 } }}>
                  {cert.description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <Button variant="contained" color="primary" href={cert.link} target="_blank" sx={{ borderRadius: 1.5, px: 1.5, py: 0.5, fontWeight: 600, fontSize: { xs: 10, sm: 12 }, mt: 0.5 }}>
                    View Certificate
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CertificateSection; 