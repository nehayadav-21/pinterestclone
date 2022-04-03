import axios from "axios";


export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers:{
        Authorization: "Client-ID tbBzuciSGIiIKg7jxGNpxu9iU-HCYpJvNX3v31Tfwu0",
        },
});