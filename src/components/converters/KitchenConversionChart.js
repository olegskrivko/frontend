import React from "react";
import { Table, Typography, Container, Grid, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import TocIcon from "@mui/icons-material/Toc";
const KitchenConversionChart = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <TocIcon sx={{ width: "1.5rem", height: "1.5rem", marginRight: "0.8rem" }} /> Kitchen Conversions
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Cups</TableCell>
                  <TableCell align="center">Tablespoons</TableCell>
                  <TableCell align="center">Teaspoons</TableCell>
                  <TableCell align="center">Milliliters</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">1</TableCell>
                  <TableCell align="center">16</TableCell>
                  <TableCell align="center">48</TableCell>
                  <TableCell align="center">240</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">1/2</TableCell>
                  <TableCell align="center">8</TableCell>
                  <TableCell align="center">24</TableCell>
                  <TableCell align="center">120</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">1/3</TableCell>
                  <TableCell align="center">5.3</TableCell>
                  <TableCell align="center">16</TableCell>
                  <TableCell align="center">80</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">1/4</TableCell>
                  <TableCell align="center">4</TableCell>
                  <TableCell align="center">12</TableCell>
                  <TableCell align="center">60</TableCell>
                </TableRow>
                {/* Add more rows as needed */}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default KitchenConversionChart;
