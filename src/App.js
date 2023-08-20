import React from "react";
import "./App.css";
import Header from "./component/Header";
import Panel from "./component/Panel";
import { Box } from "@mui/material";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Box
        sx={{
          top: "100px",
          width: "70%",
          marginLeft: "20%",
          marginRight: "20%",
        }}
      >
        <Panel />
      </Box>
    </React.Fragment>
  );
}

export default App;
