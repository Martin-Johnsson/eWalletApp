import React, { useEffect } from "react";
import "react-credit-cards/es/styles-compiled.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getRandomUser } from "../redux/CardSlice";
import AllCards from "../components/AllCards";
import "../assets/styles/StyledMyCards.css";
import ActiveCard from "../components/ActiveCard";
import user from "../pictures/profilpicture.png";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { IconButton } from "@material-ui/core";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const MyCardsPage = () => {
  const { cards } = useSelector((state) => state.cards);
  //console.log(cards.cardHolderName);  // kontrolutskrift

  // dispatch the fetch
  const dispatch = useDispatch();

  // fetch data with useEffect hook
  useEffect(() => {
    cards.forEach((card) => {
      if (card.active && card.cardHolderName.length === 0) {
        dispatch(getRandomUser());
      }
    });
  }, []);

  return (
    <main>
      <div>
        <Link to="/" className="icon">
          <BsFillArrowLeftCircleFill />
        </Link>

        <div className="avatar">
          <img src={user} alt="user-profil image" className="profil-picture" />
          {/* TODO: DYNAMIC USERNAME */}
          <span>Välkommen Lars</span>
        </div>
        <Link to={`/createcard`}>
          <IconButton>
            <AddCircleIcon className="icon" />
          </IconButton>
        </Link>
      </div>
      <ActiveCard />
      <AllCards />
    </main>
  );
};

export default MyCardsPage;
