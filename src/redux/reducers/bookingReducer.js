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
        bookings: state.bookings.filter(
          (booking) => booking._id !== action.payload
        ),
      };
    default:
      return state;
  }
};
export default bookingReducer;
