import BookingForm from "@/components/booking/BookingForm";
import CancellationPolicy from "@/components/booking/CancellationPolicy";
import OrderSummary from "@/components/booking/OrderSummary";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {bookingDetails} from "@/constants"

export default function BookingPage() {
  
  const router = useRouter();

  return (
    <>
      <div className="bg-gray-100 p-6">
        <div
          className="flex items-center gap-4 container mx-auto lg:md:px-20 cursor-pointer"
          onClick={() => router.back()}
        >
          <Image
            src="/assets/icons/Linear/Arrows/Arrow Left.png"
            width={20}
            height={20}
            alt="filter"
          />
          <p className="font-medium text-emerald-600">Booking</p>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="p-5 lg:p-20 md:p-2">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5 relative">
            <BookingForm />
            <OrderSummary bookingDetails={bookingDetails} />
            <CancellationPolicy />
          </div>
        </div>
      </div>
    </>
  );
}
