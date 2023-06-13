import Cards from "react-credit-cards";
import "../assets/styles/StyledCard.css";
const Card = ({ name, number, expiry, cvc, focus }) => {
  return (
    <div className="card-container">
      <Cards
        name={name}
        number={number}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />
    </div>
  );
};

export default Card;
