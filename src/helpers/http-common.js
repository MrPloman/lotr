import axios from "axios";
import {enviroment} from "../environments/enviroment";

export default axios.create({
  baseURL: enviroment.API,
  headers: enviroment.headers,
});
