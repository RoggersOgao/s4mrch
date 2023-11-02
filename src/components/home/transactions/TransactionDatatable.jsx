'use client'
import React, { useMemo } from "react";
import styles from "./TransactionDatatable.module.scss";
import { DataGrid, GridToolbar, gridClasses } from "@mui/x-data-grid";
import { data } from "./transction";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976D2', // Customize the primary color
    },
    secondary: {
      main: '#f50057', // Customize the secondary color
    },
    background: {
      default: '#121212', // Customize the default background color
      paper: '#1E1E1E', // Customize the background color of paper surfaces
    },
    // You can also customize other palette properties like primary, secondary, background, etc. here
  },
});

function TransactionDatatable() {
  const columns = useMemo(
    () => [
      { field: "TransactionID", headerName: "TransactionID", width: 60 },
      { field: "UserID", headerName: "UserID", width: 60 },
      { field: "DateTime", headerName: "Date", width: 120 },
      { field: "Amount", headerName: "Amount", width: 160 },
      { field: "Description", headerName: "Description", width: 260 },
      { field: "AccountFrom", headerName: "AccountFrom", width: 160 },
      { field: "AccountTo", headerName: "AccountTo", width: 230 },
      { field: "Status", headerName: "Status", width: 60 },
      { field: "ReferenceNumber", headerName: "ReferenceNumber", width: 60 },
      { field: "Currency", headerName: "Currency", width: 60 },
      { field: "PaymentMethod", headerName: "PaymentMethod", width: 60 },
      {
        field: "TransactionCategory",
        headerName: "TransactionCategory",
        width: 60,
      },
      { field: "TransactionTags", headerName: "TransactionTags", width: 60 },
      { field: "MerchantID", headerName: "MerchantID", width: 60 },
      { field: "Location", headerName: "Location", width: 60 },
    ],
    []
  );

  return (
    <ThemeProvider theme={darkTheme}>
    <div className={styles.container} style={{ width: "100%", height: 400 }}>
      <DataGrid
        columns={columns}
        rows={data}
        pageSize={5}
        rowsPerPageOptions={[1]}
        components={{ 
          Toolbar: GridToolbar,
        }}
        checkboxSelection
        {...data}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 6,
          bottom: params.isLastVisible ? 0 : 6,
        })}
        sx={{
          [`& .${gridClasses.row}`]: {
            bgcolor: (theme) =>
              theme.palette.mode == "dark" ? "#2A2D3E" : "#EFF3F4",
            fontSize: "13px",
            border:0,
            color: (theme) =>
              theme.palette.mode === "light"
                ? "rgba(0,0,0,.55)"
                : "rgba(255,255,255,0.55)",
          },
          [`& .${gridClasses.columnHeader}`]:{
            fontSize:'13px',
            border:'none',
            border:0,
            color: (theme) =>
              theme.palette.mode === "light"
                ? "rgba(0,0,0,.85)"
                : "rgba(255,255,255,0.85)",
          },
          [`& .${gridClasses.columnSeparator}`]:{
            display:"none"
            
          },
          boxShadow: 5,
          border: 0,

        }}
      />
    </div>
    </ThemeProvider>
  );
}

export default TransactionDatatable;
