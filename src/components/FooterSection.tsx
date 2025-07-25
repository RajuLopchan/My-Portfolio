
import { Box, Typography, IconButton, useTheme, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const FooterSection = () => {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        py: 2,
        background: theme.palette.mode === 'dark' ? '#18181b' : '#f3f6fa',
        color: theme.palette.text.secondary,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
        borderTop: `1px solid ${theme.palette.mode === 'dark' ? '#23272f' : '#e0e0e0'}`,
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: 500, textAlign: 'center', color: theme.palette.text.primary }}>
        Raju Lopchan — Designed & built with React and Material UI
      </Typography>
      <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
        <IconButton
          component="a"
          href="https://github.com/rajulopchan"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          sx={{ color: theme.palette.text.secondary, transition: 'color 0.2s', '&:hover': { color: '#8245ec' } }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://linkedin.com/in/rajulopchan"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          sx={{ color: theme.palette.text.secondary, transition: 'color 0.2s', '&:hover': { color: '#0077b5' } }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component="a"
          href="rahulopchan77@gmail.com"
          aria-label="Email"
          sx={{ color: theme.palette.text.secondary, transition: 'color 0.2s', '&:hover': { color: '#d44638' } }}
        >
          <EmailIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default FooterSection; 