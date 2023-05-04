import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { setActive, deleteCard } from "../redux/CardSlice";
import "../assets/styles/StyledAllCards.css";
import { IconButton } from "@material-ui/core";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
const AllCards = () => {
  // get the List of cards from the redux store so we can map through and put into the array
  const { cards } = useSelector((state) => state.cards);
  let dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteCard(id));
  };
  const handleActiveCard = (person) => {
    dispatch(
      setActive({
        cardHolderName: person.cardHolderName,
        cardNumber: person.cardNumber,
        expiry: person.expiry,
        cvc: person.cvc,
        active: true,
        id: person.id,
        focus: person.focus,
      })
    );
  };
  return (
    <div>
      <hr />
      <div>
        <h1>Other cards</h1>
        {cards.map(
          (card, i) =>
            !card.active && (
              <div key={i}>
                <Card
                  name={card.cardHolderName}
                  number={card.cardNumber}
                  expiry={card.expiry}
                  cvc={card.cvc}
                  focus={card.focus}
                />
                <div className="btns">
                  <IconButton>
                    <LockOpenIcon
                      onClick={() => handleActiveCard(card)}
                      className="icon"
                    />
                  </IconButton>
                  <IconButton>
                    <DeleteForeverIcon
                      onClick={() => handleDelete(card.id)}
                      className="icon"
                    />
                  </IconButton>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default AllCards;
