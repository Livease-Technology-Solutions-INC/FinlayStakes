import axios from "axios";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const baseURL = "http://127.0.0.1:8000/app";

const useAxios = () => {
    const axiosInstance = axios.create({
        baseURL,
    });

    return axiosInstance;
};

export default useAxios;
