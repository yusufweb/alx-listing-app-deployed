import React from "react";
import Card from "@/components/common/Card";
import { PropertyProps } from "@/interfaces";

interface PropertyListingsProps {
  properties: PropertyProps[]; // The list of properties to display (already filtered)
}

const Listing: React.FC<PropertyListingsProps> = ({ properties }) => (
  <section className="p-8 grid lg:grid-cols-4 md:grid-cols-2 gap-6 lg:order-none md:order-none order-4">
    {properties.map((list) => (
      <Card
        key={list.name}
        name={list.name}
        address={list.address}
        rating={list.rating}
        category={list.category}
        price={list.price}
        offers={list.offers}
        image={list.image}
        discount={list.discount}
      />
    ))}
  </section>
);

export default Listing;
