import React from 'react';
import './Homepage.css';
import { Box, Container, Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
      <Box
        component="footer"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
          p: 6,
        }}
      >
        <Container maxWidth="lg">
          <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap">
            <Box flexBasis={{ xs: '100%', sm: '25%' }} mb={{ xs: 2, sm: 0 }}>
              <img
                src="Logo-FCW.png"
                alt="Company Logo"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Box>
            <Box flexBasis={{ xs: '100%', sm: '25%' }} px={2}>
              <Typography variant="h6" gutterBottom style={{ color: '#ff5733' }}>
                About Us
              </Typography>
              <Typography variant="body2" color="textSecondary">
                We are XYZ company, dedicated to providing the best service to our customers.
              </Typography>
            </Box>
            <Box flexBasis={{ xs: '100%', sm: '25%' }} px={2}>
              <Typography variant="h6" gutterBottom style={{ color: '#ff5733' }}>
                Contact Us
              </Typography>
              <Typography variant="body2" color="textSecondary">
                123 Main Street, Anytown, USA
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Email: info@example.com
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Phone: +1 234 567 8901
              </Typography>
            </Box>
            <Box flexBasis={{ xs: '100%', sm: '25%' }} px={2}>
              <Typography variant="h6" gutterBottom style={{ color: '#ff5733' }}>
                Follow Us
              </Typography>
              <Link href="https://www.facebook.com/" color="inherit" style={{ marginRight: '1rem' }}>
                <FacebookIcon fontSize="large" />
              </Link>
              <Link href="https://www.instagram.com/" color="inherit" style={{ marginRight: '1rem' }}>
                <InstagramIcon fontSize="large" />
              </Link>
              <Link href="https://www.twitter.com/" color="inherit">
                <TwitterIcon fontSize="large" />
              </Link>
            </Box>
          </Box>
          <Box mt={5} style={{ borderTop: '1px solid #555', paddingTop: '1rem' }}>
            <Typography variant="body2" color="textSecondary" align="center">
              {"Copyright © "}
              <Link color="inherit" href="https://your-website.com/">
                Your Website
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Container>
      </Box>
    );
  };
  
  export default Footer;