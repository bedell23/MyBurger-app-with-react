import axios from "axios";

const instance = axios.create({
  baseURL: "https://div-burger.firebaseio.com/",
});

export default instance;
