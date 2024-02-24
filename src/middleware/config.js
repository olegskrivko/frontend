// config.js
let BASE_URL;

if (process.env.NODE_ENV === "production") {
  // Set production API URL
  BASE_URL = "https://cookbook.cyclic.app/api";
} else {
  // Set localhost API URL for development and test environments
  BASE_URL = "http://localhost:3000/api";
}

export { BASE_URL };
