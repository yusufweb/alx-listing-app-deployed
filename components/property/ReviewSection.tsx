import React from "react";
import {ReviewsProps} from "@/interfaces"
import Image from "next/image";

const ReviewSection: React.FC<{ reviews: ReviewsProps[] }> = ({ reviews }) => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold">Reviews</h3>
      <div className="grid lg:grid-cols md:grid-cols-2 grid-cols-1 md:lg:gap-4 md:gap-4 mt-8">
        {reviews.map((review, index) => (
          <div key={index} className="pb-4 mb-4">
            <div className="flex items-center">
              <Image
                src={review.image}
                alt={review.name}
                width={50}
                height={50}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-normal text-[20px]">{review.name}</p>
                <p className="text-yellow-500">{review.rating} stars</p>
              </div>
            </div>
            <p className="py-8 text-[16px]/8">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
