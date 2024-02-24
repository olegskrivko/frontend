// import * as React from "react";
// import Breadcrumbs from "@mui/material/Breadcrumbs";
// import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";
// import Stack from "@mui/material/Stack";
// import NavigateNextIcon from "@mui/icons-material/NavigateNext";
// import { useLocation } from "react-router-dom";

// function handleClick(event) {
//   event.preventDefault();
//   console.info("You clicked a breadcrumb.");
// }

// const CustomSeparator = () => {
//   const location = useLocation();
//   const pathnames = location.pathname.split("/").filter((x) => x);

//   const breadcrumbs = pathnames.map((name, index) => {
//     const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
//     const isLast = index === pathnames.length - 1;

//     return isLast ? (
//       <Typography key={index} color="text.primary">
//         {name}
//       </Typography>
//     ) : (
//       <Link
//         underline="hover"
//         key={index}
//         color="inherit"
//         href={routeTo}
//         onClick={handleClick}
//       >
//         {name}
//       </Link>
//     );
//   });

//   return (
//     <Stack spacing={2}>
//       <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
//         {breadcrumbs}
//       </Breadcrumbs>
//     </Stack>
//   );
// };

// export default CustomSeparator;
