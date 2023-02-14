import axios from 'axios';

export default axios.create({
    baseUrl: "http://localhost:1337/",
    headers: {
        "Content-Type": "application/json"
    },
});