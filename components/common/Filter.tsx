import React from "react";
import Button from "./Button";
import Image from "next/image";
import { FilterButtonsProps } from "@/interfaces";
import { ALL_CATEGORIES } from "@/constants";

const Filter: React.FC<FilterButtonsProps> = ({
  activeFilter,
  onFilterChange,
}) => {
  return (
    <section className="flex justify-between gap-4 px-8 bg-white rounded-lg mt-8">
      <div className="flex items-center justify-between gap-2">
        {ALL_CATEGORIES.map((category) => (
          <Button
            size="medium"
            shape="rounded-full"
            key={category}
            onClick={() => onFilterChange(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="flex items-center justify-between gap-4">
        <Button size="medium" shape="rounded-full">
          <div className="flex justify-center items-center gap-4">
            <p>Filter</p>
            <Image
              src="/assets/icons/Linear/Essentional, UI/Filter.png"
              width={20}
              height={20}
              alt="filter"
            />
          </div>
        </Button>
        <Button size="medium" shape="rounded-full">
          <div className="flex justify-center items-center gap-4">
            <p>Sort by:</p>
            <p className="text-gray-400">Highest Price</p>
          </div>
        </Button>
      </div>
    </section>
  );
};

export default Filter;
