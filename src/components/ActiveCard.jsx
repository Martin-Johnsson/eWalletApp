import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card.jsx';
import { Link } from 'react-router-dom';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useHistory } from 'react-router-dom';

const ActiveCard = () => {
  const { cards } = useSelector((state) => state.cards);

  const history = useHistory();
  return (
    <div>
      <h2>My Active Card</h2>
      {cards.map(
        (card, i) =>
          card.active && (
            <div key={i}>
              <Card
                name={card.cardHolderName}
                number={card.cardNumber}
                expiry={card.expiry}
                cvc={card.cvc}
                focus={card.focus}
              />
            </div>
          )
      )}
    </div>
  );
};

export default ActiveCard;
