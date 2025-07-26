import Pill from "../common/Pill";
import Image from "next/image";
import {OrderSummaryProps} from "@/interfaces"

const OrderSummary: React.FC<{bookingDetails: OrderSummaryProps }> = ({
  bookingDetails 
}) => (
  <div className="bg-white p-6 shadow-sm rounded-lg h-fit border border-gray-100 order-1 md:order-2 md:col-span-2 lg:sticky lg:top-0 lg:z-10">
    <h2 className="text-xl font-semibold">Review Order Details</h2>
    <div className="flex flex-col justify-between mt-4 space-y-3">
      <Image
        src="/assets/images/Listing/List 3.png"
        alt="Property"
        className="w-full object-cover rounded-md"
      />
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
        <div className="flex space-x-3 items-center">
          <Image src="/assets/icons/Star 2.png" alt="review" width={20} height={20} />
          <p className="text-sm text-gray-500">4.76 (345 reviews)</p>
        </div>
        <div className="text-sm text-gray-500 flex space-x-4">
          <Pill title={bookingDetails.startDate} />
          <Pill title={`${bookingDetails.totalNights} Nights`} />
        </div>
      </div>
    </div>

    {/* Price Breakdown */}
    <div className="mt-6">
      <div className="flex justify-between">
        <p>Booking Fee</p>
        <p>${bookingDetails.bookingFee}</p>
      </div>
      <div className="flex justify-between mt-2">
        <p>Subtotal</p>
        <p>${bookingDetails.price}</p>
      </div>
      <div className="flex justify-between mt-8 font-semibold">
        <p>Grand Total</p>
        <p>${bookingDetails.bookingFee + bookingDetails.price}</p>
      </div>
    </div>
  </div>
);

export default OrderSummary;
