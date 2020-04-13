import { StateInterface } from "./Interfaces";

const Reducer = (state: StateInterface, action: any) => {
  switch (action.type) {
    case "SET_KEYWORDS":
      return {
        ...state,
        keywords: action.payload,
        filtered: action.payload,
        loading: false,
      };
    case "FILTER_KEYWORDS":
      return {
        ...state,
        filtered: state.keywords.filter(
          (keyword) =>
            keyword.data.toUpperCase().indexOf(action.payload.toUpperCase()) !==
            -1
        ),
        loading: false,
      };
    default:
      return state;
  }
};

export default Reducer;
