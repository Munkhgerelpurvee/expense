import axios from "axios";

// export const api = axios.create({
//   baseURL: "http://localhost:3001",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
export const api = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});
