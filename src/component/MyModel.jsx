import { Button, FormControl, Modal, TextField, Box } from "@mui/material";
import React, { useState } from "react";
import Data from "./data/Data";

export default function MyModel({ isOpen, onClose, onSubmit }) {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = { id: Data.length + 1, name, job };
    onSubmit(newItem);
    Data.push(newItem);
    console.log(newItem);
    setName("");
    setJob("");
    onClose();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    bgcolor: "background.paper",
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={style} component="form" onSubmit={handleSubmit}>
        <FormControl>
          <TextField
            placeholder="Enter Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            placeholder="Enter Job"
            required
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />
        </FormControl>
        <Button type="submit">Add Item</Button>
      </Box>
    </Modal>
  );
}
