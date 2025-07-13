import React, {useState} from "react";
import { useRouter } from "next/navigation";

const BookingSection: React.FC<{ price: number, discount: string }> = ({ price, discount }) => {
  const [checkInDate, setCheckInDate] = useState<string>("")
  const [checkOutDate, setCheckOutDate] = useState<string>("")

  console.log(new Date(), checkOutDate)
  const router = useRouter()

  return (
    <div className="bg-white p-7 shadow-lg rounded-lg">
      <h3 className="text-xl font-semibold">
        ${price.toLocaleString()}{" "}
        <span className="text-gray-400 font-light">/night</span>
      </h3>
      <hr className="border-1 border-gray-100 my-2" />
      <div className="mt-4">
        <label className="font-medium">Check-in</label>
        <input
          type="date"
          className="border border-gray-300 p-2 w-full mt-2 rounded-md"
          value={checkInDate}
          onChange={e => setCheckInDate(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <label className="font-medium">Check-out</label>
        <input
          type="date"
          className="border border-gray-300 p-2 w-full mt-2 rounded-md"
          value={checkOutDate}
          onChange={e => setCheckOutDate(e.target.value)}
        />
      </div>

      <div className="flex justify-between items-center text-gray-400 font-medium mt-6">
        <p>${price} x 7 night</p>
        <p className="text-black">${price * 7}</p>
      </div>

      <div className="flex justify-between items-center text-gray-400 font-medium mt-4">
        <p>Weekly discounts</p>
        <p className="text-black">{discount ? `- $${discount}` : 0}</p>
      </div>

      <div className="flex justify-between items-center text-gray-400 font-medium mt-4">
        <p>Service Fee</p>
        <p className="text-black">${33}</p>
      </div>

      {/* Total payment */}
      <hr className="border-1 border-gray-100 mt-8" />
      <div className="flex justify-between items-center text-gray-400 font-medium mt-4">
        <p>Total payment:</p>
        <p className="text-emerald-800">${price * 7}</p>
      </div>

      {/* Reserve button */}
      <button onClick={() => router.push("/booking")} className="mt-4 bg-emerald-600 text-white py-3 px-4 rounded-md w-full cursor-pointer hover:bg-emerald-500">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
