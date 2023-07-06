import { Box, Container, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import React, { useState } from "react";
import api from '../service/api'
import { MovieList } from "../components/MovieList/MovieList";

export const Movies = () => {
  const [movie, setMovie] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const [movies, setMovies]=useState([]);


  const onSubmit = async e =>{
    e.preventDefault();
    console.log("submit")
    setLoading(true);
    setError({
      error: false,
      message: "",
    });
    try{
      await api.fakePromise();
      if(!movie.trim()) throw {message: "The movie field is required"}
      const response = await api.searchMoviesQuery(movie);
      console.log(response.results);
      if(response.error) throw {message: response.error.message }
      if(response.results.length===0) throw {message: "No matching movies found"}
      setMovies(response.results)
    }catch(e){
      setError({
        error: true,
        message: e.message
      })
    }finally{
      setLoading(false)
      setMovie('');
    }

  }

  return (
    <>
      <Container maxWidth="xs" sx={{ marginTop:5 }}   >
        <Box
          sx={{ display: "grid", gap: 2 }}
          component="form"
          autoComplete="off"
          onSubmit={onSubmit}
        >
          <TextField
            id="movie"
            label="Movies"
            variant="outlined"
            size="small"
            required
            value={movie}
            onChange={(e)=>setMovie(e.target.value)}
            error={error.error}
            helperText={error.message}
          />
          <LoadingButton 
            type="submit" 
            variant="contained"
            loading={loading}
            loadingIndicator="Loading..."
          >
            Search
          </LoadingButton>
        </Box>
        <MovieList movies={movies}/>
      </Container>
    </>
  );
};
