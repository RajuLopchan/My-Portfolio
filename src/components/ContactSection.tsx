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
    <Box id="contact" sx={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary, pt: 0 ,pb: 6}} mt={10}>
      <Grid container spacing={8} width={"73%"} margin={"auto"}>
        {/* Left Section */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", color: '#fff' }}>
            <span>Let's</span>{" "}
            <span>talk</span>
          </Typography>
          <Typography sx={{ mt: 2, color: theme.palette.text.secondary }}>
            I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.
          </Typography>

          <Box sx={{ mt: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <EmailIcon sx={{ mr: 2, color: iconColor }} />
              <Typography sx={{ color: theme.palette.text.secondary }}>rajulopchan77@gmail.com</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <PhoneIcon sx={{ mr: 2, color: iconColor }} />
              <Typography sx={{ color: theme.palette.text.secondary }}>+977-9848095759</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LocationOnIcon sx={{ mr: 2, color: iconColor }} />
              <Typography sx={{ color: theme.palette.text.secondary }}>Kathmandu, Nepal</Typography>
            </Box>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold", color: '#fff' }}>
            Get in <span>touch</span>
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Your Name"
              name="name"
              variant="filled"
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
                '& .MuiFilledInput-underline:after': {
                  borderBottomColor: '#ccc',
                },
              }}
            />
            <TextField
              label="Your Email"
              name="email"
              variant="filled"
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
                '& .MuiFilledInput-underline:after': {
                  borderBottomColor: '#ccc',
                },
              }}
            />
            <TextField
              label="Write your message here"
              name="message"
              variant="filled"
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
                '& .MuiFilledInput-underline:after': {
                  borderBottomColor: '#ccc',
                },
              }}
            />
            <Button type="submit" variant="contained" color="secondary" sx={{ mt: 2, width: "fit-content" }}>
              Send Message
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
