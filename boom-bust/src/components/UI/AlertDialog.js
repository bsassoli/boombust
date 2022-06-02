import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";

const AlertDialog = (props) => {
    <Dialog
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {props.contentTitle}
        {console.log("Open" + props.open)}
        {console.log("OnClose" + props.onClose)}
        {console.log(props.contentTitle)}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {props.message.slice(7)}
          {console.log(props.message)}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={props.handleCloseModal}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>;
}

export default AlertDialog;