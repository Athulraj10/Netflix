import axios from "axios";
import {baseUrl } from "./constants/constants";
const instants=axios.create({
    baseURL:baseUrl
});
export default instants;