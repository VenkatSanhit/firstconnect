import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import database from "../firebase";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import CloseIcon from "@mui/icons-material/Close";

const initialFormValues = {
  fullName: "",
  email: "",
  message: "",
  formSubmitted: false,
  success: false,
};
const defaultTheme = createTheme();
export const ContactForm = ({ where, handleClose }) => {
  const [word, setWord] = useState(false);
  let { search } = useParams();
  if (typeof search == undefined || search == undefined) {
    search = "";
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // pushing data to realtime dataabse
    const email = data.get("email");
    if (where == "quote") {
      const contactRef = database.ref("contactform");
      contactRef
        .push({
          firstname: data.get("firstname"),
          lastname: data.get("lastname"),
          company: data.get("company"),
          phone: data.get("phone"),
          email: email, // Use the email variable directly
          address: data.get("address"),
          city: data.get("city"),
          state: data.get("state"),
          pickup: data.get("pickup"),
          dropoff: data.get("dropoff"),
          capacity: data.get("capacity"),
          weight: data.get("weight"),
          desc: data.get("desc"),
        })
        .then(() => {
          console.log("Data successfully pushed to Firebase.");
        })
        .catch(alert);
      console.log({
        firstname: data.get("firstname"),
        lastname: data.get("lastname"),
        company: data.get("company"),
        phone: data.get("phone"),
        email: data.get("email"),
        address: data.get("address"),
        city: data.get("city"),
        state: data.get("state"),
        pickup: data.get("pickup"),
        dropoff: data.get("dropoff"),
        capacity: data.get("capacity"),
        weight: data.get("weight"),
        desc: data.get("desc"),
      });
    } else if (where == "career") {
      const contactRef = database.ref("jobApplications");

      contactRef
        .push({
          firstname: data.get("firstname"),
          lastname: data.get("lastname"),
          company: data.get("company"),
          phone: data.get("phone"),
          email: email, // Use the email variable directly
          address: data.get("address"),
          city: data.get("city"),
          state: data.get("state"),
          linkedInUrl: data.get("linkedInUrl"),
          education: data.get("education"),
          personalNote: data.get("personalNote"),
        })
        .then(() => {
          console.log("Data successfully pushed to Firebase.");
        })
        .catch(alert);
      console.log({
        firstname: data.get("firstname"),
        lastname: data.get("lastname"),
        company: data.get("company"),
        phone: data.get("phone"),
        email: data.get("email"),
        address: data.get("address"),
        city: data.get("city"),
        state: data.get("state"),
        pickup: data.get("pickup"),
        dropoff: data.get("dropoff"),
        capacity: data.get("capacity"),
        weight: data.get("weight"),
        desc: data.get("desc"),
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ThemeProvider theme={defaultTheme}>
      <Helmet>
        <meta name='description' content='Your meta description' />

        <meta
          name='description'
          content='top logistic company, 3pl, best freight brokers, transportation services, USA &amp; CANADA,
road freight, rail freight, logistic company in newark New Jersey'
        />

        <meta
          name='abstract'
          content='top logistic company, 3pl, best freight brokers, transportation services, USA &amp; CANADA,
road freight, rail freight, logistic company in newark New Jersey'
        />

        <meta
          name='keywords'
          content='first connect, first connect world, best freight forwarding companies,transportation services,
forwarder companies, Freight broker, logistic company near me, logistic company, global freight services, freight broker near me,
global forwarding, trucking, shipping, freight forwarder, top 10 freight brokers in usa, international shipping, trucks, trucking,
ship truckload, full truckload, LTL, 3PL, freight brokers, cross docking, top logistics companies, truckload transportation, 
quality logistics, intermodal, truckload shipping, ltl shipping, intermodal shipping, less-than-truckload, careers, jobs, 
ocean/air, ocean & air shipping, careers, jobs, sales jobs, sales careers, logistics careers, less-than-truckload shipping,
less-than-truckload shipments, logistics jobs, sales careers, shipping, shipments, truckload freight, logistics careers.'
        />

        <meta
          property='og:url'
          content='https://www.firstconnectworldwide.com'
        />

        <meta name='author' content='firstconnectworldwide' />
        <meta name='author' content='firstconnectworldwidellc' />
        <meta
          property='og:title'
          content='3pl company | logistic company | freight broker'
        />
        <meta
          name='google-site-verification'
          content='q6z9g0NUwdZRV_M2xH8uT3QUimHMR59n5JLZXeQlPjk'
        />
        <meta name='MobileOptimized' content='width' />
        <meta name='HandheldFriendly' content='true' />
        <meta name='distribution' content='global' />
        <meta name='geo.region' content='IN-New Jersey' />
        <meta name='geo.placename' content='Newark' />
        <meta name='robots' content='index, follow' />
        <meta name='language' content='english' />
        <meta name='copyright' content='first connect worldwide' />
        <meta
          id='subject'
          name='subject'
          content='first connect worldwide in Newark, New Jersey'
        />
        <meta id='geography' name='geography' content='Newark' />
        <meta id='document-type' name='document-type' content='public' />
        <meta id='Revisit-After' name='Revisit-After' content='1 day' />
        <meta id='city' name='city' content='Newark, New Jersey' />
        <meta id='country' name='country' content='USA' />
        <meta id='audience' name='audience' content='All, Business' />
        <meta id='googlebot' name='googlebot' content='index, follow' />
        <meta id='rating' name='rating' content='general' />
        <meta property='og:image:secure_url' content='' />
        <meta property='og:image:width' content='600' />
        <meta property='og:image:height' content='600' />
        <meta property='og:type' content='website' />
        <meta
          property='og:site_name'
          content='first connect worldwide in Newark, New Jersey'
        />
        {/* <base href='https://www.firstconnectworldwide.com' /> */}
      </Helmet>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: "40px",
              cursor: "pointer",
              right: "44px",
            }}
          >
            <CloseIcon color='red' fontSize='medium' />
          </Box>

          {where == "quote" ? (
            <Box
              component='form'
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 0 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id='firstname'
                    label='First Name'
                    name='firstname'
                    autoComplete='firstname'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id='lastname'
                    label='Last Name'
                    name='lastname'
                    autoComplete='lastname'
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id='company'
                    label='Company'
                    name='company'
                    autoComplete='company'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id='phone'
                    label='Phone'
                    name='phone'
                    autoComplete='phone'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id='email'
                    label='Email'
                    name='email'
                    autoComplete='email'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id='address'
                    label='Address'
                    name='address'
                    autoComplete='address'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id='city'
                    label='City'
                    name='city'
                    autoComplete='city'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id='state'
                    label='State'
                    name='state'
                    autoComplete='state'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id='pickup'
                    label='Pickup'
                    name='pickup'
                    autoComplete='pickup'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id='dropoff'
                    label='Dropoff'
                    name='dropoff'
                    autoComplete='dropoff'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id='capacity'
                    label='Capacity'
                    name='capacity'
                    autoComplete='capacity'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id='weight'
                    label='Weight'
                    name='weight'
                    autoComplete='weight'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id='desc'
                    label='Description'
                    name='desc'
                    autoComplete='desc'
                  />
                </Grid>
              </Grid>

              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
              <Grid container justifyContent='flex-end'>
                <Grid item></Grid>
              </Grid>
            </Box>
          ) : (
            <Box
              component='form'
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id='firstname'
                    label='First Name'
                    name='firstname'
                    autoComplete='firstname'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id='lastname'
                    label='Last Name'
                    name='lastname'
                    autoComplete='lastname'
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id='company'
                    label='Company'
                    name='company'
                    autoComplete='company'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id='phone'
                    label='Phone'
                    name='phone'
                    autoComplete='phone'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id='email'
                    label='Email'
                    name='email'
                    autoComplete='email'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id='address'
                    label='Address'
                    name='address'
                    autoComplete='address'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id='city'
                    label='City'
                    name='city'
                    autoComplete='city'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id='state'
                    label='State'
                    name='state'
                    autoComplete='state'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id='linekdInUrl'
                    label='Linkedin Url'
                    name='linkedInUrl'
                    autoComplete='linkedInUrl'
                  />
                </Grid>
              </Grid>

              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
              <Grid container justifyContent='flex-end'>
                <Grid item></Grid>
              </Grid>
            </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default ContactForm;
