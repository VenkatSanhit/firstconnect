import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import database from '../firebase';
const initialFormValues = {
    fullName: "",
    email: "",
    message:"",
    formSubmitted: false,
    success: false
  }
const defaultTheme = createTheme();
export const ContactForm = (where) => 
{
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // pushing data to realtime dataabse
        const email = data.get('email');
        const contactRef = database.ref('contactform' );

        contactRef.push({
            firstname: data.get('firstname'),
            lastname: data.get('lastname'),
            company: data.get('company'),
            phone: data.get('phone'),
            email: email,  // Use the email variable directly
            address: data.get('address'),
            city: data.get('city'),
            state: data.get('state'),
            pickup: data.get('pickup'),
            dropoff: data.get('dropoff'),
            capacity: data.get('capacity'),
            weight: data.get('weight'),
            desc: data.get('desc')
        })
        .then(() => {
            console.log('Data successfully pushed to Firebase.');
        }).catch(alert);
        console.log({
            firstname: data.get('firstname'),
            lastname: data.get('lastname'),
            company: data.get('company'),
            phone: data.get('phone'),
            email: data.get('email'),
            address: data.get('address'),
            city: data.get('city'),
            state: data.get('state'),
            pickup: data.get('pickup'),
            dropoff: data.get('dropoff'),
            capacity: data.get('capacity'),
            weight: data.get('weight'),
            desc: data.get('desc')
        });
      };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              
             <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    id="firstname"
                    label="First Name"
                    name="firstname"
                    autoComplete="firstname"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    id="lastname"
                    label="Last Name"
                    name="lastname"
                    autoComplete="lastname"
                />
            </Grid>

              
                <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="company"
                  label="Company"
                  name="company"
                  autoComplete="company"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="phone"
                  autoComplete="phone"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="address"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                  autoComplete="city"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="state"
                  label="State"
                  name="state"
                  autoComplete="state"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="pickup"
                  label="Pickup"
                  name="pickup"
                  autoComplete="pickup"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="dropoff"
                  label="Dropoff"
                  name="dropoff"
                  autoComplete="dropoff"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="capacity"
                  label="Capacity"
                  name="capacity"
                  autoComplete="capacity"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="weight"
                  label="Weight"
                  name="weight"
                  autoComplete="weight"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="desc"
                  label="Description"
                  name="desc"
                  autoComplete="desc"
                />
            </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
export default ContactForm;