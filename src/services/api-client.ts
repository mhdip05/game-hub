import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "85e4c02e850b44f9bf9e57bf9e674fd9",
  },
});
