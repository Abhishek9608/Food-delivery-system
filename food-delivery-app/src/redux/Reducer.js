import { SEARCH_ITEM, ADD_ITEM, LOG_IN, CHECK_OUT_ITEM } from "./ActionTypes";
import data from "../components/data/data.json";

const initState = {
  data: data[0],
  searchData: [],
  cartItem: [
    {
      id: "1",
      img: "/Image/dal1.png",
      name: "Chicken Lollipop",
      price: 123,
    },
    {
      id: "2",
      img: "/Image/dal2.png",
      name: "Kadai Paneen",
      price: 135,
      totalQuantity: 20,
      orderedQuantity: 0,
    },
    {
      id: "3",
      img: "/Image/dal3.png",
      name: "Mixed Hakka Noodles",
      price: 169,
    },
  ],
  isLogged: true,
  user: {
    username: "admin",
    password: "admin",
  },
  checkItem: [],
};
console.log(initState.data);
console.log(initState.cartItem.length);
// console.log(initState.searchData);
const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SEARCH_ITEM:
      return {
        ...state,
        searchData: state.data[payload],
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItem: [...state.cartItem, payload],
      };
    case LOG_IN:
      console.log(payload);
      return {
        ...state,
        isLogged: payload,
      };
    case CHECK_OUT_ITEM:
      return {
        ...state,
        checkItem: [...state.checkItem, payload],
      };

    default:
      return state;
  }
};

export default reducer;
