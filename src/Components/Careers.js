import React, { useState } from "react";
import { Container, Typography, Box, Grid, Card, CardContent, Button, Modal } from "@mui/material";
import ContactForm from "./Form";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import PeopleIcon from "@mui/icons-material/People";
import Jobopenings from "./Jobopenings";

const Careers = () => {
    // const [openCareer, setOpenCarees] = useState(false);

    // const handleOpenCareer = () => {
    //     setOpenCarees(true);
    // };

    // const handleCareerClose = () => {
    //     setOpenCarees(false);
    // };

    return (
        <Container sx={{ fontFamily: "sans-serif", }}>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                minHeight="100vh"
                textAlign="center"
                fontFamily={"sans-serif"}
                px={2}
            >
                <Typography variant="h3" component="h3" gutterBottom sx={{ fontWeight: 'bold', mt: 10, fontFamily: "sans-serif" }}>
                    Careers
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontFamily: "sans-serif" }}>
                    At First Connect Worldwide, we're more than just a logistics company; we're a community of passionate individuals dedicated to moving the world forward. Our team is comprised of talented professionals who share a commitment to excellence, innovation, and customer satisfaction. If you're looking for a rewarding career where you can make a real difference, we invite you to join our team.
                </Typography>

                <Typography variant="h4" component="h4" gutterBottom sx={{ fontWeight: 'bold', mt: 8 }}>
                    Why work with us?
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} md={4}>
                        <Box
                            display="flex"
                            alignItems="flex-start"
                            flexDirection="row"
                            textAlign="left"
                            p={2}
                        >
                            <SchoolIcon fontSize="large" sx={{ color: '#0585c1', fontWeight: 'bold', mr: 2 }} />

                            <Box>
                                <Typography variant="h6" component="h2" gutterBottom>
                                    Career Growth and Development
                                </Typography>
                                <Typography variant="body2">
                                    We invest in our employees' professional growth by providing opportunities for training, mentorship, and advancement. Our culture fosters a learning environment where you can develop your skills and reach your full potential.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box
                            display="flex"
                            alignItems="flex-start"
                            flexDirection="row"
                            textAlign="left"
                            p={2}
                        >
                            <WorkIcon fontSize="large" sx={{ color: '#0585c1', fontWeight: 'bold', mr: 2 }} />

                            <Box>
                                <Typography variant="h6" component="h2" gutterBottom>
                                    Competitive Compensation and Benefits
                                </Typography>
                                <Typography variant="body2">
                                    We offer competitive salaries, comprehensive benefits packages, and flexible work arrangements to ensure our employees feel valued and rewarded for their contributions.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box
                            display="flex"
                            alignItems="flex-start"
                            flexDirection="row"
                            textAlign="left"
                            p={2}
                        >
                            <PeopleIcon fontSize="large" sx={{ color: '#0585c1', fontWeight: 'bold', mr: 2 }} />
                            <Box>
                                <Typography variant="h6" component="h2" gutterBottom>
                                    A Culture of Collaboration and Innovation
                                </Typography>
                                <Typography variant="body2">
                                    At First Connect Worldwide, we believe in the power of teamwork and innovation. Our collaborative culture encourages open communication, creativity, and a commitment to finding new and better ways of doing things
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Jobopenings />
            </Box>
        </Container>
    );
};

export default Careers;
