import React from "react";
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
      <li className="flex justify-start gap-x-6">
        <img src={props.image} alt={props.title} width={"200px"} length={"200px"}/>
        <div className="flex justify-between w-full p-5">
          <div>
            <h2 className="text-xl font-bold text-red-950">{props.title}</h2>
            <div >{props.description}</div>
            <address>{props.address}</address>
          </div>
          <button onClick={toggleFavouritesStatusHandler} className="bg-red-400 p-3 rounded-xl text-white">
            {itemIsFavourite ? "Remove from favourite" : "Add to favourites"}
          </button>
        </div>
      </li>
    </Cards>
  );
}

export default MeetupItem;
