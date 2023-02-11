import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(true);

  React.useEffect(() => {
    const isCookieAccepted: boolean = localStorage.getItem('isCookiesAccepted')
      ? JSON.parse(localStorage.getItem('isCookiesAccepted') || 'null')
      : false;
    setOpen(!isCookieAccepted);
  }, []);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = (event: any, reason: any): void => {
    if (reason && reason === 'backdropClick') setOpen(true);
    else setOpen(false);
  };

  const handleAgree = (event: any, reason: any): void => {
    if (reason && reason === 'backdropClick') {
      setOpen(true);
    } else {
      localStorage.setItem('isCookiesAccepted', 'true');
      setOpen(false);
    }
  };
  const handleDisgree = (event: any, reason: any): void => {
    if (reason && reason === 'backdropClick') {
      setOpen(true);
    } else {
      // Not storing iscookiesChecked  not saved in the local storage
      setOpen(false);
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{ fontWeight: 'bold' }} id="alert-dialog-title">
          This website uses cookies
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: 'black' }}>
            Let us help to easy the experince while you are browsing.We will
            track your cart while you are browsing.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleDisgree}>
            Don't Accept
          </Button>
          <Button variant="outlined" onClick={handleAgree}>
            Accept
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
