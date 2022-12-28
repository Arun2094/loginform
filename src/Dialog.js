
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function DialogBox({open,handleClose}) {

  // function onclose(){
  //   alert("New Password will be sent on your register Mailid")
  // }

     return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Forget Password/Username</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter Username"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter Register Emailid"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Sumbit</Button>
          {/* <Button onClick={handleClose}>Reset</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogBox;
