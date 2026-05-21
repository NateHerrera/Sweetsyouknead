import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Paper, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const ContactContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0, 10),
  position: 'relative',
}));

const ContactForm = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(255,249,245,0.98) 100%)',
  borderRadius: '28px',
  border: '1px solid rgba(200, 166, 95, 0.18)',
  boxShadow: '0 22px 48px rgba(107, 76, 67, 0.09)',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  '& .MuiOutlinedInput-root': {
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.7)',
    '& fieldset': {
      borderColor: 'rgba(200, 166, 95, 0.35)',
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderWidth: 1,
    },
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.palette.primary.main,
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1, 4),
  background: theme.palette.primary.main,
  color: '#fff',
  borderRadius: '999px',
  boxShadow: '0 12px 26px rgba(199, 130, 147, 0.24)',
  '&:hover': {
    background: theme.palette.primary.dark,
  },
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  '& img': {
    width: '22px',
    height: '22px',
    marginRight: theme.spacing(1.5),
  },
}));

const Contact: React.FC = () => {
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "53e91303-8f18-4284-821f-289065a603a2"); 

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        });
        // Reset form
        (event.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'Sorry, there was an error sending your message. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again.'
      });
    }
  };

  return (
    <ContactContainer>
      <Box sx={{ position: 'relative', zIndex: 1, px: 2 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ContactForm>
                <Typography
                  variant="h2"
                  sx={{
                    color: '#4f372f',
                    fontFamily: '"Cormorant Garamond", serif',
                    mb: 1,
                  }}
                >
                  Get in Touch
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 3 }}>
                  Share your event details and we will help you create something beautiful, thoughtful, and made just for the occasion.
                </Typography>
                
                {submitStatus.type && (
                  <Alert 
                    severity={submitStatus.type} 
                    sx={{ mb: 2 }}
                    onClose={() => setSubmitStatus({ type: null, message: '' })}
                  >
                    {submitStatus.message}
                  </Alert>
                )}

                <form onSubmit={onSubmit}>
                  <StyledTextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    name="name"
                    required
                  />
                  <StyledTextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    type="email"
                    name="email"
                    required
                  />
                  <StyledTextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    name="message"
                    required
                  />
                  <Box sx={{ textAlign: 'center' }}>
                    <SubmitButton variant="contained" type="submit">
                      Send Message
                    </SubmitButton>
                  </Box>
                </form>
              </ContactForm>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  mt: 4,
                  p: 3,
                  borderRadius: '24px',
                  backgroundColor: 'rgba(255,252,248,0.72)',
                  border: '1px solid rgba(200, 166, 95, 0.18)',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '2rem',
                    color: '#4f372f',
                    mb: 2,
                  }}
                >
                  Contact Details
                </Typography>
                <ContactInfo>
                  <img src="/images/location-arrow-svgrepo-com.svg" alt="Location" />
                  <Typography color="#5A3E22">TBA</Typography>
                </ContactInfo>
                <ContactInfo>
                  <img src="/images/email-part-2-svgrepo-com.svg" alt="Email" />
                  <Typography color="#5A3E22">sweetsyouknead@gmail.com</Typography>
                </ContactInfo>
                <ContactInfo>
                  <img src="/images/clock-0900-svgrepo-com.svg" alt="Hours" />
                  <Typography color="#5A3E22">Mon-Sat: 7am - 7pm</Typography>
                </ContactInfo>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </ContactContainer>
  );
};

export default Contact; 
