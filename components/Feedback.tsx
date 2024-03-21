import { useContext } from "react";
import { AppContext } from "@/store/app-context";
import { Alert, AlertProps, Snackbar } from "@mui/material";

export default function Feedback() {
  const { feedback, resetFeedback } = useContext(AppContext);
  return (
    <Snackbar
      open={feedback.isOpen}
      autoHideDuration={1200}
      onClose={resetFeedback}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <Alert
        onClose={resetFeedback}
        severity={feedback.type as AlertProps["severity"]}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {feedback.message}
      </Alert>
    </Snackbar>
  );
}
