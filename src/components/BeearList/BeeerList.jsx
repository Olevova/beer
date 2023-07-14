import React, { useEffect, useRef, useCallback } from "react";
import { useBeerStore } from "../../date/beerstore";
import { Beercontainer } from "./BeerLisr.styled";
import { NavLink, useLocation } from "react-router-dom";

export default function BeeerList() {
  const location = useLocation();
  const [
    checkedid,
    visibleBeers,
    fetchBeers,
    offcheckedBeer,
    checkedBeer,
    endScrolle,
    // beers,
    // page,
  ] = useBeerStore((state) => [
    state.checkedid,
    state.visibleBeers,
    state.fetchBeers,
    state.offcheckedBeer,
    state.checkedBeer,
    state.endScrolle,
    state.beers,
    state.page,
  ]);

  const containerRef = useRef(null);
  // console.log(visibleBeers, "visibleBeers", beers, "beers", page, "page");

  const renderDate = useCallback(() => {
    if (visibleBeers.length > 0) {
      return;
    } else {
      fetchBeers();
    }
  }, [visibleBeers.length, fetchBeers]);

  useEffect(() => {
    renderDate();
  }, [renderDate]);

  const handleToggle = (e, id) => {
    if (e.target.checked) {
      checkedBeer(id);
    } else {
      offcheckedBeer(id);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const numItems = 5;
      const itemHeight = container.offsetHeight / numItems;
      container.style.setProperty("--item-height", `${itemHeight}px`);
    }
  }, [visibleBeers]);

  const handleScroll = (e) => {
    const element = e.target;
    console.log(element.scrollHeight);
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      console.log("scroll");
      endScrolle();
    }
  };

  return (
    <Beercontainer ref={containerRef} onScroll={handleScroll}>
      {visibleBeers.map(({ id, name, description, image_url }) => (
        <div key={id} className="item">
          <img src={image_url} alt={id} />
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to={`${id}`}
            state={{ from: location }}
          >
            <div className="description">
              <span>Name :{name}</span>
              <p>{description.split("").slice(0, 500).join("")}...</p>
            </div>
          </NavLink>
          <input
            type="checkbox"
            className="checkboxitem"
            checked={checkedid.includes(id)}
            onChange={(e) => handleToggle(e, id)}
          />
        </div>
      ))}
    </Beercontainer>
  );
}
