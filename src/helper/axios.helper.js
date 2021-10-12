import axios from "axios";

const token = localStorage.getItem("token");

const instance = () => {
  const data = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
      authorization: token
    },
    timeout: 10000000,
  })
  return data;
}

export default instance;