import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import Data from "./data/Data";
import MyModel from "./MyModel";

export default function Panel() {
  const [isModelOpen, setModelOpen] = useState(false);
  const [items, setItems] = useState(Data);

  const openModal = () => {
    setModelOpen(true);
  };

  const closeModal = () => {
    setModelOpen(false);
  };

  const addNewItem = (item) => {
    setItems((prevItem) => [...prevItem, item]);

    console.log(Data);
  };

  const deleteItem = (id) => {
    const newData = items.filter((item) => item.id !== id);

    setItems(() => [...newData]);

    console.log(newData);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Button
        sx={{ marginTop: "10%" }}
        variant="contained"
        color="primary"
        onClick={openModal}
      >
        Add Item
      </Button>
      <TableContainer sx={{ marginTop: "5%" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "blue" }}>
              <TableCell>Name</TableCell>
              <TableCell>Job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.job}</TableCell>
                <TableCell>
                  <Button onClick={() => deleteItem(item.id)}>Delete</Button>
                </TableCell>
                <TableCell>
                  <Button>Update</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <MyModel
        isOpen={isModelOpen}
        onClose={closeModal}
        onSubmit={addNewItem}
      />
    </Box>
  );
}
