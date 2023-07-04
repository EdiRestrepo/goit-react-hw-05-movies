import { MovieList } from "../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import api from "../service/api";
import { Loader } from "../components/Loader";

export const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        await api.fakePromise(1500);
        const response = await api.getMoviesTrending();
        setData(response.results);
      } catch (e) {
        console.log(e);
      }finally{
        setIsLoading(false)
      }
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <Typography variant="h4" component="h1" align="left">
        Trending Today
      </Typography>
      {isLoading ? <Loader/> : <MovieList movies={data}/>}
    </>
  );
};
