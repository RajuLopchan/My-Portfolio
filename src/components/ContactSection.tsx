import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  useTheme,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";

const ContactSection = () => {
  const theme = useTheme();
  // const isLight = theme.palette.mode === 'light';


  // Form state
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });

  const validate = () => {
    let valid = true;
    let newErrors = { name: '', email: '', message: '' };
    if (!values.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    if (!values.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) {
      newErrors.email = 'Enter a valid email';
      valid = false;
    }
    if (!values.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched({ ...touched, [e.target.name]: true });
    validate();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (validate()) {
      alert('Your message has been sent!');
      setValues({ name: '', email: '', message: '' });
      setTouched({ name: false, email: false, message: false });
    }
  };

  const iconColor = theme.palette.text.secondary;

  return (
    <Box
      id="contact"
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        width: { xs: '100%', md: '73%' },
        pt: { xs: 2.5, sm: 6, md: 8 },
        pb: { xs: 2.5, sm: 6, md: 3 },
        px: { xs: 1.6, sm: 4, md: 0 },
        mt: { xs: 4, sm: 0, md: 0 },
        mx: 'auto',
      }}
    >
       <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ color: theme.palette.mode === 'dark' ? '#72e2f9' : theme.palette.primary.main, fontSize: { xs: 25, sm: 28, md: 25 } }}>
          CONTACT
        </Typography>
        <Box sx={{ width: { xs: 100, sm: 90 }, height: 3, background: '#8245ec', mx: 'auto', mt: 0.6, borderRadius: 2 }} />
      </Box>
      <Grid container spacing={8} width="100%" px={{ xs: 1, sm: 2, md: 0 }}>
        {/* Left Section */}
        <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", color: theme.palette.mode === 'dark' ? '#72e2f9' : theme.palette.primary.main, textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '1.7rem', sm: '1.5rem', md: '1.5rem' } }}>
            <span>Let's</span>{" "}
            <span>talk</span>
          </Typography>
          <Typography sx={{ mt: 2, color: theme.palette.text.secondary, textAlign: { xs: 'center', md: 'left' } , fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.2rem' }}}>
            I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.
          </Typography>

          <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Box sx={{ display: "flex", alignItems: "center", minHeight: 32, justifyContent: { xs: 'center', md: 'flex-start' }, textAlign: { xs: 'center', md: 'left' } }}>
              <EmailIcon sx={{ mr: 1, color: iconColor, fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.5rem' } }} />
              <Typography sx={{ color:'gray', fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem' }, display: 'flex', alignItems: 'center' }}>rajulopchan77@gmail.com</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", minHeight: 32, justifyContent: { xs: 'center', md: 'flex-start' }, textAlign: { xs: 'center', md: 'left' } }}>
              <PhoneIcon sx={{ mr: 1, color: iconColor, fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.5rem' } }} />
              <Typography sx={{ color: 'gray', fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem' }, display: 'flex', alignItems: 'center' }}>+977-9848095759</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", minHeight: 32, justifyContent: { xs: 'center', md: 'flex-start' }, textAlign: { xs: 'center', md: 'left' } }}>
              <LocationOnIcon sx={{ mr: 1, color: iconColor, fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.5rem' } }} />
              <Typography sx={{ color:'gray', fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem' }, display: 'flex', alignItems: 'center' }}>Kathmandu, Nepal</Typography>
            </Box>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold", color: theme.palette.mode === 'dark' ? '#72e2f9' : theme.palette.primary.main, textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '1.7rem', sm: '1.5rem', md: '1.5rem' } }}>
            Get in <span>touch</span>
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: 'center' }}>
            <TextField
              label="Your Name"
              name="name"
              variant="outlined"
              fullWidth
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(errors.name) && touched.name}
              helperText={Boolean(errors.name) && touched.name ? errors.name : ''}
              sx={{
                '& .MuiFormLabel-root': {
                  color: '#888',
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: '#888',
                },
                '& .MuiFormLabel-root.Mui-error': {
                  color: '#888',
                },
                '& .MuiOutlinedInput-root': {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.mode === 'light' ? '#d1d5db' : '#444',
                    borderWidth: '1px',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.mode === 'light' ? '#d1d5db' : '#444',
                  },
                  '&.Mui-error .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.mode === 'light' ? '#d1d5db' : '#444',
                  },
                },
              }}
            />
            <TextField
              label="Your Email"
              name="email"
              variant="outlined"
              fullWidth
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(errors.email) && touched.email}
              helperText={Boolean(errors.email) && touched.email ? errors.email : ''}
              sx={{
                '& .MuiFormLabel-root': {
                  color: '#888',
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: '#888',
                },
                '& .MuiFormLabel-root.Mui-error': {
                  color: '#888',
                },
                '& .MuiOutlinedInput-root': {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.mode === 'light' ? '#d1d5db' : '#444',
                    borderWidth: '1px',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.mode === 'light' ? '#d1d5db' : '#444',
                  },
                  '&.Mui-error .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.mode === 'light' ? '#d1d5db' : '#444',
                  },
                },
              }}
            />
            <TextField
              label="Write your message here"
              name="message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(errors.message) && touched.message}
              helperText={Boolean(errors.message) && touched.message ? errors.message : ''}
              sx={{
                '& .MuiFormLabel-root': {
                  color: '#888',
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: '#888',
                },
                '& .MuiFormLabel-root.Mui-error': {
                  color: '#888',
                },
                '& .MuiOutlinedInput-root': {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.mode === 'light' ? '#d1d5db' : '#444',
                    borderWidth: '1px',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.mode === 'light' ? '#d1d5db' : '#444',
                  },
                  '&.Mui-error .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.mode === 'light' ? '#d1d5db' : '#444',
                  },
                },
              }}
            />
            <Button type="submit" variant="contained"
              sx={{
                backgroundColor: theme.palette.primary.main,
                textTransform: "none",
                borderRadius: 2,
                px: { xs: 4, sm: 3, md: 2 },
                fontSize: {
                  xs: "0.75rem",
                  sm: "1rem",
                  md: "1rem",
                },
                whiteSpace: "nowrap",
                mt: 2,
                width: "fit-content",
                "&:hover": { backgroundColor: "#e63d17" },
              }}
            >
              Send Message
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
