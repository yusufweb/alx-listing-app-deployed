import Image from "next/image";
import React from "react";
import Pill from "./Pill";
import { PropertyProps } from "@/interfaces";
import { useRouter } from "next/navigation";

const Card: React.FC<PropertyProps> = ({
  name,
  address,
  rating,
  category,
  price,
  offers,
  image,
  discount,
}) => {

  const router = useRouter()

  const handleClick = () => {
    router.push(`/property/${name}`)
  }

  return (
    <div className="relative h-auto w-full cursor-pointer hover:shadow-md hover:rounded-lg mb-2 pb-4" onClick={handleClick}>
      <Image
        className="rounded-lg w-full object-contain"
        src={`${image}`}
        width={378.56}
        height={299.37}
        alt="house image"
      />
      {discount && (
          <span className="absolute top-3 left-3 bg-emerald-500 text-white text-[12.5px] font-medium px-4 py-2 rounded-full">
            {discount}% off
          </span>
        )}
      <div className="p-2 flex gap-2 mt-2">
        {category.map((categories) => (
            <Pill title={categories} />
        ))}
      </div>
      <div className="flex items-center justify-between px-2">
        <div>
          <h3 className=" font-semibold text-[22px] lg:text-[12.5px] xl:text-[18px]">
            {name}
          </h3>
          <p className=" font-medium text-[17px] text-[#929292] lg:text-[8px] xl:text-[12px]">
            {address.city} {address.state}, {address.country}
          </p>
        </div>
        <div className="flex items-center">
          <Image src="/assets/icons/Star 2.png" alt="star" width={15} height={15}/>
          <p className=" font-medium text-[17px] lg:text-[13px] xl:text-[17px] ml-2">{rating}</p>
        </div>
      </div>

      <div className="flex justify-between mt-4 px-2 items-center">
        <div className=" grid grid-cols-3 border border-gray-300 w-[132px] rounded-full px-1 py-2">
          <div className="flex items-center">
            <Image src="/assets/icons/beds 1.png" alt="star" width={11} height={11} />
            <p className="ml-1 text-[11px] font-medium">{offers.bed}</p>
          </div>
          <div className="flex items-center">
            <Image src="/assets/icons/bathtubs 1.png" alt="star" width={11} height={11} />
            <p className="ml-1 text-[11px] font-medium">{offers.shower}</p>
          </div>
          <div className="flex items-center">
            <Image src="/assets/icons/peoples 1.png" alt="star" width={11} height={11} />
            <p className="ml-1 text-[11px] font-medium">{offers.occupants}</p>
          </div>
        </div>
        <p className="text-[22px] xl:text-[14px] lg:text-[15px] font-semibold">
          ${price}<span className="text-[14px] text-[#787878]">/n</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
