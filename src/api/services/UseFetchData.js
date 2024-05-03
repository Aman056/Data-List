import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (URL) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(URL); 
        setData(response.data); 
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false)
      }
    };

    fetchDataFromApi();
  }, [URL]); 

  return { data, isLoading, error }; // Return the data, loading state, and error
};

export default useFetchData;
