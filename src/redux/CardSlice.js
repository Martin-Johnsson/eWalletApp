import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// create async thunk 
export const getRandomUser = createAsyncThunk(
  "cards/getRandomUser",
  async () => {
    let response = await fetch("https://randomuser.me/api/");
    let data = await response.json();
    console.log(data);
    return data.results[0];
  }
);
// definera slice with initial states and necessary actions
const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [
      {
        id: 1,
        cardHolderName: "",
        cardNumber: "3434123412341234",
        expiry: "1122",
        cvc: "212",
        type: "VISA",
        active: true,
        focus:''
      },
    ],
    lastId: 1,
    status: null,
  },
  reducers: {
    // definera actions
    addCard: (state, { payload }) => {
      if (state.cards.length === 4) {
        alert("You can not create new card.Remove one please first");
      } else {
        state.cards = state.cards.concat(payload);
        state.lastId += 1;
      }
    },
    setActive: (state, { payload }) => {
      state.cards.forEach((card) => {
        card.active = false;
      });
      state.cards = state.cards.filter((card) => card.id !== payload.id);
      state.cards.push(payload);
    },
    deleteCard: (state, { payload }) => {
      let delCard = state.cards.filter((card) => card.id !== payload);
      return { ...state, cards: delCard };
    },
  },
  extraReducers: {
    [getRandomUser.pending]: ({ status }) => {
      status = "Loading...";
    },
    [getRandomUser.fulfilled]: (state, { payload }) => {
      state.cards.forEach((card) => {
        card.cardHolderName = `${payload.name.first} ${payload.name.last}`;
      });
      state.status = "Data has fetched successfully!";
      console.log(state.status);
    },
    [getRandomUser.rejected]: ({ state }) => {
      state = "fetched is failed";
    },
  },
});
export const { addCard, setActive, deleteCard } = cardSlice.actions;
export default cardSlice.reducer;
