import axios from "axios";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const baseURL = "https://backend.finlaystakes.com/app";

const useAxios = () => {
    const axiosInstance = axios.create({
        baseURL,
    });

    return axiosInstance;
};

export default useAxios;
