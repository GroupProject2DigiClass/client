import axios from "axios";

const url = "https://localhost5000";

export const createUser = (newUser) => axios.post(url, newUser);
