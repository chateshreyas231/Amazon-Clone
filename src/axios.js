import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/challenge-3fa5b/us-central1/api' //the API URL
});

export default instance;