import { useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';


const axiosSecure=axios.create({
  baseURL:"http://localhost:5000"
})


const useAxiosSecure = () => {
  const navigate = useNavigate();
  const {LogOut} = useContext(AuthContext);



  useEffect(() => {
    axiosSecure.interceptors.request.use(
      (config) => {
        const  token = localStorage.getItem('access-token');
        if ( token) {
          config.headers.Authorization = `Bearer ${ token}`;
        }
        return config;
      }
    );

    // Interceptor for handling 401 and 403 responses
    axiosSecure.interceptors.response.use(
      (response) => response,
    async  (error) => {    
        if (error.response.status=== 401 || error.response.status === 403) {
          // Call logout asynchronously and redirect to login page
            await LogOut();
            navigate('/login');
        }
        return Promise.reject(error);
      }
    );


  }, [LogOut,navigate,axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;
