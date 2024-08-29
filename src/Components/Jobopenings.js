//New job openings 

import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Modal,
  CircularProgress,
} from "@mui/material";
import ContactForm from "./Form";
import database from "../firebase";

const Jobopenings = () => {
  const [openCareer, setOpenCarees] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleOpenCareer = () => {
    setOpenCarees(true);
  };

  const handleCareerClose = () => {
    setOpenCarees(false);
  };

  // Function to push job openings to Firebase (if needed)
  const addJobOpenings = (jobs) => {
    jobs.forEach((job) => {
      database.ref("JobOpenings").push({
        jobTitle: job.jobtitle,
        location: job.joblocation,
      }, (error) => {
        if (error) {
          console.error("Error adding job opening: ", error);
        } else {
          console.log("Job opening added successfully!");
        }
      });
    });
  };

    // const data = [
   
    //     {jobtitle:" Engineer",
    //   joblocation:"San Francisco"}
    //   ];

  // Fetch job openings from Firebase
  useEffect(() => {
    const jobsRef = database.ref("JobOpenings");

    jobsRef.on("value", (snapshot) => {
      const data = snapshot.val();
      const fetchedJobs = [];

      for (let id in data) {
        fetchedJobs.push({ id, ...data[id] });
      }

      setJobs(fetchedJobs);
      setLoading(false); // Stop loading when data is fetched
    });

    // Clean up listener on unmount
    return () => {
      jobsRef.off();
    };
  }, []);

  // Use the addJobOpenings function to add jobs if needed
//   useEffect(() => {
//     addJobOpenings(data);
//   }, []);

  return (
    <>
      <Container sx={{ backgroundColor: "#FAFAFA", width: "100%", my: 4, fontFamily: "sans-serif" }}>
        <Typography
          variant="h4"
          component="h4"
          gutterBottom
          sx={{ fontWeight: "bold", my: 4 }}
        >
          Job Openings
        </Typography>
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="20vh">
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={4} justifyContent="flex-start" sx={{ mb: 4 }}>
            {jobs.map((job) => (
              <Grid item xs={12} sm={6} md={6} lg={4} key={job.id}>
                <Card sx={{ border: "1px solid #ccc", borderRadius: "8px" }} >
                  <CardContent onClick={handleOpenCareer}>
                    <Box
                      display="flex"
                      alignItems="flex-start"
                      flexDirection="row"
                      textAlign="left"
                      justifyContent="space-between"
                    >
                      <Box>
                        <Typography variant="h6" component="div">
                          {job.jobTitle}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Location: {job.location}
                        </Typography>
                      </Box>
                      <Button
                        variant="contained"
                        size="small"
                        sx={{
                          backgroundColor: "#0585c1",
                          color: "white",
                          "&:hover": { backgroundColor: "#0585c1" },
                        }}
                      >
                        Register
                      </Button>
                    </Box>
                    <Box mt={2} display="flex" justifyContent="space-between">
                      <Button
                        size="small"
                        sx={{ color: "#0585c1", fontWeight: "bold" }}
                        // onClick={handleOpenCareer}
                      >
                        View & Apply
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
      <Modal open={openCareer} onClose={handleCareerClose}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            padding: "20px",
          }}
        >
          <ContactForm
            where={"career"}
            style={{ transform: "scale(0.2)" }}
            handleClose={handleCareerClose}
          />
        </div>
      </Modal>
    </>
  );
};

export default Jobopenings;
