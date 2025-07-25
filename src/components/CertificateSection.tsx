
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
];

const CertificateSection = () => {
  const theme = useTheme();
  return (
    <Box id="certificates" sx={{ width: { xs: '100%', md: '73%' }, mx: 'auto', py: { xs: 4, md: 6 }, px: { xs: 2, sm: 2, md: 0 }, fontFamily: 'sans-serif', position: 'relative', background: theme.palette.background.default }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ color: theme.palette.mode === 'dark' ? '#72e2f9' : theme.palette.primary.main, fontSize: { xs: 25, sm: 28, md: 32 } }}>
          CERTIFICATES
        </Typography>
        <Box sx={{ width: { xs: 100, sm: 128 }, height: 4, background: '#8245ec', mx: 'auto', mt: 2, borderRadius: 2 }} />
      </Box>
      <Grid container spacing={{ xs: 2, sm: 4, md: 6 }} justifyContent="center">
        {certificates.map((cert, idx) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx} sx={{ display: 'flex' }}>
            <Card sx={{
                borderRadius: 3,
                border: theme.palette.mode === 'dark' ? '1.5px solid #444' : '1.5px solid #d1d5db',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                background: 'none',
                boxShadow: 'none',
                p: { xs: 1.5, sm: 2, md: 2.5 },
                transition: 'transform 0.35s cubic-bezier(.4,1.5,.6,1), box-shadow 0.35s cubic-bezier(.4,1.5,.6,1)',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.045) translateY(-6px)',
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 8px 32px 0 #8245ec55'
                    : '0 8px 32px 0 #8245ec22',
                  zIndex: 2,
                },
              }}>
              <CardMedia
                component="img"
                image={cert.image}
                alt={cert.title}
                sx={{ height: { xs: 140, sm: 180, md: 200 }, objectFit: 'cover', borderRadius: 2 }}
              />
              <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center', '&.MuiCardContent-root': { padding: 0 } }}>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 1, mt: 1, color: theme.palette.primary.main, fontSize: { xs: 16, sm: 18, md: 20 } }}>
                  {cert.title}
                </Typography>
                <Typography color={theme.palette.text.secondary} sx={{ mb: 2, fontSize: { xs: 13, sm: 15, md: 16 } }}>
                  {cert.description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <Button variant="contained" color="primary" href={cert.link} target="_blank" sx={{ borderRadius: 2, px: 2.5, fontWeight: 600, fontSize: { xs: 13, sm: 15 }, mt: 1 }}>
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