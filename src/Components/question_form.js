// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { FormControl, FormLabel } from '@mui/material';
// import React from 'react';

// const question_form = () => {
//    return(
// <FormControl>
//    <TextField type="text" color='warning' defaultValue="Name" />
//    <TextField type="text" color='warning' defaultValue="E-mail" />
//    <TextField type="text" color='warning' defaultValue="message" />
// </FormControl>
//    )
   
// }

// export default question_form;


import React from 'react';
import { FormControl, TextField } from '@mui/material';

const question_form = () => {
  return (
    <div>
      <FormControl>
        <TextField
          label="Name"
          variant="outlined"
          color="secondary" // Use "secondary" for a warning color
          fullWidth // To make the input field take up the full width
        />
        <TextField
          label="E-mail"
          variant="outlined"
          color="secondary"
          fullWidth
        />
        <TextField
          label="Message"
          variant="outlined"
          color="secondary"
          fullWidth
          multiline // To allow multiline input for the message
          // rows={4} // Specify the number of rows for the message input
        />
      </FormControl>
    </div>
  );
};

export default question_form;
