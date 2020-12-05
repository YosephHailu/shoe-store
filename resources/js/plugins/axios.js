import axios from "axios";
import store from "./store";

export default axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer " + store.state.access_token
    }
});
