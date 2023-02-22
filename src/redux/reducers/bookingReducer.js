import { ADD_BOOKING, REMOVE_BOOKING } from "../actionTypes/actionType";

export const initialState = {
  bookingCart: [],
  bookings: [],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKING:
      return {
        ...state,
        bookings: [...state.bookings, action.payload],
      };
    case REMOVE_BOOKING:
      return {
        ...state,
        bookings: state.bookings.filter((b) => b.bookingId !== action.payload),
      };
    default:
      return state;
  }
};
export default bookingReducer;
