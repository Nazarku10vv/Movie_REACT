import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="col-3">
      <div className="m-[10px 0 0 10px]">
        <Link to={`/movie_info/${movie.id}`}>
          <img
            width={"300px"}
            height={"420px"}
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
            alt=""
          />
        </Link>
        <p> {movie.title} </p>
      </div>
    </div>
  );
};

export default MovieCard;
