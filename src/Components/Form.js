import React, { useEffect, useRef, useState } from "react";
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
import { useToasts } from "react-toast-notifications";
import emailjs from "@emailjs/browser";
import firebase from "firebase/app";
import "firebase/storage";

const initialFormValues = {
  fullName: "",
  email: "",
  message: "",
  formSubmitted: false,
  success: false,
};
const defaultTheme = createTheme();
export const ContactForm = ({ where, handleClose }) => {
  const [file, setFile] = useState(null);
  const [word, setWord] = useState(false);
  const { addToast } = useToasts();
  let { search } = useParams();
  if (typeof search == undefined || search == undefined) {
    search = "";
  }
  const formRef = useRef(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const validateFields = (data) => {
    const requiredFields = [
      "firstname",
      "lastname",
      "phone",
      "email",
      "address"
    ];

    for (let field of requiredFields) {
      if (!data.get(field)) {
        return field;
      }
    }

    return null;
  };

  // Handle form submission
    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const timestamp = new Date().toISOString();
      const email = data.get("email");

      const missingField = validateFields(data);
      if (missingField) {
        addToast(`${missingField} is required`, {
          appearance: "error",
          autoDismissTimeout: 3000,
          autoDismiss: true,
        });
        return;
      }
  
      try {
        // Handle file upload if a file is selected
        let fileURL = "";
        if (file) {
          const storageRef = firebase.storage().ref(`jobApplications/${file.name}`);
          await storageRef.put(file);
          fileURL = await storageRef.getDownloadURL();
        }
  
        if (where === "quote") {
          const contactRef = database.ref("contactform");
          await contactRef.push({
            firstname: data.get("firstname"),
            lastname: data.get("lastname"),
            company: data.get("company"),
            phone: data.get("phone"),
            email: email,
            address: data.get("address"),
            city: data.get("city"),
            state: data.get("state"),
            pickup: data.get("pickup"),
            dropoff: data.get("dropoff"),
            capacity: data.get("capacity"),
            weight: data.get("weight"),
            desc: data.get("desc"),
            timestamp,
          });
  
          addToast("Application submitted successfully", {
            appearance: "success",
            autoDismissTimeout: 3000,
            autoDismiss: true,
          });
          handleClose();
          console.log("Data successfully pushed to Firebase.");
  
          if (formRef.current) {
            emailjs
              .sendForm(
                "service_o935krs",
                "template_nxwih8o",
                formRef.current,
                "bmbka-SDJaXpkejA2",
              )
              .then(
                (result) => {
                  console.log("Email sent successfully:", result.text);
                },
                (error) => {
                  console.error("Email send error:", error.text);
                }
              );
          }
        }
        
        else if (where === "career") {
          const contactRef = database.ref("jobApplications");
          await contactRef.push({
            firstname: data.get("firstname"),
            lastname: data.get("lastname"),
            company: data.get("company"),
            phone: data.get("phone"),
            email: email,
            address: data.get("address"),
            city: data.get("city"),
            state: data.get("state"),
            linkedInUrl: data.get("linkedInUrl"),
            education: data.get("education"),
            personalNote: data.get("personalNote"),
            fileURL: fileURL,
            timestamp: timestamp
          });
  
          addToast("Application submitted successfully", {
            appearance: "success",
            autoDismissTimeout: 3000,
            autoDismiss: true,
          });
          handleClose();
          console.log("Data successfully pushed to Firebase.");
  
          // Send email with file URL
          if (formRef.current) {

            console.log("formRef.current", formRef.current)
            emailjs
              .send(
                "service_o935krs",
                "template_nliqot1",
                {
                  firstname: data.get("firstname"),
                  lastname: data.get("lastname"),
                  company: data.get("company"),
                  phone: data.get("phone"),
                  email: data.get("email"),
                  address: data.get("address"),
                  city: data.get("city"),
                  state: data.get("state"),
                  linkedInUrl:data.get("linkedInUrl"),
                  fileURL: fileURL,
                  timestamp,
                },
                "bmbka-SDJaXpkejA2",
              )
              .then(
                (result) => {
                  console.log("Email sent successfully:", result.text);
                },
                (error) => {
                  console.error("Email send error:", error.text);
                }
              );
          }
        }
      } catch (error) {
        console.error("Error:", error);
        addToast("Error submitting application", {
          appearance: "error",
          autoDismissTimeout: 3000,
          autoDismiss: true,
        });
      }
    };
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <ThemeProvider theme={defaultTheme}>
      <Helmet>
        <meta name="description" content="Your meta description" />

        <meta
          name="description"
          content="top logistic company, 3pl, best freight brokers, transportation services, USA &amp; CANADA,
road freight, rail freight, logistic company in newark New Jersey"
        />

        <meta
          name="abstract"
          content="top logistic company, 3pl, best freight brokers, transportation services, USA &amp; CANADA,
road freight, rail freight, logistic company in newark New Jersey"
        />

        <meta
          name="keywords"
          content="first connect, first connect world, best freight forwarding companies,transportation services,
forwarder companies, Freight broker, logistic company near me, logistic company, global freight services, freight broker near me,
global forwarding, trucking, shipping, freight forwarder, top 10 freight brokers in usa, international shipping, trucks, trucking,
ship truckload, full truckload, LTL, 3PL, freight brokers, cross docking, top logistics companies, truckload transportation, 
quality logistics, intermodal, truckload shipping, ltl shipping, intermodal shipping, less-than-truckload, careers, jobs, 
ocean/air, ocean & air shipping, careers, jobs, sales jobs, sales careers, logistics careers, less-than-truckload shipping,
less-than-truckload shipments, logistics jobs, sales careers, shipping, shipments, truckload freight, logistics careers."
        />

        <meta
          property="og:url"
          content="https://www.firstconnectworldwide.com"
        />

        <meta name="author" content="firstconnectworldwide" />
        <meta name="author" content="firstconnectworldwidellc" />
        <meta
          property="og:title"
          content="3pl company | logistic company | freight broker"
        />
        <meta
          name="google-site-verification"
          content="q6z9g0NUwdZRV_M2xH8uT3QUimHMR59n5JLZXeQlPjk"
        />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="distribution" content="global" />
        <meta name="geo.region" content="IN-New Jersey" />
        <meta name="geo.placename" content="Newark" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="english" />
        <meta name="copyright" content="first connect worldwide" />
        <meta
          id="subject"
          name="subject"
          content="first connect worldwide in Newark, New Jersey"
        />
        <meta id="geography" name="geography" content="Newark" />
        <meta id="document-type" name="document-type" content="public" />
        <meta id="Revisit-After" name="Revisit-After" content="1 day" />
        <meta id="city" name="city" content="Newark, New Jersey" />
        <meta id="country" name="country" content="USA" />
        <meta id="audience" name="audience" content="All, Business" />
        <meta id="googlebot" name="googlebot" content="index, follow" />
        <meta id="rating" name="rating" content="general" />
        {/* <meta property='og:image:secure_url' content='' />
        <meta property='og:image:width' content='600' />
        <meta property='og:image:height' content='600' /> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="first connect worldwide in Newark, New Jersey"
        />
        {/* <base href='https://www.firstconnectworldwide.com' /> */}
      </Helmet>
      <Container component="main" maxWidth="xs">
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
            <CloseIcon color="red" fontSize="medium" />
          </Box>

          {where == "quote" ? (
            <Box
              component="form"
              ref={formRef}
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 0 }}
            >
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

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="company"
                    label="Company"
                    name="company"
                    autoComplete="company"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
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
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="city"
                    label="City"
                    name="city"
                    autoComplete="city"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="state"
                    label="State"
                    name="state"
                    autoComplete="state"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="pickup"
                    label="Pickup"
                    name="pickup"
                    autoComplete="pickup"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="dropoff"
                    label="Dropoff"
                    name="dropoff"
                    autoComplete="dropoff"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="capacity"
                    label="Capacity"
                    name="capacity"
                    autoComplete="capacity"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="weight"
                    label="Weight"
                    name="weight"
                    autoComplete="weight"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
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
                <Grid item></Grid>
              </Grid>
            </Box>
          ) : (
            <Box
              component="form"
              noValidate
              ref={formRef}
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
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

                <Grid item xs={12} sm={6}>
                  <TextField
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
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="address"
                    label="Address"
                    name="address"
                    autoComplete="address"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="city"
                    label="City"
                    name="city"
                    autoComplete="city"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="state"
                    label="State"
                    name="state"
                    autoComplete="state"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="linekdInUrl"
                    label="Linkedin Url"
                    name="linkedInUrl"
                    autoComplete="linkedInUrl"
                  />
                </Grid>
                <Grid item xs={12}>
                  <input
                    accept=".pdf,.doc,.docx"
                    type="file"
                    id="fileUpload"
                    onChange={handleFileChange}
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
