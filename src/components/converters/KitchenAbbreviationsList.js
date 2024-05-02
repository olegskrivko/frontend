import React from "react";
import { Typography, Container, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
const KitchenAbbreviationsList = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            Kitchen Abbreviations and Meanings
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Abbreviation</TableCell>
                  <TableCell>Meaning</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>oz</TableCell>
                  <TableCell>Ounce</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>lb</TableCell>
                  <TableCell>Pound</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>pt</TableCell>
                  <TableCell>Pint</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>qt</TableCell>
                  <TableCell>Quart</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>gal</TableCell>
                  <TableCell>Gallon</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>tbsp</TableCell>
                  <TableCell>Tablespoon</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>tsp</TableCell>
                  <TableCell>Teaspoon</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>c</TableCell>
                  <TableCell>Cup</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>pt</TableCell>
                  <TableCell>Pint</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>fl oz</TableCell>
                  <TableCell>Fluid Ounce</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>pkg</TableCell>
                  <TableCell>Package</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>pkg</TableCell>
                  <TableCell>Package</TableCell>
                </TableRow>
                {/* Add more abbreviations and meanings */}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default KitchenAbbreviationsList;
