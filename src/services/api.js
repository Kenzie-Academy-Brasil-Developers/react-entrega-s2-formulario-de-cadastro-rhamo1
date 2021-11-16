import axios from "axios";

const api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com/users",
});

export default api;
