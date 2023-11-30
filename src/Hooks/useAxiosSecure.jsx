import axios from 'axios';

const axiosSecure = axios.create({
    baseURL:'https://assetmanagement-xi.vercel.app'
})


const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;
