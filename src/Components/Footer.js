import React from 'react';
import './Homepage.css';
import { Box, Container, Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
      // <Box
      //   component="footer"
      //   sx={{
      //     backgroundColor: (theme) =>
      //       theme.palette.mode === 'light'
      //         ? theme.palette.grey[200]
      //         : theme.palette.grey[800],
      //     p: 6,
      //   }}
      // >
      //   <Container maxWidth="lg">
      //     <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap">
      //       <Box flexBasis={{ xs: '100%', sm: '25%' }} mb={{ xs: 2, sm: 0 }}>
      //         <img
      //           src="firstconnect.png"
      //           alt="Company Logo"
      //           style={{ maxWidth: '80%', height: 'auto', float: 'left',marginRight: '20px' }}
      //         />
      //       </Box>
      //       <Box flexBasis={{ xs: '100%', sm: '25%' }} px={2}>
      //         <Typography variant="h6" gutterBottom style={{ color: '#2b76c3' }}>
      //           About Us
      //         </Typography>
      //         <Typography variant="body2" color="textSecondary">
      //         First Connect Worldwide, a licensed Freight broker company, 
      //         has been providing a full range of transportation and logistics services all around the USA.

      //         </Typography>
      //       </Box>
      //       <Box flexBasis={{ xs: '100%', sm: '25%' }} px={2}>
      //         <Typography variant="h6" gutterBottom style={{ color: '#2b76c3' }}>
      //           Contact Us
      //         </Typography>
      //         <Typography variant="body2" color="textSecondary">
      //         24 Commerce St #434, Newark, NJ 07102, United State
      //         Uttar Pradesh, Noida

      //         </Typography>
      //         <Typography variant="body2" color="textSecondary">
      //           Email: info@firstconnectworldwide.com
      //         </Typography>
      //         <Typography variant="body2" color="textSecondary">
      //           Phone: +1-908-888-0022
      //         </Typography>
      //       </Box>
      //       <Box flexBasis={{ xs: '100%', sm: '25%' }} px={2}>
      //         <Typography variant="h6" gutterBottom style={{ color: '#2b76c3' }}>
      //           Follow Us
      //         </Typography>
      //         <Link href="https://www.linkedin.com/company/first-connect-worldwide-llc/" color="inherit" style={{ marginRight: '1rem' }}>
      //         <LinkedInIcon fontSize="large" />
      //         </Link>
      //         <Link href="https://www.facebook.com/" color="inherit" style={{ marginRight: '1rem' }}>
      //           <FacebookIcon fontSize="large" />
      //         </Link>
      //         <Link href="https://www.instagram.com/firstconnectworldwide_official/" color="inherit" style={{ marginRight: '1rem' }}>
      //           <InstagramIcon fontSize="large" />
      //         </Link>
      //         <Link href="https://twitter.com/firstconne34166" color="inherit">
      //           <TwitterIcon fontSize="large" />
      //         </Link>
      //       </Box>
      //     </Box>
      //     <Box mt={5} style={{ borderTop: '1px solid #555', paddingTop: '1rem' }}>
      //       <Typography variant="body2" color="textSecondary" align="center">
      //         {"Copyright © "}
      //         <Link color="inherit" href="https://your-website.com/">
      //           Your Website
      //         </Link>{" "}
      //         {new Date().getFullYear()}
      //         {"."}
      //       </Typography>
      //     </Box>
      //   </Container>
      // </Box>
      <Box
  component="footer"
  sx={{
    // backgroundColor: (theme) =>
    //   theme.palette.mode === 'light'
    //     ? theme.palette.grey[200]
    //     : theme.palette.grey[800],
    // p: 6,
    backgroundColor: '#3a7590', // Set background color to white
    p: 6,
  }}
>
  <Container maxWidth="lg">
    <Box display="flex" alignItems="center" flexWrap="wrap">
      <Box flexBasis={{ xs: '80%', sm: '20%' }} mb={{ xs: 2, sm: 0 }}>
        <img
          src="firstconnect.png"
          alt="Company Logo"
          style={{
            maxWidth: '80%',
            height: 'auto',
            float: 'left',
            marginRight: '20px',
          }}
        />
      </Box>
      <Box flexBasis={{ xs: '100%', sm: '25%' }} px={2}>
        <Typography variant="h6" gutterBottom style={{ color: '#fff' }}>
          About Us
        </Typography>
        <Typography variant="body2" color='#fff'>
          First Connect Worldwide, a licensed Freight broker company, has been providing a full range of transportation and logistics services all around the USA.
        </Typography>
      </Box>
      <Box flexBasis={{ xs: '90%', sm: '20%' }} px={2}>
        <Typography variant="h6" gutterBottom style={{ color: '#fff' }}>
          Contact Us
        </Typography>
        <Typography variant="body2" color='#fff'>
          24 Commerce St #434, Newark, NJ 07102, United States
        </Typography>
        <Typography variant="body2" color='#fff'>
          Email: info@firstconnectworldwide.com
        </Typography>
        <Typography variant="body2" color='#fff'>
          Phone: +1-908-888-0022
        </Typography>
      </Box>
      <Box flexBasis={{ xs: '80%', sm: '20%' }} px={2}>
        <Typography variant="h6" gutterBottom style={{ color: '#fff' }}>
          Follow Us
        </Typography>
        <Link href="https://www.linkedin.com/company/first-connect-worldwide-llc/" color='#fff' style={{ marginRight: '1rem' }}>
          <LinkedInIcon fontSize="large" />
        </Link>
        <Link href="https://www.facebook.com/" color='#fff' style={{ marginRight: '1rem' }}>
          <FacebookIcon fontSize="large" />
        </Link>
        <Link href="https://www.instagram.com/firstconnectworldwide_official/" color='#fff' style={{ marginRight: '1rem' }}>
          <InstagramIcon fontSize="large" />
        </Link>
        <Link href="https://twitter.com/firstconne34166" color='#fff'>
          <TwitterIcon fontSize="large" />
        </Link>
      </Box>
    </Box>
    <Box mt={5} style={{ borderTop: '1px solid #fff', paddingTop: '1rem' }}>
      <Typography variant="body2" color='#fff' align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://your-website.com/">
          First Connect 
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
        <Link color="inherit" href="https://your-website.com/">
          Image Copyrights:
        </Link>{" "}
      </Typography>
    </Box>
    
  </Container>
</Box>

    );
  };
  
  export default Footer;