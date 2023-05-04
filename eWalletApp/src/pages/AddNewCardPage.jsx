import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../redux/CardSlice";
import Card from "../components/Card.jsx";
import { useHistory } from "react-router-dom";
import "../assets/styles/StyledAddCard.css";
const AddNewCardPage = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  // get the fetch username state from the redux store
  const { cards } = useSelector((state) => state.cards);
  const { lastId } = useSelector((state) => state.cards);

  useEffect(() => {
    cards.forEach((card) => {
      if (card.active) {
        setName(card.cardHolderName);
      }
    });
  }, []);

  const dispatch = useDispatch();
  const history = useHistory();
  const switchPage = () => {
    history.push("/mycards");
  };

  const handleNewCard = () => {
    dispatch(
      addCard({
        cardHolderName: name,
        cardNumber: number,
        expiry: expiry,
        cvc: cvc,
        active: false,
        id: lastId + 1,
        focus: focus,
      })
    );
    switchPage();
  };

  const handleChangeState = (e, myState) => {
    myState(e.target.value);
  };
  const handleOnInput = (e, num) => {
    e.target.value = e.target.value.slice(0, num);
  };

  return (
    <>
      <Card
        name={name}
        number={number}
        expiry={expiry}
        cvc={cvc}
        focus={focus}
        
      />
      <form>
        <label htmlFor="name">
          Cardholder's name:
          <input
            type="text"
            name="name"
            id="cardholderName"
            placeholder="Cardholder's name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            onFocus={(e) => setFocus(e.target.name)}
            readOnly
            required
          />
        </label>
        <label htmlFor="number">
          Card number:
          <input
            type="number"
            name="number"
            id="cardNumber"
            onChange={(e) => handleChangeState(e, setNumber)}
            onInput={(e) => handleOnInput(e, 16)}
            onFocus={(e) => setFocus(e.target.name)}
            placeholder="Enter 16 digits starts with 2,3,4 or 5"
            required
          />
        </label>
        <label htmlFor="cvc">
          {" "}
          CVC:
          <input
            type="number"
            name="cvc"
            onChange={(e) => handleChangeState(e, setCvc)}
            onInput={(e) => handleOnInput(e, 3)}
            onFocus={(e) => setFocus(e.target.name)}
            placeholder="CVC"
            required
          />
        </label>
        <label htmlFor="expiry">
          Expiry:
          <input
            type="number"
            name="expiry"
            id="expiry"
            onChange={(e) => handleChangeState(e, setExpiry)}
            onInput={(e) => handleOnInput(e, 4)}
            onFocus={(e) => setFocus(e.target.name)}
            placeholder="MM/YY"
            required
          />
        </label>
  
      </form>
      <div className="btn-container">
        <button
          className="btn"
          onClick={handleNewCard}
          disabled={
            number.length === 16 && expiry.length === 4 && cvc.length === 3
              ? false
              : true
          }
        >
          Add card
        </button>
      </div>
    </>
  );
};

export default AddNewCardPage;
