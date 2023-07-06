import { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { Paper, Box, Typography, Button } from "@mui/material";
import styled from "@emotion/styled";
import api from "../../service/api";
import { Loader } from "../Loader";

const baseImageUrl = "https://image.tmdb.org/t/p/";

const Img = styled("img")({
  width: 200,
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

const GenresList = styled("ul")({
  listStyle: "none",
  display: "flex",
  padding: 0,
  gap: "16px",
});

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        await api.fakePromise(300);
        const response = await api.getMovieDetails(movieId);
        setMovie(response);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  console.log(movieId);
  console.log(movie);

  const {
    title,
    name,
    release_date,
    overview,
    genres,
    poster_path,
    vote_average,
  } = movie;
  const score = vote_average * 10;
  const scoreToFixed = score.toFixed(2);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Paper
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              overflow: "hidden",
              mt: 5,
              p: 2,
            }}
          >
            <div>
              <Img
                src={
                  poster_path
                    ? `${baseImageUrl}w200${poster_path}`
                    : "https://via.placeholder.com/200/"
                }
                alt="mi imagen"
                width={200}
                sx={{ height: "100%", objectFit: "cover" }}
              />
              {!poster_path && (
                <p style={{ textAlign: "center" }}>Image not available</p>
              )}
            </div>
            <Box sx={{ flexGrow: 1, display: "grid", gap: 1 }}>
              <Typography variant="h5">
                {title || name} ({release_date?.substring(0, 4)})
              </Typography>
              <Typography variant="p">User score: {scoreToFixed}%</Typography>
              <Typography variant="h5">Oveview</Typography>
              <Typography variant="p">{overview}</Typography>
              <Typography variant="h5">Genres</Typography>
              <GenresList>
                {genres &&
                  genres.length &&
                  genres.map(({ id, name }) => <li key={id}>{name}</li>)}
              </GenresList>
            </Box>
          </Paper>
          <Paper
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              overflow: "hidden",
              mt: 2,
              p: 2,
            }}
          >
            <Box sx={{ flexGrow: 1, display: "grid", gap: 1 }}>
              <Typography variant="h5">Additional Information</Typography>
              <ul>
                <li>
                  <Link to="cast">Cast</Link>
                </li>
                <li>
                  <Link to="reviews">Reviews</Link>
                </li>
              </ul>
            </Box>
          </Paper>
        </div>
      )}
    </>
  );
};
