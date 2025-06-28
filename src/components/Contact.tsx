import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Paper, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const ContactContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: `url('/rustic-bg.png') repeat`,
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(255, 248, 220, 0.95)',
  },
}));

const ContactForm = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: '#fff',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -10,
    left: -10,
    right: -10,
    bottom: -10,
    border: '2px solid #DEB887',
    borderRadius: '12px',
    zIndex: -1,
  },
}));

const ContactTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Caveat", cursive',
  fontSize: '2.5rem',
  color: theme.palette.primary.main,
  textAlign: 'center',
  marginBottom: theme.spacing(4),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#DEB887',
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  fontFamily: '"Caveat", cursive',
  fontSize: '1.2rem',
  padding: theme.spacing(1, 4),
  background: theme.palette.primary.main,
  color: '#fff',
  '&:hover': {
    background: theme.palette.primary.dark,
  },
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  '& img': {
    width: '24px',
    height: '24px',
    marginRight: theme.spacing(2),
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
      <Box sx={{ position: 'relative', zIndex: 1 }}>
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
                  sx={{ color: '#5A3E22', fontFamily: '"Caveat", cursive', mb: 2 }}
                >
                  Get in Touch
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
              <Box sx={{ mt: 4 }}>
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