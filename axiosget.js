import axios from 'axios';

const axiosget = axios.create({
    baseURL: "https://randomuser.me/",
    //timeout: 1800,
    headers: {'X-Custom-Header': 'foobar'}
});


export default axiosget;