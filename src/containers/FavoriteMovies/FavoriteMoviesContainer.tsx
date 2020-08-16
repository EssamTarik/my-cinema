import React from "react";
import { IProps } from "./interfaces";
import MovieGridContainer from "../MovieGrid";
import { IMovie } from "../../store/movieSearch/models";

const FavoriteMoviesContainer = ({ favorites }: IProps) => {
  const favoriteMovies = Object.values(favorites) as IMovie[];
  return <MovieGridContainer movies={favoriteMovies} />;
};

export default FavoriteMoviesContainer;
