import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h5">Home</Typography>
      </Toolbar>
    </AppBar>
  );
}
