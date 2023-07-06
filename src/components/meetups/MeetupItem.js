import React from "react";
import classes from "./MeetupItems.module.css";
import Cards from "../../ui/Cards";
import { useContext } from "react";
import FavouritesContext from "../../store/favourite-context";

function MeetupItem(props) {
  const favContext = useContext(FavouritesContext);
  const itemIsFavourite = favContext.itemIsFavourite(props.id)

  function toggleFavouritesStatusHandler() {
    if (itemIsFavourite) {
      favContext.removeFavourite(props.id);
    } else {
      favContext.addFavourite({
        id: props.id,
        title: props.title,
        address: props.address,
        description: props.description,
        image: props.image,
      });
    }
  }
  return (
    <Cards>
      <li className={classes.list}>
        <img src={props.image} alt={props.title} className={classes.image} />
        <div>
          <div>
            <div>{props.id}</div>
            <h2>{props.title}</h2>
            <div>{props.description}</div>
            <address>{props.location}</address>
          </div>
          <button onClick={toggleFavouritesStatusHandler}>
            {itemIsFavourite ? "Remove from favourite" : "Add to favourites"}
          </button>
        </div>
      </li>
    </Cards>
  );
}

export default MeetupItem;
