import axios from "axios";

/**
 * Set up axios connection to server.
 */
export default axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-type": "application/json",
  },
});
