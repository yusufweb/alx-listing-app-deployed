import React from "react";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";

const PropertyPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property) return <p>Property not found</p>;

  return (
    <div>
      <PropertyDetail property={property} />
    </div>
  );
};

export default PropertyPage;


