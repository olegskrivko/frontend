import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { BASE_URL } from "../../middleware/config";

const CollectionList = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editNameError, setEditNameError] = useState("");
  const [editDescriptionError, setEditDescriptionError] = useState("");

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/collections`);
        setCollections(response.data);
      } catch (error) {
        console.error("Error fetching collections:", error.message);
        setError("Error fetching collections");
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  const handleEditOpen = (collection) => {
    setSelectedCollection(collection);
    setEditName(collection.name);
    setEditDescription(collection.description);
    setEditNameError(""); // Clear previous errors
    setEditDescriptionError("");
    setEditDialogOpen(true);
  };

  const handleEditClose = () => {
    setSelectedCollection(null);
    setEditName("");
    setEditDescription("");
    setEditNameError("");
    setEditDescriptionError("");
    setEditDialogOpen(false);
  };

  const handleEditSave = async () => {
    try {
      const response = await axios.put(`${BASE_URL}/collections/${selectedCollection._id}`, {
        name: editName,
        description: editDescription,
      });

      setCollections((prevCollections) => prevCollections.map((collection) => (collection._id === selectedCollection._id ? { ...collection, name: editName, description: editDescription } : collection)));

      handleEditClose();
    } catch (error) {
      console.error("Error editing collection:", error.message);
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
        console.error("Error editing collection:", error.message);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/collections/${id}`);
      setCollections((prevCollections) => prevCollections.filter((collection) => collection._id !== id));
    } catch (error) {
      console.error("Error deleting collection:", error.message);
      setError("Error deleting collection");
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
      <h3>List of Collections</h3>
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
            {collections.map((collection) => (
              <TableRow key={collection._id}>
                <TableCell>{collection.name}</TableCell>
                <TableCell>{collection.description}</TableCell>
                <TableCell>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <IconButton size="small" color="primary" onClick={() => handleEditOpen(collection)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton size="small" color="error" onClick={() => handleDelete(collection._id)}>
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
        <DialogTitle>Edit Collection</DialogTitle>
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

export default CollectionList;
