import React from "react";
import {useContext} from 'react'
import moviesContext from "../../Contaxt/movies";
import Card from "./card/card";

const Cards = () => {
  const dataa= useContext(moviesContext);
  return (
    <>
      <div className="row">
        {dataa.dataMovie.map((dataMovie) => (
          <Card 
            key={dataMovie.id}
            id={dataMovie.id}
            title={dataMovie.title}
            poster={dataMovie.poster}
            year={dataMovie.year}
            country={dataMovie.country}
            imdb_ranting={dataMovie.imdb_rating}
            genres={dataMovie.genres}
            images={dataMovie.images}
          />
        ))}
      </div>

    </>
  );
};

export default Cards;
