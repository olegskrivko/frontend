import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { BASE_URL } from "../../middleware/config";

const TasteList = () => {
  const [tastes, setTastes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedTaste, setSelectedTaste] = useState(null);
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editNameError, setEditNameError] = useState("");
  const [editDescriptionError, setEditDescriptionError] = useState("");

  useEffect(() => {
    const fetchTastes = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/tastes`);
        setTastes(response.data);
      } catch (error) {
        console.error("Error fetching tastes:", error.message);
        setError("Error fetching tastes");
      } finally {
        setLoading(false);
      }
    };

    fetchTastes();
  }, []);

  const handleEditOpen = (taste) => {
    setSelectedTaste(taste);
    setEditName(taste.name);
    setEditDescription(taste.description);
    setEditNameError(""); // Clear previous errors
    setEditDescriptionError("");
    setEditDialogOpen(true);
  };

  const handleEditClose = () => {
    setSelectedTaste(null);
    setEditName("");
    setEditDescription("");
    setEditNameError("");
    setEditDescriptionError("");
    setEditDialogOpen(false);
  };

  const handleEditSave = async () => {
    try {
      const response = await axios.put(`${BASE_URL}/tastes/${selectedTaste._id}`, {
        name: editName,
        description: editDescription,
      });

      setTastes((prevTastes) => prevTastes.map((taste) => (taste._id === selectedTaste._id ? { ...taste, name: editName, description: editDescription } : taste)));

      handleEditClose();
    } catch (error) {
      console.error("Error editing taste:", error.message);
      if (error.response && error.response.data && error.response.data.errors) {
        const serverErrors = error.response.data.errors;
        serverErrors.forEach((err) => {
          if (err.path === "name") {
            setEditNameError(err.msg);
          } else if (err.path === "description") {
            setEditDescriptionError(err.msg);
          }
        });
      } else {
        console.error("Error editing taste:", error.message);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/tastes/${id}`);
      setTastes((prevTastes) => prevTastes.filter((taste) => taste._id !== id));
    } catch (error) {
      console.error("Error deleting taste:", error.message);
      setError("Error deleting taste");
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h3>List of Tastes</h3>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tastes.map((taste) => (
              <TableRow key={taste._id}>
                <TableCell>{taste.name}</TableCell>
                <TableCell>{taste.description}</TableCell>
                <TableCell>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <IconButton size="small" color="primary" onClick={() => handleEditOpen(taste)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton size="small" color="error" onClick={() => handleDelete(taste._id)}>
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Edit Dialog */}
      <Dialog open={editDialogOpen} onClose={handleEditClose} PaperProps={{ style: { maxHeight: "80vh" } }}>
        <DialogTitle>Edit Taste</DialogTitle>
        <DialogContent>
          <TextField label="Name" variant="outlined" style={{ marginTop: "1rem" }} fullWidth value={editName} onChange={(e) => setEditName(e.target.value)} error={editNameError !== null} helperText={editNameError} />
          <TextField label="Description" variant="outlined" style={{ marginTop: "1rem" }} fullWidth value={editDescription} onChange={(e) => setEditDescription(e.target.value)} error={editDescriptionError !== null} helperText={editDescriptionError} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleEditSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TasteList;
