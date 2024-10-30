import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a730c91687d5433aac18c2301f73147d",
  },
});
