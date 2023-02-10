import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
// import PropTypes from 'prop-types';

export default function ExamCompleted() {
  const [open, setOpen] = React.useState(true);

  const handleSubmit = () => {
    setOpen(false)
  }
  const handleCancel = () => {
    setOpen(false)
  }
  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ fontWeight: 'bold' }}>
          {"Exam time is over. Do you want to submit your exam?"}
        </DialogTitle>
        <DialogActions>
          <Button variant='outlined' color='error' onClick={handleCancel}>Cancel Exam</Button>
          <Button variant='outlined' color='success' onClick={handleSubmit}>Yes, Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

ExamCompleted.propTypes = {
  
}