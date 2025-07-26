import React from "react";
import { PropertyProps } from "@/interfaces/index";
import Image from "next/image";
import Button from "../common/Button";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";
import { REVIEWS } from "@/constants";
import Tabs from "../common/Tabs";
import Link from "next/link";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({
  property,
}) => {
  return (
    <div className="lg:p-10 md:p-10 lg:pt-2 md:pt-2 relative">
      <div className="flex flex-col">
        <div className="flex justify-between items-center px-6 pt-6 lg:hidden md:hidden">
          <Link href="/">
            <div className="flex justify-between items-center gap-2">
              <Image
                src="/assets/icons/Linear/Arrows/Arrow Left.png"
                alt="star Image"
                width={20}
                height={20}
              />
              <p className="font-semibold text-gray-600">Return</p>
            </div>
          </Link>
          <div className="flex justify-between items-center gap-2">
            <Button size="medium" shape="rounded-full" className="border-0">
              <div className="flex justify-center items-center gap-2">
                <Image
                  src="/assets/icons/Fav.png"
                  width={20}
                  height={20}
                  alt="Fav"
                />
              </div>
            </Button>
            <Button size="medium" shape="rounded-full" className="border-0">
              <div className="flex justify-center items-center gap-2">
                <Image
                  src="/assets/icons/Share.png"
                  width={20}
                  height={20}
                  alt="save"
                />
              </div>
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center order-2 mt-6 lg:order-0 md:order-0 px-6 md:px-0 lg:px-0">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold mb-5">{property.name}</h1>
            <div className="flex justify-between item-center gap-3">
              <div className="flex items-center justify-between space-x-2">
                <Image
                  src="/assets/icons/Star 2.png"
                  alt="star Image"
                  width={15}
                  height={15}
                />
                <p className="text-[10px] lg:text-[15px] md:text-[14px]">
                  {property.rating}{" "}
                  <span className="text-gray-400">(345 reviews)</span>
                </p>
              </div>
              <div className="flex items-center justify-between space-x-2">
                <Image
                  src="/assets/icons/Bold/Map & Location/Map Point.png"
                  alt="star Image"
                  width={15}
                  height={15}
                />
                <p className="text-[10px] lg:text-[15px] md:text-[14px] text-gray-400">
                  {property.address.city}, {property.address.state}{" "}
                  {property.address.country}
                </p>
              </div>
              <div className="flex items-center justify-between space-x-2">
                <Image
                  src="/assets/icons/profile 1.png"
                  alt="star Image"
                  width={15}
                  height={15}
                />
                <p className="text-[10px] lg:text-[15px] md:text-[14px] text-gray-400">
                  Mainstream
                </p>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex md:flex justify-between space-x-4">
            <Button size="medium" shape="rounded-full">
              <div className="flex justify-center items-center gap-2">
                <Image
                  src="/assets/icons/Share.png"
                  width={15}
                  height={15}
                  alt="filter"
                />
                <p>Save</p>
              </div>
            </Button>
            <Button size="medium" shape="rounded-full">
              <div className="flex justify-center items-center gap-2">
                <Image
                  src="/assets/icons/Fav.png"
                  width={15}
                  height={15}
                  alt="filter"
                />
                <p>Share</p>
              </div>
            </Button>
          </div>
        </div>

        {/* Image Grid */}
        <div className="lg:grid md:grid grid-cols-2 gap-2 mt-6 order-1 lg:order-0 md:order-0">
          <div>
            <Image
              src={property.image}
              alt={property.name}
              width={500}
              height={500}
              className="w-full h-100 object-cover lg:rounded-tl-[20px] md:rounded-tl-[20px] lg:rounded-bl-[20px] md:rounded-bl-[20px] rounded-none"
            />
          </div>
          <div className="lg:grid md:grid grid-cols-2 gap-2 hidden">
            <Image
              src={property.image}
              alt={property.name}
              width={500}
              height={500}
              className="w-full h-50 object-cover lg:rounded-tr-[20px] md:rounded-tr-[20px] col-span-2"
            />

            <Image
              src={property.image}
              alt={property.name}
              width={500}
              height={500}
              className="w-full h-48 object-cover lg:rounded-0 md:rounded-0 col-span-1"
            />
            <Image
              src={property.image}
              alt={property.name}
              width={500}
              height={500}
              className="w-full h-48 object-cover lg:rounded-br-[20px] md:rounded-br-[20px] col-span-1"
            />
          </div>
        </div>
      </div>

      <div className="my-6 space-x-4 space-y-2 flex-3 px-6 md:px-0 lg:px-0">
        <Button size="small" shape="rounded-full">
          <div className="flex justify-center items-center gap-2">
            <Image
              src="/assets/icons/beds 1.png"
              width={15}
              height={15}
              alt="filter"
            />
            <p className="text-[10px] lg:text-[15px] md:text-[14px]">{property.offers.bed} Bedroom</p>
          </div>
        </Button>
        <Button size="small" shape="rounded-full">
          <div className="flex justify-center items-center gap-2">
            <Image
              src="/assets/icons/bathtubs 1.png"
              width={15}
              height={15}
              alt="filter"
            />
            <p className="text-[10px] lg:text-[15px] md:text-[14px]">{property.offers.shower} Bathroom</p>
          </div>
        </Button>
        <Button size="small" shape="rounded-full">
          <div className="flex justify-center items-center gap-2">
            <Image
              src="/assets/icons/peoples 1.png"
              width={15}
              height={15}
              alt="filter"
            />
            <p className="text-[10px] lg:text-[15px] md:text-[14px]">{property.offers.occupants} Guest</p>
          </div>
        </Button>
      </div>

      <div className="flex justify-betweeen space-x-8 relative w-[100%] flex-4 px-6 md:px-0 lg:px-0">
        <div className="w-full lg:w-2/3 md:w-1/2">
          {/* Description */}
          <div className="mb-8">
            <Tabs />
          </div>
          <hr className="border border-gray-100 my-8" />
          {/* Amenities */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold my-2">
              What this place offers
            </h2>
            <p className="text-gray-700">
              Each home is fully equipped to meet your needs, with ample space
              and privacy
            </p>
            <ul className="grid lg:grid-cols-2 gap-1 lg:gap-2 mt-8 space-y-5">
              <li className="flex items-center space-x-4 space-y-4 ">
                <Image
                  src="/assets/icons/mountains 1.png"
                  width={30}
                  height={30}
                  alt="filter"
                />
                <p>Mountain View</p>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/assets/icons/sunrise 1.png"
                  width={30}
                  height={30}
                  alt="filter"
                />
                <p>Shared beach access</p>
              </li>
              <li className="flex items-center space-x-4 space-y-4">
                <Image
                  src="/assets/icons/people 1.png"
                  width={30}
                  height={30}
                  alt="filter"
                />
                <p>Chef</p>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/assets/icons/bell 1.png"
                  width={30}
                  height={30}
                  alt="filter"
                />
                <p>Butler</p>
              </li>
              <li className="flex items-center space-x-4 space-y-4">
                <Image
                  src="/assets/icons/broom 1.png"
                  width={30}
                  height={30}
                  alt="filter"
                />
                <p>Cleaning available during stay</p>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/assets/icons/shaker 1.png"
                  width={30}
                  height={30}
                  alt="filter"
                />
                <p>Bartender</p>
              </li>
              <li className="flex items-center space-x-4 space-y-4">
                <Image
                  src="/assets/icons/pool 1.png"
                  width={30}
                  height={30}
                  alt="filter"
                />
                <p>Pool - Infinity</p>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/assets/icons/hot-tub 1.png"
                  width={30}
                  height={30}
                  alt="filter"
                />
                <p>Hot Tub</p>
              </li>
              <li className="flex items-center space-x-4 space-y-4">
                <Image
                  src="/assets/icons/pan 1.png"
                  width={30}
                  height={30}
                  alt="filter"
                />
                <p>kitchen</p>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/assets/icons/wifi 1.png"
                  width={30}
                  height={30}
                  alt="filter"
                />
                <p>Wifi</p>
              </li>
            </ul>
          </div>

          <ReviewSection reviews={REVIEWS} />
        </div>
        <div className="lg:w-1/3 md:w-1/2 hidden lg:block md:block">
          <BookingSection
            property= {property}
          />
        </div>
      </div>

    {/* display on small screen */}
      <div className="flex justify-between items-center p-4 border-t-1 border-t-gray-100 fixed bottom-0 left-0 w-full bg-white md:hidden lg:hidden">
        <div className="flex flex-col space-y-2 w-1/3">
            <p className="text-dark font-bold">${property.price}/ <span className="text-gray-400 font-medium text-[12px]">nights</span></p>
            <input type="text"  placeholder="Add date"/>
        </div>
        <button className="bg-emerald-600 py-4 px-8 rounded-lg text-white font-semibold w-1/2 text-[14px]">Review now</button>
      </div>
    </div>
  );
};

export default PropertyDetail;