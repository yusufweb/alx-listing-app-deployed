import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
import { useRouter } from "next/router";
import moment from "moment";
import { PropertyProps } from "@/interfaces";

const BookingSection: React.FC<{ property: PropertyProps }> = ({
  property,
}) => {
  const [checkInDate, setCheckInDate] = useState<string>("");
  const [checkOutDate, setCheckOutDate] = useState<string>("");
  const [perNight, setPerNight] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const [canCheckOut, setCanCheckOut] = useState<boolean>(false);
  
  const router = useRouter();

  const calculatePerNight = () => {
    setError("");
    setCanCheckOut(false);

    // do nothing if date is not selected
    if (!checkInDate || !checkOutDate) {
      setPerNight(0);
      return;
    }

    const startMoment = moment(checkInDate);
    const endMoment = moment(checkOutDate);

    if (endMoment.isBefore(startMoment)) {
      setError("End date cannot be before start date.");
      setPerNight(0);
      return;
    }

    const diffNights = endMoment.diff(startMoment, "days");
    setPerNight(diffNights);
    setCanCheckOut(true);
  };

  useEffect(() => {
    calculatePerNight();
  });

  const handleReservation = () => {
    router.push({
      pathname: "/booking",
      query: {
        propertyId: property.name,
        checkInDate: checkInDate.toString(), // <-- CHANGED THIS KEY
        checkOutDate: checkOutDate.toString(), // <-- CHANGED THIS KEY
        nights: perNight.toString(),
      },
    });
  };

  return (
    <div className="bg-white p-7 shadow-lg rounded-lg sticky top-0 z-10 border-1 border-emerald-100">
      <h3 className="text-xl font-semibold">
        ${property.price.toLocaleString()}{" "}
        <span className="text-gray-400 font-light">/night</span>
      </h3>
      <hr className="border-1 border-gray-100 my-2" />
      <div className="mt-4">
        <label className="font-medium">Check-in</label>
        <input
          type="date"
          className="border border-gray-300 p-2 w-full mt-2 rounded-md"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <label className="font-medium">Check-out</label>
        <input
          type="date"
          className="border border-gray-300 p-2 w-full mt-2 rounded-md"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
        />
      </div>

      {error && <p className="text-orange-400 text-[12px] mt-4">*{error}</p>}

      <div className="flex justify-between items-center text-gray-400 font-medium mt-6">
        <p>
          ${property.price} x {perNight} night
        </p>
        <p className="text-black">${property.price * perNight}</p>
      </div>

      <div className="flex justify-between items-center text-gray-400 font-medium mt-4">
        <p>Weekly discounts</p>
        <p className="text-black">
          {property.discount ? `- $${property.discount}` : 0}
        </p>
      </div>

      <div className="flex justify-between items-center text-gray-400 font-medium mt-4">
        <p>Service Fee</p>
        <p className="text-black">${33}</p>
      </div>

      {/* Total payment */}
      <hr className="border-1 border-gray-100 mt-8" />
      <div className="flex justify-between items-center text-gray-400 font-medium mt-4">
        <p>Total payment:</p>
        <p className="text-emerald-800">
          {perNight > 0
            ? "$" +
              (Number(property.price) * perNight -
                (isNaN(Number(property.discount))
                  ? 0
                  : Number(property.discount)) +
                33)
            : "$0"}
        </p>
      </div>

      {/* Reserve button */}
      <button
        onClick={handleReservation}
        disabled={!canCheckOut || perNight === 0} // Disable if not canProceed OR if nights are 0 (e.g., same day booking)
        style={{
          cursor: canCheckOut && perNight > 0 ? "pointer" : "not-allowed",
          backgroundColor:
            canCheckOut && perNight > 0
              ? "oklch(59.6% 0.145 163.225)"
              : "#cccccc",
        }}
        className="mt-4 bg-emerald-600 text-white py-3 px-4 rounded-md w-full"
      >
        Reserve Now
      </button>
    </div>
  );
};

export default BookingSection;
