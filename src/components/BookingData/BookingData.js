import React from "react";
import BookingTable from "./BookingTable";
import { useSelector } from "react-redux";

const BookingData = () => {
  const bookings = useSelector((state) => state.bookings);

  return (
    <div className="table-container">
      <table className="booking-table">
        <thead className="bg-gray-100/50">
          <tr className="text-black text-left">
            <th>Destination From</th>
            <th>Destination To</th>
            <th className="text-center">Journey Date</th>
            <th className="text-center">Guests</th>
            <th className="text-center">Class</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>

        <BookingTable bookings={bookings} />
      </table>
    </div>
  );
};

export default BookingData;
