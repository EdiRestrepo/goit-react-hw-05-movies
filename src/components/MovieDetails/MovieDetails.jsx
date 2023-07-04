import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../service/api'


export const MovieDetails = () => {
    const {movieId} = useParams();
    

    useEffect(() => {
        const fetchData = async () => {
          try {
            // setIsLoading(true)
            // await api.fakePromise(1500);
            const response = await api.getMovieDetails(movieId);
            // setData(response.results);
          } catch (e) {
            console.log(e);
          }finally{
            // setIsLoading(false)
          }
        };
        fetchData();
      }, []);

  return (
    <div>MovieDetails: {movieId}</div>
  )
}
