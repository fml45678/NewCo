import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone2-45aa6.cloudfunctions.net/api", // firebase

  // 'http://localhost:5001/clone2-45aa6/us-central1/api'
  // local emulator
});

export default instance;
