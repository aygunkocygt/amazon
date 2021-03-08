import axios from "axios";

const instance = axios.create({
    baseURL: 'https://functions-api.herokuapp.com' //The api(cloud function) URL
});

export default instance;

//http://localhost:5001/challenge-190ec/us-central1/api