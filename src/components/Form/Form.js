import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "../../redux/actions/bookingAction";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();

  const bookings = useSelector((state) => console.log(state.bookings));
  const dispatch = useDispatch();

  const submit = (data) => {
    const bookingData = {
      destinationFrom: data["lws-from"],
      destinationTo: data["lws-to"],
      travelDate: data["lws-date"],
      guestTotal: data["lws-guests"],
      ticketClass: data["lws-ticketClass"],
    };
    console.log(bookingData);
    dispatch(addBooking(bookingData));
  };

  return (
    <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form
          className="first-hero lws-inputform"
          onSubmit={handleSubmit(submit)}
        >
          <div className="des-from">
            <p>Destination From</p>
            <div className="flex flex-row">
              <img src="./img/icons/Frame.svg" alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="from"
                id="lws-from"
                required
                {...register("lws-from")}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="Dhaka">Dhaka</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Saidpur">Saidpur</option>
                <option value="Cox's Bazar">Cox's Bazar</option>
              </select>
            </div>
          </div>

          <div className="des-from">
            <p>Destination To</p>
            <div className="flex flex-row">
              <img src="./img/icons/Frame.svg" alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="to"
                id="lws-to"
                required
                {...register("lws-to")}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="Dhaka">Dhaka</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Saidpur">Saidpur</option>
                <option value="Cox's Bazar">Cox's Bazar</option>
              </select>
            </div>
          </div>

          <div className="des-from">
            <p>Journey Date</p>
            <input
              type="date"
              className="outline-none px-2 py-2 w-full date"
              name="date"
              id="lws-date"
              required
              {...register("lws-date")}
            />
          </div>

          <div className="des-from">
            <p>Guests</p>
            <div className="flex flex-row">
              <img src="./img/icons/Vector (1).svg" alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="guests"
                id="lws-guests"
                required
                {...register("lws-guests")}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
              </select>
            </div>
          </div>

          <div className="des-from !border-r-0">
            <p>Class</p>
            <div className="flex flex-row">
              <img src="./img/icons/Vector (3).svg" alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="ticketClass"
                id="lws-ticketClass"
                required
                {...register("lws-ticketClass")}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="Business">Business</option>
                <option value="Economy">Economy</option>
              </select>
            </div>
          </div>

          <button
            className="addCity"
            type="submit"
            id="lws-addCity"
            onClick={() => addBooking()}
          >
            <svg
              width="15px"
              height="15px"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="text-sm">Book</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
