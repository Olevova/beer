import React from "react";
import { OneBeer } from "./Beer.styled";

import { useParams, useLocation } from "react-router-dom";
import { useBeerStore } from "../../date/beerstore";
export default function Beer() {
  const location = useLocation();
  console.log(location);
  const { id } = useParams();
  const beers = useBeerStore((state) => state.beers);
  const oneBeer = beers.find((beer) => beer.id === Number(id));
  const { name, image_url, description, tagline, food_pairing } = oneBeer;
  console.log(oneBeer, 111, id);
  return (
    <OneBeer>
      <img src={image_url} alt={name} />
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <span>tagline:</span>
        <p>{tagline}</p>
        <span>food_pairing:</span>

        {food_pairing.map((i) => {
          return <li key={i}>{i}</li>;
        })}
      </div>
    </OneBeer>
  );
}
