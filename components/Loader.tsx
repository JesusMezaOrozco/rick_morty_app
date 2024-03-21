import { LinearProgress } from "@mui/material";

export default function Loader() {
  return (
    <LinearProgress
      sx={{ top: 0, position: "absolute", width: "100%", zIndex: 50 }}
    />
  );
}
