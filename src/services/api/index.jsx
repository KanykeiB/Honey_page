import axios from 'axios';

// export default axios.create({
//     baseUrl: "http://localhost:1337/",
//     headers: {
//         "Content-Type": "application/json"
//     },
// });

export default axios.create({
    baseUrl: "http://13.115.195.252/",
    headers: {
        "Content-Type": "application/json"
    },
});