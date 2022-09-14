import axois from "axios";

const instance = axois.create({
  baseURL: "http://localhost:5001/clone-c193c/us-central1/api",
});

export default instance;
